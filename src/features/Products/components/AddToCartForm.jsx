import { yupResolver } from '@hookform/resolvers/yup';
import { Button } from '@material-ui/core';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import QuantityField from '../../../components/FormControls/QuantityField';
AddToCartForm.propTypes = {};

function AddToCartForm(props) {
  const schema = yup.object().shape({
    quantity: yup
      .number()
      .min(1, 'Please enter at least 1')
      .required('Please enter quantity')
      .typeError('Please enter a number'),
  });

  const form = useForm({
    defaultValues: {
      quantity: 1,
    },
    resolver: yupResolver(schema),
  });

  const handleSubmit = async (values) => {
    const { onSubmit } = props;

    if (onSubmit) {
      await onSubmit(values);
    }
  };
  return (
    <form onSubmit={form.handleSubmit(handleSubmit)}>
      <QuantityField name="quantity" label="Quantity" form={form} />

      <Button
        type="submit"
        variant="contained"
        color="primary"
        style={{ width: '250px', paddingTop: '20px' }}
      >
        Add to Cart
      </Button>
    </form>
  );
}

export default AddToCartForm;
