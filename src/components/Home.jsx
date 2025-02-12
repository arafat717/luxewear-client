import { Helmet } from "react-helmet";
import ImageBanner from "./ImageBanner";
import OurProduct from "./OurProduct";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>LuxeWear || Home</title>
      </Helmet>
      <ImageBanner></ImageBanner>
      <OurProduct></OurProduct>
    </>
  );
};

export default Home;
