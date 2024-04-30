import db from "@/app/db/db";
import ProductCard, { ProductCardSceleton } from "@/components/ProductCard";
import { cache } from "@/lib/cache";
import React, { Suspense } from "react";

const getProducts = cache(() => {
  return db.product.findMany({
    where: { isAvailableForPurchase: true },
    orderBy: { name: "asc" },
  });
}, ["/products", "getProducts"]);

export default function ProductsPage() {
  return (
    <div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 
gap-4"
    >
      <Suspense
        fallback={
          <>
            <ProductCardSceleton />
            <ProductCardSceleton />
            <ProductCardSceleton />
          </>
        }
      >
        <ProductsSuspense />
      </Suspense>
    </div>
  );
}

async function ProductsSuspense() {
  const products = await getProducts();

  return products.map((p) => <ProductCard key={p.id} {...p} />);
}
