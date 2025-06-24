import { ArrowUp } from "lucide-react";
import React from "react";

export const Footer = () => {
  return (
    <footer className="py-12 px-4 bg-card relative border-t border-border mt-12 pt-8 flex flex-wrap justify-center ">
      <a
        href="#hero"
        className="  p-2 rounded-full bg-primary/10 hover:pg-primary/20 text-primary transition-colors"
      >
        <ArrowUp size={20} />
      </a>
    </footer>
  );
};
