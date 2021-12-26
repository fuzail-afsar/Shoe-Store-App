import React from "react";
import { Box, Grid } from "@material-ui/core";
import Skeleton from "@material-ui/lab/Skeleton";

const ProductSkeleton = () => {
  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Skeleton variant="rect" width="100%" height={400} />
      <Box pt={0.5}>
        <Skeleton />
        <Skeleton width="60%" />
      </Box>
    </Grid>
  );
};

export default ProductSkeleton;
