import { whoWeAre } from "./dataAbout";

const AboutCandidat = () => {
  const whoWeAreContent = whoWeAre.map((feature) => (
    <article key={feature.title} className="text-center">
      <div className="flex justify-center">
        <feature.icon className="h-10 w-12 text-white" />
      </div>
      <h3 className="mt-6 text-lg font-medium text-white">{feature.title}</h3>
    </article>
  ));

  return (
    <main className="flex-grow">
      <section
        id="qui-sommes-nous"
        className="py-8 m-10 rounded-md section-primary"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl font-extrabold text-white sm:text-3xl">
              Candidat Trouver LE Poste
            </h2>
          </div>

          <div className="mt-10">
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-4">
              {whoWeAreContent}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutCandidat;
