import { Disclosure } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/outline";
import clsx from "clsx";
import { VideoTabs } from "../VideoTabs";
import s1 from "./s1.png";
import s2 from "./s2.png";
import s3 from "./s3.png";
import s4 from "./s4.png";
import s5 from "./s5.png";
import s6 from "./s6.png";

const panels = ["Images", "Solid colors", "Videos"];

const items = [
  { name: "Office", picture: s1 },
  { name: "Space", picture: s2 },
  { name: "Noise", picture: s3 },
  { name: "Meeting room", picture: s4 },
  { name: "Books", picture: s5 },
  { name: "Desk", picture: s6 },
];

const Gallery = () => {
  return (
    <ul className='grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-3 xl:gap-x-8'>
      {items.map((item) => (
        <li key={item.name} className='relative'>
          <div className='group block w-full aspect-w-10 aspect-h-7 rounded-lg bg-gray-100 overflow-hidden'>
            <img
              src={item.picture}
              alt=''
              className='object-cover pointer-events-none group-hover:opacity-75'
            />
            <button
              type='button'
              className='absolute inset-0 focus:outline-none'
            >
              <span className='sr-only'>Select {item.name}</span>
            </button>
          </div>
          <p className='mt-2 block text-sm font-medium text-gray-900 truncate pointer-events-none text-center'>
            {item.name}
          </p>
        </li>
      ))}
    </ul>
  );
};

export const VideoBackground = () => {
  return (
    <div>
      <VideoTabs active='background' />
      <div className='block max-w-7xl mx-auto px-4'>
        <div className='max-w-3xl mx-auto divide-y-2 divide-gray-200'>
          <dl className='divide-y divide-gray-200'>
            {panels.map((panel) => (
              <Disclosure as='div' key={panel} className='pt-6'>
                {({ open }) => (
                  <div
                    className={clsx(
                      open && "bg-blue-50",
                      "pl-2 pr-2 pt-2 pb-6"
                    )}
                  >
                    <dt className='text-lg'>
                      <Disclosure.Button className='text-left w-full flex justify-between items-start text-gray-400'>
                        <span
                          className={clsx(
                            "font-medium",
                            open ? "text-blue-500" : "text-gray-500"
                          )}
                        >
                          {panel}
                        </span>
                        <span className='ml-6 h-7 flex items-center'>
                          <ChevronDownIcon
                            className={clsx(
                              open ? "-rotate-180" : "rotate-0",
                              "h-6 w-6 transform"
                            )}
                            aria-hidden='true'
                          />
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as='dd' className='mt-2 pr-12'>
                      <Gallery />
                    </Disclosure.Panel>
                  </div>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};
