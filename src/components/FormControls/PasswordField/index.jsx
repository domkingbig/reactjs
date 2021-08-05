import { TextField } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import InputLabel from '@material-ui/core/InputLabel';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Controller } from 'react-hook-form';

PasswordField.propTypes = {
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,

  label: PropTypes.string,
  disabled: PropTypes.bool,
};

function PasswordField(props) {
  const { form, name, label, disabled } = props;

  const { errors } = form;

  //   console.log(form);

  const hasError = errors[name];

  //   console.log(formState.touched[name], errors[name]);

  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  // const handleMouseDownPassword = (event) => {
  //   event.preventDefault();
  // };

  return (
    <div>
      <FormControl margin="normal" fullWidth variant="outlined">
        <InputLabel htmlFor={name}></InputLabel>
        <Controller
          name={name}
          control={form.control}
          render={({ onChange, onBlur, value, name }) => (
            <TextField
              id={name}
              variant="outlined"
              type={showPassword ? 'text' : 'password'}
              label={label}
              //   value={password}
              //   onChange={handleChange('password')}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={toggleShowPassword}
                      // onMouseDown={handleMouseDownPassword} đã chặn mousedown và escape key tại header rồi nên không cần cái này nữa
                      edge="end"
                    >
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              disabled={disabled}
              errors={!hasError}
              helperText={errors[name]?.message}
              value={value}
              onChange={onChange}
              onBlur={onBlur}
            />
          )}
        />
      </FormControl>
    </div>
  );
}

export default PasswordField;
