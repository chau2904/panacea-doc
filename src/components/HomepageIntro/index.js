import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';

export default function HomepageIntro() {
  return (
    <section style={{padding: '3rem 0'}}>
      <div className="container">
        <div className="row" style={{alignItems: 'stretch'}}>
          <div className="col col--6 text--center" style={{display: 'flex', flexDirection: 'column'}}>
            <Heading as="h2">About Panacea</Heading>
            <p>
              Panacea Test is a multi-layer test automation platform that
              provides a comprehensive solution to the challenges
              organizations face in automating their testing processes.
              Built on a robust foundation of best-in-class open-source
              technologies, Panacea is designed to be simple, extensible,
              and maintainable — avoiding proprietary tooling while ensuring
              flexibility, transparency, and scalability.
            </p>
            <div style={{marginTop: 'auto'}}>
              <Link to="/docs/introduction/overview">
                Read the full Introduction →
              </Link>
            </div>
          </div>
          <div className="col col--6 text--center" style={{display: 'flex', flexDirection: 'column'}}>
            <Heading as="h2">What Panacea Offers</Heading>
            <p>
              Panacea is a distributed, full-stack, end-to-end system
              validation platform supporting high-fidelity verification of
              stateful system behavior across APIs, databases, integration
              platforms, SaaS services, and application software and
              hardware — with comprehensive logging and reporting for
              traceability, analysis, and compliance.
            </p>
            <div style={{marginTop: 'auto'}}>
              <Link to="/docs/features-and-capabilities/platform-capabilities">
                Explore Features & Capabilities →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}