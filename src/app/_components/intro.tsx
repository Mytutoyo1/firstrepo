import { CMS_NAME } from "@/lib/constants";

export function Intro() {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="text-5xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
        Joel.
      </h1>
      <h4 className="text-center md:text-left font-extrabold bg-clip-text text-transparent bg-[linear-gradient(190deg,#9547cd,#43ecaf)]">
      Jetzt wird nicht länger gekleckert, jetzt wird geklotzt!
        
      </h4>
    </section>
  );
}
//className="text-center md:text-left text-lg mt-5 md:pl-8">
//315deg, rgba(15,23,42,1) 0%, rgba(245,130,105,1)
//      <h1 className="text-5xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8 bg-clip-text text-transparent bg-gradient-to-r from-slate-900 via-orange-500 to-orange-300">
