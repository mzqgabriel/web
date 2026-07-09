import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import heroImg from "@/assets/hero.jpg";
import interiorImg from "@/assets/interior.jpg";
import aboutImg from "@/assets/about.jpg";
import result1 from "@/assets/result1.jpg";
import result2 from "@/assets/result2.jpg";
import result3 from "@/assets/result3.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

const services = [
  {
    name: "Masaj Sculptural Facial",
    desc: "Tehnică semnătură ce redefinește pomeții, conturul mandibular și structura feței prin manevre profunde de sculptare.",
    duration: "75 min",
    price: "450",
  },
  {
    name: "Masaj Miorelaxant Facial",
    desc: "Relaxare profundă a musculaturii faciale, dizolvarea tensiunii acumulate și restabilirea armoniei trăsăturilor.",
    duration: "60 min",
    price: "350",
  },
  {
    name: "Drenaj Limfatic Facial",
    desc: "Detoxifiere delicată prin stimularea sistemului limfatic — pentru un ten decongestionat și luminos.",
    duration: "50 min",
    price: "320",
  },
  {
    name: "Lifting Instant",
    desc: "Tratament expres de tonifiere și liftare imediată, ideal înaintea unui eveniment important.",
    duration: "45 min",
    price: "290",
  },
  {
    name: "Ritual Reîntinerire Completă",
    desc: "Experiență holistică ce combină sculptura, drenajul și liftingul — pentru o transformare vizibilă și durabilă.",
    duration: "120 min",
    price: "780",
  },
  {
    name: "Ceremonia Kobido",
    desc: "Tehnică ancestrală japoneză a împărăteselor — reîntinerire naturală prin ritm și presiune calibrată.",
    duration: "90 min",
    price: "560",
  },
];

