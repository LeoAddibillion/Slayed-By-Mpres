import Link from "next/link";
import Image from "next/image";
import { services, whyChoose, whatsappLink } from "@/lib/site";
import { Crown, Heart, ShopBag, WhatsApp, IconByName } from "@/components/Icons";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="hero-glow absolute inset-0" />
        <div className="mx-auto grid max-w-7xl items-center gap-8 px-5 py-12 md:py-16 lg:grid-cols-2">
          <div className="relative z-10">
            <p className="text-sm uppercase tracking-[0.35em] text-white/80">
              Welcome to
            </p>
            <h1 className="mt-3 font-serif text-6xl font-bold leading-none md:text-7xl">
              <span className="gold-text">SLAYED</span>
              <br />
              BY MPRESS
            </h1>
            <p className="mt-4 flex items-center gap-2 font-script text-4xl text-gold md:text-5xl">
              Slay to the Core <Heart className="h-5 w-5" />
            </p>
            <p className="mt-6 max-w-md text-white/75">
              Your trusted beauty and fashion destination in Tarkwa. We help you
              look and feel your best with premium products and professional
              beauty services.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/shop"
                className="flex items-center gap-2 rounded-md gold-gradient px-6 py-3 font-semibold uppercase tracking-wide text-black transition hover:brightness-110"
              >
                <ShopBag className="h-5 w-5" /> Shop Now
              </Link>
              <a
                href={whatsappLink("Hi Slayed by Mpress! I'd like to chat.")}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-md border border-white/30 px-6 py-3 font-semibold uppercase tracking-wide text-white transition hover:border-gold hover:text-gold"
              >
                <WhatsApp className="h-5 w-5" /> Chat on WhatsApp
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-2xl">
              <Image
                src="/images/hero.jpg"
                alt="Slayed by Mpress beauty"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-4 right-2 flex h-28 w-28 flex-col items-center justify-center rounded-full border-2 border-gold bg-black/85 text-center md:h-32 md:w-32">
              <Crown className="h-5 w-5 text-gold" />
              <p className="mt-1 text-[10px] font-semibold uppercase leading-tight tracking-wider text-gold">
                Beauty
                <br />
                Fashion
                <br />
                Confidence
                <br />
                You
              </p>
              <Heart className="mt-0.5 h-3 w-3 text-gold" />
            </div>
          </div>
        </div>
        <div className="h-1.5 w-full gold-gradient" />
      </section>

      {/* SERVICES */}
      <section className="mx-auto max-w-7xl px-5 py-16">
        <SectionHeading eyebrow="What We Do" title="Our Services" />
        <div className="mt-14 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-5">
          {services.map((s) => (
            <ServiceCard key={s.slug} {...s} />
          ))}
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="border-y border-gold/20 bg-gradient-to-r from-black via-[#1a1405] to-black">
        <div className="mx-auto grid max-w-7xl items-center gap-8 px-5 py-14 lg:grid-cols-[260px_1fr]">
          <div>
            <p className="font-script text-2xl text-gold">Why Chose</p>
            <h2 className="font-serif text-4xl leading-tight">
              Slayed by <br /> Mpress?{" "}
              <Heart className="inline h-5 w-5 text-gold" />
            </h2>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-5">
            {whyChoose.map((w) => (
              <div key={w.title} className="flex flex-col items-center text-center">
                <IconByName name={w.icon} className="h-10 w-10 text-gold" />
                <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-white/85">
                  {w.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-5 py-20 text-center">
        <SectionHeading eyebrow="Ready to Glow?" title="Book Your Slay Today" />
        <p className="mx-auto mt-6 max-w-xl text-white/75">
          Whether you need a fresh wig install, a revamp, lashes or a full
          styling — we&apos;ve got you. Reserve your spot and let us bring your
          beauty vision to life.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            href="/book"
            className="rounded-md gold-gradient px-8 py-3 font-semibold uppercase tracking-wide text-black transition hover:brightness-110"
          >
            Book Now
          </Link>
          <Link
            href="/shop"
            className="rounded-md border border-gold px-8 py-3 font-semibold uppercase tracking-wide text-gold transition hover:bg-gold hover:text-black"
          >
            Explore Shop
          </Link>
        </div>
      </section>
    </>
  );
}
