export type ToolName =
  | "chatgpt"
  | "claude"
  | "copilot"
  | "cursor"
  | "gemini"
  | "openai-api"
  | "anthropic-api"

export type Severity =
  | "low"
  | "medium"
  | "high"

export interface ToolInput {
  name: ToolName
  plan: string
  monthlyCost: number
  seats: number
  useCase: string
}

export interface AuditRecommendation {
  tool: string

  currentCost: number
  recommendedCost: number

  savings: number

  recommendation: string
  reason: string

  severity: Severity
  confidence: number
}

export interface AuditResult {
  recommendations: AuditRecommendation[]
  totalSavings: number
}