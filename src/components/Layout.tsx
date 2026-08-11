import type { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div style={{
      margin: "0 auto",
      padding: "var(--padding-mobile)"
    }}>
      {children}
    </div>
  );
}
