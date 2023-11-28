import Image from "next/image";
import { Button } from "./ui/button";

export default function Header() {
  return (
    <div className="flex border border-white max-w-[1440px] w-full h-[80px] m-auto justify-between px-20 items-center">
      <div className="flex border border-white gap-10">
        <p>LOGO</p>
      </div>
      <div className="flex items-center justify-center gap-10 border border-white">
        <ul className="flex border border-white gap-5">
          <li>Plan</li>
          <li>Login</li>
        </ul>
        <Button variant="destructive">Sign up</Button>
      </div>
    </div>
  );
}
