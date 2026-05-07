export function normalizePlan(plan: string) {
  return plan.toLowerCase().trim()
}

export function normalizeUseCase(useCase: string) {
  const value = useCase.toLowerCase().trim()

  if (
    ["solo", "individual", "personal"].includes(value)
  ) {
    return "solo"
  }

  if (
    ["writing", "content", "copywriting"].includes(value)
  ) {
    return "writing"
  }

  return value
}