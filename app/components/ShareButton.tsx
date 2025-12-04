"use client";

import { useState } from "react";
import { Share2Icon, CheckIcon, LinkIcon, TwitterIcon } from "lucide-react";
import "@/styles/components/share-button.scss";

interface ShareButtonProps {
  title: string;
  url?: string;
}

export default function ShareButton({ title, url }: ShareButtonProps) {
  const [copied, setCopied] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const shareUrl = url || (typeof window !== "undefined" ? window.location.href : "");

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  const shareToTwitter = () => {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(shareUrl)}`;
    window.open(twitterUrl, "_blank", "noopener,noreferrer");
  };

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({ title, url: shareUrl });
      } catch (err) {
        if ((err as Error).name !== "AbortError") {
          setIsOpen(!isOpen);
        }
      }
    } else {
      setIsOpen(!isOpen);
    }
  };

  return (
    <div className="share-button">
      <button
        onClick={handleNativeShare}
        className="share-button__trigger"
        aria-label="Share"
      >
        <Share2Icon size={16} />
        <span>Share</span>
      </button>

      {isOpen && (
        <div className="share-button__dropdown">
          <button onClick={copyToClipboard} className="share-button__option">
            {copied ? <CheckIcon size={16} /> : <LinkIcon size={16} />}
            <span>{copied ? "Copied!" : "Copy link"}</span>
          </button>
          <button onClick={shareToTwitter} className="share-button__option">
            <TwitterIcon size={16} />
            <span>Twitter</span>
          </button>
        </div>
      )}
    </div>
  );
}

