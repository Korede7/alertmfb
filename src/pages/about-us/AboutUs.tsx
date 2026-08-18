import CoperateResponsibility from "./CoperateResponsibility"
import OurPurpose from "./OurPurpose"
import OurStory from "./OurStory"
import Overview from "./Overview"
import Awards from "./Awards"
import Careers from "./Careers"
import FindABranch from "../../components/FindABranch"
import FAQ from "../../components/FAQ"

const AboutUs = () => {
  return (
    <div className=" min-h-screen">
        <Overview/>
        <OurStory/>
        <OurPurpose/>
        <CoperateResponsibility/>
        <Awards/>
        <Careers/>
        <FindABranch/>
        <FAQ/>
      
    </div>
  )
}

export default AboutUs
