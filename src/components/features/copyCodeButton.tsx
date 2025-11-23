'use client';

interface CopyCodeButtonProps {
  code: string;
}

export default function CopyCodeButton({ code }: CopyCodeButtonProps) {
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
  };

  return (
    <button
      onClick={handleCopy}
      className="cursor-pointer text-xs text-neutral-500 hover:text-neutral-700 transition-colors"
      title="Copy code"
    >
      Copy
    </button>
  );
}
