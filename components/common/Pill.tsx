import React from "react";

export type PillProps = {
  label: string;
  onClick?: () => void;
};

const Pill: React.FC<PillProps> = ({ label, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="
        px-4 
        py-2 
        mr-2 
        mb-2 
        text-sm 
        font-medium 
        rounded-full 
        bg-gray-200 
        text-gray-700 
        hover:bg-gray-300 
        transition-colors 
        duration-200
      "
    >
      {label}
    </button>
  );
};

export default Pill;