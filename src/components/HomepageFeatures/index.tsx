import type { ReactNode } from "react";
import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  imgSrc: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Programare Funcțională Pură",
    imgSrc: require("@site/static/img/homepage/purity.png").default,
    description: (
      <>
        Purația Haskell asigură că funcțiile nu au efecte secundare, ducând la
        cod mai previzibil și testabil.
      </>
    ),
  },
  {
    title: "Evaluare Leneșă",
    imgSrc: require("@site/static/img/homepage/lazy.png").default,
    description: (
      <>
        Beneficiază de evaluarea leneșă a Haskell, care amână calculele până
        când sunt necesare, optimizând performanța și permițând structuri de
        date infinite.
      </>
    ),
  },
  {
    title: "Tipizare Statică Puternică",
    imgSrc: require("@site/static/img/homepage/static_types.png").default,
    description: (
      <>
        Folosește sistemul avansat de tipuri al Haskell pentru a prinde erorile
        la timpul de compilare, asigurând software mai sigur și mai fiabil.
      </>
    ),
  },
];

function Feature({ title, imgSrc, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <img src={imgSrc} className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
