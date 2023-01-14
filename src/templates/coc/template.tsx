import React, { FunctionComponent } from "react";
import { TemplateProps } from "@govtechsg/decentralized-renderer-react-components";
import { ClaimTemplateCertificate } from "../samples/customTemplateSample";


export const ClaimTemplate: FunctionComponent<
  TemplateProps<ClaimTemplateCertificate> & { className?: string }
> = ({ document, className = "" }) => {
    return(
        <html>
            {document.recipient.name}
            <h1>Hi this is the claim template</h1>
        </html>
    )
};