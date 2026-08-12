import React from "react";
import Link from "next/link";

export default function FooterSection() {
  return (
    <footer className="bg-[#1e293b] text-white py-8 px-6 sm:px-10 lg:px-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div className="space-y-2">
          <h3 className="text-2xl font-bold text-emerald-400 tracking-tight">
            Crowdfundly
          </h3>
          <p className="text-slate-300 text-sm font-medium">
            © 2024 Crowdfundly. Empowering momentum through collective growth.
          </p>
        </div>

        {/* Right Side: Navigation Links */}
        <nav className="flex flex-wrap items-center gap-6 sm:gap-8">
          <Link
            href="/about"
            className="text-slate-200 text-sm font-bold hover:text-emerald-400 transition-colors"
          >
            About Us
          </Link>
          <Link
            href="/terms"
            className="text-slate-200 text-sm font-bold hover:text-emerald-400 transition-colors"
          >
            Terms of Service
          </Link>
          <Link
            href="/privacy"
            className="text-slate-200 text-sm font-bold hover:text-emerald-400 transition-colors"
          >
            Privacy Policy
          </Link>
          <Link
            href="/support"
            className="text-slate-200 text-sm font-bold hover:text-emerald-400 transition-colors"
          >
            Contact Support
          </Link>
        </nav>
      </div>
    </footer>
  );
}
