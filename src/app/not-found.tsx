import { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "404",
  description: "Something went wrong",
}

export default function NotFound() {
  return (
    <div className="flex flex-col gap-6 items-center justify-center min-h-[calc(100vh-64px)] bg-[#0a0a0a]">
      <p className="text-[8rem] font-bold text-gray-800 leading-none select-none">
        404
      </p>
      <h1 className="text-2xl font-semibold text-white">
        Seite nicht gefunden
      </h1>
      <Link
        href="/"
        className="mt-2 px-6 py-3 bg-[#4ade80] text-black font-semibold rounded-md hover:bg-[#22c55e] transition-colors duration-200"
      >
        Zurück zur Startseite
      </Link>
    </div>
  )
}
