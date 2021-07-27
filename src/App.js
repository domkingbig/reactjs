import { NavLink, Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import AlbumFeatures from './features/Album/pages';
import NotFound from './components/NotFound';
import TodoFeatures from './features/Todo/components/pages';
import { useEffect } from 'react';
import productApi from './api/productApi';
import CounterFeatures from './features/Counter';

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

  return (
    <div>
      Home Page
      {/* <p>
      <Link to={{pathname:"/todos"}} >Todos</Link>
      </p>
      <p>
      <Link to={{pathname:"/albums"}}>Albums</Link>
      </p> */}
      <p>
        <NavLink
          to={{ pathname: '/todos' }}
          activeStyle={{
            fontStyle: 'italic',
            color: 'red',
            textDecoration: 'line-through',
          }}
        >
          Todos
        </NavLink>
      </p>
      <p>
        <NavLink to={{ pathname: '/albums' }}>Albums</NavLink>
      </p>
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
