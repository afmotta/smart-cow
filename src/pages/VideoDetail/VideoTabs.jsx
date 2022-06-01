import clsx from "clsx";
import { Link } from "react-router-dom";

const keys = ["actor", "voice", "alignment", "background"];

export const VideoTabs = (props) => {
  const { active } = props;
  return (
    <div className='flex flex-row'>
      {keys.map((key) => (
        <p
          className={clsx(
            "m-4 capitalize",
            active === key ? "text-blue-500" : "text-gray-500"
          )}
          key={key}
        >
          <Link to={`/video/${key}`}>{key}</Link>
        </p>
      ))}
    </div>
  );
};
