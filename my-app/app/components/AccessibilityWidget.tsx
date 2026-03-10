'use client'

import { useState } from 'react'
import { useTheme } from '../context/ThemeContext'

export default function AccessibilityWidget() {
  const [open, setOpen] = useState(false)
  const { fontSize, increaseFontSize, decreaseFontSize } = useTheme()

  const progress = ((fontSize - 80) / 50) * 100

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Popover modal */}
      {open && (
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 p-5 w-56 animate-fade-in-up">
          <h3 className="text-sm font-semibold text-gray-800 dark:text-gray-100 mb-1">
            Text Size
          </h3>
          <p className="text-xs text-gray-400 dark:text-gray-500 mb-4">
            Adjust the size of text across the page.
          </p>

          {/* Controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={decreaseFontSize}
              disabled={fontSize <= 80}
              aria-label="Decrease font size"
              className="w-9 h-9 rounded-full border-2 border-gray-300 dark:border-gray-600 flex items-center justify-center text-gray-600 dark:text-gray-300 font-bold text-base leading-none
                hover:border-blue-500 hover:text-blue-600 dark:hover:border-blue-400 dark:hover:text-blue-400
                disabled:opacity-30 disabled:cursor-not-allowed active:scale-90 transition-all duration-150"
            >
              A
            </button>

            <div className="flex-1 text-center">
              <span className="text-sm font-semibold text-gray-700 dark:text-gray-200">
                {fontSize}%
              </span>
              <div className="mt-1.5 h-1.5 rounded-full bg-gray-200 dark:bg-gray-600 overflow-hidden">
                <div
                  className="h-full rounded-full bg-blue-500 transition-all duration-300"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>

            <button
              onClick={increaseFontSize}
              disabled={fontSize >= 130}
              aria-label="Increase font size"
              className="w-9 h-9 rounded-full border-2 border-gray-300 dark:border-gray-600 flex items-center justify-center text-gray-600 dark:text-gray-300 font-bold text-xl leading-none
                hover:border-blue-500 hover:text-blue-600 dark:hover:border-blue-400 dark:hover:text-blue-400
                disabled:opacity-30 disabled:cursor-not-allowed active:scale-90 transition-all duration-150"
            >
              A
            </button>
          </div>

          <div className="mt-3 flex justify-between text-[10px] text-gray-400 dark:text-gray-500 px-1">
            <span>Smaller</span>
            <span>Larger</span>
          </div>

          <button
            onClick={() => setOpen(false)}
            className="mt-4 w-full text-xs text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 transition-colors py-1"
          >
            Close
          </button>
        </div>
      )}

      {/* Floating trigger button */}
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label="Accessibility options"
        className={[
          'w-13 h-13 w-12 h-12 rounded-full shadow-lg flex items-center justify-center transition-all duration-200',
          'hover:scale-110 active:scale-95 hover:shadow-xl',
          open
            ? 'bg-orange-500 hover:bg-orange-600 text-white'
            : 'bg-[#1a3c6e] hover:bg-[#1e4d8c] dark:bg-blue-700 dark:hover:bg-blue-600 text-white',
        ].join(' ')}
      >
        {/* Universal accessibility icon */}
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <circle cx="12" cy="3.5" r="1.75" />
          <path d="M17 7.5H7l1.5 5H9l-1 7h1.5l1-5h3l1 5H16l-1-7h.5L17 7.5z" />
        </svg>
      </button>
    </div>
  )
}
