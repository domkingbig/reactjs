import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrease, increase } from './CouterSlice';

CounterFeatures.propTypes = {};

function CounterFeatures(props) {
  const dispatch = useDispatch();

  const counter = useSelector((state) => state.counter);

  const handleIncreaseClick = () => {
    const action = increase(); //action creator
    dispatch(action);
  };
  const handleDecreaseClick = () => {
    const action = decrease(); //action creator
    dispatch(action);
  };
  return (
    <div>
      Counter: {counter}
      <div>
        <button onClick={handleIncreaseClick}>Increase</button>
        <button onClick={handleDecreaseClick}>Decrease</button>
      </div>
    </div>
  );
}

export default CounterFeatures;
