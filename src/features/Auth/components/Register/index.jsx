import { unwrapResult } from '@reduxjs/toolkit';
import { useSnackbar } from 'notistack';
import React from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../../userSlice';
import RegisterForm from '../RegisterForm';
import PropTypes from 'prop-types';

Register.propTypes = {
  closeDialog: PropTypes.func,
};

function Register(props) {
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();

  const { closeDialog } = props;

  const handleSubmit = async (values) => {
    try {
      //auto set username = email
      values.username = values.email;

      if (closeDialog) {
        closeDialog();
      }

      const action = register(values);
      const resultAction = await dispatch(action);
      unwrapResult(resultAction); //unwrapResult to get the result

      enqueueSnackbar('Register successfully!!', { variant: 'success' });

      //do something here on register successfully
    } catch (error) {
      enqueueSnackbar(`Register failed, ${error.message}`, {
        variant: 'error',
      });
      // console.log(`Failed due to: ${error.message}`);
    }
  };
  return (
    <div>
      <RegisterForm onSubmit={handleSubmit} />
    </div>
  );
}

export default Register;
