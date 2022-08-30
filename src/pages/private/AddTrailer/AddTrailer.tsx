import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import styles from './AddTrailer.module.scss';

import { selectUser } from '../../../redux/slices/auth';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { AdminLayout } from '../../../components/AdminLayout';
import { fetchTrailer } from '../../../redux/slices/creation';

export const AddTrailer = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm({
    defaultValues: {
      name: "",
      make: "",
      model: '',
      vin: '',
      year: "",
    },
    mode: 'onChange',
  });

  const onSubmit = async (values: any) => {
    const newObj = { ...values, organizationId: user.organizationId, id: user.id, status: "avalible", dot: user.dot }

    reset({
      name: "",
      make: "",
      model: '',
      vin: '',
      year: "",
    })
    //@ts-ignore
    const data = await dispatch(fetchTrailer(newObj));
  };



  return (
    <AdminLayout>
   <Paper classes={{ root: styles.root }}>
      <Typography classes={{ root: styles.title }} variant="h5">
       Add Trailer
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
      <TextField
          className={styles.field}
          label="Trailer name"
          error={Boolean(errors.name?.message)}
          helperText={errors.name?.message}
          type="text"
          {...register('name', { required: 'Write Tractor name' })}
          fullWidth
        />
        <TextField
          className={styles.field}
          label="Make"
          error={Boolean(errors.make?.message)}
          helperText={errors.make?.message}
          type="text"
          {...register('make', { required: 'write your make' })}
          fullWidth
        />
          <TextField
          className={styles.field}
          label="Model"
          error={Boolean(errors.model?.message)}
          helperText={errors.model?.message}
          type="text"
          {...register('model', { required: 'Write your model' })}
          fullWidth
        />
        <TextField
        type="text"
          className={styles.field}
          label="Vin"
          error={Boolean(errors.vin?.message)}
          helperText={errors.vin?.message}
          {...register('vin', { required: 'write your vin' })}
          fullWidth
        />
          <TextField
        type="text"
          className={styles.field}
          label="Year"
          error={Boolean(errors.year?.message)}
          helperText={errors.year?.message}
          {...register('year', { required: 'write your year' })}
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
