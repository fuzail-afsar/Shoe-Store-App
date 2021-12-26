import { Container, Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  section: {
    paddingTop: theme.spacing(15),
    paddingBottom: theme.spacing(15),
  },
  container: {
    minHeight: "68.6vh",
  },
}));

const Error = ({ title = "Oops!", message = "Something Went Wrong" }) => {
  const classes = useStyles();

  return (
    <section className={classes.section}>
      <Container>
        <Grid
          container
          spacing={6}
          alignContent="center"
          className={classes.container}
        >
          <Grid item xs={12}>
            <Typography variant="h1" align="center">
              {title}
            </Typography>
            <Typography variant="h3" align="center">
              {message}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default Error;
