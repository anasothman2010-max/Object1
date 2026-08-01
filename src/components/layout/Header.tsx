"use client";

import Link from "next/link";
import Image from "next/image"; // تم استيراد Image
import { useState } from "react";
import { NAV_LINKS } from "@/constants/navigation";
import { SITE } from "@/constants/site";
import { Container } from "@/components/layout/Container";
import { cn } from "@/lib/utils";

// افترض أن هذا هو مسار اللوجو الخاص بك، تأكد من وضعه في المجلد public
const LOGO_SRC = "/image_0.png"; 

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-ink/90 backdrop-blur-md border-b border-white/5">
      <Container className="flex h-20 items-center justify-between">
        
        {/* تعديل منطقة الشعار لتشمل الصورة والنص */}
        <Link href="/" className="group flex items-center gap-3">
          {/* إضافة عنصر الصورة */}
          <div className="relative h-10 w-10 overflow-hidden rounded-full border border-white/20 bg-white transition-transform duration-300 group-hover:scale-105">
            <Image
              src={LOGO_SRC}
              alt={`${SITE.name} Logo`}
              fill
              className="object-contain p-1.5" // تم إضافة padding بسيط
              priority
            />
          </div>
          
          {/* النص الخاص باسم الموقع */}
          <span className="font-display text-2xl font-light tracking-widest text-white transition-opacity group-hover:opacity-80">
            {SITE.name}
          </span>
        </Link>

        {/* التنقل للشاشات الكبيرة (كما هو) */}
        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm uppercase tracking-widest text-white/80 transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* زر القائمة (الهامبرجر) للشاشات الصغيرة (كما هو) */}
        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center lg:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          <span className="relative h-4 w-6">
            <span
              className={cn(
                "absolute left-0 h-0.5 w-full bg-white transition-all duration-300",
                isOpen ? "top-2 rotate-45" : "top-0",
              )}
            />
            <span
              className={cn(
                "absolute left-0 top-2 h-0.5 w-full bg-white transition-all duration-300",
                isOpen && "opacity-0",
              )}
            />
            <span
              className={cn(
                "absolute left-0 h-0.5 w-full bg-white transition-all duration-300",
                isOpen ? "top-2 -rotate-45" : "top-4",
              )}
            />
          </span>
        </button>
      </Container>

      {/* القائمة المنسدلة للشاشات الصغيرة (كما هو) */}
      <nav
        className={cn(
          "overflow-hidden border-t border-white/10 bg-ink transition-all duration-300 lg:hidden",
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <Container className="flex flex-col gap-4 py-6">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm uppercase tracking-widest text-white/80 transition-colors hover:text-white"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </Container>
      </nav>
    </header>
  );
}