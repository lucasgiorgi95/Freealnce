"use client";

import { useState } from "react";
import { ExternalLink, Tag } from "lucide-react";
import { buildWhatsAppUrl } from "@/lib/constants";
import { projects, demoProjects, type Project } from "@/lib/data/projects";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import SectionHeader from "@/components/ui/SectionHeader";

function WhatsAppIcon({ size = 16 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size} aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const { t } = useLanguage();

  return (
    <article className="group bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden flex flex-col">
      {/* Visual placeholder */}
      <div
        className={`relative ${project.accentColor} h-44 flex items-center justify-center overflow-hidden`}
        aria-hidden="true"
      >
        <span className="text-5xl font-bold text-white/20 select-none">
          {project.placeholder}
        </span>
        <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity" />
        {project.isDemo && (
          <span className="absolute top-3 right-3 bg-white/90 text-gray-800 text-xs font-semibold px-2.5 py-1 rounded-full">
            {t("projects.demo_badge")}
          </span>
        )}
      </div>

      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="font-bold text-gray-900 dark:text-white text-lg">{project.name}</h3>
          {project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Ver proyecto ${project.name} (abre en nueva pestaña)`}
              className="text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors shrink-0 mt-0.5"
            >
              <ExternalLink size={16} aria-hidden="true" />
            </a>
          )}
        </div>

        <div className="flex items-center gap-1.5 mb-3">
          <Tag size={12} className="text-indigo-500" aria-hidden="true" />
          <span className="text-xs text-indigo-600 dark:text-indigo-400 font-medium">
            {project.type}
          </span>
        </div>

        <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-4 flex-1">
          {project.description}
        </p>

        <ul className="flex flex-wrap gap-2" aria-label={t("projects.tech_label")}>
          {project.tags.map((tag) => (
            <li
              key={tag}
              className="text-xs bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 text-gray-600 dark:text-gray-300 px-2.5 py-1 rounded-lg"
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default function Projects() {
  const [showDemos, setShowDemos] = useState(false);
  const { t } = useLanguage();

  const whatsappUrl = buildWhatsAppUrl(t("contact.whatsapp.budget_message"));

  return (
    <section
      id="proyectos"
      aria-labelledby="projects-heading"
      className="bg-gray-50 dark:bg-gray-900 py-24"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeader
          eyebrow={t("projects.eyebrow")}
          title={t("projects.title")}
          description={t("projects.description")}
          className="mb-14"
        />

        {/* Real projects */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {projects.map((p) => (
            <ProjectCard key={p.name} project={p} />
          ))}
        </div>

        {/* Toggle demos */}
        <div className="text-center mb-8">
          <button
            onClick={() => setShowDemos(!showDemos)}
            aria-expanded={showDemos}
            aria-controls="demo-projects"
            className="inline-flex items-center gap-2 text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 font-semibold text-sm border border-indigo-200 dark:border-indigo-700 hover:border-indigo-300 px-5 py-2.5 rounded-xl transition-all"
          >
            {showDemos ? t("projects.hide_demos") : t("projects.show_demos")}
          </button>
        </div>

        {/* Demo projects */}
        <div id="demo-projects" hidden={!showDemos}>
          <div className="text-center mb-8">
            <p className="text-sm bg-amber-50 dark:bg-amber-950 border border-amber-200 dark:border-amber-800 text-amber-800 dark:text-amber-300 inline-block px-4 py-2 rounded-full">
              {t("projects.demo_note")}
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {demoProjects.map((p) => (
              <ProjectCard key={p.name} project={p} />
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-14 text-center bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-2xl p-8 shadow-sm">
          <p className="text-gray-900 dark:text-white font-semibold text-lg mb-2">
            {t("projects.cta.title")}
          </p>
          <p className="text-gray-600 dark:text-gray-400 mb-5">
            {t("projects.cta.desc")}
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-xl transition-colors"
          >
            <WhatsAppIcon size={16} />
            {t("projects.cta.btn")}
          </a>
        </div>
      </div>
    </section>
  );
}
