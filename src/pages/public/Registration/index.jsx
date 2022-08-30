import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';

import styles from './Login.module.scss';
import { fetchAuth, fetchRegister, selectIsAuth } from '../../../redux/slices/auth';

export const Registration = () => {
  const isAuth = useSelector(selectIsAuth);
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      fullName: '',
      email: '',
      password: '',
      confirm: "",
      dot: "",
      orgName: "",
    },
    mode: 'onChange',
  });

  const onSubmit = async (values) => {
    const data = await dispatch(fetchRegister(values));

    if (!data.payload) {
      return alert('Cant registration');
    } else {
      navigate("/login")
    }

    // if ('id' in data.payload) {
    //   window.localStorage.setItem('id', data.payload.id);
    // }
  };

  // if (isAuth) {
  //   return <Navigate to="/admin" />;
  // }

  return (
    <Paper classes={{ root: styles.root }}>
      <Typography classes={{ root: styles.title }} variant="h5">
        Creating account
      </Typography>
      <div className={styles.avatar}>
        <Avatar sx={{ width: 100, height: 100 }} />
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          error={Boolean(errors.dot?.message)}
          helperText={errors.dot?.message}
          {...register('dot', { required: 'Dot' })}
          className={styles.field}
          label="DOT"
          fullWidth
        />
        <TextField
          error={Boolean(errors.orgName?.message)}
          helperText={errors.orgName?.message}
          {...register('orgName', { required: 'Organization name' })}
          className={styles.field}
          label="Organization name"
          fullWidth
        />
        <TextField
          error={Boolean(errors.fullName?.message)}
          helperText={errors.fullName?.message}
          {...register('fullName', { required: 'Type full name' })}
          className={styles.field}
          label="Your name"
          fullWidth
        />

        <TextField
          error={Boolean(errors.email?.message)}
          helperText={errors.email?.message}
          type="email"
          {...register('email', { required: 'Type email' })}
          className={styles.field}
          label="E-Mail"
          fullWidth
        />
        <TextField
          error={Boolean(errors.password?.message)}
          helperText={errors.password?.message}
          type="password"
          {...register('password', { required: 'Type password' })}
          className={styles.field}
          label="Password"
          fullWidth
        />
        <TextField
          error={Boolean(errors.confirm?.message)}
          helperText={errors.confirm?.message}
          type="password"
          {...register('confirm', { required: 'Confirm password' })}
          className={styles.field}
          label="Confirm"
          fullWidth
        />
        <Button disabled={!isValid} type="submit" size="large" variant="contained" fullWidth>
          Register
        </Button>
      </form>
    </Paper>
  );
};
