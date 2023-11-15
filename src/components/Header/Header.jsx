import HeaderButton from './HeaderButton';
import HeaderInput from './HeaderInput';

export default function Header({ children }) {
  return <header>{children}</header>;
}

function HeaderWrapper({ children }) {
  return <div className='flex justify-between'>{children}</div>;
}

function HeaderTitle({ title }) {
  return <h1 className='text-2xl font-bold'>{title}</h1>;
}

// =============================

Header.Wrapper = HeaderWrapper;
Header.Title = HeaderTitle;
Header.Button = HeaderButton;
Header.Input = HeaderInput;
