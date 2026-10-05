## Command Center
Scott tracks this work in the SHA Command Center: https://claude.ai/artifact/DbSe7pG3Sqw7RhArwVytew
Build ids for this repo: qbo-foundation

At the end of any session that changes a build's status, update the Command Center:
- builds/<build-id>: set stage (Idea, Spec, Building, Testing, Live, Retired), nextAction and blocker; set updatedAt to the current ISO time; append {date: "YYYY-MM-DD", note: "<one line on what changed>"} to the log array. Read the document first and keep the existing log entries.
- tasks: set status "done" and doneAt on tasks finished this session; add new tasks with fields title, due (YYYY-MM-DD or ""), priority (P1/P2/P3), client (client code or ""), status "open", build "<build-id>", recurrence "none", notes.
- automations: if this repo runs something on a schedule, keep its row current (status, lastRun, lastResult).
Use the ArtifactData tool with the URL above. If ArtifactData isn't available in this session, end your final message with a block titled "Command Center update" that lists the exact changes, so Scott can paste it into Claude to apply.
Only record facts from this session. Don't change other builds' rows.
