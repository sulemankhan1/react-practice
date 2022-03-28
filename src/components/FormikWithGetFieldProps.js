import React from "react";
import { TextField, Grid, Button, Typography } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";

function FormikWithGetFieldProps() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      address: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is Required"),
      email: Yup.string().required("Required").email("Invalid Email"),
      address: Yup.string().required("Address Required"),
    }),
    onSubmit: (values) => {
      console.log("%cForm Submitted: ", "color: green");
      console.log(values);
    },
  });

  return (
    <Grid container direction="column">
      <Grid item style={{ width: "50%" }}>
        <Typography variant="h2">Formik Practice</Typography>
        <form onSubmit={formik.handleSubmit}>
          <Grid container direction="column" spacing={2}>
            <Grid item>
              <TextField
                type="text"
                label="Name"
                fullWidth
                {...formik.getFieldProps("name")}
                error={formik.touched.name && Boolean(formik.errors.name)}
                helperText={
                  formik.touched.name && formik.errors.name
                    ? formik.errors.name
                    : null
                }
              />
            </Grid>

            <Grid item md>
              <TextField
                type="email"
                id="email"
                label="Email"
                fullWidth
                {...formik.getFieldProps("email")}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={
                  formik.touched.email && formik.errors.email
                    ? formik.errors.email
                    : null
                }
              />
            </Grid>

            <Grid item md>
              <TextField
                id="address"
                label="Address"
                fullWidth
                multiline
                rows={4}
                {...formik.getFieldProps("address")}
                error={formik.touched.address && Boolean(formik.errors.address)}
                helperText={
                  formik.touched.address && formik.errors.address
                    ? formik.errors.address
                    : null
                }
              />
            </Grid>

            <Grid item>
              <Button type="submit" variant="contained">
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
      </Grid>
    </Grid>
  );
}

export default FormikWithGetFieldProps;
