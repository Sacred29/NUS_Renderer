import React, { FunctionComponent } from "react";
import { TemplateProps } from "@govtechsg/decentralized-renderer-react-components";
import { css } from "@emotion/core";
import { CocTemplateCertificate } from "../samples";

const style = css`
  pre {
    background-color: lightgray;
    overflow-wrap: anywhere;
    white-space: break-spaces;
  }
`;

export const CustomTemplate: FunctionComponent<TemplateProps<CocTemplateCertificate> & { className?: string }> = ({
  document,
  className = ""
}) => {
  return (
    <div css={style} className={className} id="custom-template">
      <div>
        <h1>{ "Default title"}</h1>
        <p>kasnkdnajksndkjnkjda</p> 
        <pre>{JSON.stringify(document, null, 2)}</pre>
      </div>
    </div>
  );
};
