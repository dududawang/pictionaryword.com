'use client';

interface GenerateButtonProps {
  onClick: () => void;
  disabled?: boolean;
  isGenerating?: boolean;
}

export default function GenerateButton({ onClick, disabled = false, isGenerating = false }: GenerateButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled || isGenerating}
      className={`
        w-full py-4 px-8 rounded-lg font-bold text-lg transition-all duration-200
        ${disabled || isGenerating
          ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
          : 'bg-blue-500 hover:bg-blue-600 text-white hover:shadow-lg active:scale-95'
        }
        ${isGenerating ? 'animate-pulse' : ''}
      `}
    >
      {isGenerating ? (
        <div className="flex items-center justify-center gap-2">
          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
          Generating...
        </div>
      ) : (
        <div className="flex items-center justify-center gap-2">
          <span>🎲</span>
          Generate New Word
        </div>
      )}
    </button>
  );
}