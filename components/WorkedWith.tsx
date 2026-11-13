// Logos: add a file to /public/images and set `logo` to show the image instead of the name.
const partners: { name: string; logo?: string }[] = [
  { name: "Canadian International School" },
  { name: "Renaissance College" },
  { name: "Po Leung Kuk Centenary College" },
  { name: "PressStart Academy" },
  { name: "Indiahikes", logo: "/images/logo-indiahikes.jpeg" },
  { name: "The MixedBag Company", logo: "/images/logo-mixedbag.avif" },
  { name: "Vatavriksha", logo: "/images/logo-vatavriksha.jpg" },
  { name: "Hong Kong International Literary Festival" },
  { name: "Federation of Asian Storytellers" },
  { name: "Udaipur Tales" },
  { name: "Mumbai Storytelling Society" },
  { name: "Hong Kong Stories" },
];

export default function WorkedWith() {
  return (
    <section className="mx-auto max-w-[1200px] px-4 pb-16 sm:px-6 md:pb-20">
      <h2 className="font-display text-[26px] font-semibold tracking-[-0.01em] md:text-[30px]">
        Worked with
      </h2>
      <ul className="mt-8 flex flex-wrap items-center gap-x-10 gap-y-6">
        {partners.map((p) => (
          <li key={p.name} className="flex h-12 items-center">
            {p.logo ? (
              <img
                src={p.logo}
                alt={p.name}
                title={p.name}
                className="h-12 max-w-[140px] rounded-sm object-contain"
              />
            ) : (
              <span className="max-w-[180px] font-display text-[14px] font-semibold leading-tight text-cream/80">
                {p.name}
              </span>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}
