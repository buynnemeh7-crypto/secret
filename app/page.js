import { SecretMessage } from "./components/SecretMessage";
export default function Home() {
  return (
    <main className="min-h-screen bg-slate-100 px-6 py-12 text-slate-900  bg-[#F1F5F9]">
      <div className="mx-auto mt-10 grid max-w-4xl items-start gap-10 md:grid-cols-1 w-[550px]  bg-[#FFFFFF] rounded-[40px] p-[40px] shadow-lg ">
        <SecretMessage />
      </div>
    </main>
  );
}
