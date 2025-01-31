import { useState } from "react";
import { Badge, Button, Card, Col, Image, Modal, Row } from "react-bootstrap";
import { Principal } from "../../thor/model";
import { useGetPrincipalsQuery } from "../../thor/redux/services/PrincipalService";
import "./index.css";

const UserList = () => {
  const { data, error, isLoading } = useGetPrincipalsQuery();

  const [show, setShow] = useState(false);
  const [selectedPrincipal, setSelectedPrincipal] = useState<Principal | null>(null);

  const handleShow = (principal: Principal) => {
    setSelectedPrincipal(principal);
    setShow(true);
  };

  const handleClose = () => {
    setSelectedPrincipal(null);
    setShow(false);
  };

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
      <div className="tableContainer">
        {data.length === 0 && <h1>Peragon Games Principal List</h1>}
        {data.map((principal: Principal) => (
          <Card
            key={principal.id}
            style={{
              height: '100%',
              verticalAlign: "middle",
              background: `linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.95)), url('${principal.avatarUrl}') top center/cover`,
            }}
            className="text-center displayCard"
            onClick={() => handleShow(principal)}
          >
            <Card.Header className="card-header-fade">
              <Row>
                <Col>

                  <Image
                    src={principal.avatarUrl}
                    roundedCircle
                    style={{ border: "5px solid blue", width: "100px", height: "100px" }}
                  />

                  {!principal.accountNonLocked && (
                    <Badge bg={"warning"} >Locked</Badge>
                  )}
                  {!principal.accountNonExpired && (
                    <Badge bg={"danger"} >Expired</Badge>
                  )}
                  {principal.acceptedTos && (
                    <Badge bg={"success"}>TOS</Badge>
                  )}
                  {!principal.acceptedTos && (
                    <Badge bg={"danger"}>TOS</Badge>
                  )}
                </Col>
                <Col>
                  <h1>{principal.username}</h1>
                  {principal.firstName} {principal.lastName}
                  <br />
                  {JSON.stringify(principal.roles)}
                </Col>
              </Row>
            </Card.Header>
          </Card>
        ))}
      </div>

      {selectedPrincipal && (
        <Modal show={show} onHide={handleClose} centered>
          <Modal.Header closeButton>
            <Modal.Title>{selectedPrincipal.username}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Row>
              <Col>
                <Image
                  src={selectedPrincipal.avatarUrl}
                  roundedCircle
                  style={{ width: "128px", height: "128px" }}
                />
              </Col>
              <Col>
                <h4>{selectedPrincipal.firstName} {selectedPrincipal.lastName}</h4>
                <p>{selectedPrincipal.email}</p>
              </Col>
            </Row>
            <Row className="mt-3">
              <Col>
                <h5>About {selectedPrincipal.firstName}</h5>
                <p>{selectedPrincipal.bio}</p>
              </Col>
            </Row>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </>
  );
};

export default UserList;
