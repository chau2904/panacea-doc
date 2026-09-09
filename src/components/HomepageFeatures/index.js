import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

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

function Feature({title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="text--center" style={{marginBottom: '3rem'}}>
          <Heading as="h2">Key Capabilities</Heading>
        </div>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}