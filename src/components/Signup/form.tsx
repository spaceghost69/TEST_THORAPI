import { ErrorMessage, Field, Formik, FormikHelpers, FormikValues } from 'formik';
import React from 'react';
import { Accordion, Form as BSForm, Col, Nav, Row, Spinner } from 'react-bootstrap';
import { FaCheckCircle } from 'react-icons/fa';
import { FiUserCheck } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import { useAddPrincipalMutation } from '../../redux/services/PrincipalService';
import { Principal } from '../../thor/model';
import CoolButton from '../CoolButton';
import "./index.css";

const validationSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'First Name must be minimum 2 characters')
    .max(100, 'Name must not be more than 100 characters')
    .required('First Name is required'),
  lastName: Yup.string()
    .min(2, 'Last name must be minimum 2 characters')
    .max(100, 'Name must not be more than 100 characters')
    .required('Last Name is required'),
  username: Yup.string()
    .min(4, 'User Name must be minimum 4 characters')
    .max(20, 'Name must not be more than 100 characters')
    .required('User Name is required'),
  email: Yup.string().email('Please enter a valid email address').required('A valid email address is required'),
  acceptedTos: Yup.boolean()
    .required("The terms of service must be accepted to continue.")
    .oneOf([true], "The terms of service must be accepted to continue."),
  password: Yup.string()
    .matches(
      /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/,
      'Password must contain a lowercase character, an uppercase character, and a number'
    )
    .required()
    .min(8, 'Password must be at least 8 characters'),
});

