import { Container, Grid, makeStyles } from "@material-ui/core";
import React, { useState, useEffect, useContext } from "react";
import { useLocation } from "react-router";
import { Ajax } from "../../helpers/Ajax";
import { API_URL } from "../../Config";
import Product from "../common/Product";
import ProductSkeleton from "../UI/skeletons/ProductSkeleton";
import { GlobalContext } from "../../context/GlobalState";

const useStyles = makeStyles((theme) => ({
  section: {
    paddingTop: theme.spacing(15),
    paddingBottom: theme.spacing(15),
  },
}));

const ProductsHome = () => {
  const { pathname } = useLocation();
  const [products, setProducts] = useState([]);
  const { addError } = useContext(GlobalContext);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const parameters = {
          store: "US",
          offset: 0,
          categoryId: 4209,
          limit: 48,
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

        setProducts(data);
      } catch ({ message }) {
        console.error(message);
        addError({ id: pathname, message });
      }
    };
    loadProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const classes = useStyles();

  return (
    <section className={classes.section}>
      <Container maxWidth="xl">
        <Grid container spacing={5}>
          {!Object.keys(products).length &&
            [...Array(4)].map((_, index) => <ProductSkeleton key={index} />)}
          {products &&
            products.map((product) => (
              <Product key={product.id} product={product} />
            ))}
        </Grid>
      </Container>
    </section>
  );
};

export default ProductsHome;
