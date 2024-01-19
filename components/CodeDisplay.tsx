// components/CodeDisplay.tsx

"use client";
import { useState } from "react";
import { IoCopyOutline } from "react-icons/io5";
import { IoCopy } from "react-icons/io5";

interface CodeDisplayProps {
  code: string;
}

const CodeDisplay: React.FC<CodeDisplayProps> = ({ code }) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000); // Reset the copied state after 2 seconds
    } catch (err) {
      console.error("Failed to copy!", err);
    }
  };

  return (
    <div className="flex flex-row space-x-6 bg-black">
      <button
        className=" items-start pb-4 pt-4 fixed text-white"
        onClick={handleCopy}
      >
        {isCopied ? <IoCopyOutline /> : <IoCopy />}
      </button>
      <pre className=" pt-5 text-xs text-white">{code}</pre>
    </div>
  );
};

export default CodeDisplay;
