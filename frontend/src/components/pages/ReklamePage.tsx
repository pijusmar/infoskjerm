import { LucideSquareCheck } from "lucide-react";

export const ReklamePage = () => {
  return (
    <main className="m-5 flex">
      <div className="leftContainer w-[50%]">
        <img src="../online/online_logo_blue.svg" alt="Online logo" className="w-40" />
        <h1 className="font-extrabold italic text-lg w-60">Studiehverdagen din, alt samlet på ett sted</h1>
        <div className="announcement h-25 bg-[#D9D9D9] rounded-xl px-2 py-2 flex items-center">
          <LucideSquareCheck className="size-12"/>
          <h1 className="ml-3 max-w-64">Nytt i 2.0: Meld deg på arrangsjementer direkte i appen</h1>
        </div>
      </div>
      <div className="rightContainer">
        <img src="../public/online-app/logo-bg-w-screen.png" alt="phones" className="w-96"/>
      </div>

      
    </main>
  );
};