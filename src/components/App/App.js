import {HashRouter as Router, Route} from 'react-router-dom';
import './App.css';
import MovieList from '../MovieList/MovieList'
import Details from '../Details/Details';

function App() {
  return (
    <div className="App">
      <Router>     
        <Route path="/" exact>
          <MovieList />
        </Route>
        <Route path="/details/:movieId">
          <Details />
        </Route>
      </Router>
    </div>
  );
}


export default App;
