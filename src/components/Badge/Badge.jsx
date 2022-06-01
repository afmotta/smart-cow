import clsx from "clsx";

export const Badge = (props) => {
  const { active, children } = props;
  return (
    <span
      className={clsx(
        "inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium text-gray-400 border border-gray-400/50",
        active && "bg-blue-100 text-blue-400 border-blue-400"
      )}
    >
      {children}
    </span>
  );
};
