import { header, subHeder } from "./namePlate";
import { Wrapper } from "./styled";
import { Weather } from "./Weather/Weather";

function App() {
  return (
    <>
    <Wrapper>
      <div>
        <h1>{header}</h1>
      </div>
      <div>
        <h2>{subHeder}</h2>
      </div>
      <div>
        <Weather/>
      </div>
      </Wrapper>
    </>
  );
}

export default App;
