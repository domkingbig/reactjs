import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import className from 'classnames';

TodoList.propTypes = {
    todoList: PropTypes.array,
    onTodoClick: PropTypes.func,
};
TodoList.defaultProps = {
    todoList : [],
    onTodoClick: null,
}

function TodoList(props) {
    const {todoList, onTodoClick} = props;
    const handleTodoClick =(todo, idx)=>{
        if(!onTodoClick) return;

        onTodoClick(todo, idx);
    };    
    return (
        <div>
            <ul className="todoList">
                {todoList.map((todo, idx) => (
                    <li key={todo.id} 
                    className={className({completed: todo.status === 'completed'})} 
                    onClick={()=>handleTodoClick(todo, idx)}>
                        {todo.title}
                    </li>//phải import package classnames vào mới dùng được logic này, nghĩa là khi nào cái todo.status = completed thì className sẽ chuyển thành completed
                ))}
            </ul>
        </div>
    );
}

export default TodoList;