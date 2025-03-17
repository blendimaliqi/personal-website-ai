import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

export function useThemeDetection() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // consider theme after component has mounted to avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  const isDarkTheme = !mounted ? true : resolvedTheme === "dark";

  return { isDarkTheme, mounted };
}
