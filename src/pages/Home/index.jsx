import React from "react";
import Detail from "../../components/general/detail";
import Header from "../../components/general/header";
import ListDetail from "../../components/general/timeline";
import Nav from "../../components/general/Navbar";
import Bottom from "../../components/general/bottom";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();
AOS.refresh();

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
