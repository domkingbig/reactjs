import React, { useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import TodoList from '../../TodoList';
import { useHistory, useLocation, useRouteMatch } from 'react-router-dom';
import queryString from 'query-string';
import TodoForm from '../../TodoForm';

ListPage.propTypes = {
  handleTodoCLick: PropTypes.func,
};

function ListPage(props) {
  const initTodoList = [
    {
      id: 1,
      title: 'Eat',
      status: 'new',
    },
    {
      id: 2,
      title: 'Sleep',
      status: 'completed',
    },
    {
      id: 3,
      title: 'Code',
      status: 'new',
    },
  ];

  const location = useLocation();
  const history = useHistory();
  const match = useRouteMatch();
  const [todoList, setTodoList] = useState(initTodoList);
  const [filteredStatus, setFilteredStatus] = useState(() => {
    const params = queryString.parse(location.search);
    // console.log(params);
    return params.status || 'all';
  });

  useEffect(() => {
    const params = queryString.parse(location.search);
    console.log(params);
    setFilteredStatus(params.status);
  }, [location.search]);

  const handleTodoCLick = (todo, idx) => {
    const newTodoList = [...todoList];

    newTodoList[idx] = {
      ...newTodoList[idx],
      status: newTodoList[idx].status === 'new' ? 'completed' : 'new',
    };

    setTodoList(newTodoList);
    console.log(todo, idx);
  };

  const renderTodoList = useMemo(() => {
    return todoList.filter(
      (todo) => filteredStatus === 'all' || filteredStatus === todo.status
    );
  }, [todoList, filteredStatus]);

  const handleShowAllClick = () => {
    // setFilteredStatus('all')
    const queryParams = { status: 'all' };
    history.push({
      pathname: match.path,
      search: queryString.stringify(queryParams),
    });
  };

  const handleShowCompletedClick = () => {
    // setFilteredStatus('completed')
    const queryParams = { status: 'completed' };

    history.push({
      pathname: match.path,
      search: queryString.stringify(queryParams),
    });
  };

  const handleShowNewClick = () => {
    // setFilteredStatus('new')
    const queryParams = { status: 'new' };
    history.push({
      pathname: match.path,
      search: queryString.stringify(queryParams),
    });
  };
  const handleTodoFormSubmit = (values) => {
    // const { values } = props;

    const newTodo = {
      id: todoList.length + 1,
      title: values.title,
      status: 'new',
    };
    const newTodoList = [...todoList, newTodo];
    setTodoList(newTodoList);
    // localStorage.setItem('title', values.title);
    console.log('Form submit: ', values);
  };

  return (
    <div>
      <h3>What to do</h3>

      <TodoForm onSubmit={handleTodoFormSubmit} />

      <TodoList todoList={renderTodoList} onTodoClick={handleTodoCLick} />

      <button onClick={() => handleShowAllClick()}>ShowAll</button>
      <button onClick={() => handleShowCompletedClick()}>ShowCompleted</button>
      <button onClick={() => handleShowNewClick()}>ShowNew</button>
    </div>
  );
}

export default ListPage;
