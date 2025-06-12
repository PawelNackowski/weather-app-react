import { Wrapper } from "./styled";
import { Weather } from "./Weather/Weather";

function App() {
  return (
    <>
      <Wrapper>
        <Weather defaultLocation="Warszawa"/>
        <Weather defaultLocation="Nowy York"/>
        <Weather defaultLocation="Tokio"/>
      </Wrapper>
    </>
  );
}

export default App;
