import db from "@/app/db/db";
import { notFound } from "next/navigation";
import React from "react";

export default async function PurchasePage({
  params: { id },
}: {
  params: { id: string };
}) {
  const product = await db.product.findUnique({
    where: { id },
  });

  if (product == null) return notFound();

  return <div>Purchase</div>;
}
