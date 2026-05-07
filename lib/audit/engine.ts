import { ToolInput } from "@/types"
import {
  normalizePlan,
  normalizeUseCase
} from "./normalize"

import { toolRules } from "./tool-rules"

export function auditTools(tools: ToolInput[]) {
  const recommendations = []

  for (const tool of tools) {
    const normalizedTool = {
      ...tool,
      plan: normalizePlan(tool.plan),
      useCase: normalizeUseCase(
        tool.useCase
      )
    }

    for (const rule of toolRules) {
      const result = rule(normalizedTool)

      if (result) {
        recommendations.push(result)
      }
    }
  }

  const totalSavings =
    recommendations.reduce(
      (sum, rec) => sum + rec.savings,
      0
    )

  return {
    recommendations,
    totalSavings
  }
}