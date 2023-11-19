import HeaderForm from './HeaderForm';
import HeaderTitle from './HeaderTitle';
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

// =============================
Header.Wrapper = HeaderWrapper;
Header.Title = HeaderTitle;
Header.ToggleDarkMode = HeaderToggleDarkMode;
Header.Form = HeaderForm;
