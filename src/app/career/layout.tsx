export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="p-8">
      <div className="p-3 text-pink-400 font-bold">
        test
      </div>
      {children}
    </div>
  );
}