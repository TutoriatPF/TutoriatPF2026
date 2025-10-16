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
    title: "Pure Functional Programming",
    imgSrc: require("@site/static/img/homepage/purity.png").default,
    description: (
      <>
        Haskell&apos;s purity ensures functions have no side effects, leading to
        more predictable and testable code.
      </>
    ),
  },
  {
    title: "Lazy Evaluation",
    imgSrc: require("@site/static/img/homepage/lazy.png").default,
    description: (
      <>
        Benefit from Haskell&apos;s lazy evaluation, which defers computations
        until needed, optimizing performance and enabling infinite data
        structures.
      </>
    ),
  },
  {
    title: "Strong Static Typing",
    imgSrc: require("@site/static/img/homepage/static_types.png").default,
    description: (
      <>
        Leverage Haskell&apos;s advanced type system to catch errors at compile
        time, ensuring safer and more reliable software.
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
