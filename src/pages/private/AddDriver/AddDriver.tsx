import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import styles from './AddDriver.module.scss';

import { useForm } from 'react-hook-form';
import { selectUser } from '../../../redux/slices/auth';
import { useDispatch, useSelector } from 'react-redux';
import { AdminLayout } from '../../../components/AdminLayout';
import { fechDriver } from '../../../redux/slices/creation';
import { useNavigate } from 'react-router-dom';

export const AddDriver = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm({
    defaultValues: {
      name: "",
      email: '',
      password: '',
      phone: "",
    },
    mode: 'onChange',
  });

  const onSubmit = async (values:any) => {
    const newObj = {...values, organizationId: user.organizationId, dot: user.dot}
    reset({
      name: "",
      email: '',
      password: '',
      phone: "",
    })
    //@ts-ignore
   const data = await dispatch(fechDriver(newObj));
   navigate("/drivers")
  };

  return (
    <AdminLayout >
      <Paper classes={{ root: styles.root }}>
        <Typography classes={{ root: styles.title }} variant="h5">
        Add Driver
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
            className={styles.field}
            label="Driver name"
            error={Boolean(errors.name?.message)}
            helperText={errors.name?.message}
            type="text"
            {...register('name', { required: 'Write DOT' })}
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
            className={styles.field}
            label="Phone"
            error={Boolean(errors.phone?.message)}
            helperText={errors.phone?.message}
            type="phone"
            {...register('phone', { required: 'Write your phone' })}
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
          <Button disabled={!isValid} type="submit" size="large" variant="contained" color="success" fullWidth>
            Create
          </Button>
        </form>
      </Paper>
    </AdminLayout>
  );
};
