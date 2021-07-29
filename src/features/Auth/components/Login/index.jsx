import { unwrapResult } from '@reduxjs/toolkit';
import { useSnackbar } from 'notistack';
import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../userSlice';
import LoginForm from '../LoginForm';

Login.propTypes = {
  closeDialog: PropTypes.func,
};

function Login(props) {
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();

  const { closeDialog } = props;

  const handleSubmit = async (values) => {
    try {
      const action = login(values);
      const resultAction = await dispatch(action);
      unwrapResult(resultAction); //unwrapResult to get the result

      if (closeDialog) {
        closeDialog();
      }

      //do something here on register successfully
    } catch (error) {
      enqueueSnackbar(`Login failed, ${error.message}`, {
        variant: 'error',
      });
      // console.log(`Failed due to: ${error.message}`);
    }
  };
  return (
    <div>
      <LoginForm onSubmit={handleSubmit} />
    </div>
  );
}

export default Login;
