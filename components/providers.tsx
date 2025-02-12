"use client"

import { ThemeProvider as NextThemesProvider } from "next-themes"
import { ParallaxProvider } from "react-scroll-parallax"
import type { ThemeProviderProps } from "next-themes"
import React from "react"

export function Providers({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider {...props}>
      <ParallaxProvider>{children}</ParallaxProvider>
    </NextThemesProvider>
  )
}

