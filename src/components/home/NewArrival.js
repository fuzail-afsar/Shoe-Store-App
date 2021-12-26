import React, { useEffect, useState } from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  makeStyles,
} from "@material-ui/core";
import { Ajax } from "../../helpers/Ajax";
import { API_URL } from "../../Config";
import Product from "../common/Product";
import ProductSkeleton from "../UI/skeletons/ProductSkeleton";
import Error from "../common/Error";

const useStyles = makeStyles((theme) => ({
  section: {
    paddingTop: theme.spacing(15),
    paddingBottom: theme.spacing(15),
  },
  h2: {
    fontWeight: "bold",
  },
}));

const NewArrival = () => {
  const [newArrivalsProducts, setNewArrivalsProducts] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadNewArrival = async () => {
      try {
        const parameters = {
          store: "US",
          offset: 2,
          categoryId: 4209,
          limit: 8,
          sort: "freshness",
        };

        let { products: data } = await Ajax(
          `${API_URL}products/v2/list`,
          parameters
        );
        data = data.map(
          ({
            id = "",
            name: title = "",
            imageUrl = "",
            price: {
              current: { value: price = "" },
            },
          }) => ({
            id,
            title,
            imageUrl: `https://${imageUrl}`,
            price,
          })
        );

        setNewArrivalsProducts(data);
      } catch ({ message }) {
        console.error(message);
        setError(message);
      }
    };
    loadNewArrival();
  }, []);

  const classes = useStyles();

  if (error) return <Error message={error} />;

  return (
    <section className={classes.section}>
      <Container maxWidth="xl">
        <Grid container spacing={5}>
          <Grid item xs={12}>
            <Box borderLeft={5} borderColor="primary.main" pl={2} mb={2}>
              <Typography variant="h4" component="h2" className={classes.h2}>
                NEW ARRIVALS
              </Typography>
              <Typography variant="subtitle2">Just in now</Typography>
            </Box>
          </Grid>
          {!Object.keys(newArrivalsProducts).length &&
            [...Array(4)].map((_, index) => <ProductSkeleton key={index} />)}
          {newArrivalsProducts &&
            newArrivalsProducts.map((product) => (
              <Product key={product.id} product={product} />
            ))}
        </Grid>
      </Container>
    </section>
  );
};

export default NewArrival;
