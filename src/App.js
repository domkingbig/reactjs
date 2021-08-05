import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import NotFound from './components/NotFound';
import AlbumFeatures from './features/Album/pages';
import CounterFeatures from './features/Counter';
import ProductFeature from './features/Products';
import TodoFeatures from './features/Todo/components/pages';

import CartFeature from './features/Cart';

function App() {
  // useEffect(() => {
  //   const fetchProduct = async () => {
  //     const params = {
  //       _limit: 5,
  //     };
  //     const productList = await productApi.getAll(params);
  //     console.log(productList);
  //   };
  //   fetchProduct();
  // }, []);

  // const show = () => {};

  return (
    <div>
      <Header />

      {/* <p>
      <Link to={{pathname:"/todos"}} >Todos</Link>
      </p>
      <p>
      <Link to={{pathname:"/albums"}}>Albums</Link>
      </p> */}
      <Switch>
        <Redirect from="home" to="/" exact />
        <Redirect from="/post-list/:postId" to="/posts/:postId" exact />

        <Route path="/todos" component={TodoFeatures} />
        <Route path="/" component={CounterFeatures} exact />
        {/* <Route path="/" component={TodoFeatures} exact /> */}
        <Route path="/albums" component={AlbumFeatures} />
        <Route path="/products" component={ProductFeature} />
        <Route path="/cart" component={CartFeature} />

        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
