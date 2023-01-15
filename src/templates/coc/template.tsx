import React, { FunctionComponent } from "react";
import { TemplateProps } from "@govtechsg/decentralized-renderer-react-components";
import { ClaimTemplateCertificate } from "../samples/customTemplateSample";
import { css } from "@emotion/core";

const claimCss = css`.invoice-box {
    max-width: 800px;
    margin: auto;
    padding: 30px;
    border: 1px solid #eee;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
    font-size: 16px;
    line-height: 24px;
    font-family: 'Helvetica Neue', 'Helvetica', Helvetica, Arial, sans-serif;
    color: #555;
}

.invoice-box table {
    width: 100%;
    line-height: inherit;
    text-align: left;
}

.invoice-box table td {
    padding: 5px;
    vertical-align: top;
}

.invoice-box table tr td:nth-child(2) {
    text-align: left;
}

.invoice-box table tr.top table td {
    padding-bottom: 5px;
                    text-align: right;
}

.invoice-box table tr.top table td.title {
    font-size: 45px;
    line-height: 45px;
    color: #333;
}

.invoice-box table tr.information table td {
    padding-bottom: 5px;
}
            

.invoice-box table tr.heading td {
    background: #eee;
    border-bottom: 1px solid #ddd;
    font-weight: bold;
}

.invoice-box table tr.details td {
    padding-bottom: 5px;
}

.invoice-box table tr.item td {
}

@media only screen and (max-width: 600px) {
    .invoice-box table tr.top table td {
        width: 100%;
        display: block;
        text-align: center;
    }

    .invoice-box table tr.information table td {
        width: 100%;
        display: block;
        text-align: center;
    }
    .Title {
        text-align:center;
    }
}
`
export const ClaimTemplate: FunctionComponent<
    TemplateProps<ClaimTemplateCertificate> & { className?: string }
> = ({ document, className = "" }) => {
    return (
        <html css={claimCss}>


            <body>
                <h1>Panda Bank</h1>
                <p className="Title"><b> Credit Protection Proof Of Claim</b></p>
                <div className="invoice-box">
                    <table cellPadding="0" cellSpacing="0">
                        <tr className="top">
                            <td colSpan={2}>
                                <table>
                                    <tr>

                                        <td>
                                            Loan #: 2452 <br />
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                        <tr className="heading">
                            <td>Part 1: Claimant and Issuer</td>

                            <td> </td>
                        </tr>
                        <tr className="information">
                            <td colSpan={2}>
                                <table>
                                    <tr>
                                        <td>
                                            <u><b>Claimant</b></u> <br />
                                            Claimant Name: {document.recipient.name}<br />
                                            Claimant Passport Number:{document.recipient.passport} <br />
                                            Sex: {document.recipient.sex}<br />
                                            DOB: {document.recipient.DOB}<br />
                                            Claimant State: {document.recipient.state}<br />
                                        </td>

                                        <td>
                                            <br />
                                            Relationship Status: {document.recipient.relationship} <br />
                                            Telephone No.: {document.recipient.tele} <br />
                                            Claimant Nationality: {document.recipient.nation} <br />
                                            Residing in Cambodia ?: {document.recipient.RIC} <br />
                                            Claimant Address: {document.recipient.address}<br />
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>
                                            <u><b>Issuer</b></u> <br />
                                            Institution: {document.issuers[0].name}<br />
                                        </td>

                                        <td>
                                            <br />
                                            Financial Teller Name: {document.teller}<br />
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>

                        <tr className="heading">
                            <td>Part 2: Loan Details</td>

                            <td> </td>
                        </tr>

                        <tr className="details">
                            <td colSpan={2}>
                                <table>
                                    <tr>
                                        <td>Loan Account: {document.loan.account} <br />
                                            Loan Date: {document.loan.loanDate}<br /></td>

                                        <td>
                                            Loan Amount: <strong>{document.loan.amount} </strong> Riel <br />
                                            Loan Currency: {document.loan.currency}<br />
                                        </td>
                                    </tr>
                                </table>
                                </td>
                                </tr>

                                <tr className="heading">
                                    <td>Part 3: Payment Agreement </td>
                                </tr>

                                <tr className="item">
                                    <td>The total amount of the Borrowed Money, including
                                        principal and interest, shall be due and payable on
                                        <strong>{document.loan.dueDate}</strong></td>
                                    <td> </td>
                                </tr>
                            
                            </table>
                            
                        </div>
                    </body>
                </html>
                )
};