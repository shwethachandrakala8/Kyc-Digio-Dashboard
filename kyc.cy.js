const { option } = require("commander");

describe('My Web App Tests', () => {
    it('Should perform some actions', () => {
      cy.visit('https://kyc-agreement.bhivealts.com/');
      cy.get('input[type="email"]').type('shewtha@bhiveworkspace.com');
      cy.get('input[type="password"]').type('Bhive@123');
      cy.get('input[type="submit"]').click();
      cy.get('input[name="firstName"]').type('Shwetha');
      cy.get('input[name="lastName"]').type('L');
      cy.get('input[name="email"]').type('shwethal@bhiveworkspace.com');
      cy.get('input[name="phone"]').type('+9110644756');
      cy.get('input[name="investmentDate"]').type('2023-12-11');
      cy.get('input[name="effectiveDate"]').type('2023-12-31');
      cy.get('input[name="kycFlowType"][value="AADHAAR"]').check();
      cy.get('select[name="opportunity"]').select('BHIVE JBR - Asset Leasing Series 4');
      cy.get('select[name="tenure"]').select('3 Years');
      cy.get('input[name="amount"]').type('5000000');
      cy.get('input[name="transactionId').type('ghghfghfg89909');
      cy.get('select[name="spvName').select('ZenGarden LLP');
      cy.get('input[type="checkbox').uncheck();
      cy.get('button[type="submit').click();
      cy.get(cy.get('#root > div.dark\\:bg-boxdark-2.dark\\:text-bodydark > div > div > main > div > div.min-h-screen.flex.items-center.justify-center.ml-8 > div.fixed.lg\\:w-180.top-1\\/2.left-1\\/2.transform.-translate-x-1\\/2.-translate-y-1\\/2.bg-white.p-8.rounded.shadow-md.z-20'));
      cy.get('#root > div.dark\\:bg-boxdark-2.dark\\:text-bodydark > div > div > main > div > div.min-h-screen.flex.items-center.justify-center.ml-8 > div.fixed.lg\\:w-180.top-1\\/2.left-1\\/2.transform.-translate-x-1\\/2.-translate-y-1\\/2.bg-white.p-8.rounded.shadow-md.z-20 > div.flex.justify-between.mt-4 > button.bg-primary.text-white.px-4.py-2.rounded').click();
      cy.get('select[name="tenure"]').select('2 Years');
      cy.get('button[type="submit').click();
      cy.get('#root > div.dark\\:bg-boxdark-2.dark\\:text-bodydark > div > div > main > div > div.min-h-screen.flex.items-center.justify-center.ml-8 > div.fixed.lg\\:w-180.top-1\\/2.left-1\\/2.transform.-translate-x-1\\/2.-translate-y-1\\/2.bg-white.p-8.rounded.shadow-md.z-20 > div.flex.justify-between.mt-4 > button.text-white.bg-success.px-4.py-2.rounded').click();
      cy.get('#root > div.dark\\:bg-boxdark-2.dark\\:text-bodydark > div > div > main > div > div.mb-6.flex.flex-col.gap-3.sm\\:flex-row.sm\\:items-center.sm\\:justify-between > div > button > svg');
      cy.get('#root > div.dark\\:bg-boxdark-2.dark\\:text-bodydark > div > div > header > div > div.flex.items-center.gap-2.sm\\:gap-4.lg\\:hidden > button').click();
      cy.get('#root > div.dark\\:bg-boxdark-2.dark\\:text-bodydark > div > aside > div.no-scrollbar.flex.flex-col.overflow-y-auto.duration-300.ease-linear > nav > div:nth-child(1) > ul > li:nth-child(2) > div > ul > li:nth-child(1) > a').click();
      cy.get('#root > div.dark\\:bg-boxdark-2.dark\\:text-bodydark > div > aside > div.no-scrollbar.flex.flex-col.overflow-y-auto.duration-300.ease-linear > nav > div:nth-child(1) > ul > li:nth-child(3) > a').click();
      cy.get('#root > div.dark\\:bg-boxdark-2.dark\\:text-bodydark > div > aside > div.flex.items-center.justify-between.gap-2.px-6.py-5\\.5.lg\\:py-6\\.5 > button > svg > path').click();
      cy.get('#root > div.dark\\:bg-boxdark-2.dark\\:text-bodydark > div > div > header > div > div.flex.items-center.gap-3.\\32 xsm\\:gap-7 > div > a > svg').click();
      cy.get('#root > div.dark\\:bg-boxdark-2.dark\\:text-bodydark > div > div > header > div > div.flex.items-center.gap-3.\\32 xsm\\:gap-7 > div > div > button').click();


    
})
})
