export const ROUTES = {
    HOME: "/",

    PERSONAL_BANKING: {
        PERSONAL_BANKING: "/personal-banking/personal-banking",
        KOLO: "/personal-banking/kolo",
        CURRENT_ACCOUNT: "/personal-banking/current-account",
        AJO_GROUP_SAVINGS: "/personal-banking/ajo-group-savings",
        SAVINGS_ACCOUNT: "/personal-banking/savings-account",
        CARDS: "/personal-banking/cards",
        FIXED_DEPOSIT: "/personal-banking/fixed-deposit",
        INTERNET_MOBILE_BANKING: "/personal-banking/internet-mobile-banking",
    },

    BUSINESS_BANKING: {
        OVERVIEW: "/business-banking/overview",
        SME_BANKING: "/business-banking/sme-banking",
        CORPORATE_ACCOUNT: "/business-banking/corporate-account",
        INTERNET_BANKING: "/business-banking/business-internet-banking",
        BUSINESS_LOANS: "/business-banking/business-loans",
        TRADE_FINANCE: "/business-banking/trade-finance",
        POS_PAYMENT_SOLUTIONS: "/business-banking/pos-payment-solutions",
    },

    LOANS: {
        PERSONAL_LOANS: "/loans/personal-loans",
        SALARY_ADVANCE: "/loans/salary-advance",
        SME_LOANS: "/loans/sme-loans",
        APPLY_NOW: "/loans/apply-now",
        ASSET_FINANCE: "/loans/asset-finance",
        BUSINESS_LOAN: "/loans/business-loan",
        LOAN_CALCULATOR: "/loans/loan-calculator",
    },

    ABOUT_US: {
        OUR_STORY: "/about-us/our-story",
        MANAGEMENT_TEAM: "/about-us/management-team",
        BOARD_OF_DIRECTORS: "/about-us/board-of-directors",
        NEWS_BLOG: "/about-us/news-blog",
        AWARDS_RECOGNITION: "/about-us/awards-recognition",
        CSR: "/about-us/csr",
        CAREERS: "/about-us/careers",
    },

    HELP: {
        FAQS: "/help/faqs",
        CONTACT_US: "/help/contact-us",
        BRANCH_LOCATOR: "/help/branch-locator",
        ATM_FINDER: "/help/atm-finder",
        REPORT_FRAUD: "/help/report-fraud",
        DOWNLOAD_CENTER: "/help/download-center",
    },
} as const;