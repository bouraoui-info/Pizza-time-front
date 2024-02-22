import Header from "@/app/common/Header";
import SideBar from "@/app/common/SideBar";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Header />
      <SideBar />
      {children}
    </div>
  );
}