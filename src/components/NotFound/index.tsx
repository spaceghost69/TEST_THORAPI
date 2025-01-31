import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";


const NotFound: any = () => {


    return (
        <div style={{ padding: '3em' }}>
            <h1>DID YOU LOSE SOMETHING?</h1>
            <Card>
                <Card.Header>
                    <Card.Title>
                        <h1>Not Found</h1>
                    </Card.Title>
                </Card.Header>
                <Card.Body>
                    <h2>Here are some helpful links:</h2>
                    <Link to='/'>Home</Link>
                    <br />
                    <Link to='/contact-us'>Contact</Link>
                </Card.Body>
                <Card.Footer>
                    <span className="tiny">GUID LUCK!!</span>
                </Card.Footer>
            </Card>
        </div>
    );
}

export default NotFound;
