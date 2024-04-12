import "bootstrap/dist/css/bootstrap.min.css";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import logo from "../src/svg/cyberpay-logo.svg";
import Image from "react-bootstrap/Image";
import SignupForm from "./form";


function App() {
  return (
    <Container fluid className="p-0">
      <Row className="g-0">
        <Col className="col-12 col-md-8">
          <section className="form-container">
            <div className="signup-form">
              <div className="cyberpay-header">
                <div className="cyberpay-logo mb-3">
                  <Image
                    src={logo}
                    alt="cyberspace logo"
                    className="mt-2 logo"
                    fluid
                  />
                </div>
                <h5 className="text-center">
                  <i>Build the future with Cyberpay</i>
                </h5>
              </div>

              <SignupForm />
            </div>
          </section>
        </Col>

        <Col sm={4} className="d-none d-md-block">
          <section className="features">
            <div className="feature mx-auto">
              <div className="feature-header mx-auto text-center mb-5">
                <h4>Awesome features that await you</h4>
              </div>

              <div className="features-content">
                <ul className="list-group border-0">
                  <li className="list-group-item d-flex justify-content-between align-items-center mb-5 h-100 rounded-4">
                    <div className="list-icon text-center">
                      <i className="fas fa-university icon"></i>
                    </div>
                    Access our API which includes access to bank account and
                    transaction details
                  </li>

                  <li className="list-group-item d-flex justify-content-between align-items-center mb-5 h-100 rounded-4">
                    <div className="list-icon text-center p-0">
                      <i className="fas fa-database icon pt-3"></i>
                    </div>
                    Use sample data to try out our APIs in our Sandbox
                    environment.
                  </li>

                  <li className="list-group-item d-flex justify-content-between align-items-center mb-5 h-100 rounded-4">
                    <div className="list-icon text-center">
                      <i className="fas fa-chart-pie icon"></i>
                    </div>
                    Use information from up to 100 free API calls when
                    you&apos;re ready to start building.
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </Col>
      </Row>
    </Container>
  );
}

export default App;

