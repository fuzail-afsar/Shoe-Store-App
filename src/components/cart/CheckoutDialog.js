import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  makeStyles,
} from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  dialog: {
    textAlign: "center",
    "& h2": {
      color: theme.palette.primary.main,
      fontWeight: 600,
      fontSize: "55px",
      fontFamily: "cursive",
    },
    "& #alert-dialog-description": {
      marginBottom: 0,
    },
    "& .MuiDialogActions-root": {
      justifyContent: "center",
      paddingBottom: theme.spacing(4),
    },
  },
}));

const CheckoutDialog = ({ dialog = false, amount, onClose }) => {
  const classes = useStyles();
  const handleClose = () => onClose();

  return (
    <Dialog
      open={dialog}
      keepMounted
      onClose={handleClose}
      maxWidth="sm"
      fullWidth="sm"
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      className={classes.dialog}
    >
      <DialogTitle id="alert-dialog-title">Order Process</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Your order of <b>${amount}</b> is in process.
        </DialogContentText>
        <DialogContentText>
          Thankyou for your shopping with us.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} variant="contained" color="primary">
          Ok
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CheckoutDialog;
