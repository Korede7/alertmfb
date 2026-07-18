import FAQ from "../../components/FAQ"
import FindABranch from "../../components/FindABranch"
import Cards from "../../quicklinks/Cards"
import Overview from "../businessbanking/Overview"
import BusinessReport from "../businessbanking/BusinessReport"

const BusinessBanking = () => {
  return (
    <div className="bg-white min-h-screen">
      <Overview />
      <div id="business-report" className="scroll-mt-24">
        <BusinessReport />
      </div>
      <Cards />
      <FindABranch />
      <FAQ />
    </div>
  )
}

export default BusinessBanking
