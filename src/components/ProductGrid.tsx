import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Button } from "@/components/ui/button";
import { Grid3X3 } from "lucide-react";

// ── PRODUCTS LIST ─────────────────────────────────────────────────────────────
// Add more products here when you launch new ones — grid expands automatically
const products = [
  {
    name: "FillFeedback",
    description: "Collect smart feedback, fast.",
    logo: "/images/products/fillfeedback.webp", // ← place your logo at this path
    href: "https://fillfeedback.com",         // ← official product URL
    tag: "Live",
  },
  // Uncomment when next product is ready:
  // {
  //   name: "KunaERP",
  //   description: "ERP for growing businesses.",
  //   logo: "/products/kunaerp-logo.png",
  //   href: "https://kunaerp.com",
  //   tag: "Coming Soon",
  // },
];

// ── COMPONENT ─────────────────────────────────────────────────────────────────
export function ProductsGrid() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Close on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  // Close on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, []);

  return (
    <div ref={ref} className="relative">

      {/* ── TRIGGER — exact same styling as ThemeToggle ── */}
      <Button
        variant="outline"
        size="icon"
        onClick={() => setOpen((prev) => !prev)}
        aria-label="Kunamix Products"
        className={`
          h-9 w-9
          border-primary/30
          bg-transparent
          hover:bg-primary/10
          hover:border-primary/50
          hover:text-primary
          transition-all duration-300
          cursor-pointer
          ${open ? "text-primary border-primary/50 bg-primary/10" : "text-foreground"}
        `}
      >
        <Grid3X3 className="h-4 w-4" />
        <span className="sr-only">Kunamix Products</span>
      </Button>

      {/* ── DROPDOWN ── */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: -6 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: -6 }}
            transition={{ type: "spring", stiffness: 400, damping: 28 }}
            className="
              absolute right-0 top-11 z-50
              w-[220px]
              bg-card/95 backdrop-blur-xl
              border border-border/60
              rounded-xl shadow-xl
              overflow-hidden
            "
          >
            {/* Header label */}
            <div className="px-3 pt-3 pb-1.5">
              <p className="text-[10px] font-semibold text-muted-foreground uppercase tracking-widest">
                Our Products
              </p>
            </div>

            <div className="h-px bg-border/40 mx-3" />

            {/* Product rows */}
            <div className="p-2 flex flex-col gap-0.5">
              {products.map((product, i) => (
                <motion.a
                  key={product.name}
                  href={product.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -6 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => setOpen(false)}
                  className="
                    group flex items-center gap-3
                    px-2.5 py-2 rounded-lg
                    hover:bg-muted/60
                    transition-all duration-150
                    no-underline cursor-pointer
                  "
                >
                  {/* Product logo */}
                  <div
                    className="
                      w-8 h-8 rounded-lg overflow-hidden flex-shrink-0
                      border border-border/40 bg-muted/40
                      flex items-center justify-center
                      group-hover:border-primary/30 transition-all duration-150
                    "
                  >
                    <img
                      src={product.logo}
                      alt={product.name}
                      className="w-full h-full object-contain"
                      onError={(e) => {
                        const target = e.currentTarget;
                        target.style.display = "none";
                        const parent = target.parentElement;
                        if (parent && !parent.querySelector(".fallback-letter")) {
                          const span = document.createElement("span");
                          span.className =
                            "fallback-letter text-xs font-bold text-primary";
                          span.textContent = product.name[0];
                          parent.appendChild(span);
                        }
                      }}
                    />
                  </div>

                  {/* Name + description */}
                  <div className="flex flex-col min-w-0">
                    <span className="text-[13px] font-semibold text-foreground leading-tight group-hover:text-primary transition-colors duration-150">
                      {product.name}
                    </span>
                    <span className="text-[11px] text-muted-foreground truncate">
                      {product.description}
                    </span>
                  </div>

                  {/* External link icon */}
                  <svg
                    className="w-3 h-3 text-muted-foreground/40 group-hover:text-primary flex-shrink-0 ml-auto transition-all duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </motion.a>
              ))}
            </div>

            {/* Footer */}
            <div className="h-px bg-border/40 mx-3" />
            <div className="px-3 py-2">
              <p className="text-[10px] text-muted-foreground/60 text-center">
                More products coming soon
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default ProductsGrid;