import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { CONTACT_EMAIL } from "@/lib/contact";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [{ title: "Privacy Policy — AVGC Studios" }],
  }),
  component: PrivacyPolicyPage,
});

function PrivacyPolicyPage() {
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
            <h1 className="font-serif text-4xl text-[color:var(--navy)]">Privacy Policy</h1>
            <p>
              Welcome to AVGC Studios (&ldquo;Company&rdquo;, &ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;). We respect your privacy and are committed to protecting the information you share with us. This Privacy Policy explains how we collect, use, store, and protect your personal information when you visit our website or contact us regarding our creative services. By using this website, you agree to the practices described below.
            </p>

            <h2 className="font-serif text-2xl text-[color:var(--navy)]">Who We Are</h2>
            <p>
              We are a creative production studio specializing in visual storytelling for churches, ministries, faith-based organizations, educational institutions, and mission-driven organizations. Our services include video production, animation, motion graphics, visual effects, creative strategy, post-production, and related AVGC (Animation, Visual Effects, Gaming, and Comics) services.
            </p>

            <h2 className="font-serif text-2xl text-[color:var(--navy)]">Information We Collect</h2>
            <p>
              We only collect information that is necessary to communicate with you and provide our services.
            </p>
            <p>This may include:</p>
            <ul>
              <li>Name</li>
              <li>Organization or Church name</li>
              <li>Contact information</li>
              <li>Other business-related data</li>
            </ul>
            <p>We may also automatically collect technical information such as:</p>
            <ul>
              <li>Browser type</li>
              <li>Device information</li>
              <li>IP address</li>
              <li>Pages visited</li>
              <li>Session duration</li>
              <li>Referring website</li>
              <li>Cookies and analytics data</li>
            </ul>

            <h2 className="font-serif text-2xl text-[color:var(--navy)]">How We Use Your Information</h2>
            <p>We use your information to:</p>
            <ul>
              <li>Respond to enquiries</li>
              <li>Schedule consultations</li>
              <li>Understand project requirements</li>
              <li>Prepare proposals and quotations</li>
              <li>Deliver our creative services</li>
              <li>Improve our website and customer experience</li>
              <li>Maintain website security</li>
              <li>Send project-related communications</li>
              <li>Comply with applicable legal obligations</li>
            </ul>
            <p>We do not sell, trade, or rent your personal information to third parties.</p>

            <p>We may share your data in the following circumstances:</p>
            <ul>
              <li>
                Service providers: With trusted third-party vendors who assist us in operating our site, conducting business, or serving you (e.g., hosting providers, analytics, email delivery). These parties are contractually obligated to protect your data.
              </li>
              <li>
                Business transfers: In the event of a merger, acquisition, or sale of assets, your information may be transferred. We will notify you of any such change.
              </li>
              <li>
                Legal requirements: If required by law, regulation, or legal process (e.g., court order), or to protect the rights, property, or safety of AVGC Studios, our users, or others.
              </li>
              <li>
                Aggregated/anonymous data: We may share non-personal, aggregated data with partners for industry analysis, research, or marketing, but this data cannot identify you.
              </li>
              <li>Within AVGC or with any of its subsidiaries/affiliates.</li>
              <li>Business partners.</li>
            </ul>

            <h2 className="font-serif text-2xl text-[color:var(--navy)]">Client Assets</h2>
            <p>
              If you provide us with sermons, presentations, footage, photographs, logos, branding assets, scripts, music, or other creative material for evaluation or production, such materials remain your property unless otherwise agreed in writing. We use these assets solely for project discussions, quotation, production, quality review, delivery, and archival purposes related to your project.
            </p>

            <h2 className="font-serif text-2xl text-[color:var(--navy)]">AI-Assisted Production</h2>
            <p>
              Some of our creative workflows may utilize AI-assisted tools to enhance efficiency during ideation, image generation, editing, animation, or post-production. Where AI technologies are used, they are employed as production tools under human creative supervision. Final creative decisions remain subject to our professional review and quality standards. Unless specifically agreed otherwise, client assets will not be intentionally used for training publicly available AI models.
            </p>

            <h2 className="font-serif text-2xl text-[color:var(--navy)]">Cookies</h2>
            <p>Our website may use cookies to:</p>
            <ul>
              <li>Remember preferences</li>
              <li>Improve performance</li>
              <li>Analyze website traffic</li>
              <li>Understand visitor behavior</li>
            </ul>
            <p>You may disable cookies through your browser settings.</p>

            <h2 className="font-serif text-2xl text-[color:var(--navy)]">Third-Party Services</h2>
            <p>
              We may engage trusted third-party providers for services including website hosting, analytics, cloud storage, scheduling, communication, email delivery, and project collaboration. These providers only receive the information necessary to perform their services.
            </p>

            <h2 className="font-serif text-2xl text-[color:var(--navy)]">International Visitors</h2>
            <p>
              If you access our website from outside India, your information may be transferred to and processed in India or other countries where our service providers operate. By using our website, you consent to such transfers where permitted by applicable law.
            </p>

            <h2 className="font-serif text-2xl text-[color:var(--navy)]">Data Retention</h2>
            <p>
              We retain information only for as long as reasonably necessary to respond to enquiries, complete projects, maintain business records, satisfy contractual obligations, and comply with legal requirements.
            </p>

            <h2 className="font-serif text-2xl text-[color:var(--navy)]">Contact Us</h2>
            <p>If you have any questions regarding this Privacy Policy, please contact us:</p>
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
