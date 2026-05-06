import Agencies from "../components/Agencies";
import ChasingConsumers from "../components/ChasingConsumers";
import FeaturedWork from "../components/FeaturedWork";
import Footer from "../components/Footer";
import GlobalTeam from "../components/GlobalTeam";
import Hero from "../components/Hero";
import LegacySection from "../components/LegacySection";
import Navbar from "../components/Navbar";
import ReadyToRise from "../components/ReadyToRise";
import Services from "../components/Services";
import TopBar from "../components/TopBar";
import WhatsNew from "../components/WhatsNew";

function MainLayout() {
  return (
    <>
      <TopBar />
      <Navbar />
      <Hero />
      <Agencies />
      <GlobalTeam></GlobalTeam>
      <FeaturedWork></FeaturedWork>
      <Services></Services>
      <ChasingConsumers></ChasingConsumers>
      <LegacySection></LegacySection>
      <WhatsNew></WhatsNew>
      <ReadyToRise></ReadyToRise>
      <Footer> </Footer>
    </>
  );
}

export default MainLayout;
