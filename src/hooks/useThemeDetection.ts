import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

export function useThemeDetection() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Only consider theme after component has mounted to avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  // Use a safe default (dark) for server-side rendering, then use the actual theme after mounting
  const isDarkTheme = !mounted ? true : resolvedTheme === "dark";

  return { isDarkTheme, mounted };
}
