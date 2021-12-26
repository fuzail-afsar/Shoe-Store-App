import { Container, Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.primary.main,
  },
  p: {
    color: theme.palette.common.white,
    paddingTop: theme.spacing(1.5),
    paddingBottom: theme.spacing(1.5),
  },
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <Container maxWidth="xl">
        <Grid container>
          <Grid item xs={12}>
            <Typography align="center" className={classes.p}>
              Developed by Fuzail
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
};

export default Footer;
