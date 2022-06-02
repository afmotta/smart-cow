import { PauseIcon, PlayIcon } from "@heroicons/react/outline";
import clsx from "clsx";
import { useState } from "react";
import { Sound } from "./Sound";

const Track = (props) => {
  const { active, title } = props;
  return (
    <div
      className={clsx(
        "rounded-xl h-20 flex flex-row items-center p-4 border mb-4",
        active ? "bg-blue-100 border-blue-500" : "bg-gray-100 border-gray-500"
      )}
    >
      <div
        className={clsx(
          "rounded-full h-14 w-14 mr-4 flex justify-center items-center text-white",
          active ? "bg-blue-500" : "bg-gray-400"
        )}
      >
        {active ? <PauseIcon /> : <PlayIcon />}
      </div>
      <div className='flex flex-col'>
        <h6
          className={clsx(
            "leading-3 capitalize",
            active ? "text-blue-500" : "text-gray-500"
          )}
        >
          {title}
        </h6>
        <div className='flex flex-row'>
          <div
            className={clsx(
              "flex flex-row",
              active ? "text-blue-500" : "text-gray-500"
            )}
          >
            <Sound />
            <Sound />
            <Sound />
            <Sound />
            <Sound />
          </div>
          <div className='flex flex-row text-gray-500'>
            <Sound />
            <Sound />
            <Sound />
            <Sound />
            <Sound />
            <Sound />
            <Sound />
            <Sound />
          </div>
        </div>
      </div>
    </div>
  );
};

const languages = ["asian", "british", "american"];

export const VideoVoice = (props) => {
  const [active, setActive] = useState(languages[0]);
  return (
    <>
      {languages.map((l) => (
        <div key={l} onClick={() => setActive(l)}>
          <Track title={l} active={l === active} />
        </div>
      ))}
    </>
  );
};
