"use client";

import { useRouter } from "next/navigation";

export default function ButtonDetail() {
  const router = useRouter();

  const handleOnClick = () => {
    router.back();
  };

  return (
    <div
      onClick={handleOnClick}
      className="bg-orange-300 px-2 py-1 rounded-lg text-lg font-bold border border-gray-300 lg:col-span-2 cursor-pointer "
    >
      Volver
    </div>
  );
}
