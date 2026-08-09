import { defineMcp } from "@lovable.dev/mcp-js";
import listSolutionsTool from "./tools/list-solutions";
import getSolutionTool from "./tools/get-solution";
import getCompanyInfoTool from "./tools/get-company-info";

export default defineMcp({
  name: "brand-mirror",
  title: "Brand Mirror",
  version: "0.1.0",
  instructions:
    "Public tools for the Teather Connect website. Use `list_solutions` to browse IT solution offerings, `get_solution` for details of one offering, and `get_company_info` for company background, values and contact routes.",
  tools: [listSolutionsTool, getSolutionTool, getCompanyInfoTool],
});
