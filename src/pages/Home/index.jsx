import React from "react";
import Header from "../../components/general/header";
import Info from "../../components/general/information";
import Prize from "../../components/general/prize";
import Timeline from "../../components/general/timeline";
import Themes from "../../components/general/themes";
import Sponsors from "../../components/general/sponsors";
import Jury from "../../components/general/jury";
import Faqs from "../../components/general/faqs";
import Footer from "../../components/general/footer";

const Index = () => {
  return (
    <>
      <Header />
      <Info />
      <Prize />
      <Timeline />
      <Themes />
      <Sponsors />
      <Jury />
      <Faqs />
      <Footer />
    </>
  );
};

export default Index;
