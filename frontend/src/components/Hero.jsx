import { Container, Card, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
const Hero = () => {
  return (
    <div className="py-5">
      <Container className="d-flex justify-content-center">
        <Card className="p-5 d-flex flex-column align-items-center hero-card bg-light bg-light w-75">
          <h1 className="text-center mb-4">Mern Authentication</h1>
          <p className="text-center mb-4">
            Boiler plate for the content , Lorem ipsum dolor sit amet
            consectetur adipisicing elit. A voluptates aliquam laboriosam? Harum
            eligendi dolorum quas reprehenderit et, obcaecati, enim ea rem
            itaque at, maxime deleniti officia iure! Minima, ullam.
          </p>
          <div className="d-flex">
            <LinkContainer to="/login">
              <Button variant="primary" className="me-3">
                Sign In
              </Button>
            </LinkContainer>

            <LinkContainer to="/register">
              <Button variant="secondary" href="/register">
                Register
              </Button>
            </LinkContainer>
          </div>
        </Card>
      </Container>
    </div>
  );
};

export default Hero;
