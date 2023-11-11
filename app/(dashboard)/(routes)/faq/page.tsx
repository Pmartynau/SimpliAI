'use client'
import React from 'react';
import Accordion from './Accordion';

const App = () => {
  const accordionData = [
    {
      title: 'AI-Powered Chatbot',
      content: `Our AI-powered chatbot is a virtual assistant for natural language interactions. It can answer queries and assist with tasks, enhancing user engagement on your website.`
    },
    {
      title: 'Expert Q&A Service',
      content: `Connect users with real experts in various fields using our Q&A service. Get reliable answers and guidance, ensuring your website visitors have access to expert knowledge.`
    },
    {
      title: 'Automatic Photo Generation',
      content: `Automatically generate images and visual content using AI. Create custom visuals for your website and marketing materials effortlessly.`
    },
    {
      title: 'AI Video Creation',
      content: `Use AI to turn text, images, and data into engaging videos. Easily add dynamic multimedia to your website without video production experience.`
    },
    {
      title: 'AI-Generated Music',
      content: `Let AI compose music for your website. Customize style and mood to fit your needs, adding background music or unique soundtracks without a composer.`
    },
    {
      title: 'Code Snippet Generator',
      content: `Automate code snippet generation with our AI tool. Save time and effort in coding, adding features and functionality to your website effortlessly.`
    },
    {
      title: 'AI Developer Toolbox',
      content: `Explore a comprehensive set of AI tools, including APIs, libraries, and guides in our developer toolbox. Integrate AI seamlessly into your website or applications.`
    }
  ];
  

  return (
    <div>
      <h1>FAQ Page</h1>
      <div className="accordion">
        {accordionData.map(({ title, content }) => (
          <Accordion title={title} content={content} />
        ))}
      </div>
    </div>
  );
};

export default App;