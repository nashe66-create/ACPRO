import Link from "next/link";
import PropertyAddressFields from "@/components/homeowner/PropertyAddressFields";
import { createJob } from "./actions";

export default async function NewJobPage({ searchParams }: { searchParams: Promise<{ error?: string }> }) {
  const { error } = await searchParams;
  return (
    <main className="wrap">
      <div className="form-shell">
        <Link className="brand" href="/">AC<span>PRO</span></Link>
        <h1>Tell us about your home</h1>
        <p className="hint">Start with the basics. You don’t need to know the technical details — an installer will check what’s suitable before confirming a final quote.</p>
        {error && <div className="notice" role="alert">{error === "not-configured" ? "ACPRO’s database is not connected yet. Your request cannot be saved until the database is configured." : error === "validation" ? "Please check the required fields and try again." : "We couldn’t save your request. Please try again."}</div>}
        <form action={createJob}>
          <div className="field">
            <label htmlFor="title">What would you like help with?</label>
            <input id="title" name="title" required minLength={3} maxLength={120} placeholder="e.g. Air conditioning for our two-bedroom flat" />
          </div>

          <section className="form-section" aria-labelledby="property-heading">
            <h2 id="property-heading">Where is the property?</h2>
            <p className="hint">We use this to understand the location and help find suitable installers.</p>
            <PropertyAddressFields />
            <div className="field">
              <label htmlFor="property_type">What type of property is it?</label>
              <select id="property_type" name="property_type" required defaultValue="">
                <option value="" disabled>Select property type</option>
                <option value="flat">Flat / maisonette</option>
                <option value="terraced">Terraced house</option>
                <option value="semi_detached">Semi-detached house</option>
                <option value="detached">Detached house</option>
                <option value="other">Other / not sure</option>
              </select>
            </div>
          </section>

          <section className="form-section" aria-labelledby="rooms-heading">
            <h2 id="rooms-heading">What would you like to cool?</h2>
            <p className="hint">A rough idea is fine. You can add more detail later.</p>
            <div className="field">
              <label htmlFor="rooms_count">How many rooms?</label>
              <select id="rooms_count" name="rooms_count" defaultValue="1">
                {Array.from({ length: 12 }, (_, i) => <option key={i + 1} value={i + 1}>{i === 11 ? "12 or more rooms" : `${i + 1} ${i === 0 ? "room" : "rooms"}`}</option>)}
              </select>
            </div>
            <div className="field">
              <label htmlFor="requirements">Anything else you’d like us to know? (optional)</label>
              <textarea id="requirements" name="requirements" maxLength={3000} placeholder="For example, which rooms get too warm or any preferences you have." />
            </div>
          </section>

          <p className="hint">You can start without room measurements or choosing a particular air conditioning system. Your details are used to handle your request and are not sent to analytics.</p>
          <button className="button" type="submit">Continue with my request</button>
        </form>
        <p className="hint">This current version still requires sign-in to save a request. Removing that requirement is a separate implementation step.</p>
        <p><Link href="/">← Back to home</Link></p>
      </div>
    </main>
  );
}
