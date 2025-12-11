import LegalPageLayout from "@/components/LegalPageLayout";
import { LegalSection, LegalParagraph } from "@/components/LegalContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use | Keystone Public Relations",
  description:
    "Terms of Use for the Keystone Public Relations website and services.",
};

export default function TermsOfUsePage() {
  return (
    <LegalPageLayout title="Terms of Use">
      <LegalParagraph>
        By accessing or using this website (&quot;Website&quot;), you agree to be bound by
        these Terms of Use. If you do not agree, please refrain from using this Website.
      </LegalParagraph>

      <LegalParagraph>
        Keystone Public Relations (&quot;Keystone,&quot; &quot;we,&quot; &quot;us,&quot; or
        &quot;our&quot;) provides strategic communications, public relations, marketing,
        branding, and reputation management services only.
      </LegalParagraph>

      <LegalSection title="No Professional Advice">
        <LegalParagraph>
          Content on this Website is provided for general informational purposes only and
          does not constitute legal, financial, medical, or professional advice. No
          information on this Website should be relied upon as a substitute for advice from
          licensed professionals.
        </LegalParagraph>
      </LegalSection>

      <LegalSection title="No Client Relationship">
        <LegalParagraph>
          Use of this Website does not create a client relationship. A formal client
          relationship is established only upon execution of a written agreement signed by
          both parties.
        </LegalParagraph>
      </LegalSection>

      <LegalSection title="Intellectual Property">
        <LegalParagraph>
          All content, trademarks, logos, designs, text, graphics, and materials on this
          Website are the exclusive property of Keystone Public Relations and may not be
          reproduced, distributed, or used without prior written consent.
        </LegalParagraph>
      </LegalSection>

      <LegalSection title="Limitation of Liability">
        <LegalParagraph>
          Keystone shall not be liable for any direct, indirect, incidental, consequential,
          or punitive damages arising from the use of, or inability to use, this Website or
          its content.
        </LegalParagraph>
      </LegalSection>

      <LegalSection title="Third-Party Links">
        <LegalParagraph>
          This Website may contain links to third-party websites. Keystone is not
          responsible for the content, accuracy, or practices of third-party sites.
        </LegalParagraph>
      </LegalSection>

      <LegalSection title="Governing Law">
        <LegalParagraph>
          These Terms shall be governed by the laws of the State of Texas, without regard
          to conflict-of-law principles.
        </LegalParagraph>
      </LegalSection>
    </LegalPageLayout>
  );
}
