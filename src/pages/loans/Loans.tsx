import FAQ from "../../components/FAQ"
import FindABranch from "../../components/FindABranch"
import Cards from "../../quicklinks/Cards"
import LoanCalculator from "./LoanCalculator"
import LoanProducts from "./LoanProducts"
import PersonalLoans from "./PersonalLoans"

const Loans = () => {
  return (
    <div className="bg-white min-h-screen">
      <div id="personal-loans" className="scroll-mt-24 mt-10">
        <PersonalLoans />
      </div>
       <div id="loan-products" className="scroll-mt-24 mt-10">
        <LoanProducts/>
      </div>
       <div id="loan-calculator" className="scroll-mt-24 mt-10">
        <LoanCalculator/>
      </div>
      <Cards/>
      <FAQ/>
      <FindABranch/>
    </div>
  )
}

export default Loans
