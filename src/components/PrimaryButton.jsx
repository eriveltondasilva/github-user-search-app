'use client';
export default function PrimaryButton({ children, ...props }) {
  return (
    <button
      className='px-5 py-2 font-semibold tracking-wide bg-blue-500 rounded-md hover:bg-blue-600'
      {...props}>
      {children}
    </button>
  );
}
