import Navbar from "@/components/Navbar";
import { Toaster } from "react-hot-toast";

export const metadata = {
  title: "Yahya Nashar",
  description: "Yahya Nashar, Full Stack Developer Portfolio",
  image: "/assets/overview.png",
  url: "https://portfolio-3d-sooty.vercel.app/",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:image" content={metadata.image} />
        <meta property="og:url" content={metadata.url} />
        <meta property="og:type" content="website" />
      </head>
      <body>
        <Toaster />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
