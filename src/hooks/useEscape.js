import { useEffect } from "react"

export const useEscape = (callback) => {
  const escapeHandler = (e) => {
    if (e.key === "Escape") {
      callback()
    }
  }

  useEffect(() => {
    window.addEventListener("keydown", escapeHandler)
    return () => window.removeEventListener("keydown", escapeHandler)
  })
}
