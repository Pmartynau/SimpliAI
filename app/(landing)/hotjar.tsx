// HotjarScript.js
'use client'
import { useEffect } from 'react';
import Hotjar from '@hotjar/browser';

const siteId = 3757256;
const hotjarVersion = 6;

Hotjar.init(siteId, hotjarVersion);

const HotjarScript = () => {
  useEffect(() => {
    // Hotjar tracking code
    (function(h, o, t, j, a, r) {
      h.hj =
        h.hj ||
        function() {
          (h.hj.q = h.hj.q || []).push(arguments);
        };
      h._hjSettings = { hjid: 3757256, hjsv: 6 };
      a = o.getElementsByTagName('head')[0];
      r = o.createElement('script');
      r.async = 1;
      r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv;
      a.appendChild(r);
    })(window, document, 'https://static.hotjar.com/c/hotjar-', '.js?sv=');
  }, []);

  return null;
};

export default HotjarScript;
