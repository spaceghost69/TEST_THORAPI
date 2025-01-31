import { Alert, Card, Col, Row, Stack } from "react-bootstrap";
import { Game } from "../../thor/model";

import { useGetGamesQuery } from "../../thor/redux/services/GameService";
import "./index.css";

const GameDemo = () => {
    // Using a query hook automatically fetches data and returns query values
    const { data, error, isLoading } = useGetGamesQuery();

    // Individual hooks are also accessible under the generated endpoints:
    // const { data, error, isLoading } = pokemonApi.endpoints.getPokemonByName.useQuery('bulbasaur')

    // render UI based on data and loading state

    if (error) {
        return "ERROR:" + JSON.stringify(error);
    }
    if (isLoading) {
        return "Loading...";
    }
    if (!data) {
        return "NO USERS";
    }






    return (
        <>
            <Stack
                className="six-disciplines-container"
            >
                {data.map((game: Game) => (
                    <Card >
                        <Card.Header>
                            <Row>
                                <Col md={6}>


                                </Col>
                                <Col md={6}>
                                    <h5>WEAPONS:</h5>
                                </Col>
                            </Row>

                            <Row>
                                <Col md={6}>
                                    <h1>{game.name}</h1>
                                </Col>
                                <Col md={6}>

                                    <h5>{game.name}</h5>
                                </Col>
                            </Row>
                        </Card.Header>
                        <Card.Body>
                            <Row>
                                <Col>
                                    
                                </Col>

                                <Col style={{ textAlign: 'left' }}>
                                    <h4>weapons</h4>

                                    {game.weapons.map((weapon) => (
                                        <Alert variant="warning">{weapon.harmLevel}
                                            {weapon.name} : <b>{weapon.color}</b>
                                        </Alert>
                                    ))}

                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>

                ))}

            </Stack>
        </>
    );
};

export default GameDemo;
