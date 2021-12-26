import {
  Button,
  Container,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";
import { useNavigate } from "react-router-dom";
import bannerBg from "../../assets/images/hero-bg.jpg";

const useStyles = makeStyles((theme) => ({
  section: {
    background: `url(${bannerBg}) no-repeat center / cover`,
    [theme.breakpoints.down("sm")]: {
      backgroundPositionX: "right",
    },
  },
  gridContainer: {
    minHeight: "94vh",
  },
  h1: {
    fontWeight: 900,
  },
  h2: {
    fontWeight: 600,
  },
  p: {
    maxWidth: 440,
  },
  button: {
    marginTop: theme.spacing(2),
  },
}));

const HeroSection = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  return (
    <section className={classes.section}>
      <Container maxWidth="xl">
        <Grid
          container
          alignItems="center"
          justifyContent="flex-end"
          className={classes.gridContainer}
        >
          <Grid item xs={12} md={5}>
            <Typography variant="h1" component="h1" className={classes.h1}>
              Summer <br />
              Canvas
            </Typography>
            <Typography variant="h3" component="h2" className={classes.h2}>
              From The Summer
            </Typography>
            <Typography className={classes.p}>
              Up your game in our latest innovations for the court, the field,
              and everywhere in between and also another interesting feature.
            </Typography>
            <Button
              variant="contained"
              color="primary"
              onClick={() => navigate("/products")}
              className={classes.button}
            >
              Shop
            </Button>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default HeroSection;
