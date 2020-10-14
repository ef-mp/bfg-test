import { fetcher } from "./fetcher"

export const api = {
  fetchQuestions: async () =>
    fetcher(
      "search?fromdate=1602633600&order=desc&sort=votes&intitle=react-redux&site=stackoverflow",
      "get"
    ),
}
