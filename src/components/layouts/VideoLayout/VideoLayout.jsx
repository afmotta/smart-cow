import { BaseLayout } from "../BaseLayout";

const Navbar = (props) => {
  const { title } = props;
  return (
    <div className='sticky top-0 z-10 flex-shrink-0 h-16 bg-white border-b border-gray-200 flex'>
      <div className='flex-1 flex justify-between'>
        <div className='flex-1 flex items-center'>
          <h1 className='text-2xl font-semibold text-gray-900'>
            {title ?? ""}
          </h1>
        </div>
        <div className='ml-6 flex items-center'></div>
      </div>
    </div>
  );
};

export const VideoLayout = (props) => {
  const { children, title } = props;
  return <BaseLayout navbar={<Navbar title={title} />}>{children}</BaseLayout>;
};
