import FAQ from "../../components/FAQ"
import FindABranch from "../../components/FindABranch"
import Cards from "../../quicklinks/Cards"
import Overview from "../businessbanking/Overview"
import BusinessReport from "../businessbanking/BusinessReport"
import BusinessLoans from "./BusinessLoans"
import BulkTransfers from "./BulkTransfers"
import PointOfSales from "./PointOfSales"
import UserManagement from "./UserManagement"

const BusinessBanking = () => {
  return (
    <div className="bg-white min-h-screen">
      <Overview />
      <div id="business-report" className="scroll-mt-24">
        <BusinessReport />
      </div>
      <BulkTransfers/>
      <PointOfSales/>
      <BusinessLoans/>
      <UserManagement/>
      <Cards />
      <FindABranch />
      <FAQ />
    </div>
  )
}

export default BusinessBanking
