/**
 * Stable IDs and homeowner-facing copy for the conversion-oriented flow.
 * Reference specification only; this is not yet the wired production form.
 */
export const HOMEOWNER_FLOW_VERSION = "homeowner-v1";

export const HOMEOWNER_FLOW_STEPS = [
  { id: "property", title: "Where is the property?", description: "We use the address to understand the location and help find suitable installers.", optional: false },
  { id: "rooms", title: "Which rooms need air conditioning?", description: "Choose the rooms you have in mind. You can skip the floor planner.", optional: false },
  { id: "preferences", title: "What would you prefer?", description: "Choose a style or let installers recommend a suitable option.", optional: true },
  { id: "contact-review", title: "Where can we send your update?", description: "We will explain how your details are used before you submit.", optional: false },
  { id: "confirmation", title: "Your request has been received", description: "Only show after the server confirms the request has been saved.", optional: false },
] as const;

export const HOMEOWNER_UNIT_PREFERENCES = [
  { value: "wall_mounted", label: "Wall-mounted", help: "A common option for bedrooms and living rooms." },
  { value: "floor_standing", label: "Floor-standing", help: "A low-mounted option where a high wall unit may not suit." },
  { value: "ceiling_cassette", label: "Ceiling cassette", help: "Needs a suitable ceiling void and installation conditions." },
  { value: "concealed_ducted", label: "Concealed ducted", help: "Uses discreet vents and usually requires more space and work." },
  { value: "unsure", label: "Not sure — recommend one", help: "Let the installer assess and recommend a suitable system." },
] as const;