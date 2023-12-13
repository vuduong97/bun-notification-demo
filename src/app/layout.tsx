import { Roboto_Mono } from "next/font/google";
import ThemeRegistry from "~/components/theme-registry/theme.registry";
import ToastProvider from "~/lib/toast";
import "~/styles/globals.css";

const roboto_mono = Roboto_Mono({
  weight: "400",
  subsets: ["latin"],
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={roboto_mono.className}>
        <ThemeRegistry>
          <ToastProvider>{children}</ToastProvider>
        </ThemeRegistry>
      </body>
    </html>
  );
}
