import FAQ from "../../components/FAQ"
import FindABranch from "../../components/FindABranch"
import Cards from "../../quicklinks/Cards"
import Overview from "../businessbanking/Overview"

const BusinessBanking = () => {
  return (
    <div>
      <Overview/>
      <Cards/>
      <FindABranch/>
      <FAQ/>
    </div>
  )
}

export default BusinessBanking
