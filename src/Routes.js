import { BrowserRouter, Switch, Route } from 'react-router-dom';
// import Navbar from './Navbar';
import About from './About component/About';
import Blog from './Blog component/Blog';
import Contact from './Contact component/Contact';
import Home from './Home component/Home';

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
