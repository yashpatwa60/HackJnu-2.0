import React from "react";
import Detail from "../../components/general/detail";
import Header from "../../components/general/header";
import ListDetail from "../../components/general/listDetails";
import Nav from "../../components/general/Navbar";
import Bottom from "../../components/general/bottom";

const Index = () => {
  return (
    <div>
      <Nav />
      <Header />
      <Detail />
      <ListDetail />
      <Bottom />
    </div>
  );
};

export default Index;
