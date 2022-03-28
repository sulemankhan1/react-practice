import React from "react";
import { TextField, Grid, Button, Typography } from "@mui/material";
import { useFormik } from "formik";

function FormikSimple() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      address: "",
    },
    validate: (values) => {
      let errors = {};
      if (!values.name) {
        errors.name = "Name Required";
      }
      if (!values.email) {
        errors.email = "Email is Required";
      }
      if (!values.address) {
        errors.address = "Address is Required";
      }

      return errors;
    },
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
                name="name"
                label="Name"
                fullWidth
                onChange={formik.handleChange}
                value={formik.values.name}
                error={Boolean(formik.errors.name)}
                helperText={
                  formik.touched && formik.errors.name
                    ? formik.errors.name
                    : null
                }
                onBlur={formik.handleBlur}
              />
            </Grid>

            <Grid item md>
              <TextField
                type="email"
                name="email"
                id="email"
                label="Email"
                fullWidth
                onChange={formik.handleChange}
                value={formik.values.email}
                error={Boolean(formik.errors.email)}
                helperText={
                  formik.touched && formik.errors.email
                    ? formik.errors.email
                    : null
                }
                onBlur={formik.handleBlur}
              />
            </Grid>

            <Grid item md>
              <TextField
                name="address"
                id="address"
                label="Address"
                fullWidth
                multiline
                rows={4}
                onChange={formik.handleChange}
                value={formik.values.address}
                error={Boolean(formik.errors.address)}
                helperText={
                  formik.touched && formik.errors.address
                    ? formik.errors.address
                    : null
                }
                onBlur={formik.handleBlur}
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

export default FormikSimple;
