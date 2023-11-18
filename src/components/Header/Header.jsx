import HeaderForm from './HeaderForm';
import HeaderToggleDarkMode from './HeaderToggleDarkMode';

// =============================
export default function Header({ children }) {
  return <header>{children}</header>;
}

// -----------------------------
function HeaderWrapper({ children }) {
  return <div className='flex items-baseline justify-between mb-8'>{children}</div>;
}

// -----------------------------
function HeaderTitle({ title }) {
  return <h1 className='text-lg font-bold sm:text-2xl'>{title}</h1>;
}

// =============================
Header.Wrapper = HeaderWrapper;
Header.Title = HeaderTitle;
Header.ToggleDarkMode = HeaderToggleDarkMode;
Header.Form = HeaderForm;
