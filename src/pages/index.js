import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import HomepageIntro from '@site/src/components/HomepageIntro';
import HomepageHighlights from '@site/src/components/HomepageHighlights';
import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className={clsx('hero__title', 'panaceaGradientText')}>
          {siteConfig.title}
        </Heading>
        <p className={clsx('hero__subtitle', styles.tagline)}>{siteConfig.tagline}</p>
      </div>
    </header>
  );
}

function HomepageCta() {
  return (
    <section className={styles.cta}>
      <div className={clsx('container', styles.buttons)}>
        <Link
          className="button button--secondary button--lg"
          to="/docs/getting-started/system-requirements">
          Get Started
        </Link>
      </div>
    </section>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`ZIMETRICS`}
      description="A distributed, full-stack test automation platform for APIs, databases, mobile, hardware, and cloud.">
      <HomepageHeader />
      <main>
        <HomepageIntro />
        <HomepageHighlights />
        <HomepageFeatures />
        <HomepageCta />
      </main>
    </Layout>
  );
}
