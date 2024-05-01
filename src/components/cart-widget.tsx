'use client'

import { useCart } from "@/contexts/cart-context";
import { ShoppingBag } from "lucide-react";

export interface CartWidgetProps {}

export function CartWidget() {
const { items } = useCart();

  return (
    <div className="flex items-center gap-2">
      <ShoppingBag className="w-4 h-4" />
      <span>Cart ({items.length})</span>
    </div>
  );
}
