"use client";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/hooks/use-outside-click";

type Card = {
  title: string;
  description: string;
  src: string;
  images: string[];
};

export function ExpandableCardDemo() {
  const [active, setActive] = useState<Card | null>(null);
  const id = useId();
  const ref = useRef(null);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setActive(null);
    }
    document.body.style.overflow =
      active && typeof active === "object" ? "hidden" : "auto";
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      {/* Background Overlay */}
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-10"
          />
        )}
      </AnimatePresence>

      {/* Expanded Card */}
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0 grid place-items-center z-[100] p-4">
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-[650px] bg-[#E3DFD3] text-[#2F4231] rounded-3xl shadow-2xl overflow-hidden"
            >
              <motion.img
                layoutId={`image-${active.title}-${id}`}
                src={active.src}
                alt={active.title}
                className="w-full h-80 object-cover"
              />

              <div className="p-6">
                <motion.h3
                  layoutId={`title-${active.title}-${id}`}
                  className="text-3xl font-serif mb-3"
                >
                  {active.title}
                </motion.h3>
                <motion.p
                  layoutId={`description-${active.description}-${id}`}
                  className="text-base mb-6 opacity-90"
                >
                  {active.description}
                </motion.p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {active.images.map((img: string, i: number) => (
                    <img
                      key={i}
                      src={img}
                      alt={active.title}
                      className="rounded-xl shadow-md w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                    />
                  ))}
                </div>

                <div className="text-center mt-8">
                  <button
                    onClick={() => setActive(null)}
                    className="px-6 py-2 rounded-full border-2 border-[#2F4231] text-[#2F4231] hover:bg-[#2F4231] hover:text-[#E3DFD3] transition-all duration-300"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>

      {/* Cards Grid */}
      <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-8">
        {cards.map((card) => (
          <motion.div
            key={card.title}
            layoutId={`card-${card.title}-${id}`}
            onClick={() => setActive(card)}
            className="cursor-pointer bg-[#2F4231] text-[#E3DFD3] rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 w-full sm:w-[48%] lg:w-[31%]"
          >
            <motion.img
              layoutId={`image-${card.title}-${id}`}
              src={card.src}
              alt={card.title}
              className="h-56 w-full object-cover"
            />
            <div className="p-5 text-center">
              <motion.h3
                layoutId={`title-${card.title}-${id}`}
                className="text-xl font-serif mb-2"
              >
                {card.title}
              </motion.h3>
              <motion.p
                layoutId={`description-${card.description}-${id}`}
                className="text-sm opacity-90"
              >
                {card.description}
              </motion.p>
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
}

// ----------------------
// Service Cards Data
// ----------------------
const cards = [
  {
    title: "Weddings & Social Celebrations",
    description:
      "Destination weddings, themed decor, and unforgettable social events.",
    src: "/wedding-cover.jpg",
    images: ["/wed1.jpg", "/wed2.jpg", "/wed3.jpg", "/eng1.jpg"],
  },
  {
    title: "Corporate & MICE Events",
    description:
      "Conferences, retreats, exhibitions, and brand activations with impact.",
    src: "/corporate-cover.jpg",
    images: ["/conf1.jpg", "/retreat1.jpg", "/trade1.jpg"],
  },
  {
    title: "Festivals & Entertainment Events",
    description: "Concerts, fairs, and cultural celebrations across India.",
    src: "/festival-cover.jpg",
    images: ["/concert1.jpg", "/culture1.jpg", "/theatre1.jpg"],
  },
  {
    title: "Sports & Public Events",
    description: "Marathons, tournaments, rallies, and awareness campaigns.",
    src: "/sports-cover.jpg",
    images: ["/sports1.jpg", "/public1.jpg", "/charity1.jpg"],
  },
  {
    title: "Educational & Knowledge Events",
    description: "Seminars, workshops, and institutional fests.",
    src: "/education-cover.jpg",
    images: ["/edu1.jpg", "/fest1.jpg"],
  },
];
