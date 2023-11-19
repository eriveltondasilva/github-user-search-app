import HeaderForm from './HeaderForm';
import HeaderToggleDarkMode from './HeaderToggleDarkMode';

// =============================
export default function Header({ children }) {
  return <header>{children}</header>;
}

// -----------------------------
function HeaderWrapper({ children }) {
  return (
    <div className='flex items-baseline justify-between mb-8'>{children}</div>
  );
}

// -----------------------------
function HeaderTitle({ title }) {
  return (
    <h1 className='text-2xl font-bold'>
      <a href='/'>{title}</a>
    </h1>
  );
}

// =============================
Header.Wrapper = HeaderWrapper;
Header.Title = HeaderTitle;
Header.ToggleDarkMode = HeaderToggleDarkMode;
Header.Form = HeaderForm;
