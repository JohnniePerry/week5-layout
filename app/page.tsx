import Card from "./components/Card";
import projects from "./data/projects";

export default function Home() {
  return (
    <div className="bg-[#D4AF00]">
      <section className="bg-red-50 px-6 py-14 text-center">
        <h1 className="text-4xl font-bold text-red-800 drop-shadow-sm md:text-5xl">
          Your Service. Your Resources. One Place.
        </h1>

        <p className="mx-auto mt-6 max-w-3xl text-lg italic text-gray-800 md:text-2xl">
          Explore practical digital tools created to support veterans, service
          members, and military families.
        </p>

        <a
          href="#resources"
          className="mt-8 inline-block rounded-full bg-red-700 px-14 py-3 font-semibold text-white shadow-md transition hover:bg-red-800 hover:shadow-lg"
        >
          Explore Resources
        </a>
      </section>

      <section
        id="resources"
        aria-label="Veteran support resources"
        className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-6 py-10 sm:grid-cols-2 lg:grid-cols-4"
      >
        {projects.map((project) => (
          <Card key={project.title} project={project} />
        ))}
      </section>
    </div>
  );
}