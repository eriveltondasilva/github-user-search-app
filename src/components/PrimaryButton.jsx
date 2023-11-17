'use client';
export default function PrimaryButton({ children, ...props }) {
  return (
    <button
      className='px-5 py-2 font-semibold tracking-wide transition duration-200 ease-in bg-blue-500 rounded-md hover:bg-blue-600 active:outline active:outline-2 active:outline-blue-400 active:outline-offset-2'
      {...props}>
      {children}
    </button>
  );
}
