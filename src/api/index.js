import { fetcher } from "./fetcher"

export const api = {
  fetchQuestions: async ({ fromDate, order, sort, query }) =>
    fetcher(
      `search?fromdate=${
        fromDate / 1000
      }&order=${order}&sort=${sort}&intitle=${query}&pagesize=5`,
      "get"
    ),
}
