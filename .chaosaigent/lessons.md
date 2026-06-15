# Lessons — suewheelerstl

- 2026-06-14: Run steering verify at session START (`/chaos-controller steer`) — it would have surfaced the Supabase MCP access gap before the migration attempt, not during it.
- 2026-06-14: Before scoping a dependency bump as "major/breaking", read the INSTALLED version, not the audit advisory's vulnerable-range string. The Next.js "high-sev upgrade" was actually a patch (15.5.14→15.5.19).
- 2026-06-14: For monitors, exercise the REAL path (same table/columns), not a proxy/heartbeat table — a separate-table health check would have passed green while the actual contact form 500'd.
- 2026-06-14: Deploy ordering for schema-coupled changes — apply the migration to live DB BEFORE pushing code that contracts the new column, or the schema-drift CI gate goes red and the endpoint 500s.
