import { defineTool } from "@lovable.dev/mcp-js";
import { company } from "../solutions";

export default defineTool({
  name: "get_company_info",
  title: "Get company info",
  description:
    "Get public company information about Teather Connect: description, values, site pages and how to get in touch.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [
      {
        type: "text",
        text: `${company.name} — ${company.tagline}\n\n${company.description}\n\nValues:\n${company.values
          .map((v) => `- ${v.title}: ${v.description}`)
          .join("\n")}\n\nPages:\n${company.pages
          .map((p) => `- ${p.title}: ${p.path}`)
          .join("\n")}\n\nEnquiries: ${company.contact.enquiries}`,
      },
    ],
    structuredContent: { company },
  }),
});
