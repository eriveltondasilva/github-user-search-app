import Header from './Header';

export default function HeaderIndex() {
  return (
    <Header>
      <Header.Wrapper>
        <Header.Title title='devFinder' />

        <Header.Button />
      </Header.Wrapper>

      <Header.Input />
    </Header>
  );
}
