## Day 1 — 2026-05-06

**Hours worked:** ~2.75 hours

**What I did:**
- Set up Next.js project and resolved multiple environment issues (folder naming, terminal, and VS Code workspace setup)
- Understood the assignment requirements and broke down the problem into an audit-engine-first approach
- Started building the core audit logic (rule-based engine) for AI tool spend optimization
- Implemented initial rules for ChatGPT, GitHub Copilot, and Claude based on plan, seats, and usage patterns
- Iterated on improving structure, normalization, and fallback handling in the audit engine

**What I learned:**
- The core value of the project is not UI, but the audit logic and decision-making system
- Rule-based systems need clear structure, normalization, and fallback cases to be reliable
- Small assumptions in plan naming or usage context can break logic if not handled carefully

**Blockers / what I'm stuck on:**
- Uncertainty about how deep the audit rules should go (simple heuristics vs more complex decision layers)
- Not yet sure how detailed pricing validation should be structured across multiple tools

**Plan for tomorrow:**
- Expand audit rules to cover more tools and edge cases (API usage, seat optimization, tool overlap)
- Start building the input form for user data collection
- Connect form → audit engine flow for first end-to-end test