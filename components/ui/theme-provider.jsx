"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeProvider({ children, ...props }) {
  const [mounted, setMounted] = useState(false);

  // Ensure that the theme logic runs only on the client-side
  useEffect(() => {
    setMounted(true);
  }, []);

  // If not mounted yet, return children without rendering theme logic
  if (!mounted) {
    return <>{children}</>;
  }

  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
