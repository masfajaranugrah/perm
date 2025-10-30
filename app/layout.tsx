import React from "react";
import "../public/assets/css/bootstrap.min.css";
 
export const metadata = {
  title: "Perpustakaan UMS",
  description: "Sistem Informasi Perpustakaan Universitas Muhammadiyah Surakarta",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body>
        {children}

          <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>

      </body>
      
    </html>
  );
}
