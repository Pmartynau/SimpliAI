// HotjarScript.js
'use client'

import Hotjar from '@hotjar/browser';



const HotjarScript = () => {
  const siteId = 3757256;
  const hotjarVersion = 6;
  
  Hotjar.init(siteId, hotjarVersion);
};

export default HotjarScript;
