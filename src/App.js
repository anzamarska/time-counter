import styled from 'styled-components'
import Counter from './components/Counter';
import './App.css';


const MyButton = styled.button`
  border: 2px solid purple;
  padding: 3vw;
`

function App() {
  return (
    <div className="App">
      <MyButton/>
      <Counter/>
    </div>
  );
}

export default App;
