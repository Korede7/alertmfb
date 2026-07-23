import FAQ from "../../components/FAQ"
import FindABranch from "../../components/FindABranch"
import CurrentAccount from "./CurrentAccount"
import FixedDeposits from "./FixedDeposits"
import InternetMobileBanking from "./InternetMobileBanking"
import Overview from "./Overview"
import SavingsAccount from "./SavingsAccount"

const PersonalBanking = () => {
    return (
        <div className="bg-white min-h-screen">
            <Overview />
            <div id="current-account" className="scroll-mt-24">
                <CurrentAccount />
            </div>
             <div id="savings-account" className="scroll-mt-24">
                <SavingsAccount />
            </div>
            <div id="internet-mobile-banking" className="scroll_mt-24">
                <InternetMobileBanking/>
            </div>
            <div id="fixed-deposits" className="scroll_mt-24">
                <FixedDeposits/>
            </div>
            <FindABranch/>
            <FAQ/>

        </div>
    )
}

export default PersonalBanking
