import {
  Container,
  Grid,
  Typography,
  Button,
  Divider,
  makeStyles,
} from "@material-ui/core";
import React, { useEffect, useState, useContext } from "react";
import { Carousel } from "react-carousel-minimal";
import { useLocation, useParams } from "react-router";
import { Ajax } from "../../helpers/Ajax";
import { API_URL } from "../../Config";
import { GlobalContext } from "../../context/GlobalState";
import ProductDetailSkeleton from "../UI/skeletons/ProductDetailSkeleton";
import ItemQuantityGroup from "../common/ItemQuantityGroup";
import "./ProductDetail.css";

const useStyles = makeStyles((theme) => ({
  section: {
    paddingTop: theme.spacing(15),
    paddingBottom: theme.spacing(15),
  },
  divider: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  colView: {
    display: "flex",
    alignItems: "center",
    "& b": {
      width: "20%",
    },
  },
  button: {
    marginTop: theme.spacing(4),
  },
}));

const ProductDetail = () => {
  const { productId: id } = useParams();
  const [productDetail, setProductDetail] = useState({});
  const { pathname } = useLocation();
  const { state, addItemToCart, updateItemToCart, addError } =
    useContext(GlobalContext);
  const classes = useStyles();
  const isItemExist = state.cart.find((item) => item.id === +id);

  let [qty, setQty] = useState(isItemExist?.qty || 1);

  const qtyChangeHandler = (qty) => setQty(qty);
  const addToCartClickHandler = () => {
    if (isItemExist) return updateItemToCart(+id, qty);

    const { name, imagesUrl, price } = productDetail;
    return addItemToCart({ id: +id, qty, name, imagesUrl, price });
  };

  useEffect(() => {
    const loadDetail = async () => {
      try {
        const {
          name,
          description,
          price: {
            current: { value: price },
          },
          media: { images },
          brand: { name: brand },
          info,
        } = await Ajax(`${API_URL}products/v3/detail`, { id });

        let imagesUrl = images.map((image) => ({
          image: `https://${image.url}`,
        }));

        setProductDetail({
          name,
          description,
          price,
          info,
          brand,
          imagesUrl,
        });
      } catch ({ message }) {
        console.error(message);
        addError({ id: pathname, message });
      }
    };
    loadDetail();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!Object.keys(productDetail).length) return <ProductDetailSkeleton />;

  return (
    <section className={classes.section}>
      <Container>
        <Grid container spacing={6}>
          <Grid item xs={12} md={5}>
            <Carousel
              data={productDetail.imagesUrl}
              width="850px"
              height="500px"
              radius="0px"
              slideNumber={false}
              automatic={false}
              dots={false}
              slideBackgroundColor="transparent"
              slideImageFit="cover"
              thumbnails={true}
              thumbnailWidth="23.5%"
              style={{
                maxWidth: "850px",
                // maxHeight: "500px",
                // margin: "40px auto",
              }}
            />
          </Grid>
          <Grid item xs={12} md={7}>
            <Typography variant="h4" component="h1" gutterBottom>
              {productDetail.name}
            </Typography>
            <Typography
              gutterBottom
              dangerouslySetInnerHTML={{
                __html: productDetail.description
                  .replaceAll("<a", "<span")
                  .replaceAll("</a>", "</span>"),
              }}
            />
            <Typography variant="body2" className={classes.colView}>
              <b>Price: </b> ${productDetail.price.toFixed(2)}
            </Typography>
            <Typography variant="body2" className={classes.colView}>
              <b>Brand: </b> {productDetail.brand}
            </Typography>
            <Divider className={classes.divider} />
            <Typography
              gutterBottom
              variant="body2"
              className={classes.colView}
            >
              <b>About Product: </b>
              <span
                dangerouslySetInnerHTML={{
                  __html: productDetail.info.aboutMe
                    .replaceAll("<div><br></div>", "")
                    .replaceAll("<div", "<span")
                    .replaceAll("</div>", "</span>"),
                }}
              ></span>
            </Typography>
            <Typography
              gutterBottom
              variant="body2"
              className={classes.colView}
            >
              <b>Product Care: </b>
              <span
                dangerouslySetInnerHTML={{
                  __html: productDetail.info.careInfo
                    .replaceAll("", "")
                    .replaceAll("<div", "<span")
                    .replaceAll("</div>", "</span>"),
                }}
              ></span>
            </Typography>
            <Typography
              gutterBottom
              variant="body2"
              className={classes.colView}
              component="div"
            >
              <b>Quantity: </b>
              <ItemQuantityGroup
                onChangeQty={qtyChangeHandler}
                quantity={qty}
              />
            </Typography>
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              onClick={addToCartClickHandler}
            >
              Add to cart
            </Button>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default ProductDetail;
