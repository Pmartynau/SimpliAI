"use client"
import React, { useContext, useState } from 'react'
import StorySubjectInput from './_components/StorySubjectInput'
import StoryType from './_components/StoryType'
import AgeGroup from './_components/AgeGroup'
import ImageStyle from './_components/ImageStyle'
import { Button } from '@nextui-org/button'
import { chatSession } from '@/config/GeminiAi'
import { db } from '@/config/db'
import { StoryData, Users } from '@/config/schema'
import uuid4 from "uuid4";
import CustomLoader from './_components/CustomLoader'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import { toast } from 'react-toastify'
import { useUser } from '@clerk/nextjs'
import { UserDetailContext } from '../_context/UserDetailConext'
import { eq } from 'drizzle-orm'
import { string } from 'zod'

const CREATE_STORY_PROMPT = process.env.NEXT_PUBLIC_CREATE_STORY_PROMPT

export interface fieldData {
    fieldName: string,
    fieldValue: string
}

export interface formDataType {
    storySubject: string,
    storyType:string,
    imageStyle:string,
    ageGroup:string
  }

  function CreateStory() {

    const [formData,setFormData]=useState<formDataType>();
    const [loading,setLoading]=useState(false);
    const router=useRouter();
    const notify = (msg:string) => toast(msg);
    const notifyError = (msg:string) => toast.error(msg);
    const {user}=useUser();
    const {userDetail,setUserDetail}=useContext(UserDetailContext);
  
    /**
     * used to add data to form
     * @param data 
     */
    const onHandleUserSelection=(data:fieldData)=>{
      setFormData((prev:any)=>({
        ...prev,
        [data.fieldName]:data.fieldValue
      }));
      console.log(formData)
    }
    const GenerateStory= async()=> {
        if(userDetail.credit<=0) 
        {
            notifyError('You dont have enough credits!')
            return;
        }
        setLoading(true)
        const FINAL_PROMPT=CREATE_STORY_PROMPT
        ?.replace('{ageGroup}',formData?.ageGroup??'')
        .replace('{storyType}',formData?.storyType??'')
        .replace('{storySubject}',formData?.storySubject??'')
        .replace('{imageStyle}',formData?.imageStyle??'')
         //Generate AI Story
      try{
        const result=await chatSession.sendMessage(FINAL_PROMPT);
        const story=JSON.parse(result?.response.text().replace(/(})(,?)(\n *\})/g, "$1,"));   
    }
  
    const imageResp=await axios.post('/api/generate-image',{
        prompt:'Add text with  title:'+story?.story_cover?.title+
        " in bold text for book cover, "+story?.story_cover?.image_prompt
      })
      const AiImageUrl=imageResp?.data?.imageUrl
      
      const imageResult=await axios.post('/api/save-image',{
        url:AiImageUrl
      });

      const FirebaseStorageImageUrl=imageResult.data.imageUrl;
    const resp:any= await SaveInDB(result?.response.text(),FirebaseStorageImageUrl);
      notify("Story generated")
     await UpdateUserCredits();
      router?.replace('/view-story/'+resp[0].storyId)
      setLoading(false);
    }catch(e){
      console.log(e)
      notifyError('Server Error, Try again')
      setLoading(false);
    }
  
}

    const SaveInDB=async(output:string,imageUrl:string)=>{
        const recordId=uuid4();
        setLoading(true)
        try{
          const result=await db.insert(StoryData).values({
              storyId:recordId,
              ageGroup:formData?.ageGroup,
              imageStyle:formData?.imageStyle,
              storySubject:formData?.storySubject,
              storyType:formData?.storyType,
              output:JSON.parse(output),
              coverImage:imageUrl,
              userEmail:user?.primaryEmailAddress?.emailAddress,
              userImage:user?.imageUrl,
              userName:user?.fullName
          }).returning({storyId:StoryData?.storyId})
          setLoading(false);
          return result;
        }
        catch(e)
        {
            setLoading(false);
        } 
      }
    
    
      const UpdateUserCredits=async()=>{
        const result=await db.update(Users).set({
          credit:Number(userDetail?.credit-1)
        }).where(eq(Users.userEmail,user?.primaryEmailAddress?.emailAddress??''))
        .returning({id:Users.id})
      }
    