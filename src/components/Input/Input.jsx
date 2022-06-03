export const Input = (props) => {
  const { label, name, placeholder, type } = props;
  return (
    <div className="w-full">
      <label
        htmlFor='email'
        className='block text-sm font-medium text-gray-700'
      >
        {label}
      </label>
      <div className='mt-1'>
        <input
          type={type}
          name={name}
          id={name}
          className='shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md'
          placeholder={placeholder}
        />
      </div>
    </div>
  );
};
