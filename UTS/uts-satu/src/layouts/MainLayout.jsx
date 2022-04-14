import React from "react";
import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Navbarcomponent from "./NavbarComponent";

const Mainlayout = () => {
  return (
    <>
      <Navbarcomponent />
      <Container className="py-15" style={{ minHeight: "100vh" }}>
        <Outlet />
      </Container>
    </>
  );
};

export default Mainlayout;