import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s | Bsness Dashboard",
    default: "Bsness Dashboard",
  },
  description: "Bsness Dashboard panel",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div>{children}</div>
    </div>
  );
}
