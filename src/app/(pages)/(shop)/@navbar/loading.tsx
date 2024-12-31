"use client";

import { useEffect, useState } from "react";

export default function ShopNavbarLoading() {
  const [loadingItems, setLoadingItems] = useState<string[]>([""]);

  useEffect(() => {
    const isLoadingItemsLessThanLimit = loadingItems.length < 8;
    if (isLoadingItemsLessThanLimit) {
      const interval = setInterval(() => {
        setLoadingItems((loadingItems) => [...loadingItems, ""]);
      }, 1 * 1000);
      return () => clearInterval(interval);
    }
  }, [loadingItems]);

  return (
    <aside className="w-96 bg-primary-50 px-4">
      <nav className="w-full h-fit bg-primary-100 rounded p-4 sticky top-4">
        <div className="w-full flex flex-col gap-4">
          {loadingItems.map((_, index) => (
            <div
              key={`${_} - ${index}`}
              className="w-full h-24 animate-pulse bg-primary-300 rounded transition-all"
            >
              {index + 1}
            </div>
          ))}
        </div>
      </nav>
    </aside>
  );
}
