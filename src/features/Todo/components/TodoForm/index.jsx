import React from 'react';
import PropTypes from 'prop-types';
import InputField from '../../../../components/FormControls/InputField';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

TodoForm.propTypes = {
  onSubmit: PropTypes.func,
};

function TodoForm(props) {
  const schema = yup.object().shape({
    title: yup.string().required('You have to input here').min(6),
    // age: yup.number().positive().integer().required(),
  });

  const form = useForm({
    defaultValues: {
      title: '',
    },
    resolver: yupResolver(schema),
  });

  const handleSubmit = (values) => {
    const { onSubmit } = props;

    if (onSubmit) {
      onSubmit(values);
      form.reset();
    }
    // ;
    // console.log(values);
  };
  return (
    <form onSubmit={form.handleSubmit(handleSubmit)}>
      Todo Form
      <InputField name="title" label="Type..." form={form} />
    </form>
  );
}

export default TodoForm;
