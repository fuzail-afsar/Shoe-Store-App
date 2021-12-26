import { Container, Grid, Typography, makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  section: {
    backgroundColor: "rgb(251 249 249)",
    paddingTop: theme.spacing(18),
    paddingBottom: theme.spacing(18),
  },
  h1: {
    fontWeight: "bolder",
  },
}));

const InnerPageBanner = ({ title }) => {
  const classes = useStyles();

  return (
    <section className={classes.section}>
      <Container maxWidth="xl">
        <Grid container alignItems="center" justifyContent="center">
          <Grid item xs={12} md={5}>
            <Typography
              variant="h1"
              component="h1"
              align="center"
              className={classes.h1}
            >
              {title}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default InnerPageBanner;
