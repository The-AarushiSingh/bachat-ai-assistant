import { ToolInput, AuditResult } from "@/types"

export function auditTool(tool: ToolInput): AuditResult {
  const name = tool.name.toLowerCase()
  const plan = tool.plan.toLowerCase()
  const seats = tool.seats

    if (name === "chatgpt" && plan === "team" && seats <= 3) {
    const recommendedCost = 20 * seats

    return {
      tool: "ChatGPT",
      currentCost: tool.monthlyCost,
      recommendedCost,
      savings: tool.monthlyCost - recommendedCost,
      recommendation: "Switch to ChatGPT Plus per user",
      reason: "Team plan is unnecessary for small teams (individual Plus is cheaper)"
    }
}
  if (name === "copilot" && plan === "business" && seats <= 2) {
    const recommendedCost = 10 * seats

    return {
      tool: "GitHub Copilot",
      currentCost: tool.monthlyCost,
      recommendedCost,
      savings: tool.monthlyCost - recommendedCost,
      recommendation: "Switch to Individual plan",
      reason: "Business plan benefits are unused for small teams"
    }
  }

    if (name === "claude" && (plan === "pro" || plan === "max")) {
    if (tool.useCase === "writing" || tool.useCase === "light") {
      const recommendedCost = 0

      return {
        tool: "Claude",
        currentCost: tool.monthlyCost,
        recommendedCost,
        savings: tool.monthlyCost,
        recommendation: "Use free tier or API pay-as-you-go",
        reason: "Pro plan is overkill for light usage patterns"
      }
    }
  }

    if (seats > 1 && tool.useCase === "solo") {
    const recommendedCost = tool.monthlyCost / seats

    return {
      tool: tool.name,
      currentCost: tool.monthlyCost,
      recommendedCost,
      savings: tool.monthlyCost - recommendedCost,
      recommendation: "Switch to individual plan",
      reason: "Multiple seats detected but usage is individual"
    }
  }

    if (tool.monthlyCost > 200) {
    return {
      tool: tool.name,
      currentCost: tool.monthlyCost,
      recommendedCost: tool.monthlyCost * 0.5,
      savings: tool.monthlyCost * 0.5,
      recommendation: "Major optimization possible via Credex",
      reason: "High spend detected across AI tools stack"
    }
  }

    return {
    tool: tool.name,
    currentCost: tool.monthlyCost,
    recommendedCost: tool.monthlyCost,
    savings: 0,
    recommendation: "No change needed",
    reason: "Current plan is already cost efficient"
  }
}

