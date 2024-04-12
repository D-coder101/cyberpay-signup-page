import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useState } from "react";

export default function SignupForm() {
  const [businessName, setBusinessName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [businessType, setBusinessType] = useState("");
  const [email, setEmail] = useState("");
  const [businessAddress, setBusinessAddress] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Row>
        <Col sm={6}>
          <Form.Group as={Col} controlId="BusinessName">
            <Form.Label>Business Name</Form.Label>
            <Form.Control
              placeholder="Business Name"
              className="rounded-3 shadow-sm"
              onChange={(e) => setBusinessName(e.target.value)}
              type="text"
              name="businessName"
              value={businessName}
            />
            <div className="text-end">
              <span style={{ color: "red" }} className="error-text">
                <small>business name is required</small>
              </span>
            </div>
          </Form.Group>
        </Col>

        <Col sm={6}>
          <Form.Group as={Col} controlId="PhoneNumber">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              type="number"
              placeholder="Phone Number"
              className="rounded-3 shadow-sm"
              onChange={(e) => setPhoneNumber(e.target.value)}
              name="phoneNumber"
              value={phoneNumber}
            />
            <div className="text-end">
              <span style={{ color: "red" }} className="error-text">
                <small>phone number is required</small>
              </span>
            </div>
          </Form.Group>
        </Col>
      </Row>

      <Row>
        <Col sm={6}>
          <Form.Group as={Col} controlId="Password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              className="rounded-3 shadow-sm"
              onChange={(e) => setPassword(e.target.value)}
              name="password"
              value={password}
            />
            <div className="text-end">
              <span style={{ color: "red" }} className="error-text">
                <small>password is required</small>
              </span>
            </div>
          </Form.Group>
        </Col>

        <Col sm={6}>
          <Form.Group as={Col} controlId="ConfirmPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Confirm Password"
              className="rounded-3 shadow-sm"
              onChange={(e) => setConfirmPassword(e.target.value)}
              name="confirmPassword"
              value={confirmPassword}
            />
            <div className="text-end">
              <span style={{ color: "red" }} className="error-text">
                <small>confirm password is required</small>
              </span>
            </div>
          </Form.Group>
        </Col>
      </Row>

      <Row>
        <Col sm={6}>
          <Form.Group as={Col} controlId="BusinessType">
            <Form.Label>Business Type</Form.Label>
            <Form.Select
              defaultValue="Business Type"
              className="rounded-3 shadow-sm"
              onSelect={(e) => setBusinessType(e.target.value)}
              name="businessType"
            >
              <option>Agriculture</option>
              <option>Aviation</option>
              <option>Commercial/Retail</option>
              <option>Construction</option>
              <option>Education and Training</option>
              <option>Energy and Power Generation</option>
              <option>Fashion</option>
              <option>Financial Services</option>
              <option>FMCG</option>
              <option>Health Care</option>
              <option value={businessType}>ICT</option>
              <option value={businessType}>Manufacturing</option>
              <option value={businessType}>Media</option>
              <option value={businessType}>Oil and Gas</option>
              <option value={businessType}>Telecommunication</option>
              <option value={businessType}>Transport</option>
              <option value={businessType}>Others</option>
            </Form.Select>
          </Form.Group>
        </Col>

        <Col sm={6}>
          <Form.Group as={Col} controlId="Email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter Email"
              className="rounded-3 shadow-sm"
              onChange={(e) => setEmail(e.target.value)}
              name="email"
              value={email}
            />
            <div className="text-end">
              <span style={{ color: "red" }} className="error-text">
                <small>email is required</small>
              </span>
            </div>
          </Form.Group>
        </Col>
      </Row>

      <Form.Group
        className="rounded-3 shadow-sm mb-2"
        controlId="BusinessAddress"
      >
        <Form.Label>Business Address</Form.Label>
        <Form.Control
          placeholder="Business Address"
          className="rounded-3 shadow-sm"
          onChange={(e) => setBusinessAddress(e.target.value)}
          name="businessAddress"
          value={businessAddress}
        />
        {/* <div className="text-end">
          <span style={{ color: "red" }} className="error-text">
            <small>business name is required</small>
          </span>
        </div> */}
      </Form.Group>

      <Form.Group className="mt-4 text-center" id="Checkbox">
        <Form.Check
          inline
          type="checkbox"
          label="I accept Cyberpay’s Privacy Policy and Terms of Use"
        />
      </Form.Group>

      <div className="submit-button-container d-flex">
        <Button className="mx-auto p-1 px-sm-5 w-50 Submit" type="submit">
          Create my account
        </Button>
      </div>

      <div className="row">
        <div className="col-12 text-center">
          Have an account?{" "}
          <strong style={{ cursor: "pointer" }} className="link">
            Sign in
          </strong>
        </div>
        <div className="col-12 text-center">
          Got Questions?{" "}
          <strong style={{ cursor: "pointer" }} className="link">
            Contact sales
          </strong>
        </div>
      </div>
    </Form>
  );
}
