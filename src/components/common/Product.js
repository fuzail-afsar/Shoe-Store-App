import { Box, Grid, Typography, makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";
import React from "react";

const useStyles = makeStyles((theme) => ({
  imgLink: {
    display: "block",
    "& img": {
      width: "100%",
      maxHeight: "400px",
      objectFit: "cover",
      objectPosition: "center",
    },
  },
  titleLink: {
    color: theme.palette.text.primary,
    textTransform: "uppercase",
    textDecoration: "none",
    fontWeight: "bold",
  },
  priceTypo: {
    fontWeight: "bold",
  },
}));

const Product = ({
  product: { id = "", title = "", imageUrl = "", price = "" },
}) => {
  const classes = useStyles();
  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Box mb={3}>
        <Link className={classes.imgLink} to={`/products/${id}`}>
          <img src={imageUrl} title={title} alt={title} />
        </Link>
      </Box>
      <Typography variant="h6" component="h4" gutterBottom>
        <Link className={classes.titleLink} to={`/products/${id}`}>
          {title}
        </Link>
      </Typography>
      <Typography className={classes.priceTypo} color="primary" variant="body2">
        ${price}
      </Typography>
    </Grid>
  );
};

export default Product;
