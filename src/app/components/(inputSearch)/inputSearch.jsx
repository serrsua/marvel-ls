"use client";
import Search from "./Search";
import { useDebouncedCallback } from "use-debounce";
import { useSearchParams, useRouter, usePathname } from "next/navigation";

export default function InputSearch() {
  const { replace } = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const TIME_BETWEEN_SEARCH = 500

  const handleOnChange = useDebouncedCallback((search) => {
    const params = new URLSearchParams(searchParams);
    if (search) {
      params.set("search", search);
    } else {
      params.delete("search");
    }
    params.set("offset", "0")

    replace(`${pathname}?${params.toString()}`);
  }, TIME_BETWEEN_SEARCH);

  return (
    <form className="flex gap-2 items-center mr-5 relative">
      <input
        className="w-[170px] md:w-[250px] px-2 py-2 pl-8 text-black rounded text-base bg-teal-50 focus:outline-green-600"
        onChange={(e) => handleOnChange(e.target.value)}
        autoComplete="off"
        type="text"
        name="query"
        placeholder="Buscar por nombre..."
        title="Buscar por nombre..."
        defaultValue={searchParams.get("search")}
      />
      <Search />
    </form>
  );
}
