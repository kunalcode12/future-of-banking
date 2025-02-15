import React from "react";

const Checkbox = ({ id, checked, onCheckedChange }) => {
  return (
    <div className="relative flex items-center">
      <input
        type="checkbox"
        id={id}
        checked={checked}
        onChange={(e) => onCheckedChange(e.target.checked)}
        className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
      />
      <div className="absolute w-4 h-4 border rounded pointer-events-none" />
    </div>
  );
};

export default Checkbox;
