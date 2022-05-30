import { BaseLayout } from "../BaseLayout";

const Navbar = (props) => {
  const { title } = props;
  return (
    <div className='pr-8 pl-20'>
      <div className='mx-auto flex flex-col px-8'>
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
        <main className='flex-1'>{/*children*/}</main>
      </div>
    </div>
  );
};

export const VideoLayout = (props) => {
  const { title } = props;
  return <BaseLayout navbar={<Navbar title={title} />} />;
};
