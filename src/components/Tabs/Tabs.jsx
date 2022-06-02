import clsx from "clsx";
import { NavLink } from "react-router-dom";

export const Tabs = (props) => {
  const { root, keys } = props;
  return (
    <div className='flex flex-row'>
      {keys.map((key) => (
        <NavLink
          className={({ isActive }) =>
            clsx("m-4 capitalize", isActive ? "text-blue-500" : "text-gray-500")
          }
          key={key}
          to={`${root}${key}`}
        >
          {key}
        </NavLink>
      ))}
    </div>
  );
};
