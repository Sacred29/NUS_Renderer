import { v2 } from "@govtechsg/open-attestation";

export interface ClaimTemplateCertificate extends v2.OpenAttestationDocument {
    recipient: {
        name: string;
    }
}


export const claimTemplateCertificate: ClaimTemplateCertificate = {
    issuers: [
      {
        name: "John Tan",
        documentStore: "0xEA5B3E6C804dD9b49cC2ce8c63704Aa0C9186B69",
        identityProof: {
          location: "few-green-cat.sandbox.openattestation.com",
          type: v2.IdentityProofType.DNSTxt
        },
        
      }
    ],
    recipient: {
      name: "Ian Tan",
      },
    $template: {
      name: "custom",
      type: v2.TemplateType.EmbeddedRenderer,
      url: "http://localhost:3000"
    }
    
    
    };