import Navbar from './components/Navbar'
import Home from './components/Home'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CreateBlog from './components/CreateBlog';
import Blog from './components/Blog';
import ErrorPage from './components/ErrorPage';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/create">
              <CreateBlog />
            </Route>
            <Route path="/blogs/:id">
              <Blog />
            </Route>
            <Route path="*">
              <ErrorPage />
            </Route>
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
