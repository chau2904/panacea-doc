import clsx from 'clsx';
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';
import styles from '../HomepageSection.module.css';

export default function HomepageIntro() {
  return (
    <section className={clsx(styles.section, styles.glowB)}>
      <div className="container">
        <div className={styles.grid2}>
          <article className={styles.card}>
            <span className={styles.eyebrow}>Who We Are</span>
            <Heading as="h2" className={styles.cardTitleLg}>
              About Panacea
            </Heading>
            <p className={styles.text}>
              Panacea Test is a multi-layer test automation platform that
              provides a comprehensive solution to the challenges
              organizations face in automating their testing processes.
              Built on a robust foundation of best-in-class open-source
              technologies, Panacea is designed to be simple, extensible,
              and maintainable — avoiding proprietary tooling while ensuring
              flexibility, transparency, and scalability.
            </p>
            <Link className={styles.link} to="/docs/introduction/overview">
              Read the full Introduction →
            </Link>
          </article>
          <article className={styles.card}>
            <span className={styles.eyebrow}>What We Deliver</span>
            <Heading as="h2" className={styles.cardTitleLg}>
              What Panacea Offers
            </Heading>
            <p className={styles.text}>
              Panacea is a distributed, full-stack, end-to-end system
              validation platform supporting high-fidelity verification of
              stateful system behavior across APIs, databases, integration
              platforms, SaaS services, and application software and
              hardware — with comprehensive logging and reporting for
              traceability, analysis, and compliance.
            </p>
            <Link
              className={styles.link}
              to="/docs/features-and-capabilities/platform-capabilities">
              Explore Features & Capabilities →
            </Link>
          </article>
        </div>
      </div>
    </section>
  );
}
