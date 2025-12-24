/**
 * 1) Replace the entire contents of: src/components/StrategyPilots.tsx
 * 2) This implements Version A:
 *    - Horizontal stepper (3 steps)
 *    - Single swapping panel by default (reduces vertical bloat)
 *    - "Show all steps" toggle (progressive disclosure)
 *    - Hash-aware navigation: #discern-clarify, #design-decide, #mission-impact-work
 *    - Scroll-spy highlighting when "Show all steps" is enabled
 *
 * NOTES:
 * - This intentionally avoids duplicating the full "Mission work domains" cards again in Step 3;
 *   it references them compactly instead (names only).
 * - If your Navigation dropdown links to those hashes, they will still work.
 */

import DiscernmentSteps from "./DiscernmentSteps";

export default function StrategyPilots() {
  return <DiscernmentSteps />;
}
