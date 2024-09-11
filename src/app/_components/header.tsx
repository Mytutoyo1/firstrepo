import Link from "next/link";

const Header = () => {
  return (
    <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8 flex items-center ">
      <Link href="/" className="hover:underline">
        Joel
      </Link>
      .
    </h2>
  );
};

export default Header;
// bg-clip-text text-transparent bg-[linear-gradient(190deg,rgba(15,23,42,1),rgba(245,130,105,1))]