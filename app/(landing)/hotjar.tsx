// HotjarScript.js
'use client'
import { useEffect } from 'react';
import Hotjar from '@hotjar/browser';



const HotjarScript: React.FC = () => {
  const siteId = 3757256;
  const hotjarVersion = 6;
  
  Hotjar.init(siteId, hotjarVersion);
};

export default HotjarScript;
