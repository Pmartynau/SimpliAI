
'use client'
import React, { useEffect } from 'react';

const VoiceflowChat = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.onload = () => {
      window.voiceflow.chat.load({
        verify: { projectID: '6551dca7e25d4b0007e9f6e5' },
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

  return null; // Since this component is only responsible for loading the script, it doesn't render any content
};

export default VoiceflowChat;