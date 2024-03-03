export default function DiaryLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="py-36 px-6"> {children} </div>;
}
