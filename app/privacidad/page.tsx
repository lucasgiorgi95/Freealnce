import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Política de privacidad",
  description: "Información sobre el tratamiento de tus datos personales.",
  robots: { index: false, follow: false },
};

export default function PrivacidadPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-950 py-24 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Back */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-indigo-600 dark:text-indigo-400 hover:underline mb-8"
        >
          ← Volver al inicio
        </Link>

        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          Política de privacidad
        </h1>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-10">
          Última actualización: {/* TODO: add date */}
        </p>

        {/* ─── PLACEHOLDER ─────────────────────────────────────────────────────────
            Replace the sections below with the actual legal text before launching.
            Consider using a legal text generator for Spain (RGPD / LOPD-GDD) or
            consulting a specialist.
        ──────────────────────────────────────────────────────────────────────── */}

        <div className="prose prose-gray dark:prose-invert max-w-none space-y-8 text-gray-700 dark:text-gray-300">
          <section aria-labelledby="responsable">
            <h2 id="responsable" className="text-xl font-bold text-gray-900 dark:text-white mb-3">
              1. Responsable del tratamiento
            </h2>
            <p>
              <strong>Nombre:</strong> {SITE.name}
              <br />
              <strong>Email:</strong>{" "}
              <a href={`mailto:${SITE.email}`} className="text-indigo-600 dark:text-indigo-400">
                {SITE.email}
              </a>
            </p>
            <p className="bg-amber-50 dark:bg-amber-950 border border-amber-200 dark:border-amber-800 text-amber-800 dark:text-amber-300 rounded-xl p-4 text-sm">
              ⚠️ <strong>Placeholder:</strong> Completa este apartado con tu NIF/NIE y domicilio
              fiscal antes de publicar el sitio.
            </p>
          </section>

          <section aria-labelledby="datos">
            <h2 id="datos" className="text-xl font-bold text-gray-900 dark:text-white mb-3">
              2. Datos que recopilamos
            </h2>
            <p>
              A través del formulario de contacto recopilamos: nombre, correo electrónico, nombre
              de empresa (opcional) y el mensaje que nos envías.
            </p>
          </section>

          <section aria-labelledby="finalidad">
            <h2 id="finalidad" className="text-xl font-bold text-gray-900 dark:text-white mb-3">
              3. Finalidad del tratamiento
            </h2>
            <p>
              Los datos recogidos se utilizan exclusivamente para responder a tu consulta y
              preparar un presupuesto personalizado.
            </p>
          </section>

          <section aria-labelledby="derechos">
            <h2 id="derechos" className="text-xl font-bold text-gray-900 dark:text-white mb-3">
              4. Tus derechos
            </h2>
            <p>
              Puedes ejercer tus derechos de acceso, rectificación, supresión, oposición,
              limitación del tratamiento y portabilidad escribiendo a{" "}
              <a href={`mailto:${SITE.email}`} className="text-indigo-600 dark:text-indigo-400">
                {SITE.email}
              </a>
              .
            </p>
          </section>

          <section aria-labelledby="conservacion">
            <h2 id="conservacion" className="text-xl font-bold text-gray-900 dark:text-white mb-3">
              5. Conservación de los datos
            </h2>
            <p className="bg-amber-50 dark:bg-amber-950 border border-amber-200 dark:border-amber-800 text-amber-800 dark:text-amber-300 rounded-xl p-4 text-sm">
              ⚠️ <strong>Placeholder:</strong> Indica aquí el periodo de conservación de los
              datos según tu política interna.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
