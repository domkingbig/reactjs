import {
  Box,
  IconButton,
  makeStyles,
  TextField,
  Typography,
} from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import { AddCircleOutline, RemoveCircleOutline } from '@material-ui/icons';
import PropTypes from 'prop-types';
import React from 'react';
import { Controller } from 'react-hook-form';

QuantityField.propTypes = {
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,

  label: PropTypes.string,
  disabled: PropTypes.bool,
};

const useStyles = makeStyles((theme) => ({
  box: {
    maxWidth: '250px',
    flexFlow: 'row nowrap',
    display: 'flex',
    alignItems: 'center',
  },
}));

function QuantityField(props) {
  const classes = useStyles();

  const { form, name, label, disabled } = props;

  const { errors, setValue } = form;

  const hasError = !!errors[name];

  return (
    <div>
      <FormControl
        margin="normal"
        fullWidth
        variant="outlined"
        error={hasError}
        size="small"
      >
        <Typography>{label}</Typography>

        <Controller
          name={name}
          control={form.control}
          render={({ onChange, onBlur, value, name }) => (
            <Box className={classes.box}>
              <IconButton
                onClick={() =>
                  setValue(
                    name,
                    Number.parseInt(value) ? Number.parseInt(value) - 1 : 1
                  )
                }
              >
                <RemoveCircleOutline />
              </IconButton>

              <TextField
                id={name}
                variant="outlined"
                type="number"
                disabled={disabled}
                errors={hasError}
                helperText={errors[name]?.message}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
              />
              <IconButton
                onClick={() =>
                  setValue(
                    name,
                    Number.parseInt(value) ? Number.parseInt(value) + 1 : 1
                  )
                }
              >
                <AddCircleOutline />
              </IconButton>
            </Box>
          )}
        />
      </FormControl>
    </div>
  );
}

export default QuantityField;
