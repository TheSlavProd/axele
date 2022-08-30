import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';

import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { useForm } from 'react-hook-form';

import styles from './Login.module.scss';
import { fetchAuth, selectIsAuth } from '../../../redux/slices/auth';

export const Login = () => {
const isAuth = useSelector(selectIsAuth);
const navigate = useNavigate()

  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      dot: "",
      email: '',
      password: '',
    },
    mode: 'onChange',
  });

  const onSubmit = async (values) => {
   const data = await dispatch(fetchAuth(values));

    if (!data.payload) {
      return alert('Cant login!');
    } else {
      navigate("/admin")
    }

    // if ('id' in data.payload) {
    //   window.localStorage.setItem('id', data.payload.id);
    // }
  };

  if (isAuth) {
    return <Navigate to="/profile" />;
  }

  return (
    <Paper classes={{ root: styles.root }}>
      <Typography classes={{ root: styles.title }} variant="h5">
       Login account
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
      <TextField
          className={styles.field}
          label="DOT"
          error={Boolean(errors.dot?.message)}
          helperText={errors.dot?.message}
          type="text"
          {...register('dot', { required: 'Write DOT' })}
          fullWidth
        />
        <TextField
          className={styles.field}
          label="E-Mail"
          error={Boolean(errors.email?.message)}
          helperText={errors.email?.message}
          type="email"
          {...register('email', { required: 'Укажите почту' })}
          fullWidth
        />
        <TextField
        type="password"
          className={styles.field}
          label="Password"
          error={Boolean(errors.password?.message)}
          helperText={errors.password?.message}
          {...register('password', { required: 'Укажите пароль' })}
          fullWidth
        />
        <Button disabled={!isValid} type="submit" size="large" variant="contained" fullWidth>
          Login
        </Button>
      </form>
    </Paper>
  );
};
