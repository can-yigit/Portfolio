"use client";

import { ShareIcon } from "lucide-react";

export default function ShareButton() {
  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
  };

  return (
    <button 
      className="w-9 h-9 rounded-lg bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 flex items-center justify-center text-neutral-500 dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
      onClick={handleShare}
      title="Copy link"
    >
      <ShareIcon size={16} />
    </button>
  );
}

