import { BrowserRouter, Switch, Route } from 'react-router-dom';
// import Navbar from './Navbar';
import About from './components/About component/About';
import Blog from './components/Blog component/Blog';
import Contact from './components/Contact component/Contact';
import Home from './components/Home component/Home';

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
