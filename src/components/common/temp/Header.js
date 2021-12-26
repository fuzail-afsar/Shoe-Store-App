import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import { ShoppingCartOutlined } from "@material-ui/icons";
import { Badge, Container } from "@material-ui/core";
import { GlobalContext } from "../../../context/GlobalState";

const useStyles = makeStyles((theme) => ({
  toolbar: {
    justifyContent: "space-between",
    paddingLeft: 0,
    paddingRight: 0,
  },
  link: {
    color: theme.palette.common.white,
    textDecoration: "none",
  },
  logo: {
    fontFamily: "cursive",
  },
  menu: {
    "& a": {
      marginLeft: theme.spacing(3),
      verticalAlign: "middle",
    },
  },
}));

const Header = () => {
  const classes = useStyles();
  const {
    state: { cart },
  } = useContext(GlobalContext);
  return (
    <AppBar position="sticky">
      <Container maxWidth="xl">
        <Toolbar className={classes.toolbar}>
          <Typography variant="h4">
            <Link className={`${classes.link} ${classes.logo}`} to="/">
              Shoe Store
            </Link>
          </Typography>
          <Typography component="div" className={classes.menu}>
            <Link className={classes.link} to="/">
              Home
            </Link>
            <Link className={classes.link} to="/products">
              Products
            </Link>
            <Link className={classes.link} to="/cart">
              <Badge badgeContent={cart.length} color="secondary">
                <ShoppingCartOutlined fontSize="small" />
              </Badge>
            </Link>
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
