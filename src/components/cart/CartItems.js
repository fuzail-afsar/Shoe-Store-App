import {
  Container,
  Grid,
  makeStyles,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Typography,
  TableFooter,
  Button,
} from "@material-ui/core";
import { DeleteForever } from "@material-ui/icons";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router";
import { GlobalContext } from "../../context/GlobalState";
import ItemQuantityGroup from "../common/ItemQuantityGroup";
import CheckoutDialog from "./CheckoutDialog";

const useStyles = makeStyles((theme) => ({
  section: {
    paddingTop: theme.spacing(15),
    paddingBottom: theme.spacing(15),
  },
  tableHead: {
    backgroundColor: theme.palette.primary.main,
    "& .MuiTableCell-head": {
      color: theme.palette.common.white,
      fontSize: "1rem",
      fontWeight: 600,
    },
  },
  tableFoot: {
    "& .MuiTableCell-footer": {
      color: theme.palette.primary.main,
      fontSize: "1rem",
      fontWeight: 600,
    },
  },
  image: {
    width: 100,
    height: 100,
    objectFit: "cover",
  },
}));

const CartItems = () => {
  const classes = useStyles();
  const [isDialog, setIsDialog] = useState(false);
  const navigate = useNavigate();
  const {
    state: { cart },
    deleteItemFromCart,
    updateItemToCart,
    clearItemFromCart,
  } = useContext(GlobalContext);

  const total = cart.reduce((acc, { price, qty }) => acc + price * qty, 0);
  const checkoutClickHandler = () => setIsDialog(true);
  const dialogCloseHandler = () => {
    setIsDialog(false);
    clearItemFromCart();
    navigate("/");
  };

  return (
    <section className={classes.section}>
      <Container>
        <Grid container>
          <Grid item xs={12}>
            {!cart.length && <Typography>No item in cart</Typography>}
            {cart.length > 0 && (
              <>
                <TableContainer component={Paper}>
                  <Table aria-label="cart items table">
                    <TableHead className={classes.tableHead}>
                      <TableRow>
                        <TableCell width={110}></TableCell>
                        <TableCell align="left">Product</TableCell>
                        <TableCell align="center">Quantity</TableCell>
                        <TableCell align="center">Price</TableCell>
                        <TableCell align="center">Subtotal</TableCell>
                        <TableCell align="right">Remove</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {cart.map(
                        ({ id, qty, name, imagesUrl: [{ image }], price }) => (
                          <TableRow key={id}>
                            <TableCell scope="row">
                              <img
                                src={image}
                                className={classes.image}
                                alt={name}
                              />
                            </TableCell>
                            <TableCell align="left">{name}</TableCell>
                            <TableCell align="center">
                              <ItemQuantityGroup
                                quantity={qty}
                                onChangeQty={(qty) =>
                                  updateItemToCart(+id, qty)
                                }
                              />
                            </TableCell>
                            <TableCell align="center">
                              ${price.toFixed(2)}
                            </TableCell>
                            <TableCell align="center">
                              ${(qty * price).toFixed(2)}
                            </TableCell>
                            <TableCell align="right">
                              <IconButton
                                color="secondary"
                                onClick={() => {
                                  deleteItemFromCart(+id);
                                }}
                              >
                                <DeleteForever />
                              </IconButton>
                            </TableCell>
                          </TableRow>
                        )
                      )}
                    </TableBody>
                    <TableFooter className={classes.tableFoot}>
                      <TableRow>
                        <TableCell colSpan={3}></TableCell>
                        <TableCell align="center">Total</TableCell>
                        <TableCell align="center">
                          ${total.toFixed(2)}
                        </TableCell>
                        <TableCell align="right">
                          <Button
                            variant="contained"
                            color="primary"
                            onClick={checkoutClickHandler}
                          >
                            Check Out
                          </Button>
                        </TableCell>
                      </TableRow>
                    </TableFooter>
                  </Table>
                </TableContainer>
                <CheckoutDialog
                  dialog={isDialog}
                  onClose={dialogCloseHandler}
                  amount={total.toFixed(2)}
                />
              </>
            )}
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default CartItems;
