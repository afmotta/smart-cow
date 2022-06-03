import { PencilIcon } from "@heroicons/react/outline";
import { Avatar } from "../../components/Avatar";
import { Input } from "../../components/Input";

export const Profile = () => {
  return (
    <div className='flex flex-col'>
      <div className='flex flex-row items-center'>
        <Avatar lg />
        <div className='ml-4 p-2 rounded-full h-8 w-8 mr-4 flex justify-center items-center text-blue-500 bg-blue-100'>
          <PencilIcon />
        </div>
      </div>
      <div className='mt-8 flex flex-row'>
        <div className='w-1/6'>
          <Input
            label='First name'
            name='firstname'
            type='text'
            placeholder='First name'
          />
        </div>
        <div className='w-1/6 ml-8'>
          <Input
            label='Last name'
            name='lastname'
            type='text'
            placeholder='Last name'
          />
        </div>
      </div>
      <div className='mt-4 flex flex-row'>
        <div className='w-1/6'>
          <Input
            label='Email'
            name='email'
            type='email'
            placeholder='your@email.com'
          />
        </div>
      </div>
      <div className='mt-8 flex flex-row'>
        <button
          type='button'
          className='inline-flex items-center px-3.5 py-2.5 shadow-sm text-md font-medium rounded text-white bg-emerald-500 hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500'
        >
          Save changes
        </button>
      </div>
    </div>
  );
};
