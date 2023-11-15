import Header from './Header';

export default function HeaderIndex() {
  return (
    <Header.root>
      <Header.wrapper>
        <Header.title title='devFinder' />

        <Header.button />
      </Header.wrapper>

      <Header.input />
    </Header.root>
  );
}
