import { pricing } from "./pricing"
import {
  ToolInput,
  AuditRecommendation
} from "@/types"

export type AuditRule = (
  tool: ToolInput
) => AuditRecommendation | null

export const chatgptSmallTeamRule: AuditRule = (
  tool
) => {
  if (tool.name !== "chatgpt") {
    return null
  }

  if (tool.plan !== "team") {
    return null
  }

  if (tool.seats > 3) {
    return null
  }

  const recommendedCost =
    pricing.chatgpt.plus.monthly * tool.seats

  return {
    tool: "ChatGPT",

    currentCost: tool.monthlyCost,

    recommendedCost,

    savings:
      tool.monthlyCost - recommendedCost,

    recommendation:
      "Switch to ChatGPT Plus",

    reason:
      "Team collaboration features appear unnecessary for a small team.",

    severity: "medium",

    confidence: 0.84
  }
}

export const copilotBusinessRule: AuditRule = (
  tool
) => {
  if (tool.name !== "copilot") {
    return null
  }

  if (tool.plan !== "business") {
    return null
  }

  if (tool.seats > 2) {
    return null
  }

  const recommendedCost =
    pricing.copilot.individual.monthly *
    tool.seats

  return {
    tool: "GitHub Copilot",

    currentCost: tool.monthlyCost,

    recommendedCost,

    savings:
      tool.monthlyCost - recommendedCost,

    recommendation:
      "Switch to Copilot Individual",

    reason:
      "Business-tier collaboration features may be underutilized for a very small team.",

    severity: "medium",

    confidence: 0.79
  }
}

export const toolRules: AuditRule[] = [
  chatgptSmallTeamRule,
  copilotBusinessRule
]