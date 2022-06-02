import clsx from "clsx";

export const Avatar = (props) => {
  const { lg } = props;
  return (
    <img
      className={clsx('inline-block rounded-full', lg ? 'h-32 w-32' : 'h-8 w-8')}
      src='https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
      alt=''
    />
  );
};
