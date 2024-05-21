import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './Create';
import BlogDetails from './BlogDetails';

function App() {


  return (
    <Router>
    <div className="App">
        <Navbar />
        <div className="content">
          {/* The issue you're experiencing where the page fetches and reloads every time you click a link in your React application can be related to how you're handling routing and navigation. Typically, this problem arises when:
           The links are causing a full page reload instead of client-side navigation.
           The server isn't properly configured to handle client-side routing.  */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/create">
            <Create />
          </Route>
          <Route path="/blogs/:id">
            <BlogDetails />
          </Route>
          {/* <Route path="*">
            <NotFound />
          </Route> */}
        </Switch>
        </div>
            </div>
      </Router>
  );
}

export default App;
