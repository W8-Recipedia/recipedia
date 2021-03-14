import * as Yup from "yup";

import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  Grid,
  TextField,
  makeStyles,
} from "@material-ui/core";
import { Form, Formik } from "formik";
import React, { useLayoutEffect, useState } from "react";
import {
  resendVerificationEmail,
  verifyEmail,
} from "src/components/auth/UserAuth";

import { Link } from "react-router-dom";
import Page from "src/components/theme/page";
import { Scrollbars } from "react-custom-scrollbars";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    height: "100%",
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3),
  },
  title: {
    fontSize: 84,
    [theme.breakpoints.up("xs")]: {
      fontSize: 64,
    },
    [theme.breakpoints.up("md")]: {
      fontSize: 84,
    },
  },
  button: {
    display: "flex",
    flexDirection: "column",
    margin: "auto",
  },
}));

const VerifyView = () => {
  const classes = useStyles();
  const [verified, setVerified] = useState();
  const [emailSent, setEmailSent] = useState(false);
  const [emailError, setEmailError] = useState(false);

  const resendVerification = (values) => {
    resendVerificationEmail(values.email).then((response) => {
      setEmailSent(true);
      if (response.data.message === "emailSuccess") {
        setEmailError(false);
      } else {
        setEmailError(true);
      }
    });
  };

  useLayoutEffect(() => {
    verifyEmail(window.location.pathname.replace("/verify/", "")).then(
      (response) => {
        if (response.data.message === "userVerified") {
          setVerified(true);
        } else {
          setVerified(false);
        }
      }
    );
  }, []);

  return (
    <Scrollbars>
      <Page className={classes.root} title="Recipedia">
        <Dialog open={!verified}>
          <DialogContent>
            <Formik
              initialValues={{
                email: "",
              }}
              validationSchema={Yup.object().shape({
                email: Yup.string()
                  .email("Must be a valid email")
                  .max(255)
                  .required("Email is required"),
              })}
              onSubmit={resendVerification}
            >
              {({
                errors,
                handleBlur,
                handleChange,
                isSubmitting,
                touched,
                values,
              }) => (
                <Form>
                  <Box alignItems="center" justifyContent="center" m={2}>
                    <DialogContentText>
                      Your email could not be verified. Please click below to
                      send a new verification email.
                      <Grid container spacing={3}>
                        <TextField
                          error={Boolean(touched.email && errors.email)}
                          fullWidth
                          helperText={touched.email && errors.email}
                          label="Email address"
                          margin="normal"
                          name="email"
                          onBlur={handleBlur}
                          onChange={handleChange}
                          type="email"
                          value={values.email}
                          variant="outlined"
                        />
                      </Grid>
                    </DialogContentText>
                    <DialogActions>
                      <Button
                        color="primary"
                        fullWidth
                        variant="contained"
                        size="large"
                        type="submit"
                        className={classes.button}
                      >
                        Verify
                      </Button>
                    </DialogActions>
                  </Box>
                </Form>
              )}
            </Formik>
          </DialogContent>
        </Dialog>
        <Dialog open={verified}>
          <DialogContent>
            <Box alignItems="center" justifyContent="center" m={2}>
              <DialogContentText>
                Your email has been verified!
              </DialogContentText>
            </Box>
            <Box alignItems="center" justifyContent="center" m={2}>
              <DialogActions>
                <Button
                  component={Link}
                  to={"/login"}
                  color="primary"
                  variant="contained"
                  size="large"
                  onClick={resendVerification}
                  className={classes.button}
                >
                  Log in
                </Button>
              </DialogActions>
            </Box>
          </DialogContent>
        </Dialog>
        <Dialog open={emailSent}>
          <DialogContent>
            <Box alignItems="center" justifyContent="center" m={2}>
              <DialogContentText>
                {emailError
                  ? "Please log into your account!"
                  : "A verification email has been sent to your email adress."}
              </DialogContentText>
              {emailError ? (
                <DialogActions>
                  <Link to="/login">
                    <Button
                      color="primary"
                      fullWidth
                      variant="contained"
                      size="large"
                      onClick={resendVerification}
                      className={classes.buttonText}
                    >
                      Log in
                    </Button>
                  </Link>
                </DialogActions>
              ) : null}
            </Box>
          </DialogContent>
        </Dialog>
      </Page>
    </Scrollbars>
  );
};

export default VerifyView;