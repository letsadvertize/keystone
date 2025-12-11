import LegalPageLayout from "@/components/LegalPageLayout";
import { LegalSection, LegalParagraph, LegalList } from "@/components/LegalContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Attorney & Legal Community Disclaimer | Keystone Public Relations",
  description:
    "Disclaimer for attorneys and the legal community regarding Keystone Public Relations services.",
};

export default function AttorneyDisclaimerPage() {
  return (
    <LegalPageLayout title="Attorney & Legal Community Disclaimer">
      <LegalParagraph>
        Keystone Public Relations is not a law firm and does not provide legal services,
        legal opinions, or legal advice.
      </LegalParagraph>

      <LegalParagraph>
        Any references to legal matters, investigations, disputes, or litigation on this
        Website are for informational and communications-strategy purposes only.
      </LegalParagraph>

      <LegalSection title="Scope of Services">
        <LegalParagraph>
          Keystone may collaborate with attorneys, law firms, and legal advisors at the
          direction of clients; however:
        </LegalParagraph>
        <LegalList
          items={[
            "Keystone does not engage in legal strategy",
            "Keystone does not provide legal analysis",
            "Keystone does not interfere with attorney-client privilege",
          ]}
        />
      </LegalSection>

      <LegalSection title="Communications Services">
        <LegalParagraph>
          All communications services are designed to support public messaging and
          reputation strategy while deferring legal determinations exclusively to licensed
          counsel.
        </LegalParagraph>
      </LegalSection>

      <LegalSection title="Legal Responsibility">
        <LegalParagraph>
          Attorneys remain solely responsible for legal decisions, filings, advice, and
          outcomes.
        </LegalParagraph>
      </LegalSection>
    </LegalPageLayout>
  );
}
