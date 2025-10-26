export default function SubjectBadge({ subject, size = 'sm' }) {
  if (!subject) return null; // ✅ Prevent undefined warning

  const subjectColors = {
    'cyber crime investigation & digital forensics': 'bg-red-500/20 text-red-300 border-red-500/30',
    'data warehousing & mining': 'bg-blue-500/20 text-blue-300 border-blue-500/30',
    'theory of computation & compiler design': 'bg-purple-500/20 text-purple-300 border-purple-500/30',
    'software engineering & project management': 'bg-green-500/20 text-green-300 border-green-500/30',
    'cybersecurity principles & practices': 'bg-orange-500/20 text-orange-300 border-orange-500/30',
  };

  const colorClass =
    subjectColors[subject.toLowerCase()] ||
    'bg-gray-500/20 text-gray-300 border-gray-500/30';

  const sizeClasses = {
    xs: 'text-xs px-2 py-0.5',
    sm: 'text-xs px-2.5 py-1',
    md: 'text-sm px-3 py-1.5',
    lg: 'text-base px-4 py-2',
  };

  return (
    <span
      className={`inline-block rounded-md border font-medium uppercase tracking-wide ${colorClass} ${sizeClasses[size]}`}
    >
      {subject}
    </span>
  );
}
