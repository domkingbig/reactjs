import { Button } from '@material-ui/core';
import { useEffect } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import productApi from './api/productApi';
import './App.css';
import Header from './components/Header';
import NotFound from './components/NotFound';
import AlbumFeatures from './features/Album/pages';
import CounterFeatures from './features/Counter';
import TodoFeatures from './features/Todo/components/pages';

function App() {
  useEffect(() => {
    const fetchProduct = async () => {
      const params = {
        _limit: 5,
      };
      const productList = await productApi.getAll(params);
      console.log(productList);
    };
    fetchProduct();
  }, []);

  const show = () => {};

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
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
