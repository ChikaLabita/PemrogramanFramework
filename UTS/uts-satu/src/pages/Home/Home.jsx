import React from "react";
import Productlist from "../../components/ProductList";
const Home = () => {
  return (
    <>
      <div className="my-5">
        <h2>Selamat Datang di Toko Barakah | | Istiqomah</h2>
        <hr />
        <text>Belanja seperlunya ya, xixi</text>
        <Productlist/>
        <hr />
      </div>
    </>
  );
};

export default Home;
