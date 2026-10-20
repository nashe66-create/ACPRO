"use client";

import {useState} from "react";

type LookupState = "idle" | "checking" | "valid" | "invalid" | "unavailable";

export default function PropertyAddressFields() {
  const [postcode, setPostcode] = useState("");
  const [lookupState, setLookupState] = useState<LookupState>("idle");
  const [message, setMessage] = useState("");

  async function validatePostcode() {
    const normalised = postcode.trim().toUpperCase();
    if (!normalised) {
      setLookupState("invalid");
      setMessage("Enter your postcode first, or continue by entering the address manually.");
      return;
    }

    setLookupState("checking");
    setMessage("Checking postcode…");
    try {
      const response = await fetch(
        `https://api.postcodes.io/postcodes/${encodeURIComponent(normalised)}`,
        { headers: { Accept: "application/json" }, cache: "no-store" },
      );
      if (!response.ok) {
        setLookupState("invalid");
        setMessage("We couldn’t find that postcode. Check it, or continue with your address manually.");
        return;
      }
      const result = (await response.json()) as { status?: number; result?: { postcode?: string } | null };
      if (result.status === 200 && result.result?.postcode) {
        const confirmedPostcode = result.result.postcode.toUpperCase();
        setPostcode(confirmedPostcode);
        setLookupState("valid");
        setMessage(`Postcode found: ${confirmedPostcode}. Now add the property address below.`);
      } else {
        setLookupState("invalid");
        setMessage("We couldn’t find that postcode. Check it, or continue with your address manually.");
      }
    } catch {
      setLookupState("unavailable");
      setMessage("Postcode checking is temporarily unavailable. You can still enter your address and continue.");
    }
  }

  return (
    <>
      <div className="field">
        <label htmlFor="postcode">Property postcode</label>
        <div className="postcode-row">
          <input
            id="postcode"
            name="postcode"
            required
            maxLength={10}
            autoComplete="postal-code"
            placeholder="e.g. SO15 2XX"
            value={postcode}
            onChange={(event) => {
              setPostcode(event.target.value);
              setLookupState("idle");
              setMessage("");
            }}
          />
          <button className="button secondary postcode-check" type="button" onClick={validatePostcode} disabled={lookupState === "checking"}>
            {lookupState === "checking" ? "Checking…" : "Check postcode"}
          </button>
        </div>
        <p className={`lookup-message ${lookupState === "valid" ? "success" : lookupState === "invalid" ? "error" : ""}`} aria-live="polite">
          {message || "We’ll check the postcode if the free service is available. You can enter the address yourself either way."}
        </p>
      </div>

      <div className="address-fields">
        <div className="field">
          <label htmlFor="address_line_1">House / flat number or name</label>
          <input id="address_line_1" name="address_line_1" required maxLength={160} autoComplete="address-line1" placeholder="e.g. Flat 4, 12 High Street" />
        </div>
        <div className="field">
          <label htmlFor="address_line_2">Street (if not included above)</label>
          <input id="address_line_2" name="address_line_2" maxLength={160} autoComplete="address-line2" placeholder="e.g. High Street" />
        </div>
        <div className="field">
          <label htmlFor="town_city">Town or city</label>
          <input id="town_city" name="town_city" required maxLength={100} autoComplete="address-level2" placeholder="e.g. Southampton" />
        </div>
      </div>
      <p className="hint address-privacy">Your full address is used for your request and installer matching. It is not sent to analytics.</p>
    </>
  );
}
