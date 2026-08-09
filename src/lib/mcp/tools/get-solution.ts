import { defineTool, ToolError } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { solutions } from "../solutions";

export default defineTool({
  name: "get_solution",
  title: "Get solution details",
  description:
    "Get the full details (summary and capabilities) of one Teather Connect solution by its slug.",
  inputSchema: {
    slug: z
      .string()
      .min(1)
      .describe(
        "Solution slug: data-centre, information-security, it-service-management or infrastructure.",
      ),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ slug }) => {
    const solution = solutions.find((s) => s.slug === slug.trim().toLowerCase());
    if (!solution) {
      throw new ToolError(
        `Unknown solution "${slug}". Available slugs: ${solutions.map((s) => s.slug).join(", ")}.`,
      );
    }
    return {
      content: [
        {
          type: "text",
          text: `${solution.title}\n${solution.summary}\n\nCapabilities:\n${solution.capabilities
            .map((c) => `- ${c}`)
            .join("\n")}\n\nPage: ${solution.path}`,
        },
      ],
      structuredContent: { solution },
    };
  },
});
