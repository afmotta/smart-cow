import { CollectionIcon, VideoCameraIcon } from "@heroicons/react/outline";
import clsx from "clsx";
import { Link, useNavigate } from "react-router-dom";
import { Avatar } from "../../components/Avatar";
import { Logo } from "../../components/Logo";
import { useAuth } from "../../contexts/AuthContext";

const navigation = [
  { name: "video", to: "/video", icon: VideoCameraIcon, current: true },
  { name: "gallery", to: "/gallery", icon: CollectionIcon, current: false },
];

export const BaseLayout = (props) => {
  const { active, centered, children, navbar, noPadding } = props;
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  return (
    <div>
      <div className='flex w-14 flex-col fixed inset-y-0 py-4'>
        <div className='border-r border-gray-200 flex flex-col flex-grow bg-white overflow-y-auto'>
          <div className='flex-shrink-0 px-4 flex items-center'>
            <Logo />
          </div>
          <div className='flex-grow mt-10 flex flex-col'>
            <nav className='flex-1 px-2 pb-4 space-y-4'>
              {navigation.map((item) => {
                const isActive = item.name === active;
                return (
                  <Link
                    key={item.name}
                    to={item.to}
                    className={clsx(
                      isActive ? "bg-blue-100" : "hover:bg-gray-100",
                      "group rounded-md py-2 px-2 flex items-center text-sm font-medium"
                    )}
                  >
                    <item.icon
                      className={clsx(
                        isActive ? "text-blue-500" : "text-gray-400",
                        "mr-3 flex-shrink-0 h-6 w-6"
                      )}
                      aria-hidden='true'
                    />
                  </Link>
                );
              })}
            </nav>
          </div>
          {isAuthenticated && (
            <div className='flex flex-col items-center mb-4'>
              <button
                className='max-w-xs flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
                onClick={() => navigate("/account/profile")}
              >
                <span className='sr-only'>Open user menu</span>
                <Avatar />
              </button>
            </div>
          )}
        </div>
      </div>

      <div>
        <div
          className={clsx("mx-auto flex flex-col pl-28", !noPadding && "pr-16")}
        >
          {navbar}
          <main
            className={clsx(
              "flex-1 min-h-screen",
              centered && "flex justify-center items-center"
            )}
          >
            {children}
          </main>
        </div>
      </div>
    </div>
  );
};
