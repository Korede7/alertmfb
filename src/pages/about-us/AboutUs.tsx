import CoperateResponsibility from "./CoperateResponsibility"
import OurPurpose from "./OurPurpose"
import OurStory from "./OurStory"
import Overview from "./Overview"
import Awards from "./Awards"

const AboutUs = () => {
  return (
    <div className=" min-h-screen">
        <Overview/>
        <OurStory/>
        <OurPurpose/>
        <CoperateResponsibility/>
        <Awards/>
      
    </div>
  )
}

export default AboutUs
