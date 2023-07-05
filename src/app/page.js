import Button from "@/components/Button"
import Link from "next/link"

export default function Home() {
  return (
    <main className="flex items-center justify-center min-h-screen">
      <Link href="/Profile"><Button>Profile</Button></Link>
    </main>
  )
}