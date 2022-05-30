import React from "react";

export const Badge = (props) => {
  const { children } = props;
  return (
    <span className='inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-gray-100 text-gray-400 border border-gray-400/50'>
      {children}
    </span>
  );
};
