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
      <div id="bulk-transfers" className="scroll-mt-24">
        <BulkTransfers/>
      </div>
      <div id="pos-payment" className="scroll-mt-24">
        <PointOfSales/>
      </div>
      <div id="business-loans" className="scroll-mt-24">
        <BusinessLoans/>
      </div>
      <div id="user-management" className="scroll-mt-24">
        <UserManagement/>
      </div>
     <div id="cards" className="scroll-mt-24">
       <Cards />
     </div>
      <FindABranch />
      <FAQ />
    </div>
  )
}

export default BusinessBanking
