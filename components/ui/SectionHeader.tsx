type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description?: string;
  className?: string;
};

export default function SectionHeader({
  eyebrow,
  title,
  description,
  className = "",
}: SectionHeaderProps) {
  return (
    <div className={`text-center max-w-2xl mx-auto ${className}`}>
      <p className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-widest mb-3">
        {eyebrow}
      </p>
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white leading-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-gray-600 dark:text-gray-400 text-lg">{description}</p>
      )}
    </div>
  );
}
