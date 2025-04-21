import { Navbar } from "@components/index";

export default function GeneralLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center justify-between p-24">
        <span className="text-lg">
          Hola Mundo
        </span>
        { children }     
      </main>      
    </>
  );
}