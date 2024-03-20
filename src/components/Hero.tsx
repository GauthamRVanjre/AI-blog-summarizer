import React from "react";
import logo from "../assets/logo.svg";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";

interface HeroProps {
  fullName: string | null | undefined;
  id: string | undefined;
}

const Hero: React.FC<HeroProps> = ({ fullName }) => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <img src={logo} alt="logo" className="w-28 object-contain" />

        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </nav>

      <h1 className="head_text">
        Summarize Articles with <br className="max-md:hidden" />
        <span className="orange_gradient">OpenAI GPT-4</span>
      </h1>
      {fullName && <h2 className="desc">Hello, {fullName}</h2>}
    </header>
  );
};

export default Hero;
