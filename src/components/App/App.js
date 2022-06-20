import {HashRouter as Router, Route} from 'react-router-dom';
import './App.css';
import Home from './Home/Home';
import Find from './Find/Find';
import Soup from './Soup/Soup';

function App() {
  return (
    <div className="App">
      <Router>     
        <Route path="/" exact>
          <Home/>
        </Route>
        <Route path="/find">
          <Find />
        </Route>
        <Route path="/soup">
          <Soup />
        </Route>
      </Router>
    </div>
  );
}


export default App;
