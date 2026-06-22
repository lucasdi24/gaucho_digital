// src/app/page.tsx
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-dvh grid place-items-center p-10">
      <div className="text-center space-y-6">
        <h1 className="text-3xl font-semibold">Gaucho Digital</h1>
        <p className="text-muted-foreground">
          Portal para clientes y equipo. Probemos shadcn/ui 👇
        </p>
        <div className="flex gap-3 justify-center">
          <Button asChild><Link href="/signin">Ir a Login</Link></Button>
          <Button variant="outline" asChild>
            <Link href="https://github.com/lucasdi24/gaucho_digital" target="_blank">Ver repo</Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
