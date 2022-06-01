import { BrowserRouter, Switch, Route } from 'react-router-dom';
// import Navbar from './Navbar';
import About from './About';
import Blog from './Blog';
import Contact from './Contact';
import Home from './Home';

const Routes = () => (
  <>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/blog" component={Blog} />
        <Route exact path="/comingsoon" component={Contact} />
      </Switch>
    </BrowserRouter>
  </>
);

export default Routes;
