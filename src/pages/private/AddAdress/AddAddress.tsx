import styles from './AddAddress.module.scss';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { AdminLayout } from '../../../components/AdminLayout';
import { fetchAddress } from '../../../redux/slices/creation';


export const AddAddress = () => {

  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm({
    defaultValues: {
      city: "",
      state: '',
    },
    mode: 'onChange',
  });

  const onSubmit = async (values:any) => {
    //const newObj = {...values, organizationId: user.organizationId, name: user.name}
    reset({
      city: "",
      state: "",
    })
    //@ts-ignore
   const data = await dispatch(fetchAddress(newObj));
  };

  return (
    <AdminLayout >
      <Paper classes={{ root: styles.root }}>
        <Typography classes={{ root: styles.title }} variant="h5">
        Add Address
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
            className={styles.field}
            label="City"
            error={Boolean(errors.city?.message)}
            helperText={errors.city?.message}
            type="text"
            {...register('city', { required: 'Write DOT' })}
            fullWidth
          />
          <TextField
            className={styles.field}
            label="State"
            error={Boolean(errors.state?.message)}
            helperText={errors.state?.message}
            type="text"
            {...register('state', { required: 'Укажите почту' })}
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
