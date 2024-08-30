import Link from "next/link";
import ServiceCard from "./ui/ServiceCard";

const iconRender = (val: any) => {
  switch (val) {
    case "stat-ico":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
          />
        </svg>
      );
    default:
      return <>No Icon</>;
  }
};

const FeatureItem = ({
  title,
  description,
  icon,
  id,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  id: number;
}) => {
  return (
    <div
      className={` space-y-4 
        ${
          id === 1
            ? "sm:pr-4 pb-4"
            : id === 2
            ? "pt-4 sm:pt-0 sm:pl-4 pb-4 sm:!border-t-transparent"
            : id === 3
            ? "sm:pr-4 pt-4 sm:!border-l-transparent"
            : "sm:pl-4 pt-4"
        }
        `}
    >
      <span className="p-2 rounded-md bg-blue-50 text-blue-700 dark:bg-gray-900 dark:text-blue-500 flex w-max">
        {iconRender(icon)}
      </span>
      <h1 className="flex text-lg font-semibold capitalize text-gray-900 dark:text-white">
        {title}
      </h1>
      <p className="text-sm font-light text-gray-700 dark:text-gray-300">
        {description}
      </p>
      <Link
        href="#"
        className="text-sky-700 dark:text-sky-500 flex items-center gap-x-3 w-max"
      >
        Live preview
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="w-4 h-4"
        >
          <path
            fillRule="evenodd"
            d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
            clipRule="evenodd"
          />
        </svg>
      </Link>
    </div>
  );
};
const serviceItems = [
  {
    id: 1,
    title: "Analyse de données",
    description:
      "Nous offrons des services d'analyse de données pour vous aider à comprendre vos informations, identifier les tendances et prendre des décisions basées sur des faits.",
    icon: "stat-ico",
  },
  {
    id: 2,
    title: "Statistiques avancées",
    description:
      "Nos experts en statistiques vous aident à interpréter vos données de manière rigoureuse, assurant des résultats fiables et exploitables.",
    icon: "stat-ico",
  },
  {
    id: 3,
    title: "Évaluation de développement",
    description:
      "Nous évaluons l'impact de vos programmes de développement à l'aide de méthodologies éprouvées, vous permettant de maximiser leur efficacité.",
    icon: "stat-ico",
  },
  {
    id: 4,
    title: "Machine Learning",
    description:
      "Nous appliquons des algorithmes de machine learning pour automatiser vos processus et prédire les résultats futurs, vous donnant un avantage concurrentiel.",
    icon: "stat-ico",
  },
  {
    id: 5,
    title: "Conduite d'enquêtes de recherche",
    description:
      "Notre équipe est expérimentée dans la conception, l'exécution et l'analyse d'enquêtes de recherche pour obtenir des insights précis et pertinents.",
    icon: "stat-ico",
  },
  {
    id: 6,
    title: "Solutions IT",
    description:
      "Nous fournissons des services IT sur mesure pour optimiser vos systèmes, améliorer la sécurité et garantir la continuité de vos opérations.",
    icon: "stat-ico",
  },
];

const Features = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5 flex flex-col items-start gap-10 xl:gap-14">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h1 className="text-gray-900 dark:text-white font-semibold text-6xl">
            Nos services
          </h1>
          <p className="text-gray-700 dark:text-gray-300 text">
            Nos services sont conçus pour répondre aux besoins spécifiques de
            votre organisation, en combinant expertise technique et
            compréhension approfondie des enjeux de développement
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {serviceItems.map((service) => (
            <ServiceCard key={service.id} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
