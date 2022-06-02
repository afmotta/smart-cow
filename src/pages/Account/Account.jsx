import { Outlet } from "react-router-dom";
import { BaseLayout } from "../../layouts/BaseLayout";

const Navbar = () => {
  return (
    <div className='sticky top-0 z-10 flex-shrink-0 h-16 bg-white border-b border-gray-200 flex'>
      <div className='flex-1 flex justify-between'>
        <div className='flex-1 flex items-center'>
          <h1 className='text-2xl font-semibold text-gray-900'>My account</h1>
        </div>
        <div className='ml-6 flex items-center'>
          <button
            type='button'
            className='inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-red-500 bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500'
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export const Account = () => {
  return (
    <BaseLayout navbar={<Navbar />} active='gallery'>
      <div className='py-8'>
        <Outlet />
      </div>
    </BaseLayout>
  );
};
