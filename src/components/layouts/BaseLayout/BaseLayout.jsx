import { CollectionIcon, VideoCameraIcon } from "@heroicons/react/outline";
import clsx from "clsx";
import { Logo } from "../../atoms/Logo";

const navigation = [
  { name: "Dashboard", href: "#", icon: VideoCameraIcon, current: true },
  { name: "Projects", href: "#", icon: CollectionIcon, current: false },
];

export const BaseLayout = (props) => {
  const { children, title } = props;
  return (
    <div>
      <div className='flex w-14 flex-col fixed inset-y-0 py-4'>
        <div className='border-r border-gray-200 flex flex-col flex-grow bg-white overflow-y-auto'>
          <div className='flex-shrink-0 px-4 flex items-center'>
            <Logo />
          </div>
          <div className='flex-grow mt-10 flex flex-col'>
            <nav className='flex-1 px-2 pb-4 space-y-4'>
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={clsx(
                    item.current ? "bg-blue-100" : "hover:bg-gray-100",
                    "group rounded-md py-2 px-2 flex items-center text-sm font-medium"
                  )}
                >
                  <item.icon
                    className={clsx(
                      item.current ? "text-blue-500" : "text-gray-400",
                      "mr-3 flex-shrink-0 h-6 w-6"
                    )}
                    aria-hidden='true'
                  />
                </a>
              ))}
            </nav>
          </div>
          <div className='flex flex-col items-center mb-4'>
            <button className='max-w-xs flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'>
              <span className='sr-only'>Open user menu</span>
              <img
                className='h-8 w-8 rounded-full'
                src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                alt=''
              />
            </button>
          </div>
        </div>
      </div>

      <div className='pr-8 pl-20'>
        <div className='mx-auto flex flex-col px-8'>
          <div className='sticky top-0 z-10 flex-shrink-0 h-16 bg-white border-b border-gray-200 flex'>
            <div className='flex-1 flex justify-between'>
              <div className='flex-1 flex items-center'>
                <h1 className='text-2xl font-semibold text-gray-900'>
                  {title ?? "Title"}
                </h1>
              </div>
              <div className='ml-6 flex items-center'></div>
            </div>
          </div>
          <main className='flex-1'>{children}</main>
        </div>
      </div>
    </div>
  );
};