const Form: React.FC = () => {
  const [addPrincipal, addPrincipalResult] = useAddPrincipalMutation();

  const principalExists = addPrincipalResult.status.includes('error') && addPrincipalResult.status == 'rejected';

  const signupSuccess = addPrincipalResult.status == 'fulfilled';

  let existingPrincipalName = null;
  if (principalExists) {
    // handle error state for re-entering principalname
    existingPrincipalName = addPrincipalResult.originalArgs.username;
  }


  const initialValues: Principal = {
    firstName: 'Kojak',
    lastName: 'DDT',
    username: 'Bigtime',
    email: 'kojak@yoki.com',
    password: 'Tester123'
  };

  const handleSubmit = (values: FormikValues,
    { setSubmitting }: FormikHelpers<Principal>) => {
    setTimeout(() => {
      console.log(values);
      addPrincipal(values);
      setSubmitting(false);
    }, 0);
  }

  return (
    <div>


      {signupSuccess && (
        <div className="success">
          <h1>Success!</h1>
          <p>Your account has been created. Please check your email for a verification link.</p>

          <Link to="/login">
            Click here to Sign In
          </Link>
          <br /><br /><br />
        </div>

      )}

      {!signupSuccess && (
        <Formik
          validateOnBlur={true}
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
          enableReinitialize={true}
        >
          {({ isSubmitting, errors, values, setFieldValue, resetForm, touched, setFieldTouched, handleSubmit, isValid }) => {

            if (principalExists) {
              if (existingPrincipalName == values.username) {
                if (addPrincipalResult.error != undefined) {
                  errors.username = addPrincipalResult.error + ' username: ' + existingPrincipalName;
                }
              } else {
                isSubmitting = false;
                isValid = true;
              }
            }
            return (

              <form onSubmit={handleSubmit} className="form">
                {/**
                 * 
                 * "requestId":"81YvHHjXbrbNZj6pVEsOS","status":"rejected","endpointName":"signupPrincipal","startedTimeStamp":1729699355360,"error":{"status":"PARSING_ERROR","originalStatus":400,"data":"Principalname is already taken.","error":"SyntaxError: Unexpected token 'U', \"Principalname i\"... is not valid JSON"},"isUninitialized":false,"isLoading":false,"isSuccess":false,"isError":true,"originalArgs":{"firstName":"John","lastName":"McMahon","username":"super","email":"john@valkyrlabs.com","password":"testsetaS3","acceptedTos":true}}
                 * 
                */}

                <Row>
                  <Col>
                    <Accordion defaultActiveKey="-1">
                      <Accordion.Item eventKey="0">
                        <Accordion.Header>Debug</Accordion.Header>
                        <Accordion.Body>
                          errors: {JSON.stringify(errors)}
                          <br />
                          touched: {JSON.stringify(touched)}
                          <br />
                          addPrincipalResult: {JSON.stringify(addPrincipalResult)}
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                  </Col>
                </Row>


                <Row>
                  <Col md={12}>
                    <label htmlFor="firstName" className="nice-form-control">
                      <b>First Name: {touched.firstName && !errors.firstName && (<span className="okCheck"><FaCheckCircle /> looks good!</span>)}</b>


                      <Field name="firstName" type="text"
                        className={errors.firstName ? 'form-control field-error' : ' nice-form-control form-control'} />
                      <ErrorMessage className='error' name="firstName" component="span" />

                    </label>
                  </Col>
                </Row>
                <Row>
                  <Col md={12}>
                    <label htmlFor="lastName" className="nice-form-control">
                      <b>Last Name: {touched.lastName && !errors.lastName && (<span className="okCheck"><FaCheckCircle /> looks good!</span>)}</b>
                      <Field name="lastName" type="text"
                        className={errors.lastName ? 'form-control field-error' : ' form-control'} />
                      <ErrorMessage className='error' name="lastName" component="div" />
                    </label>
                  </Col>
                </Row>
                <Row>
                  <Col md={12}>
                    {(existingPrincipalName == values.username) && (

                      <div className="error">
                        "{addPrincipalResult.originalArgs.username}" is unavailable.
                        <br />
                        {JSON.stringify(addPrincipalResult.error)}
                      </div>
                    )}
                    <label htmlFor="username" className="nice-form-control">
                      <b>User Name: {touched.username && !errors.username && (<span className="okCheck"><FaCheckCircle /> looks good!</span>)}</b>
                      <Field name="username" type="text"
                        className={errors.username ? 'form-control field-error' : ' form-control'} />
                      <ErrorMessage className='error' name="username" component="div" />
                    </label>
                  </Col>
                </Row>
                <Row>
                  <Col md={12}>
                    <label htmlFor="email" className="nice-form-control">
                      <b>Email: {touched.email && !errors.email && (<span className="okCheck"><FaCheckCircle /> looks good!</span>)}</b>
                      <Field name="email" type="text"
                        className={errors.email ? 'form-control field-error' : ' form-control'} />
                      <ErrorMessage className='error' name="email" component="div" />
                    </label>

                  </Col>
                </Row>
                <Row>
                  <Col md={12}>
                    <label htmlFor="password" className="nice-form-control">
                      <b>Password: {touched.password && !errors.password && (<span className="okCheck"><FaCheckCircle /> looks good!</span>)}</b>
                      <Field name="password" type="password"
                        className={errors.password ? 'form-control field-error' : ' form-control'} />
                      <ErrorMessage className='error' name="password" component="div" />
                    </label>
                  </Col>
                </Row>
                <Row>
                  <Col md={12}>
                    <label htmlFor="acceptedTos" className="nice-form-control">

                      {touched.acceptedTos && !errors.acceptedTos && (<span className="okCheck"><FaCheckCircle /> <b>thank you!</b></span>)}
                      I have read and agree to the<b>
                      <Nav.Link href="https://valkyrlabs.com/v1/docs/Legal/tos" target="_blank"> Terms of Service.
                      
                        Click here to read TOS
                      </Nav.Link></b>
                      <h1>
                        <BSForm.Check
                          required
                          id="acceptedTos"
                          name="acceptedTos"
                          onChange={e => {
                            setFieldTouched('acceptedTos', true);
                            setFieldValue('acceptedTos', e.target.checked);
                          }}
                          isInvalid={!!errors.acceptedTos}
                          className={errors.acceptedTos ? 'errorCheck ' : ''} />
                          
                      </h1>
                      <ErrorMessage className='error' name="acceptedTos" component="div" />
                      
                      {" "}
                      
                    </label>
                    
                  </Col>
                </Row>
                <br /><br />
                <Row>
                  <Col>
                    <CoolButton
                      variant={(touched && isValid) ? (isSubmitting ? 'disabled' : 'success') : 'warning'}
                      // disabled={!(touched && isValid && (addPrincipalResult.status == 'uninitialized'))}
                      type="submit"
                      onClick={() => { }}
                    >
                      {isSubmitting && (
                        <Spinner
                          style={{ float: "left" }}
                          as="span"
                          animation="grow"
                          variant="light"
                          aria-hidden="true"
                        />
                      )}
                      <FiUserCheck size={30} /> Register Account
                    </CoolButton>
                  </Col>
                </Row>
              </form>
            )
          }}
        </Formik>
      )
      }
    </div >
  );
};

export default Form;