import { v2 } from "@govtechsg/open-attestation";

export interface ClaimTemplateCertificate extends v2.OpenAttestationDocument {
    recipient: {
        name: string;
        passport: string;
        relationship: string;
        state: string;
        tele: string;
        sex: string;
        nation: string;
        address: string;
        DOB: string;
        RIC: string;
    },
    teller: string;
      loan:{
        id: string;
        account: string;
        amount: number;
        currency: string;
        loanDate: string;
        dueDate: string;
      }
}


export const claimTemplateCertificate: ClaimTemplateCertificate = {
  

    issuers: [
      {
        name: "Panda Bank",
        documentStore: "0xEA5B3E6C804dD9b49cC2ce8c63704Aa0C9186B69",
        
        identityProof: {
          location: "few-green-cat.sandbox.openattestation.com",
          type: v2.IdentityProofType.DNSTxt
        },
        
      }
    ],
    recipient: {
      name: "Ian Tan",
      passport: "C454H2999J",
      relationship: "Married",
      state: "Phnom Penh",
      tele: "+855 89234 223442",
      sex: "male",
      nation: "Cambodian",
      address: "#50AEo, St.245 Khan Chamkar Mon",
      DOB: "22 September 1990",
      RIC: "Yes"
      },
      teller:"Thran Nguyenn",
      loan:{
        id: "2452",
        account: "4321837432-001",
        amount: 80000000,
        currency: "Cambodian Riel(KHR)",
        loanDate: "15 January 2023",
        dueDate: "15 January 2023"
      },
    $template: {
      name: "main",
      type: v2.TemplateType.EmbeddedRenderer,
      url: "http://localhost:3000"
    }, 
    
    
    
    };