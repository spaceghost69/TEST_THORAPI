import { ErrorMessage, Field, Formik, FormikHelpers, FormikValues } from 'formik';
import React from 'react';
import { Accordion, Col, Row, Spinner } from 'react-bootstrap';
import { FaCheckCircle } from 'react-icons/fa';
import { FiUserCheck } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { useLoginUserMutation } from '../../redux/services/LoginService';
import { Login } from '../../thor/model';
import CoolButton from '../CoolButton';
import "./index.css";



const validationSchema = Yup.object().shape({

  username: Yup.string()
    .min(4, 'User Name must be minimum 4 characters')
    .max(20, 'Name must not be more than 100 characters')
    .required('User Name is required'),
  password: Yup.string()
    .matches(
      /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/,
      'Password must contain a lowercase character, an uppercase character, and a number'
    )
    .required()
    .min(8, 'Password must be at least 8 characters'),
});

const Form: React.FC = () => {
  const [loginUser, loginUserResult] = useLoginUserMutation();
  const navigate = useNavigate();
  const loginFailed = loginUserResult.status == 'rejected';
  const loginSuccess = loginUserResult.status == 'fulfilled';


  if(loginSuccess){
    navigate('/dashboard');
  }

  const initialValues: Login = {
    username: '',
    password: ''
  };

  const handleSubmit = (values: FormikValues,
    { setSubmitting }: FormikHelpers<Login>) => {
    setTimeout(() => {
      console.log(values);
      loginUser(values);
      setSubmitting(false);
    }, 0);
  }

  return (
    <div>
      {loginSuccess && (
        <div className="success">
          <h1>Success!</h1>
          <p>Enjoy your experience...</p>
        </div>

      )}

      {!loginSuccess && (
        <Formik
          validateOnBlur={true}
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
          enableReinitialize={true}
        >
          {({ isSubmitting, errors, values, setFieldValue, resetForm, touched, setFieldTouched, handleSubmit, isValid }) => {

            if (loginFailed) {
              touched = {};
            }
            return (

              <form onSubmit={handleSubmit} className="form">
                {/**
                 * 
                 * 
                 * "requestId":"81YvHHjXbrbNZj6pVEsOS","status":"rejected","endpointName":"signupUser","startedTimeStamp":1729699355360,"error":{"status":"PARSING_ERROR","originalStatus":400,"data":"Username is already taken.","error":"SyntaxError: Unexpected token 'U', \"Username i\"... is not valid JSON"},"isUninitialized":false,"isLoading":false,"isSuccess":false,"isError":true,"originalArgs":{"firstName":"John","lastName":"McMahon","username":"super","email":"john@starter.io","password":"testsetaS3","acceptedTos":true}}
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
                          loginUserResult: {JSON.stringify(loginUserResult)}
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                  </Col>
                </Row>

                

                {(loginFailed) && (
                  <Row>
                    <Col>

                      <div className="error">
                        "{loginUserResult.originalArgs.username}" login failed.
                        <br />
                        {JSON.stringify(loginUserResult.error)}
                      </div>
                    </Col>
                  </Row>

                )}
                <Row>
                  <Col md={12}>
                    <label htmlFor="username" className="nice-form-control">
                      <b>User Name: {touched.username && !errors.username && (<span className="okCheck"><FaCheckCircle /></span>)}</b>
                      <Field name="username" type="text"
                        className={errors.username ? 'form-control field-error' : ' form-control'} />
                      <ErrorMessage className='error' name="username" component="div" />
                    </label>
                  </Col>
                </Row>

                <Row>
                  <Col md={12}>
                    <label htmlFor="password" className="nice-form-control">
                      <b>Password: {touched.password && !errors.password && (<span className="okCheck"><FaCheckCircle /></span>)}</b>
                      <Field name="password" type="password"
                        className={errors.password ? 'form-control field-error' : ' form-control'} />
                      <ErrorMessage className='error' name="password" component="div" />
                    </label>
                  </Col>
                </Row>

                <br /><br />
                <Row>
                  <Col>
                    <CoolButton
                      variant={(touched && isValid) ? (isSubmitting ? 'disabled' : 'success') : 'warning'}
                      // disabled={!(touched && isValid && (loginUserResult.status == 'uninitialized'))}
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
                      <FiUserCheck size={30} /> Login Now
                    </CoolButton>
                  </Col>
                </Row>
              </form>
            )
          }}
        </Formik>
      )}
    </div >
  );
};

export default Form;