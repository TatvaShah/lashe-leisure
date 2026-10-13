import type { SiteConfig } from "@/lib/types";

export const site: SiteConfig = {
  name: "Lashé Leisure",
  tagline: "Classic, hybrid, wet and volume lash sets in Vaughan. Soft, clean and customized to your eyes.",
  category: "Lash extensions",
  schemaType: "BeautySalon",
  area: "Vaughan, ON",
  siteUrl: "https://lashe-leisure.vercel.app",

  theme: {
    preset: "salon-chic",
    colors: { accent: "#8B5E4B" },
  },
  logo: "/images/logo.png",
  showNameWithLogo: true,

  hero: {
    variant: "split",
    eyebrow: "Certified lash tech in Vaughan",
    headline: "Lash with a little leisure",
    subhead: "Classic, hybrid, wet and volume sets customized to enhance your eyes. Book online, or DM if you cannot find a time that works.",
    images: [
      { src: "/images/post-2.jpg", alt: "Natural wet set lashes by Lashé Leisure" },
      { src: "/images/post-1.jpg", alt: "Close up of a natural wet lash set" },
      { src: "/images/post-5.jpg", alt: "Soft glam clean lash close up" },
    ],
    secondaryCta: { label: "See the sets", href: "#gallery" },
  },

  highlights: [
    "Certified lash tech",
    "Vaughan, ON",
    "Classic, hybrid, wet and volume",
    "Book online or by DM",
  ],

  about: {
    title: "Your dream set, your style",
    body: [
      "Lashé Leisure is a certified lash tech in Vaughan offering classic, hybrid, wet and volume sets customized to complement your eyes and the look you want.",
      "Book your set online. If you cannot find a time that works, send a DM and we will sort it out.",
    ],
    image: { src: "/images/post-7.jpg", alt: "Happy client after lash appointment" },
  },

  menu: {
    label: "Services",
    title: "Lash menu",
    intro: "Your dream set, your style. Each look is customized to your eyes. Halloween special pricing is below while it lasts.",
    variant: "list",
    groups: [
      {
        title: "Full sets",
        note: "Halloween special",
        items: [
          { name: "Classic set", price: "$50", description: "Full set. Special ends November 1." },
          { name: "Hybrid set", price: "$50", description: "Full set. Special ends November 1." },
          { name: "Wet set", price: "$50", description: "Natural wet look. Full set special ends November 1." },
          { name: "Volume set", price: "$50", description: "Full set. Special ends November 1." },
          { name: "Open eye volume", description: "Volume set shaped to brighten and open the eyes." },
        ],
      },
    ],
    footnote: "Halloween special: all full sets $50 until November 1. Introductory menu available for a limited time.",
  },

  gallery: {
    title: "Recent sets",
    items: [
      { src: "/images/post-2.jpg", width: 1080, height: 1440, alt: "Natural wet set", caption: "Natural wet set", href: "https://www.instagram.com/p/DeZ08kkGR5J/" },
      { src: "/images/post-1.jpg", width: 1080, height: 900, alt: "Wet set close up", caption: "Wet set close up", href: "https://www.instagram.com/p/DeZ1244ghw2/" },
      { src: "/images/post-3.jpg", width: 1080, height: 1440, alt: "Halloween special promo", caption: "Halloween special $50", href: "https://www.instagram.com/p/DeUttH0g7lB/" },
      { src: "/images/post-5.jpg", width: 941, height: 1254, alt: "Soft glam lashes", caption: "Soft glam", href: "https://www.instagram.com/p/Dd-YGcNjDjW/" },
      { src: "/images/post-4.jpg", width: 640, height: 1136, alt: "Open eye volume set", caption: "Open eye volume", href: "https://www.instagram.com/p/DeQVUPpM8CW/" },
      { src: "/images/post-7.jpg", width: 1080, height: 1440, alt: "Client after appointment", caption: "That girl energy", href: "https://www.instagram.com/p/DddFvY4AFWw/" },
      { src: "/images/post-6.jpg", width: 720, height: 900, alt: "Lash menu introduction", caption: "Lash menu", href: "https://www.instagram.com/p/DdiB5NFDMso/" },
      { src: "/images/post-8.jpg", width: 1080, height: 1440, alt: "Lashé Leisure effect", caption: "The Lashé Leisure effect", href: "https://www.instagram.com/p/Ddc-hOOjDE5/" },
    ],
  },

  reels: { items: [] },

  instagram: {
    handle: "lasheleisure",
    embeds: [
      "https://www.instagram.com/p/DeZ08kkGR5J/",
      "https://www.instagram.com/p/DeUttH0g7lB/",
    ],
    embedsTitle: "Fresh from Instagram",
  },

  order: {
    label: "How to book",
    headerCtaLabel: "Book a set",
    title: "Book your set",
    intro: "Use the booking link for available times. Prefer a DM starter message? Tap the button to copy one, then paste it into Instagram.",
    dmMessage: "Hi Lashé Leisure! I would like to book a lash set.\nPreferred date and time:\nSet type (classic / hybrid / wet / volume):\nAny notes about the look:",
    links: [
      { label: "Book online (Acuity)", href: "https://lasheleisurebooking.as.me/" },
    ],
    note: "Cannot find a time that works? DM and we will help. Halloween special ends November 1.",
  },

  reviews: { items: [] },

  faq: [
    { q: "How do I book?", a: "Use the online booking link for available times. If nothing fits, send a DM on Instagram." },
    { q: "Where are you located?", a: "Lashé Leisure is in Vaughan, Ontario. Exact details are shared when you book." },
    { q: "What sets do you offer?", a: "Classic, hybrid, wet and volume full sets, including open eye volume looks customized to your eyes." },
    { q: "Is there a Halloween special?", a: "Yes. All full sets are $50 until November 1." },
  ],

  contact: {
    title: "Contact and booking",
    area: "Vaughan, Ontario",
  },

  seo: {
    title: "Lashé Leisure | Lash extensions in Vaughan",
    description: "Certified lash tech in Vaughan offering classic, hybrid, wet and volume sets. Book online or by Instagram DM. Halloween full sets $50 until November 1.",
    keywords: ["Vaughan lashes", "lash extensions Vaughan", "wet set lashes GTA", "volume lashes Vaughan"],
    ogPhoto: "/images/og-photo.jpg",
  },
};
