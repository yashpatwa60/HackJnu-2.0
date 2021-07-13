import React from "react";
import Navbar from '../../components/general/navbar';
import Header from '../../components/general/header';
import Info from '../../components/general/information';
import Prize from '../../components/general/prize';
import Timeline from '../../components/general/timeline';
import Problem from '../../components/general/problems';
import Jury from '../../components/general/jury';
import Faqs from '../../components/general/faqs';
import Footer from '../../components/general/footer';

const Index = () => {
  return (
    <>
      <Navbar />
      <Header />
      <Info />
      <Prize />
      <Timeline />
      <Problem />
      <Jury />
      <Faqs />
      <Footer />
    </>
  );
};

export default Index;
