import React, { useState } from "react";
import { Col, Row, Form, Button, Card } from "react-bootstrap";
import ReCAPTCHA from "react-google-recaptcha";
import "./Login_Register.css";

const SITE_KEY = "6LeZFPgpAAAAAAEHCaVGMaKVPU2t-IX8XGLpzL0h"; // Replace with your actual reCAPTCHA site key

export default function Login_Register() {
  const [showRegister, setShowRegister] = useState(false);
  const [isVerifiedLogin, setIsVerifiedLogin] = useState(false);
  const [isVerifiedRegister, setIsVerifiedRegister] = useState(false);

  const handleRegisterClick = () => {
    setShowRegister(true);
  };

  const handleLoginClick = () => {
    setShowRegister(false);
  };

  const onRecaptchaChangeLogin = (value) => {
    // Handle reCAPTCHA verification for login
    if (value) {
      setIsVerifiedLogin(true);
    }
  };

  const onRecaptchaChangeRegister = (value) => {
    // Handle reCAPTCHA verification for register
    if (value) {
      setIsVerifiedRegister(true);
    }
  };

  const handleLoginSubmit = (event) => {
    event.preventDefault();
    // Handle login form submission with CAPTCHA verification
    if (isVerifiedLogin) {
      // Proceed with login
      console.log("Login successful!");
    } else {
      alert("Please verify that you are not a robot!");
    }
  };

  const handleRegisterSubmit = (event) => {
    event.preventDefault();
    // Handle register form submission with CAPTCHA verification
    if (isVerifiedRegister) {
      // Proceed with register
      console.log("Registration successful!");
    } else {
      alert("Please verify that you are not a robot!");
    }
  };

  return (
    <Row className="justify-content-center align-items-center vh-100">
      <Col xs={12} md={6} lg={4}>
        <Card className="card-custom shadow-lg">
          <Row>
            <Col className="text-center">
              <h1>{showRegister ? "Register" : "Login"}</h1>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form
                onSubmit={
                  showRegister ? handleRegisterSubmit : handleLoginSubmit
                }
              >
                {!showRegister ? (
                  <>
                    <Form.Group className="mb-3" controlId="formBasicUsername">
                      <Form.Label className="form-label">Username</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter your username"
                        className="form-control-custom"
                      />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Label className="form-label">Password</Form.Label>
                      <Form.Control
                        type="password"
                        placeholder="Enter your password"
                        className="form-control-custom"
                      />
                    </Form.Group>

                    <Form.Group className="mb-3 d-flex justify-content-between align-items-center">
                      <div>
                        <Form.Check type="checkbox" label="Remember me" />
                      </div>
                      <Form.Text className="text-muted">
                        <a href="#">Forgot password?</a>
                      </Form.Text>
                    </Form.Group>

                    {/* Google reCAPTCHA for Login */}
                    <ReCAPTCHA
                      sitekey={SITE_KEY}
                      onChange={onRecaptchaChangeLogin}
                      className="mb-3"
                    />

                    <Button
                      variant="primary"
                      type="submit"
                      className="btn-submit"
                    >
                      Login
                    </Button>

                    <div className="form-divider">
                      <hr />
                      <p>OR</p>
                    </div>

                    <Button
                      variant="outline-primary"
                      onClick={handleRegisterClick}
                    >
                      <i className="fab fa-google"></i> Login with Google{" "}
                      <i
                        className="bi bi-google"
                        style={{
                          color: "red",
                          fontSize: "1.5rem",
                          marginLeft: "5px",
                        }}
                      ></i>
                    </Button>

                    <div className="text-center mt-3">
                      <Form.Text className="text-muted">
                        You don't have an account?{" "}
                        <Button variant="link" onClick={handleRegisterClick}>
                          Register
                        </Button>
                      </Form.Text>
                    </div>
                  </>
                ) : (
                  <>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label className="form-label">Email</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="Enter your email"
                        className="form-control-custom"
                      />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicUsername">
                      <Form.Label className="form-label">Username</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter your username"
                        className="form-control-custom"
                      />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicOTP">
                      <Form.Label className="form-label">OTP</Form.Label>
                      <Row>
                        <Col>
                          <Form.Control
                            type="text"
                            placeholder="Enter OTP"
                            className="form-control-custom"
                          />
                        </Col>
                        <Col>
                          <Button variant="primary">Send OTP</Button>
                        </Col>
                      </Row>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Label className="form-label">Password</Form.Label>
                      <Form.Control
                        type="password"
                        placeholder="Enter your password"
                        className="form-control-custom"
                      />
                    </Form.Group>

                    <Form.Group
                      className="mb-3"
                      controlId="formBasicConfirmPassword"
                    >
                      <Form.Label className="form-label">
                        Confirm password
                      </Form.Label>
                      <Form.Control
                        type="password"
                        placeholder="Confirm your password"
                        className="form-control-custom"
                      />
                    </Form.Group>

                    <Form.Group controlId="formBasicCheckbox">
                      <Form.Check
                        type="checkbox"
                        label="I accept the privacy and security terms"
                      />
                    </Form.Group>

                    {/* Google reCAPTCHA for Register */}
                    <ReCAPTCHA
                      sitekey={SITE_KEY}
                      onChange={onRecaptchaChangeRegister}
                      className="mb-3"
                    />

                    <Button
                      variant="primary"
                      type="submit"
                      className="btn-submit"
                    >
                      Register
                    </Button>

                    <div className="form-divider">
                      <hr />
                      <p>OR</p>
                    </div>

                    <Button
                      variant="outline-primary"
                      onClick={handleLoginClick}
                    >
                      <i className="fab fa-google"></i> Register with Google{" "}
                      <i
                        className="bi bi-google"
                        style={{
                          color: "red",
                          fontSize: "1.5rem",
                          marginLeft: "5px",
                        }}
                      ></i>
                    </Button>

                    <div className="text-center mt-3">
                      <Form.Text className="text-muted">
                        Already have an account?{" "}
                        <Button variant="link" onClick={handleLoginClick}>
                          Login
                        </Button>
                      </Form.Text>
                    </div>
                  </>
                )}
              </Form>
            </Col>
          </Row>
        </Card>
      </Col>
    </Row>
  );
}
