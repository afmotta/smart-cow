import clsx from "clsx";
import { useState } from "react";

const Button = (props) => {
  const { active, children, onSelect } = props;
  return (
    <button
      type='button'
      className={clsx(
        "capitalize inline-flex items-center px-8 py-3 m-2 border text-md font-medium rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500",
        active
          ? "border-blue-500 text-blue-500 bg-blue-100 hover:bg-blue-200"
          : "border-gray-500 text-gray-500 bg-gray-100 hover:bg-gray-200"
      )}
      onClick={onSelect}
    >
      {children}
    </button>
  );
};

const keys = ["left", "center", "right"];

export const VideoAlignment = () => {
  const [active, setActive] = useState("center");

  return (
    <div className='flex flex-row justify-start'>
      {keys.map((k) => (
        <Button key={k} active={active === k} onSelect={() => setActive(k)}>
          {k}
        </Button>
      ))}
    </div>
  );
};
