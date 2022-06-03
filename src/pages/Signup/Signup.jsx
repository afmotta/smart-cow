import { Link } from "react-router-dom";
import { Input } from "../../components/Input";
import { AuthLayout } from "../../layouts/AuthLayout";

export const Signup = (props) => {
  return (
    <AuthLayout title='Sign in'>
      <div className='flex flex-col items-center w-1/3'>
        <Input
          label='Full name'
          name='name'
          type='text'
          placeholder='Your name'
        />
        <div className='mt-6' />
        <Input
          label='Email'
          name='email'
          type='email'
          placeholder='your@email.com'
        />
        <div className='mt-6' />
        <Input
          label='Password'
          name='password'
          type='password'
          placeholder='Your password'
        />
        <div className='mt-6' />
        <button
          type='button'
          className='inline-flex items-center px-2.5 py-1.5 shadow-sm text-xs font-medium rounded text-white bg-emerald-500 hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500'
        >
          Login
        </button>
        <div className='mt-12' />
        <h6>
          Already an user?{" "}
          <Link className='text-blue-500' to='/signin'>
            Signin
          </Link>
        </h6>
      </div>
    </AuthLayout>
  );
};
