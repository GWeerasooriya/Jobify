import Landing from "./pages/Landing";
import styled from 'styled-components';

const Button = styled.button`
  background : red;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  margin-top: 20px;
`
;

function App() {
  return (
    <div>
      <Button>Click Me</Button>
      <h1>JOBIFY</h1>
      <Landing />

    </div>
    
    
  );
}

export default App;
