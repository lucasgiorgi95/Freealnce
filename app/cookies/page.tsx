import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Política de cookies",
  description: "Información sobre el uso de cookies en este sitio web.",
  robots: { index: false, follow: false },
};

export default function CookiesPage() {
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
          Política de cookies
        </h1>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-10">
          Última actualización: {/* TODO: add date */}
        </p>

        {/* ─── PLACEHOLDER ─────────────────────────────────────────────────────────
            Replace with actual cookie policy before launching.
            Required by LSSI-CE and RGPD in Spain.
        ──────────────────────────────────────────────────────────────────────── */}

        <div className="space-y-8 text-gray-700 dark:text-gray-300">
          <div className="bg-amber-50 dark:bg-amber-950 border border-amber-200 dark:border-amber-800 text-amber-800 dark:text-amber-300 rounded-xl p-5 text-sm">
            <p className="font-bold mb-2">⚠️ Contenido pendiente</p>
            <p>
              Esta página es un placeholder. Antes de publicar el sitio, completa la política de
              cookies indicando qué cookies utiliza la web (propias, de terceros, de análisis,
              etc.) y cómo el usuario puede gestionarlas o rechazarlas.
            </p>
          </div>

          <section aria-labelledby="que-son">
            <h2 id="que-son" className="text-xl font-bold text-gray-900 dark:text-white mb-3">
              ¿Qué son las cookies?
            </h2>
            <p>
              Las cookies son pequeños ficheros de texto que se almacenan en tu dispositivo cuando
              visitas un sitio web. Permiten que el sitio recuerde tus preferencias y mejore tu
              experiencia de navegación.
            </p>
          </section>

          <section aria-labelledby="tipos">
            <h2 id="tipos" className="text-xl font-bold text-gray-900 dark:text-white mb-3">
              Tipos de cookies utilizadas
            </h2>
            <p className="bg-amber-50 dark:bg-amber-950 border border-amber-200 dark:border-amber-800 text-amber-800 dark:text-amber-300 rounded-xl p-4 text-sm">
              ⚠️ <strong>Placeholder:</strong> Detalla aquí qué cookies específicas usa tu web
              (p. ej. Google Analytics, cookies de sesión, etc.).
            </p>
          </section>

          <section aria-labelledby="gestion">
            <h2 id="gestion" className="text-xl font-bold text-gray-900 dark:text-white mb-3">
              Cómo gestionar las cookies
            </h2>
            <p>
              Puedes configurar tu navegador para rechazar todas las cookies o para que te avise
              cuando se envía una cookie. Consulta la ayuda de tu navegador para más información.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
