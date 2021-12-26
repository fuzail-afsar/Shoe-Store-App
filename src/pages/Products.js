import React, { useContext } from "react";
import { Outlet, useLocation } from "react-router";
import InnerPageBanner from "../components/common/InnerPageBanner";
import Error from "../components/common/Error";
import { GlobalContext } from "../context/GlobalState";

const Products = () => {
  const {
    state: { error },
  } = useContext(GlobalContext);
  const { pathname } = useLocation();

  const isError = error.find((error) => error.id === pathname);
  if (isError) return <Error message={isError.message} />;

  return (
    <>
      <InnerPageBanner title="Shop" />
      <Outlet />
    </>
  );
};

export default Products;
