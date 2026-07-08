import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { CONTACT_EMAIL } from "@/lib/contact";

export const Route = createFileRoute("/terms-and-conditions")({
  head: () => ({
    meta: [{ title: "Terms and Conditions — AVGC Studios" }],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <div className="bg-[color:var(--background)]">
      <SiteHeader />
      <main className="section-y pt-28">
        <div className="container-page max-w-4xl">
          <Link to="/" className="text-sm text-[color:var(--gold)] hover:underline">
            ← Back to home
          </Link>
          <article className="mt-8 rounded-3xl border border-[color:var(--border)] bg-white/70 px-6 py-8 shadow-sm backdrop-blur-sm sm:px-8 sm:py-10 lg:px-12">
            <div className="prose prose-neutral max-w-none text-justify leading-relaxed prose-p:my-5 prose-p:text-justify prose-p:text-[color:var(--foreground)] prose-headings:font-serif prose-headings:text-[color:var(--navy)] prose-h1:mb-6 prose-h1:text-4xl prose-h2:mb-6 prose-h2:mt-12 prose-h2:text-2xl prose-ul:my-6 prose-li:my-2 prose-li:text-justify">
            <h1 className="font-serif text-4xl text-[color:var(--navy)]">Terms and Conditions</h1>
            <p className="text-sm text-[color:var(--muted-foreground)]">
              <strong>Effective Date:</strong> July 8, 2026
            </p>
            <p>
              These Terms &amp; Conditions govern your use of this website operated by <strong>AVGC Studios</strong>. By accessing or using this website, you agree to these Terms.
            </p>

            <h2 className="font-serif text-2xl text-[color:var(--navy)]">Website Purpose</h2>
            <p>
              This website provides information regarding our creative production services, portfolio, and capabilities. Nothing on this website constitutes a legally binding offer to perform services.
            </p>

            <h2 className="font-serif text-2xl text-[color:var(--navy)]">Services</h2>
            <p>Our services may include:</p>
            <ul>
              <li>Creative consulting</li>
              <li>Church media production</li>
              <li>Sermon visual storytelling</li>
              <li>2D &amp; 3D animation</li>
              <li>Motion graphics</li>
              <li>Video editing</li>
              <li>Post-production</li>
              <li>Visual effects</li>
              <li>Educational content production</li>
              <li>AI-assisted creative workflows</li>
            </ul>

            <h2 className="font-serif text-2xl text-[color:var(--navy)]">Intellectual Property</h2>
            <p>
              Unless otherwise stated, all website content including Branding, Logos, Graphics, Videos, Animations, Layouts, Text, Case studies, and Designs is owned by or licensed to the Company and protected under applicable intellectual property laws.
            </p>
            <p>No material may be copied, reproduced, modified, distributed, or used commercially without prior written permission.</p>

            <h2 className="font-serif text-2xl text-[color:var(--navy)]">Portfolio Rights</h2>
            <p>
              Unless restricted through a written Non-Disclosure Agreement or other contractual commitment, we may display completed work in our portfolio, presentations, proposals, and marketing materials.
            </p>
            <p>Where confidentiality has been agreed, we will respect those obligations.</p>

            <h2 className="font-serif text-2xl text-[color:var(--navy)]">Client Materials</h2>
            <p>
              Clients represent that they possess the necessary rights, permissions, and licenses for any materials submitted to us, including Sermons, Photographs, Logos, Music, Stock assets, Scripts, Trademarks, Footage, and Branding.
            </p>
            <p>The Company shall not be liable for infringement arising from client-supplied materials.</p>

            <h2 className="font-serif text-2xl text-[color:var(--navy)]">AI-Assisted Creative Work</h2>
            <p>
              Where agreed with the client, we may use AI-assisted production tools to support creative workflows. The Company maintains creative oversight and quality control over all deliverables.
            </p>
            <p>
              Unless expressly agreed otherwise, AI-assisted production does not alter ownership provisions established in the project agreement.
            </p>

            <h2 className="font-serif text-2xl text-[color:var(--navy)]">No Guarantee</h2>
            <p>
              While we strive to provide accurate information, we do not guarantee that the website will always be uninterrupted, error-free, or free from inaccuracies.
            </p>

            <h2 className="font-serif text-2xl text-[color:var(--navy)]">Third-Party Links</h2>
            <p>External links are provided solely for convenience. We are not responsible for third-party content or services.</p>

            <h2 className="font-serif text-2xl text-[color:var(--navy)]">Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, the Company shall not be liable for any indirect, incidental, consequential, special, or punitive damages arising from the use of this website.
            </p>

            <h2 className="font-serif text-2xl text-[color:var(--navy)]">Confidentiality</h2>
            <p>
              Submission of an enquiry does not create a confidential relationship unless separately agreed in writing. Project confidentiality obligations are governed by the applicable project agreement or NDA.
            </p>

            <h2 className="font-serif text-2xl text-[color:var(--navy)]">Governing Law</h2>
            <p>
              These Terms shall be governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the competent courts having jurisdiction over the Company&apos;s principal place of business.
            </p>

            <h2 className="font-serif text-2xl text-[color:var(--navy)]">Changes</h2>
            <p>
              We reserve the right to update these Terms at any time. Continued use of the website constitutes acceptance of any revised Terms.
            </p>

            <h2 className="font-serif text-2xl text-[color:var(--navy)]">Contact</h2>
            <p>
              <strong>Company:</strong> AVGC Studios
              <br />
              <strong>Email:</strong>{" "}
              <a href={`mailto:${CONTACT_EMAIL}`} className="text-[color:var(--gold)]">
                {CONTACT_EMAIL}
              </a>
              <br />
              <strong>Website:</strong> AVGC Studios
            </p>
            </div>
          </article>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
