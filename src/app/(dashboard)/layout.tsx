import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="h-screen flex">
    <div className="w-[18%] md:w-[8%] lg:w-[16%] xl:w-[14%] p-4">
      <Link href="/" className="flex justify-center lg:justify-start gap-2">
      <Image src="/logo.png" alt="Logo" width={32} height={32}/>
      <span className="hidden lg:block font-bold">OT School</span>
      </Link>
      <Menu/>
    </div>
    <div className="w-[82%] lg:w-[86%] md:[92%] xl:w-[86%] bg-[#f7f8fa]">
      <Navbar/>
      {children}
    </div>
  </div>;
}
