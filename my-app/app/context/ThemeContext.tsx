'use client'

import { createContext, useContext, useEffect, useState } from 'react'

type ThemeContextType = {
  isDark: boolean
  toggleDark: () => void
  fontSize: number
  increaseFontSize: () => void
  decreaseFontSize: () => void
}

const ThemeContext = createContext<ThemeContextType | null>(null)

export function useTheme() {
  const ctx = useContext(ThemeContext)
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider')
  return ctx
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [isDark, setIsDark] = useState(false)
  const [fontSize, setFontSize] = useState(100)

  // Load persisted preferences on mount
  useEffect(() => {
    const savedDark = localStorage.getItem('irctc-dark') === 'true'
    const savedSize = parseInt(localStorage.getItem('irctc-fontsize') ?? '100', 10)
    setIsDark(savedDark)
    setFontSize(savedSize)
  }, [])

  // Apply dark class to <html>
  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark)
    localStorage.setItem('irctc-dark', String(isDark))
  }, [isDark])

  // Apply font-size to <html> (all rem units scale with it)
  useEffect(() => {
    document.documentElement.style.fontSize = `${fontSize}%`
    localStorage.setItem('irctc-fontsize', String(fontSize))
  }, [fontSize])

  return (
    <ThemeContext.Provider
      value={{
        isDark,
        toggleDark: () => setIsDark((d) => !d),
        fontSize,
        increaseFontSize: () => setFontSize((s) => Math.min(130, s + 10)),
        decreaseFontSize: () => setFontSize((s) => Math.max(80, s - 10)),
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}
