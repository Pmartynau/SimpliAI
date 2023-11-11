import { Button } from "@/components/ui/button";
import Modal from "react-modal";
import { useState } from "react";
import { Sparkles } from "lucide-react";

const ConversationHistory = () => {
  const [isHistoryModalOpen, setHistoryModalOpen] = useState(false);
  const [history, setHistory] = useState([
    { input: "Hello", output: "Hi there!" },
    { input: "How are you?", output: "I'm doing great!" },
  ]);

  return (
    <>
      <Button
        variant="premium"
        className="relative lg:absolute lg:top-16 lg:right-2 col-span-2 lg:col-span-2"
        onClick={() => {
          setHistoryModalOpen(true);
        }}
      >
        History  
      </Button>
      <Modal
        isOpen={isHistoryModalOpen}
        onRequestClose={() => setHistoryModalOpen(false)}
        contentLabel="Chat History"
       
      >
        <h2>Chat History</h2>
        <ul>
          {history.map((entry, index) => (
            <li key={index}>
              <strong>Input:</strong> {entry.input}
              <br />
              <strong>Output:</strong> {entry.output}
            </li>
          ))}
        </ul>
      </Modal>
    </>
  );
};

export default ConversationHistory;