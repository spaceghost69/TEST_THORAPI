import { Component, ErrorInfo, ReactNode } from "react";
import { Alert, Card, Col, Container, Row } from "react-bootstrap";
import { FaRegStopCircle } from 'react-icons/fa';
import "./index.css";

interface Props {
    children?: ReactNode;
}

interface State {
    hasError: boolean;
    errorName?: string;
    errorCause?: any;
    errorMessage?: string;
    errorInfo?: any;
}

class ErrorBoundary extends Component<Props, State> {

    public state: State = {
        hasError: false
    };

    public static getDerivedStateFromError(_: Error): State {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }

    public componentDidCatch(error: Error, errorInfo: ErrorInfo) {

        console.error("UNCAUGHT ERROR: {}", error.message);
        this.setState({
            hasError: true,
            errorName: error.name,
            errorCause: error.cause,
            errorMessage: error.message,
            errorInfo: errorInfo
        });
    }

    public render() {
        let failureComponentStack = [];
        if (this.state.errorInfo != null) {

            let fstck = this.state.errorInfo.componentStack.split('\n');
            const fstack = fstck.filter((comp) => comp.indexOf(".ts") > 0);
            failureComponentStack = (fstack);
        }

        if (this.state.hasError) {
            return (
                <div style={{ padding: '3em' }}>
                    <h1><FaRegStopCircle /> APPLICATION ERROR</h1>
                    <Card>
                        <Card.Header>
                            <Card.Title>
                                <h1>Uncaught Application Error</h1>
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <h2>TROUBLESHOOTING INFO</h2>
                            <h3>
                                <Row>
                                    <Col md={3}>
                                        <b>TYPE:</b>
                                    </Col>
                                    <Col md={9}>
                                        {JSON.stringify(this.state.errorName)}
                                    </Col>
                                </Row>
                                {this.state.errorCause && (
                                    <Row>
                                        <Col md={3}>
                                            <b>CAUSE:</b>
                                        </Col>
                                        <Col md={9}>

                                            {JSON.stringify(this.state.errorCause)}

                                        </Col>
                                    </Row>
                                )}
                                <Row>
                                    <Col md={3}>
                                        <b>MESSAGE:</b>
                                    </Col>
                                    <Col md={9}>
                                        {JSON.stringify(this.state.errorMessage)}
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={3}>
                                        <b>IN:</b>
                                    </Col>
                                    <Col md={9}>
                                        {failureComponentStack.map((failureComponent: any, i: number) => (

                                            <Container key={('x-' + i)} fluid >
                                                <Card className="displayStackCard displayCard">
                                                    <Card.Body className="card-body">
                                                        {failureComponent.split('@').map((cstr: any, i: number) => {
                                                            let p1 = cstr.substring(0,cstr.lastIndexOf('/'));
                                                            let p2 = p1.lastIndexOf('/')
                                                            let inx = cstr.substring(p2);
                                                            let linx = inx.substring( inx.indexOf(':'));
                                                            linx = linx.replace(')','');
                                                            inx = inx.substring(0, inx.indexOf('?'));

                                                            return (
                                                                <>
                                                                    {(i == 0) && (
                                                                        <h5>
                                                                            <p>{inx} <br/>at location {linx}</p>
                                                                        </h5>
                                                                    )}
                                                                    {(i == 1) && (
                                                                        <h6>
                                                                            LOCATION: <p>{cstr.substring(cstr.lastIndexOf('/'))}</p>
                                                                        </h6>
                                                                    )}
                                                                    {(i > 1) && (
                                                                        <Alert variant="info">
                                                                            OTHER: <p>{cstr.substring(cstr.lastIndexOf('/'))}</p>
                                                                        </Alert>
                                                                    )}
                                                                </>
                                                            )
                                                        })}

                                                    </Card.Body>
                                                </Card>

                                            </Container>
                                        ))}

                                    </Col>
                                </Row>
                                <br />
                                <b>STACK TRACE:</b>
                            </h3>
                            <br />
                            <span className="tiny">

                                {JSON.stringify(this.state.errorInfo)}

                            </span>
                        </Card.Body>
                        <Card.Footer>
                            <span className="tiny">GUID LUCK!!</span>
                        </Card.Footer>
                    </Card>
                </div >
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
