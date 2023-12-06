import { useState } from 'react';
import { Share2, Edit, Trash2, Download } from 'lucide-react';

const ChatGPT: React.FC = () => {
  const [chat, setChat] = useState('');

  const handleShare = () => {
    const url = `https://www.chatgpt.com/?chat=${encodeURIComponent(chat)}`;
    navigator.clipboard.writeText(url);
    alert(`The chat has been copied to your clipboard: ${url}`);
  };

  return (
    <div style={{ display: 'flex' }}>
      <div style={{ width: '80%' }}>
        <textarea value={chat} onChange={(e) => setChat(e.target.value)} />
      </div>
      <div style={{ width: '20%', display: 'flex', flexDirection: 'column' }}>
        <button>
          <Edit size={24} />
        </button>
        <button>
          <Trash2 size={24} />
        </button>
        <button onClick={handleShare}>
          <Share2 size={24} />
        </button>
        <button>
          <Download size={24} />
        </button>
      </div>
    </div>
  );
};
export default ChatGPT;