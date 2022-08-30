import React from "react";
import styles from "./Profile.module.scss";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";

import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { selectUser } from "../../../redux/slices/auth";
import { AdminLayout } from "../../../components/AdminLayout";

export const Profile = () => {
  const data = useSelector(selectUser);
  //const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      phone: "",
      zoom: "",
    },
    mode: "onChange",
  });

  const onSubmit = async (values: any) => {
    //    const data = await dispatch(fetchAuth(values));
    //     if (!data.payload) {
    //       return alert('Cant register!');
    //     }
    //     if ('id' in data.payload) {
    //       window.localStorage.setItem('id', data.payload.id);
    //     }
  };

  return (
    <AdminLayout>
      <Paper classes={{ root: styles.root }}>
        <Typography classes={{ root: styles.title }} variant="h5">
          Profile
        </Typography>
        <h3>Organization: {data?.organizationName}</h3>
        <h3>Account type: {data?.accountType}</h3>
        <h3>E-mail: {data?.email}</h3>
        <br />
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            className={styles.field}
            label="Phone"
            error={Boolean(errors.phone?.message)}
            helperText={errors.phone?.message}
            type="text"
            {...register("phone", { required: "Write Tractor name" })}
            fullWidth
          />
          <TextField
            className={styles.field}
            label="Zoom"
            error={Boolean(errors.zoom?.message)}
            helperText={errors.zoom?.message}
            type="text"
            {...register("zoom", { required: "write your make" })}
            fullWidth
          />
          <Button
            disabled={!isValid}
            type="submit"
            size="large"
            variant="contained"
            color="success"
            fullWidth
          >
            Save
          </Button>
        </form>
      </Paper>
    </AdminLayout>
  );
};
