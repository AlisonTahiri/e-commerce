import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { formatCurrency } from "@/lib/formatters";
import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";

type ProductCardProps = {
  name: string;
  description: string;
  id: string;
  imagePath: string;
  priceInCents: number;
};

export default function ProductCard({
  id,
  imagePath,
  name,
  description,
  priceInCents,
}: ProductCardProps) {
  return (
    <Card className="flex overflow-clip flex-col">
      <div className="relative w-full h-auto aspect-video">
        <Image priority src={imagePath} fill alt={name} />
      </div>
      <CardHeader>
        <CardTitle>{name}</CardTitle>
        <CardDescription>{formatCurrency(priceInCents / 100)}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="line-clamp-4">{description}</p>
      </CardContent>
      <CardFooter>
        <Button asChild size="lg" className="w-full">
          <Link href={`/products/${id}/purchase`}>Purchase</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}

export function ProductCardSceleton() {
  return (
    <Card className="flex overflow-clip flex-col animate-pulse">
      <div className="w-full bg-gray-300 aspect-video" />
      <CardHeader>
        <CardTitle>
          <div className="w-3/4 h-6 rounded-full bg-gray-300"></div>
        </CardTitle>
        <CardDescription>
          <div className="w-1/2 h-4 rounded-full bg-gray-300"></div>
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="w-full h-4 rounded-full bg-gray-300"></div>
        <div className="w-full h-4 rounded-full bg-gray-300"></div>
        <div className="w-full h-4 rounded-full bg-gray-300"></div>
      </CardContent>
      <CardFooter>
        <Button disabled size="lg" className="w-full" />
      </CardFooter>
    </Card>
  );
}
