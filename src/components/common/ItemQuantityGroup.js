import React, { useState } from "react";
import { ButtonGroup, Button, TextField, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  inputNumber: {
    "& .MuiOutlinedInput-root": {
      borderRadius: "0px",
      "& input": {
        width: "18px",
        textAlign: "center",
        "-moz-appearance": "textfield",
        "&::-webkit-outer-spin-button, &::-webkit-inner-spin-button": {
          "-webkit-appearance": "none",
        },
      },
    },
  },
}));

const ItemQuantityGroup = ({ onChangeQty, quantity = 1 }) => {
  const classes = useStyles();
  let [qty, setQty] = useState(quantity);

  const incrementClickHandler = () => {
    setQty(++qty);
    onChangeQty(qty);
  };
  const decrementClickHandler = () => {
    if (qty > 1) {
      setQty(--qty);
      onChangeQty(qty);
    }
  };
  const numberChangeHandler = (e) => {
    const value = e.target.value;
    value > 1 ? setQty(value) : setQty(1);
    onChangeQty(qty);
  };
  return (
    <ButtonGroup size="small" aria-label="small outlined button group">
      <Button onClick={decrementClickHandler}>-</Button>
      <TextField
        type="number"
        color="primary"
        onChange={numberChangeHandler}
        value={qty}
        className={classes.inputNumber}
      />
      <Button onClick={incrementClickHandler}>+</Button>
    </ButtonGroup>
  );
};

export default ItemQuantityGroup;
