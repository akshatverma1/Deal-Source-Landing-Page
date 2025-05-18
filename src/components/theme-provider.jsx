"use client"

import React from "react"

const ThemeProviderContext = React.createContext({
  theme: "light",
  setTheme: () => null,
})

export function ThemeProvider({ children, defaultTheme = "light", storageKey = "vite-ui-theme", ...props }) {
  const [theme, setTheme] = React.useState(() => localStorage.getItem(storageKey) || defaultTheme)

  React.useEffect(() => {
    const root = window.document.documentElement
    root.classList.remove("light", "dark")
    root.classList.add(theme)
  }, [theme])

  const value = {
    theme,
    setTheme: (theme) => {
      localStorage.setItem(storageKey, theme)
      setTheme(theme)
    },
  }

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  )
}

export const useTheme = () => {
  const context = React.useContext(ThemeProviderContext)
  if (context === undefined) throw new Error("useTheme must be used within a ThemeProvider")
  return context
}
