import './App.css';
import Blog from './components/Blog/Blog';
import Header from './components/Header/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import PostDetails from './components/PostDetails/PostDetails';
import NoMatch from './components/NoMatch/NoMatch';

function App() {
  return (
    <div className="App">
      <Router>
      <Header />
        <Switch>
          <Route exact path="/">
          <Blog />
          </Route>
          <Route path="/post/:id">
            <PostDetails/>
          </Route>
          <Route path="*">
            <NoMatch/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
