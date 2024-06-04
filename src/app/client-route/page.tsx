"use client";

import { useTheme } from "@/components/theme-provider";

export default function ClientRoute() {
    const theme = useTheme();
      return (
        <p style={{ color: theme.colors.primary }}>Use context provider example</p>
      );
}
