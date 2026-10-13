import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from '../HomepageSection.module.css';

const FeatureList = [
  {
    title: 'Full-Stack Test Orchestration',
    description: (
      <>
      A single test script can drive a web UI, mobile app, API gateway, database, simulator, and physical device concurrently — no need to stitch together separate runners.
      </>
    ),
  },
  {
    title: 'Hardware-in-the-Loop & SIL Support',
    description: (
      <>
      Drive real devices over BLE, USB, serial, or Ethernet, or stub them out with high-fidelity simulators — switch between modes without rewriting tests.
      </>
    ),
  },
  {
    title: 'Deep Diagnostics & Observability',
    description: (
      <>
      Every test run captures application logs, API payloads, BLE packet traces, firmware logs, and database state, with correlated views for fast root-cause analysis.
      </>
    ),
  },
  {
    title: 'Cloud-Native on AWS',
    description: (
      <>
      Deploy on EC2, store artifacts in S3, and analyze with OpenSearch — with hybrid on-prem support for lab and hardware-in-the-loop setups.
      </>
    ),
  },
  {
    title: 'Gherkin BDD Scripting',
    description: (
      <>
      Write tests in plain Given-When-Then language, so test cases double as living, readable specifications.
      </>
    ),
  },
  {
    title: 'Extensible Runner Architecture',
    description: (
      <>
      Pre-engineered runners for UI, API, Mobile, and Database ship out of the box — build custom runners for any proprietary protocol or tool.
      </>
    ),
  },
    {
    title: 'Multiple Assessment Types',
    description: (
      <>
      Logical assertions, visual regression, reference-based comparisons, and Quality-of-Service measurements are all first-class test outcomes.
      </>
    ),
  },
    {
    title: 'CI/CD & ALM Integration',
    description: (
      <>
      Plug into Jenkins and sync test results to Jira, Xray, and TestRail — keeping traceability current with every commit.
      </>
    ),
  },
    {
    title: 'Open Foundations, No Lock-In',
    description: (
      <>
      Built on Robot Framework, Playwright, and Appium — your team's existing skills transfer directly, with no proprietary scripting or per-seat fees.
      </>
    ),
  },
];

function Feature({title, description, index}) {
  return (
    <article className={styles.card}>
      <div className={styles.cardTop}>
        <span className={styles.index}>{String(index + 1).padStart(2, '0')}</span>
      </div>
      <Heading as="h3" className={styles.cardTitle}>
        {title}
      </Heading>
      <p className={styles.text}>{description}</p>
    </article>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={clsx(styles.section, styles.glowB)}>
      <div className="container">
        <div className={styles.header}>
          <span className={styles.eyebrow}>Why Teams Choose Panacea</span>
          <Heading as="h2" className={clsx(styles.title, 'panaceaGradientText')}>
            Key Capabilities
          </Heading>
          <p className={styles.lead}>
            Engineered for depth, designed for clarity — the foundations that
            set Panacea apart.
          </p>
        </div>
        <div className={styles.grid}>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} index={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}