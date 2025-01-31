import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Layout from '@theme/Layout';
import { Col, Row } from 'react-bootstrap';
import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <div className="hero">
      <Row  >
        <Col >
          <blockquote>
            <h3>“It is not enough to be busy; so are the ants.
              <br />
              The question is: What are we busy about?”
              <br /><br /><i>-- Thoreau</i></h3>
          </blockquote>
        </Col>
        <Col>
          <div style={{ float: 'right', textAlign: 'right', paddingTop: '0px' }}>
            <h1>{siteConfig.title}</h1>
            <h2>{siteConfig.tagline}</h2>
            <br/><br/><br/>
            <div className={styles.buttons}>
              <Link
                className="button button--secondary button--lg"
                to="docs/welcome">
                Peragon Games Introduction - 5min
              </Link>
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>

        </Col>
      </Row>
    </div>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Peragon™ Labs Inc | Enterprise Agentic CodeGen | Percival the Dragon Slayer™, ThorAPI™, HeimdaLLM™ | Code-Generating Agents powered by OpenAPI and Spreadsheets">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
