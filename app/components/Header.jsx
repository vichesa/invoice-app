"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

const navbar = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Create Invoice",
    link: "/create-invoice",
  },
  //   {
  //     name: "ChatRoom",
  //     link: "/chat-room",
  //   },
];

const Header = () => {
  const path = usePathname();

  return (
    <section className="fixed left-0 right-0 top-0 z-10 flex justify-between items-center bg-black text-white p-6">
      <h2 className="text-yellow-600 text-4xl font-bold;">Invoice App</h2>
      <div className="flex gap-6">
        {navbar.map((nav, index) => (
          <Link
            key={index}
            href={nav.link}
            className={
              path === `${nav.link}` ? "text-yellow-600" : "text-white"
            }
          >
            {nav.name}
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Header;
