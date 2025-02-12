import { Helmet } from "react-helmet";
import ImageBanner from "./ImageBanner";
import OurProduct from "./OurProduct";
import ModelsBanner from "./ModelsBanner";
import LimitedTime from "./LimitedTime";
import BlogSection from "./BlogSection";
import InstragramShop from "./InstragramShop";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>LuxeWear || Home</title>
      </Helmet>
      <ImageBanner></ImageBanner>
      <OurProduct></OurProduct>
      <ModelsBanner></ModelsBanner>
      <LimitedTime></LimitedTime>
      <BlogSection></BlogSection>
      <InstragramShop></InstragramShop>
    </>
  );
};

export default Home;
