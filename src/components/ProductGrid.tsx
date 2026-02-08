import { useState } from "react";
import { PRODUCTS, CATEGORIES, type ProductCategory } from "@/lib/constants";
import ProductCard from "./ProductCard";
import { motion } from "framer-motion";

export default function ProductGrid() {
  const [activeCategory, setActiveCategory] = useState<ProductCategory | "Todos">("Todos");

  const filtered =
    activeCategory === "Todos"
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category === activeCategory);

  return (
    <div>
      {/* Filters */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-wrap gap-2 mb-10"
      >
        {["Todos", ...CATEGORIES].map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat as ProductCategory | "Todos")}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              activeCategory === cat
                ? "bg-primary text-primary-foreground glow-primary"
                : "glass text-muted-foreground hover:text-foreground hover:border-primary/30"
            }`}
          >
            {cat}
          </button>
        ))}
      </motion.div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filtered.map((product, i) => (
          <ProductCard key={product.id} product={product} index={i} />
        ))}
      </div>
    </div>
  );
}
