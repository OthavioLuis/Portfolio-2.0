'use client'

import { useState, useEffect } from 'react'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'

export function ThemeToggle() {
    const [mounted, setMounted] = useState(false)
    const { setTheme, theme } = useTheme()

    useEffect(() => {
        setMounted(true)
    }, [])

    if(!mounted) {
        return null
    }

    return (
        <button
            className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors h-10 w-10 text-foreground"
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            aria-label='Toggle theme'
        >
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        </button>
    )
}