function Index() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { href: "#home", label: "Acasă" },
    { href: "#about", label: "Despre mine" },
    { href: "#services", label: "Servicii" },
    { href: "#gallery", label: "Galerie" },
    { href: "#contact", label: "Programări" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* NAVIGATION */}
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-background/90 backdrop-blur-xl border-b border-border py-4"
            : "bg-transparent py-6"
        }`}
      >
        <div className="container-luxe flex items-center justify-between">
          <a href="#home" className="flex items-baseline gap-2 group">
            <span className="font-display text-2xl tracking-wide text-gold-gradient">
              Sculptor
            </span>
            <span className="font-display italic text-sm text-muted-foreground group-hover:text-gold transition-colors">
              Facial
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-xs tracking-[0.24em] uppercase text-muted-foreground hover:text-gold transition-colors duration-300"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <a href="#contact" className="btn-outline-gold hidden md:inline-flex">
            Rezervă
          </a>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-gold p-2"
            aria-label="Meniu"
          >
            <div className="w-6 flex flex-col gap-1.5">
              <span className={`h-px bg-current transition-all ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`h-px bg-current transition-all ${menuOpen ? "opacity-0" : ""}`} />
              <span className={`h-px bg-current transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </div>
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-background/95 backdrop-blur-xl border-t border-border mt-4">
            <div className="container-luxe py-6 flex flex-col gap-5">
              {navLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-xs tracking-[0.24em] uppercase text-muted-foreground hover:text-gold"
                >
                  {l.label}
                </a>
              ))}
              <a href="#contact" onClick={() => setMenuOpen(false)} className="btn-outline-gold mt-2 self-start">
                Rezervă
              </a>
            </div>
          </div>
        )}
      </header>

      {/* HERO */}
      <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt="Ședință de masaj sculptural facial într-un cadru intim"
            width={1920}
            height={1280}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-background/40" />

        </div>

        <div className="container-luxe relative z-10 pt-32 pb-20">
          <div className="max-w-3xl">
            <span className="eyebrow mb-8">Sculptor Facial · Est. 2019</span>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[1.02] mb-8">
              Sculptură Facială.
              <br />
              <span className="italic font-light text-gold-gradient">Reîntinerire</span>
              <br />
              Naturală prin Masaj.
            </h1>
            <p className="text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed mb-10 font-light">
              O clinică dedicată artei liftingului natural. Fără injectabile, fără intervenții
              invazive — doar tehnici manuale rafinate care redau feței conturul, luminozitatea
              și tinerețea sa autentică.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#contact" className="btn-gold btn-gold-hover">
                Programează o ședință
              </a>
              <a href="#services" className="btn-outline-gold">
                Descoperă tratamentele
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3">
          <span className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground">
            Scroll
          </span>
          <div className="w-px h-12 bg-gradient-to-b from-gold to-transparent" />
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="relative py-32 md:py-40">
        <div className="container-luxe grid md:grid-cols-12 gap-12 md:gap-20 items-center">
          <div className="md:col-span-5 relative">
            <div className="relative aspect-[4/5] overflow-hidden">
              <img
                src={aboutImg}
                alt="Portretul terapeutei fondatoare Sculptor Facial"
                width={900}
                height={1100}
                loading="lazy"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 border border-border-gold pointer-events-none" />
            </div>
            <div className="absolute -bottom-8 -right-8 hidden md:block border border-gold p-8 bg-background">
              <div className="text-4xl font-display text-gold-gradient">07</div>
              <div className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground mt-2">
                Ani de practică
              </div>
            </div>
          </div>

          <div className="md:col-span-7">
            <span className="eyebrow mb-8">Despre mine</span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05] mb-8">
              Pasiune pentru frumusețe,{" "}
              <span className="italic text-gold-gradient">mână formată.</span>
            </h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed font-light md:text-lg">
              <p>
                Sunt Alexandra, fondatoarea Sculptor Facial, și am ales să sculptez
                frumusețea autentică a feței prin tehnici manuale rafinate, fără
                injectabile și fără compromisuri. Fiecare ședință este pentru mine
                o promisiune: să redea tenului tău contur, lumină și prospețime.
              </p>
              <p>
                Am studiat cu maeștri din Paris, Tokyo și Milano, îmbinând Kobido,
                drenajul limfatic, sculptura facială și miorelaxarea într-un ritual
                personalizat pentru tine. Cred că adevărata reîntinerire începe
                când mintea se liniștește și mușchii feței își regăsesc armonia.
              </p>
            </div>
            <div className="hairline my-10" />
            <div className="grid grid-cols-3 gap-6">
              {[
                { n: "1200+", l: "Clienți transformați" },
                { n: "100%", l: "Non-invaziv" },
                { n: "6", l: "Tehnici semnatură" },
              ].map((s) => (
                <div key={s.l}>
                  <div className="font-display text-3xl md:text-4xl text-gold-gradient">
                    {s.n}
                  </div>
                  <div className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground mt-2">
                    {s.l}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="relative py-32 md:py-40 bg-surface">
        <div className="container-luxe">
          <div className="max-w-2xl mb-20">
            <span className="eyebrow mb-6">Tratamente Signature</span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05] mb-6">
              Servicii{" "}
              <span className="italic text-gold-gradient">de excepție.</span>
            </h2>
            <p className="text-muted-foreground font-light md:text-lg leading-relaxed">
              Fiecare tratament este calibrat în funcție de structura, tenul și nevoile tale
              unice. O consultație inițială gratuită precede orice ceremonie.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <article
                key={s.name}
                className="group relative bg-background border border-border hover:border-border-gold transition-all duration-500 p-8 md:p-10 flex flex-col"
              >
                <div className="flex items-start justify-between mb-8">
                  <span className="font-display text-sm text-gold-deep">
                    0{i + 1}
                  </span>
                  <span className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground">
                    {s.duration}
                  </span>
                </div>

                <h3 className="font-display text-2xl md:text-3xl leading-tight mb-4 group-hover:text-gold transition-colors duration-500">
                  {s.name}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed font-light mb-8 flex-1">
                  {s.desc}
                </p>

                <div className="hairline mb-6" />

                <div className="flex items-end justify-between">
                  <div>
                    <div className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground mb-1">
                      De la
                    </div>
                    <div className="font-display text-3xl text-gold-gradient">
                      {s.price} <span className="text-sm text-muted-foreground">RON</span>
                    </div>
                  </div>
                  <a
                    href="#contact"
                    className="text-[10px] tracking-[0.28em] uppercase text-gold hover:text-gold-soft transition-colors"
                  >
                    Detalii →
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="relative py-32 md:py-40">
        <div className="container-luxe">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
            <div className="max-w-xl">
              <span className="eyebrow mb-6">Rezultate & Atelier</span>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05]">
                Transformări{" "}
                <span className="italic text-gold-gradient">tăcute.</span>
              </h2>
            </div>
            <p className="text-muted-foreground font-light max-w-sm md:text-right">
              Rezultate documentate din arhiva noastră privată — și glimpse-uri din
              atmosfera atelierului.
            </p>
          </div>

          <div className="grid md:grid-cols-12 gap-4 md:gap-6">
            <figure className="md:col-span-5 md:row-span-2 relative overflow-hidden group aspect-[4/5] md:aspect-auto">
              <img
                src={result1}
                alt="Contur facial redefinit după tratamentul sculptural"
                width={900}
                height={1100}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
              />
              <figcaption className="absolute bottom-6 left-6 text-xs tracking-[0.25em] uppercase text-gold-soft">
                Sculptură · 6 ședințe
              </figcaption>
            </figure>
            <figure className="md:col-span-7 relative overflow-hidden group aspect-[16/10]">
              <img
                src={interiorImg}
                alt="Cameră de tratament din clinica Sculptor Facial"
                width={1200}
                height={900}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
              />
              <figcaption className="absolute bottom-6 left-6 text-xs tracking-[0.25em] uppercase text-gold-soft">
                Atelier · Sala Aurum
              </figcaption>
            </figure>
            <figure className="md:col-span-4 relative overflow-hidden group aspect-square">
              <img
                src={result3}
                alt="Instrumente de gua sha și jade utilizate în tratamente"
                width={900}
                height={1100}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
              />
              <figcaption className="absolute bottom-6 left-6 text-xs tracking-[0.25em] uppercase text-gold-soft">
                Ritual · Gua Sha
              </figcaption>
            </figure>
            <figure className="md:col-span-3 relative overflow-hidden group aspect-square">
              <img
                src={result2}
                alt="Ședință în desfășurare"
                width={900}
                height={1100}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
              />
              <figcaption className="absolute bottom-6 left-6 text-xs tracking-[0.25em] uppercase text-gold-soft">
                Kobido · Ceremonie
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="relative py-32 md:py-40 bg-surface">
        <div className="container-luxe grid md:grid-cols-12 gap-16">
          <div className="md:col-span-5">
            <span className="eyebrow mb-6">Programări</span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05] mb-8">
              Rezervă-ți{" "}
              <span className="italic text-gold-gradient">ceremonia.</span>
            </h2>
            <p className="text-muted-foreground font-light leading-relaxed mb-12 md:text-lg">
              Numărul de ședințe disponibile este intenționat limitat, pentru a păstra
              intimitatea și calitatea experienței. Vă răspundem în maximum 24 de ore.
            </p>

            <div className="space-y-8">
              <ContactLine label="Adresă" value="Strada Aurelian 12, Sector 1, București" />
              <ContactLine label="Program" value="Marți – Sâmbătă · 10:00 — 20:00" />
              <ContactLine label="Telefon" value="+40 721 000 000" />
              <ContactLine label="Email" value="rezervari@sculptorfacial.ro" />
            </div>

            <div className="hairline my-10" />

            <div className="flex gap-6">
              {["Instagram", "Facebook", "TikTok"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="text-[10px] tracking-[0.28em] uppercase text-muted-foreground hover:text-gold transition-colors"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert("Mulțumim! Vă vom contacta în cel mai scurt timp.");
            }}
            className="md:col-span-7 bg-background border border-border p-8 md:p-12 relative"
          >
            <div className="absolute -top-px left-8 right-8 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
            <h3 className="font-display text-2xl md:text-3xl mb-8">Formular de rezervare</h3>

            <div className="grid md:grid-cols-2 gap-6">
              <LuxeField label="Nume complet" name="name" required />
              <LuxeField label="Telefon" name="phone" type="tel" required />
              <LuxeField label="Email" name="email" type="email" required className="md:col-span-2" />

              <div className="flex flex-col gap-2">
                <label className="text-[10px] tracking-[0.28em] uppercase text-muted-foreground">
                  Serviciu dorit
                </label>
                <select
                  name="service"
                  required
                  className="bg-transparent border-b border-border focus:border-gold outline-none py-3 text-foreground transition-colors font-light"
                >
                  <option value="" className="bg-background">
                    Selectează
                  </option>
                  {services.map((s) => (
                    <option key={s.name} value={s.name} className="bg-background">
                      {s.name}
                    </option>
                  ))}
                </select>
              </div>

              <LuxeField label="Data preferată" name="date" type="date" />

              <div className="flex flex-col gap-2 md:col-span-2">
                <label className="text-[10px] tracking-[0.28em] uppercase text-muted-foreground">
                  Mesaj (opțional)
                </label>
                <textarea
                  name="message"
                  rows={3}
                  className="bg-transparent border-b border-border focus:border-gold outline-none py-3 text-foreground transition-colors font-light resize-none"
                />
              </div>
            </div>

            <button type="submit" className="btn-gold btn-gold-hover mt-10 w-full md:w-auto">
              Trimite rezervarea
            </button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border py-12">
        <div className="container-luxe flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="font-display text-lg text-gold-gradient">Sculptor Facial</div>
          <div className="text-[10px] tracking-[0.28em] uppercase text-muted-foreground">
            © {new Date().getFullYear()} · București · Toate drepturile rezervate
          </div>
        </div>
      </footer>
    </div>
  );
}

function ContactLine({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="text-[10px] tracking-[0.28em] uppercase text-gold mb-2">{label}</div>
      <div className="text-foreground font-light md:text-lg">{value}</div>
    </div>
  );
}

function LuxeField({
  label,
  name,
  type = "text",
  required,
  className = "",
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  className?: string;
}) {
  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      <label htmlFor={name} className="text-[10px] tracking-[0.28em] uppercase text-muted-foreground">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="bg-transparent border-b border-border focus:border-gold outline-none py-3 text-foreground transition-colors font-light"
      />
    </div>
  );
}
