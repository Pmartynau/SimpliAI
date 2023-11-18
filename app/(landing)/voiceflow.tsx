
'use client'

import React, { useEffect } from 'react';

const VoiceflowChat = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.onload = () => {
      (window as any).voiceflow.chat.load({
        verify: { projectID: '6552cb3250d94e00072d0d4e' },
        url: 'https://general-runtime.voiceflow.com',
        versionID: 'production'
      });
    };
    script.src = 'https://cdn.voiceflow.com/widget/bundle.mjs';
    document.getElementsByTagName('head')[0].appendChild(script);

    return () => {
      // Clean up the script when the component unmounts
      document.getElementsByTagName('head')[0].removeChild(script);
    };
  }, []);

  return null;
};

export default VoiceflowChat;