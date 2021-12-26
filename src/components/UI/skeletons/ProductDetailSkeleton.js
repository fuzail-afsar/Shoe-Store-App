import React from "react";
import { Box, Container, Grid, makeStyles } from "@material-ui/core";
import Skeleton from "@material-ui/lab/Skeleton";

const useStyles = makeStyles((theme) => ({
  section: {
    paddingTop: theme.spacing(15),
    paddingBottom: theme.spacing(15),
  },
  variation: {
    display: "inline-block",
    marginLeft: "0.5%",
  },
}));

const ProductDetailSkeleton = () => {
  const classes = useStyles();
  return (
    <section className={classes.section}>
      <Container>
        <Grid container spacing={6}>
          <Grid item xs={12} md={5}>
            <Box mb={2}>
              <Skeleton variant="rect" width="100%" height={500} />
            </Box>
            <Skeleton
              className={classes.variation}
              variant="rect"
              width="24.5%"
              height={145}
            />
            <Skeleton
              className={classes.variation}
              variant="rect"
              width="24.5%"
              height={145}
            />
            <Skeleton
              className={classes.variation}
              variant="rect"
              width="24.5%"
              height={145}
            />
            <Skeleton
              className={classes.variation}
              variant="rect"
              width="24.5%"
              height={145}
            />
          </Grid>
          <Grid item xs={12} md={7}>
            <Skeleton />
            <Skeleton width="60%" height={70} />
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default ProductDetailSkeleton;
