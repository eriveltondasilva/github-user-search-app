import Header from './Header';

export default function HeaderIndex() {
  return (
    <Header>
      <Header.Wrapper>
        <Header.Title title='devFinder' />

        <Header.ToggleDarkMode />
      </Header.Wrapper>
      <Header.Form />
    </Header>
  );
}
