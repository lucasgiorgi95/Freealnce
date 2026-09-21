import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Aviso legal",
  description: "Aviso legal e información sobre el titular del sitio web.",
  robots: { index: false, follow: false },
};

export default function AvisoLegalPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-950 py-24 px-4">
      <div className="max-w-3xl mx-auto">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-indigo-600 dark:text-indigo-400 hover:underline mb-8"
        >
          ← Volver al inicio
        </Link>

        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          Aviso legal
        </h1>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-10">
          Última actualización: {/* TODO: add date */}
        </p>

        {/* ─── PLACEHOLDER ─────────────────────────────────────────────────────────
            Required by LSSI-CE (Ley 34/2002) for websites operating in Spain.
            Replace with your actual legal details before launching.
        ──────────────────────────────────────────────────────────────────────── */}

        <div className="space-y-8 text-gray-700 dark:text-gray-300">
          <div className="bg-amber-50 dark:bg-amber-950 border border-amber-200 dark:border-amber-800 text-amber-800 dark:text-amber-300 rounded-xl p-5 text-sm">
            <p className="font-bold mb-2">⚠️ Contenido pendiente</p>
            <p>
              Esta página es un placeholder. La LSSI-CE exige que el aviso legal incluya los datos
              identificativos del titular (nombre, NIF/NIE, domicilio, etc.) antes de la
              publicación del sitio.
            </p>
          </div>

          <section aria-labelledby="titular">
            <h2 id="titular" className="text-xl font-bold text-gray-900 dark:text-white mb-3">
              1. Datos del titular
            </h2>
            <ul className="space-y-1 text-sm">
              <li><strong>Nombre:</strong> {SITE.name}</li>
              <li><strong>NIF/NIE:</strong> [PENDIENTE]</li>
              <li><strong>Domicilio:</strong> [PENDIENTE]</li>
              <li>
                <strong>Email:</strong>{" "}
                <a href={`mailto:${SITE.email}`} className="text-indigo-600 dark:text-indigo-400">
                  {SITE.email}
                </a>
              </li>
              <li><strong>Web:</strong> {SITE.url}</li>
            </ul>
          </section>

          <section aria-labelledby="objeto">
            <h2 id="objeto" className="text-xl font-bold text-gray-900 dark:text-white mb-3">
              2. Objeto
            </h2>
            <p>
              El presente aviso legal regula el acceso y uso del sitio web {SITE.url}, titularidad
              de {SITE.name}, con el fin de ofrecer información sobre los servicios de desarrollo
              web prestados.
            </p>
          </section>

          <section aria-labelledby="propiedad">
            <h2 id="propiedad" className="text-xl font-bold text-gray-900 dark:text-white mb-3">
              3. Propiedad intelectual
            </h2>
            <p>
              Todos los contenidos del sitio web (textos, imágenes, diseño, código fuente) son
              propiedad de {SITE.name} o de sus licenciantes y están protegidos por la legislación
              vigente en materia de propiedad intelectual.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
