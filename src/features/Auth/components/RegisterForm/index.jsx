import { yupResolver } from '@hookform/resolvers/yup';
import { Avatar, makeStyles, Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { LockOutlined } from '@material-ui/icons';
import PropTypes from 'prop-types';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import InputField from '../../../../components/FormControls/InputField';
import PasswordField from '../../../../components/FormControls/PasswordField';
import LinearProgress from '@material-ui/core/LinearProgress';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    paddingTop: theme.spacing(4),
  },

  avatar: { margin: '0 auto', backgroundColor: theme.palette.secondary.main },

  title: {
    textAlign: 'center',
    margin: theme.spacing(2, 0, 3, 0),
  },

  submit: {
    margin: theme.spacing(3, 0, 2, 0),
  },
  progress: {
    position: 'absolute',
    top: theme.spacing(1),
    left: 0,
    right: 0,
  },
}));

RegisterForm.propTypes = {
  onSubmit: PropTypes.func,
};

function RegisterForm(props) {
  const classes = useStyles();

  const schema = yup.object().shape({
    // age: yup.number().positive().integer().required(),
    fullName: yup
      .string()
      .required('Please enter your full name')
      .test(
        'should have at least two words',
        'Full name need at least two words!',
        (value) => {
          console.log('Value ', value);
          return value.split(' ').length >= 2;
        }
      ), //test la custom function dùng để define rule cho validation
    email: yup
      .string()
      .required('Please enter your email!')
      .email('Please enter a valid email address!'),
    password: yup
      .string()
      .required('Please enter your password!')
      .min(6, 'Please enter at least 6 characters'),
    retypePassword: yup
      .string()
      .required('Please retype your password!')
      .oneOf(
        [yup.ref('password')],
        'Password does not match, please check it again!'
      ),
  });

  const form = useForm({
    defaultValues: {
      fullName: '',
      email: '',
      password: '',
      retypePassword: '',
    },
    resolver: yupResolver(schema),
  });

  const handleSubmit = async (values) => {
    const { onSubmit } = props;

    if (onSubmit) {
      await onSubmit(values);
    }
    // form.reset();
    // ;
    // console.log(values);
  };

  const { isSubmitting } = form.formState;
  return (
    <div className={classes.root}>
      {isSubmitting && <LinearProgress className={classes.progress} />}

      <Avatar className={classes.avatar}>
        <LockOutlined></LockOutlined>
      </Avatar>

      <Typography className={classes.title} component="h3" variant="h5">
        {/* thẻ h3 xài ở style h5 */}
        Create An Account
      </Typography>

      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <InputField name="fullName" label="Full Name" form={form} />
        <InputField name="email" label="Email" form={form} />
        <PasswordField name="password" label="Password" form={form} />
        <PasswordField
          name="retypePassword"
          label="Retype Password"
          form={form}
        />

        <Button
          type="submit"
          className={classes.submit}
          variant="contained"
          color="primary"
          fullWidth
          disabled={isSubmitting}
        >
          Create an account
        </Button>
      </form>
    </div>
  );
}

export default RegisterForm;
