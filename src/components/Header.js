import DarkModeButton from "@/components/DarkModeButton"

export default function Header() {
  return (
    <header className='flex justify-between'>
      <div className='text-2xl font-bold'>devFinder</div>
      <div><DarkModeButton/></div>
    </header>
  );
}
