import { Badge, Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CoolButton from '../components/CoolButton';


const Pricing = () => {
  return (
    <Container className="pricing-container my-5">
      <h1 className="text-center mb-5">Peragon Games Pricing Plans</h1>
      <Row>
        {/* Free Plan */}
        <Col md={3}>
          <Card className="pricing-card">
            <Card.Header className="pricing-header">
              <h3>Free Tier</h3>
            </Card.Header>
            <Card.Body>
              <h2 className="pricing-price">FREE<span className="pricing-duration"></span></h2>
              <ul className="pricing-features">
                <li>Unlimited Advanced Code Generation <Badge bg="dark">FREE FOREVER</Badge></li>
                <li>Open Source Code Generation <Badge bg="dark">FREE FOREVER</Badge> </li>
                <li>Open Source SecureField Encryption <Badge bg="dark">FREE FOREVER</Badge></li>
                <li>Access to OpenAPI Specification Library</li>
                <li>Extensive Documentation Library</li>
                <li>Community Support</li>
                <li>Online Only</li>
                <li>Limited to 1 Project</li>
              </ul>
              <Link to="/foss">
                <CoolButton variant="info" >Get Started</CoolButton>
              </Link>
              <br /><br />
              <Link to="/cart?action=add-product&product=pro">
                <CoolButton variant="success" >Upgrade to Pro</CoolButton>
              </Link>
            </Card.Body>
          </Card>
        </Col>



        {/* Pro Plan */}
        <Col md={3}>
          <Card className="pricing-card">
            <Card.Header className="pricing-header">
              <h3>PRO</h3>
            </Card.Header>
            <Card.Body>
              <h2 className="pricing-price">$99<span className="pricing-duration">/mo</span></h2>
              <ul className="pricing-features">
                <li>Everything in the Free Level</li>
                <li>Advanced AI Code Generation</li>
                <li>Download Encrypted Executable Jar Deployment with Vidar™</li>
                <li>Custom API Expert Advice with HeimdaLLM</li>
                <li>Per-Field Encryption with SecureField</li>
                <li>The ./vai command runner</li>
                <li>Priority Email Support</li>
                <li>Up to 3 Projects</li>
              </ul>
              <Badge bg="warning">10% Off!</Badge>
              <Link to="/cart?action=add-product&product=pro">
                <CoolButton variant="success" >Buy Now</CoolButton>
              </Link>
              <br /><br />
              <Badge bg="success">Save 30%</Badge>
              <Link to="/cart?action=add-product&product=team">
                <CoolButton variant="success" >Upgrade to Team</CoolButton>
              </Link>
            </Card.Body>
          </Card>
        </Col>


        {/* Pro Plan */}
        <Col md={3}>
          <Card className="pricing-card">
            <Card.Header className="pricing-header">
              <h3>Team</h3>
            </Card.Header>
            <Card.Body>
              <h2 className="pricing-price">$999<span className="pricing-duration">/mo*</span></h2>
              <ul className="pricing-features">
                <li>Everything in the Pro Level</li>
                <li>Advanced AI Code Generation</li>
                <li>Custom LLM API Expert Integration</li>
                <li>Per-Field Encryption with SecureField</li>
                <li>Priority Email Support</li>
                <li>Up to 10 team members</li>
                <li>Up to 10 Projects</li>
              </ul>
              <CoolButton variant="success" >Upgrade to Enterprise</CoolButton>
            </Card.Body>
          </Card>
        </Col>

        {/* Enterprise Plan */}
        <Col md={3}>
          <Card className="pricing-card">
            <Card.Header className="pricing-header">
              <h3>Enterprise</h3>
            </Card.Header>
            <Card.Body>
              <h2 className="pricing-price">Contact Us</h2>
              <ul className="pricing-features">
                <li>Full AI-Powered CodeGen Suite</li>
                <li>Dedicated Custom LLMs</li>
                <li>Comprehensive SecureField Encryption</li>
                <li>Integration with Existing Systems</li>
                <li>Dedicated Account Manager</li>
                <li>Unlimited Projects and Users</li>
                <li>Unlimited 24/7 Premium Support</li>
                <li>On-Prem Available</li>
                <li>Access to advanced Peragon APIs</li>
              </ul>
              <CoolButton variant="success" >Contact Sales</CoolButton>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row><Col>

        * $99/mo. for each additional project
        <br/>
        * $99/mo. for each additional team member
        <br/>
        <br/>
        Prices subject to change at any time.
        <br/>
        We reserve the right to change our product offerings and features at any time.
      </Col></Row>
    </Container>
  );
};

export default Pricing;
