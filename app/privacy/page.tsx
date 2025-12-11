import LegalPageLayout from "@/components/LegalPageLayout";
import { LegalSection, LegalParagraph, LegalList } from "@/components/LegalContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Keystone Public Relations",
  description:
    "Keystone Public Relations privacy policy regarding the collection and use of personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPageLayout title="Privacy Policy">
      <LegalParagraph>
        Keystone Public Relations respects your privacy and is committed to protecting
        personal information provided to us.
      </LegalParagraph>

      <LegalSection title="Information We Collect">
        <LegalParagraph>We may collect:</LegalParagraph>
        <LegalList
          items={[
            "Name, email address, phone number",
            "Company or organization name",
            "Information voluntarily submitted via contact forms or consultations",
          ]}
        />
      </LegalSection>

      <LegalSection title="Use of Information">
        <LegalParagraph>Information is used solely to:</LegalParagraph>
        <LegalList
          items={[
            "Respond to inquiries",
            "Evaluate potential engagements",
            "Communicate about our services",
            "Fulfill contractual obligations",
          ]}
        />
        <LegalParagraph>We do not sell, rent, or trade personal data.</LegalParagraph>
      </LegalSection>

      <LegalSection title="Confidentiality">
        <LegalParagraph>
          Information submitted to Keystone is handled with discretion. However, submission
          of information via this Website does not create attorney-client privilege or
          confidentiality protections equivalent to legal counsel.
        </LegalParagraph>
      </LegalSection>

      <LegalSection title="Security">
        <LegalParagraph>
          Reasonable administrative and technical measures are taken to safeguard
          information; however, no internet transmission is guaranteed to be fully secure.
        </LegalParagraph>
      </LegalSection>

      <LegalSection title="Policy Updates">
        <LegalParagraph>
          This Privacy Policy may be updated periodically. Continued use of the Website
          constitutes acceptance of revisions.
        </LegalParagraph>
      </LegalSection>
    </LegalPageLayout>
  );
}
