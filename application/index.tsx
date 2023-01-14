import ReactDOM from "react-dom";
//import { customTemplateCertificate } from "../src/templates/samples";
import React from "react";
import { App } from "./app";
import {v2} from "@govtechsg/open-attestation";

ReactDOM.render(
  // <App
  //   documents={[
  //     { name: "Default document", document: customTemplateCertificate },
  //     {
  //       name: "Red document",
  //       document: {
  //         ...customTemplateCertificate,
  //         foo: "bar",
  //         $template: {
  //           ...customTemplateCertificate.$template,
  //           name: "red"
  //         }
  //       }
  //     }
  //   ]}
  // />,
  <App
  documents={[
    {name: "Claim", document: {
      name: "OpenAttestation Tutorial Certificate of Completion",
      // issuers: [
      //   {
      //     name: "My name",
      //     documentStore: "0xBBb55Bd1D709955241CAaCb327A765e2b6D69c8b",
      //     identityProof: {
      //       location: "few-green-cat.sandbox.openattestation.com",
      //       type: v2.IdentityProofType.DNSTxt,
      //     },
      //   },
      // ],
      recipient: {
        name: "John Doe",
      },
      $template: {
        name: "Claim",
        type: v2.TemplateType.EmbeddedRenderer,
        url: "localhost:3000",
      }

    }}
  ]}
  />,
  document.getElementById("root")
);
