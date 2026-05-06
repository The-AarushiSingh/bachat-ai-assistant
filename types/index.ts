export type ToolInput = {
  name: string
  plan: string
  monthlyCost: number
  seats: number
  useCase?: string
}

export type AuditResult = {
  tool: string
  currentCost: number
  recommendedCost: number
  savings: number
  recommendation: string
  reason: string
}