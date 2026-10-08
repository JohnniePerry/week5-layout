export default function Card({ project }) {
  const difficultyColors = {
    Beginner: "text-green-800",
   Intermediate: "text-[#A66F00]",
    Advanced: "text-red-800",
  };

  return (
    <article className="flex min-h-52 flex-col items-center justify-center rounded-xl border border-amber-600 bg-red-50 p-6 text-center shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <h2 className="mb-3 text-xl font-bold text-gray-950">
        {project.title}
      </h2>

      <p className="mb-3 text-base text-gray-600">
        {project.category}
      </p>

      <p
        className={`text-sm font-medium ${
          difficultyColors[project.difficulty]
        }`}
      >
        {project.difficulty}
      </p>
    </article>
  );
}