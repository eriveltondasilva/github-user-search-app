import Header from './Header';

export default function HeaderIndex({userLogin}) {
  return (
    <Header>
      <Header.Wrapper>
        <Header.Title title='devFinder' />

        <Header.ToggleDarkMode />
      </Header.Wrapper>
      <Header.Form userLogin={userLogin}/>
    </Header>
  );
}
