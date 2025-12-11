import LegalPageLayout from "@/components/LegalPageLayout";
import { LegalSection, LegalParagraph, LegalList } from "@/components/LegalContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Crisis & Sensitive Matters Disclaimer | Keystone Public Relations",
  description:
    "Disclaimer regarding crisis communications and sensitive matters services at Keystone Public Relations.",
};

export default function CrisisDisclaimerPage() {
  return (
    <LegalPageLayout title="Crisis & Sensitive Matters Disclaimer">
      <LegalParagraph>
        Keystone Public Relations offers crisis communications, reputation strategy, and
        media advisory services only.
      </LegalParagraph>

      <LegalSection title="No Guaranteed Outcomes">
        <LegalParagraph>
          Outcomes related to crisis management, reputation recovery, or public narrative
          stabilization cannot be guaranteed and depend upon numerous external factors,
          including but not limited to:
        </LegalParagraph>
        <LegalList
          items={[
            "Media behavior",
            "Public records",
            "Search engine algorithms",
            "Third-party platform policies",
            "Timing and jurisdiction",
          ]}
        />
      </LegalSection>

      <LegalSection title="Service Limitations">
        <LegalParagraph>Keystone does not:</LegalParagraph>
        <LegalList
          items={[
            "Guarantee media suppression or removal",
            "Guarantee search engine outcomes",
            "Influence judicial, regulatory, or investigative processes",
            "Interfere with attorney-client privilege",
          ]}
        />
      </LegalSection>

      <LegalSection title="Advisory Nature">
        <LegalParagraph>
          All crisis engagements are advisory in nature and conducted with discretion,
          professionalism, and ethical consideration.
        </LegalParagraph>
      </LegalSection>
    </LegalPageLayout>
  );
}
