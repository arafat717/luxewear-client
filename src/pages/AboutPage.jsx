import BrandSlider from "../components/BrandSlider";
import CustomerReviews from "../components/CustomerReviews";
import Introduction from "../components/Introduction";
import OurShipping from "../components/OurShipping";
import OurTeams from "../components/OurTeams";
import PageCover from "../components/shared/PageCover";

const AboutPage = () => {
  return (
    <div>
      <PageCover title={"About-us"}></PageCover>
      <Introduction></Introduction>
      <OurShipping></OurShipping>
      <OurTeams></OurTeams>
      <BrandSlider></BrandSlider>
      <CustomerReviews></CustomerReviews>
    </div>
  );
};

export default AboutPage;
