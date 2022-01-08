import Wrapper from './components/Wrapper';

import { HashRouter } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
   <HashRouter>
    <Wrapper />
    </HashRouter>
    </div>
  );
}

export default App;
