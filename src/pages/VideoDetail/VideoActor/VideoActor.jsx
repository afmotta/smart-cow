import clsx from "clsx";
import { useActors } from "../../../hooks/useActors";

export const VideoActor = (props) => {
  const actors = useActors();
  return (
    <ul className='grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8'>
      {actors.map((actor) => (
        <li key={actor.name} className='relative'>
          <div
            className={clsx(
              "group block w-full aspect-w-10 aspect-h-7 rounded-lg bg-gray-100 overflow-hidden",
              actor.active &&
                "ring-2 ring-offset-2 ring-offset-gray-100 ring-indigo-500"
            )}
          >
            <img
              src={actor.picture}
              alt=''
              className='object-cover pointer-events-none group-hover:opacity-75'
            />
            <button
              type='button'
              className='absolute inset-0 focus:outline-none'
            >
              <span className='sr-only'>Select {actor.name}</span>
            </button>
          </div>
          <p className='mt-2 block text-sm font-medium text-gray-900 truncate pointer-events-none text-center'>
            {actor.name}
          </p>
        </li>
      ))}
    </ul>
  );
};
