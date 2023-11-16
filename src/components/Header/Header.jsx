import HeaderForm from './HeaderForm';
import HeaderToggleDarkMode from './HeaderToggleDarkMode';

// =============================
export default function Header({ children }) {
  return <header>{children}</header>;
}

// -----------------------------
function HeaderWrapper({ children }) {
  return <div className='flex justify-between'>{children}</div>;
}

// -----------------------------
function HeaderTitle({ title }) {
  return <h1 className='text-2xl font-bold'>{title}</h1>;
}

// =============================
Header.Wrapper = HeaderWrapper;
Header.Title = HeaderTitle;
Header.ToggleDarkMode = HeaderToggleDarkMode;
Header.Form = HeaderForm;
