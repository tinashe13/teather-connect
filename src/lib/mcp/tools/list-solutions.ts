import { defineTool } from "@lovable.dev/mcp-js";
import { solutions } from "../solutions";

export default defineTool({
  name: "list_solutions",
  title: "List solutions",
  description:
    "List all Teather Connect IT solution offerings with their slug, summary and page path.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [
      {
        type: "text",
        text: solutions
          .map((s) => `${s.title} (${s.slug}) — ${s.summary} [${s.path}]`)
          .join("\n"),
      },
    ],
    structuredContent: { solutions },
  }),
});
