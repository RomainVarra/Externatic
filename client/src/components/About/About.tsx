import { services, whoWeAre } from "./dataAbout";

const About = () => {
  const whoWeAreContent = whoWeAre.map((feature) => (
    <article key={feature.title} className="text-center">
      <div className="flex justify-center">
        <feature.icon className="h-12 w-12 text-white" />
      </div>
      <h3 className="mt-6 text-lg font-medium text-white">{feature.title}</h3>
      <p className="mt-2 text-base text-white">{feature.description}</p>
    </article>
  ));

  const servicesContent = services.map((service) => (
    <article key={service.title} className="relative p-8 bg-white rounded-lg">
      <h3 className="text-xl font-medium text-gray-900">{service.title}</h3>
      <p className="mt-4 text-base text-gray-500">{service.description}</p>
    </article>
  ));

  return (
    <main className="flex-grow">
      <section
        id="#qui-sommes-nous"
        className="py-10 m-10 rounded-md section-primary"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              Qui sommes-nous ?
            </h2>
            <p className="mt-4 text-lg text-white">
              Notre expertise au service de vos recrutements IT
            </p>
          </div>

          <div className="mt-20">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {whoWeAreContent}
            </div>
          </div>
        </div>
      </section>

      <section
        id="nos-services"
        className="py-10 m-10 rounded-md section-primary"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-3xl text-center font-extrabold text-white sm:text-4xl">
              Nos services
            </h2>
          </div>

          <div className="mt-16">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
              {servicesContent}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
