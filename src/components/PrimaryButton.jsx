export function PrimaryButton({ children, ...props }) {
  return (
    <button
      {...props}
      type='submit'
      className='px-5 py-2 font-semibold tracking-wide bg-blue-500 rounded-md hover:bg-blue-600'>
      {children}
    </button>
  );
}
