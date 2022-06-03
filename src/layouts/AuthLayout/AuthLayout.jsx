import { BaseLayout } from "../BaseLayout";
import { AuthLogo } from "./AuthLogo";

const Navbar = ({ title }) => (
  <>
    <div className='pt-4'>
      <h1 className='text-2xl font-semibold text-gray-900'>{title}</h1>
    </div>
    <div className='absolute top-0 right-0'>
      <AuthLogo />
    </div>
  </>
);
export const AuthLayout = (props) => {
  const { children, title } = props;
  return (
    <BaseLayout navbar={<Navbar title={title} />} noPadding centered>
      {children}
    </BaseLayout>
  );
};
