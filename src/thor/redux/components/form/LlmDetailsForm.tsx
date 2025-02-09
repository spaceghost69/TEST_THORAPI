import { ErrorMessage, Field, Formik, FormikHelpers, FormikValues } from 'formik';
import React from 'react';
import { Form as BSForm, Accordion, Col, Nav, Row, Spinner } from 'react-bootstrap';
import { FaCheckCircle, FaCogs, FaRegPlusSquare } from 'react-icons/fa';
import CoolButton from '../../../../components/CoolButton';
import * as Yup from 'yup';
import { LlmDetails, LlmDetailsRoleEnum, LlmDetailsProviderEnum, LlmDetailsApiTypeEnum,  } from '../../../model';
import { useAddLlmDetailsMutation } from '../../services/LlmDetailsService';

/**
############################## DO NOT EDIT: GENERATED FILE ##############################

Generated by Valkyr Labs ThorAPI: https://valkyrlabs.com/thorapi

Powered by Swagger Codegen: http://swagger.io

Generated Details:
**GENERATOR VERSION:** 7.5.0
**GENERATED DATE:** 2025-01-03T16:22:47.869548-08:00[America/Los_Angeles]
**GENERATOR CLASS:** org.openapitools.codegen.languages.TypeScriptReduxQueryClientCodegen

Template file: typescript-redux-query/modelForm.mustache

############################## DO NOT EDIT: GENERATED FILE ##############################

Description: LlmDetails
*/

{/* ENUMS FOR FORM VALIDATIONS */}

    

const RoleValidation = () => { 
  return(
    [
      'user', 'assistant', 
    ]
  )
};

const ProviderValidation = () => { 
  return(
    [
      'valkyrai', 'openai', 'llama', 'phi', 'gemma', 'mistral', 'claude', 'gemini', 'other', 
    ]
  )
};

const ApiTypeValidation = () => { 
  return(
    [
      'openai', 'ollama', 'other', 
    ]
  )
};



{/* MUSTACHE FORM VALIDATIONS */}
const validationSchema = Yup.object().shape({

     name: Yup.string()
    
    
    
    
    ,
     version: Yup.string()
    
    
    
    
    ,
     notes: Yup.string()
    
    
    
    
    ,
     role: Yup.string().oneOf(RoleValidation(), 'Invalid value selected for role')
    
    
    
    
    ,
     provider: Yup.string().oneOf(ProviderValidation(), 'Invalid value selected for provider')
    
    
    
    
    ,
     apiType: Yup.string().oneOf(ApiTypeValidation(), 'Invalid value selected for apiType')
    
    
    
    
    ,
     initialPrompt: Yup.string()
    
    
    
    
    ,
     apiKey: Yup.string()
    
    
    
    
    ,
     credential: Yup.string()
    
    
    
    
    ,
     credentialPassword: Yup.string()
    
    
    
    
    ,
     url: Yup.string()
    
    
    
    
    ,
     requestParameters: Yup.string()
    
    
    
    
    ,
     meta: Yup.string()
    
    
    
    
    ,
     id: Yup.string()
    
    
    
    
    ,
     ownerId: Yup.string()
    
    
    
    
    ,
     createdDate: Yup.date()
    
    
    
    
    ,
     keyHash: Yup.string()
    
    
    
    
    ,
     lastAccessedById: Yup.string()
    
    
    
    
    ,
     lastAccessedDate: Yup.date()
    
    
    
    
    ,
     lastModifiedById: Yup.string()
    
    
    
    
    ,
     lastModifiedDate: Yup.date()
    
    
    
    
    ,

});

const LlmDetailsForm: React.FC = () => {
  const [addLlmDetails, addLlmDetailsResult] = useAddLlmDetailsMutation();

  const initialValues: LlmDetails = {
    
    
    name : 'null',
    
    
    
    
    
    
    
    version : 'v3.0.3-B8',
    
    
    
    
    
    
    
    notes : 'null',
    
    
    
    
    
        role :   LlmDetailsRoleEnum[Object.keys(LlmDetailsRoleEnum)[0]], 
        provider :   LlmDetailsProviderEnum[Object.keys(LlmDetailsProviderEnum)[0]], 
        apiType :   LlmDetailsApiTypeEnum[Object.keys(LlmDetailsApiTypeEnum)[0]], 
    
    
    initialPrompt : 'You are a helpful assistant',
    
    
    
    
    
    
    
    apiKey : 'D6ObBZ599Z3xkuohG3/cogxZYwhxdVyLlIAPanlO35I&#x3D;',
    
    
    
    
    
    
    
    credential : 'null',
    
    
    
    
    
    
    
    credentialPassword : 'c@nnotBeH@ckd!',
    
    
    
    
    
    
    
    url : 'null',
    
    
    
    
    
    
    
    requestParameters : 'null',
    
    
    
    
    
    
    
    meta : 'null',
    
    
    
    
    
    
    
    id : 'b3c75132-b3eb-458e-b8e2-9df5ff48c36c',
    
    
    
    
    
    
    
    ownerId : '2570f2fd-5cf6-4d2e-b53e-49a052eb29b3',
    
    
    
    
    
    
    
    
    createdDate : new Date(), 
    
    
    
    
    
    
    keyHash : 'null',
    
    
    
    
    
    
    
    lastAccessedById : 'd32122d6-3e7a-409d-acf2-588c797823fc',
    
    
    
    
    
    
    
    
    lastAccessedDate : new Date(), 
    
    
    
    
    
    
    lastModifiedById : 'f92f6ca3-0741-47ef-be79-fe4e048e2b75',
    
    
    
    
    
    
    
    
    lastModifiedDate : new Date(), 
    
    
    
    
    
  };

  const handleSubmit = (values: FormikValues,
    { setSubmitting }: FormikHelpers<LlmDetails>) => {
    setTimeout(() => {
      console.log(values);
      addLlmDetails(values);
      setSubmitting(false);
    }, 500);
  }

  return (
    <div>
      <Formik
        validateOnBlur={true}
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >

        {({ isSubmitting, isValid, errors, setFieldValue, touched, setFieldTouched, handleSubmit }) => (
          <form onSubmit={handleSubmit} className="form">

                    <Accordion
                      defaultActiveKey="1"
                    >
                      <Accordion.Item eventKey="0">
                        <Accordion.Header><FaCogs size={36}/></Accordion.Header>
                        <Accordion.Body>
                          errors: {JSON.stringify(errors)}
                          <br />
                          touched: {JSON.stringify(touched)}
                          <br />
                          addLlmDetailsResult: {JSON.stringify(addLlmDetailsResult)}
                        </Accordion.Body>
                      </Accordion.Item>

                      <Accordion.Item eventKey="1">
                        <Accordion.Header><FaRegPlusSquare  size={36}/> Add New LlmDetails</Accordion.Header>
                        <Accordion.Body>

        {/* MUSTACHE FORM FIELDS */}


        
            <label htmlFor="name" className="nice-form-control">
              <b>Name: {touched.name && !errors.name && (<span className="okCheck"><FaCheckCircle /> looks good!</span>)}</b>
              
              
              
          
          {/* name  TEXT FIELD */}
              <Field name="name" type="text"
                className={errors.name  ? 'form-control field-error' : ' nice-form-control form-control'} />    
                        <ErrorMessage className='error' name="name" component="span" />
            </label>


        
            <label htmlFor="version" className="nice-form-control">
              <b>Version: {touched.version && !errors.version && (<span className="okCheck"><FaCheckCircle /> looks good!</span>)}</b>
              
              
              
          
          {/* version  TEXT FIELD */}
              <Field name="version" type="text"
                className={errors.version  ? 'form-control field-error' : ' nice-form-control form-control'} />    
                        <ErrorMessage className='error' name="version" component="span" />
            </label>


        
            <label htmlFor="notes" className="nice-form-control">
              <b>Notes: {touched.notes && !errors.notes && (<span className="okCheck"><FaCheckCircle /> looks good!</span>)}</b>
              
              
              
          
          {/* notes  TEXT FIELD */}
              <Field name="notes" type="text"
                className={errors.notes  ? 'form-control field-error' : ' nice-form-control form-control'} />    
                        <ErrorMessage className='error' name="notes" component="span" />
            </label>


        
            <label htmlFor="role" className="nice-form-control">
              <b>Role: {touched.role && !errors.role && (<span className="okCheck"><FaCheckCircle /> looks good!</span>)}</b>
              
              
              
                    {/* DROPDOWN FOR ENUM */}
              <BSForm.Select
                name="role"
                className={errors.role ? 'form-control field-error' : 'nice-form-control form-control'}
                onChange={e => {
                  setFieldTouched('role', true);
                  setFieldValue('role', e.target.value);
                }}
              >
                <option value="" label="Select Role" />
                <RoleLookup />
              </BSForm.Select>
              <ErrorMessage className='error' name="role" component="span" />
            </label>


        
            <label htmlFor="provider" className="nice-form-control">
              <b>Provider: {touched.provider && !errors.provider && (<span className="okCheck"><FaCheckCircle /> looks good!</span>)}</b>
              
              
              
                    {/* DROPDOWN FOR ENUM */}
              <BSForm.Select
                name="provider"
                className={errors.provider ? 'form-control field-error' : 'nice-form-control form-control'}
                onChange={e => {
                  setFieldTouched('provider', true);
                  setFieldValue('provider', e.target.value);
                }}
              >
                <option value="" label="Select Provider" />
                <ProviderLookup />
              </BSForm.Select>
              <ErrorMessage className='error' name="provider" component="span" />
            </label>


        
            <label htmlFor="apiType" className="nice-form-control">
              <b>Api Type: {touched.apiType && !errors.apiType && (<span className="okCheck"><FaCheckCircle /> looks good!</span>)}</b>
              
              
              
                    {/* DROPDOWN FOR ENUM */}
              <BSForm.Select
                name="apiType"
                className={errors.apiType ? 'form-control field-error' : 'nice-form-control form-control'}
                onChange={e => {
                  setFieldTouched('apiType', true);
                  setFieldValue('apiType', e.target.value);
                }}
              >
                <option value="" label="Select Api Type" />
                <ApiTypeLookup />
              </BSForm.Select>
              <ErrorMessage className='error' name="apiType" component="span" />
            </label>


        
            <label htmlFor="initialPrompt" className="nice-form-control">
              <b>Initial Prompt: {touched.initialPrompt && !errors.initialPrompt && (<span className="okCheck"><FaCheckCircle /> looks good!</span>)}</b>
              
              
              
          
          {/* initialPrompt  TEXT FIELD */}
              <Field name="initialPrompt" type="text"
                className={errors.initialPrompt  ? 'form-control field-error' : ' nice-form-control form-control'} />    
                        <ErrorMessage className='error' name="initialPrompt" component="span" />
            </label>


        
            <label htmlFor="apiKey" className="nice-form-control">
              <b>Api Key: {touched.apiKey && !errors.apiKey && (<span className="okCheck"><FaCheckCircle /> looks good!</span>)}</b>
              
              
              
          
          {/* apiKey  TEXT FIELD */}
              <Field name="apiKey" type="text"
                className={errors.apiKey  ? 'form-control field-error' : ' nice-form-control form-control'} />    
                        <ErrorMessage className='error' name="apiKey" component="span" />
            </label>


        
            <label htmlFor="credential" className="nice-form-control">
              <b>Credential: {touched.credential && !errors.credential && (<span className="okCheck"><FaCheckCircle /> looks good!</span>)}</b>
              
              
              
          
          {/* credential  TEXT FIELD */}
              <Field name="credential" type="text"
                className={errors.credential  ? 'form-control field-error' : ' nice-form-control form-control'} />    
                        <ErrorMessage className='error' name="credential" component="span" />
            </label>


        
            <label htmlFor="credentialPassword" className="nice-form-control">
              <b>Credential Password: {touched.credentialPassword && !errors.credentialPassword && (<span className="okCheck"><FaCheckCircle /> looks good!</span>)}</b>
              
              
              
          
          {/* credentialPassword  TEXT FIELD */}
              <Field name="credentialPassword" type="text"
                className={errors.credentialPassword  ? 'form-control field-error' : ' nice-form-control form-control'} />    
                        <ErrorMessage className='error' name="credentialPassword" component="span" />
            </label>


        
            <label htmlFor="url" className="nice-form-control">
              <b>Url: {touched.url && !errors.url && (<span className="okCheck"><FaCheckCircle /> looks good!</span>)}</b>
              
              
              
          
          {/* url  TEXT FIELD */}
              <Field name="url" type="text"
                className={errors.url  ? 'form-control field-error' : ' nice-form-control form-control'} />    
                        <ErrorMessage className='error' name="url" component="span" />
            </label>


        
            <label htmlFor="requestParameters" className="nice-form-control">
              <b>Request Parameters: {touched.requestParameters && !errors.requestParameters && (<span className="okCheck"><FaCheckCircle /> looks good!</span>)}</b>
              
              
              
          
          {/* requestParameters  TEXT FIELD */}
              <Field name="requestParameters" type="text"
                className={errors.requestParameters  ? 'form-control field-error' : ' nice-form-control form-control'} />    
                        <ErrorMessage className='error' name="requestParameters" component="span" />
            </label>


        
            <label htmlFor="meta" className="nice-form-control">
              <b>Meta: {touched.meta && !errors.meta && (<span className="okCheck"><FaCheckCircle /> looks good!</span>)}</b>
              
              
              
          
          {/* meta  TEXT FIELD */}
              <Field name="meta" type="text"
                className={errors.meta  ? 'form-control field-error' : ' nice-form-control form-control'} />    
                        <ErrorMessage className='error' name="meta" component="span" />
            </label>


        
            <label htmlFor="id" className="nice-form-control">
              <b>Id: {touched.id && !errors.id && (<span className="okCheck"><FaCheckCircle /> looks good!</span>)}</b>
              
              
              
          
          {/* id  TEXT FIELD */}
              <Field name="id" type="text"
                className={errors.id  ? 'form-control field-error' : ' nice-form-control form-control'} />    
                        <ErrorMessage className='error' name="id" component="span" />
            </label>


        
            <label htmlFor="ownerId" className="nice-form-control">
              <b>Owner Id: {touched.ownerId && !errors.ownerId && (<span className="okCheck"><FaCheckCircle /> looks good!</span>)}</b>
              
              
              
          
          {/* ownerId  TEXT FIELD */}
              <Field name="ownerId" type="text"
                className={errors.ownerId  ? 'form-control field-error' : ' nice-form-control form-control'} />    
                        <ErrorMessage className='error' name="ownerId" component="span" />
            </label>


        
            <label htmlFor="createdDate" className="nice-form-control">
              <b>Created Date: {touched.createdDate && !errors.createdDate && (<span className="okCheck"><FaCheckCircle /> looks good!</span>)}</b>
              
              
              
          
          {/*createdDate DATE FIELD */}
              <Field name="createdDate" type="date"
                className={errors.createdDate  ? 'form-control field-error' : ' nice-form-control form-control'} />
                        <ErrorMessage className='error' name="createdDate" component="span" />
            </label>


        
            <label htmlFor="keyHash" className="nice-form-control">
              <b>Key Hash: {touched.keyHash && !errors.keyHash && (<span className="okCheck"><FaCheckCircle /> looks good!</span>)}</b>
              
              
              
          
          {/* keyHash  TEXT FIELD */}
              <Field name="keyHash" type="text"
                className={errors.keyHash  ? 'form-control field-error' : ' nice-form-control form-control'} />    
                        <ErrorMessage className='error' name="keyHash" component="span" />
            </label>


        
            <label htmlFor="lastAccessedById" className="nice-form-control">
              <b>Last Accessed By Id: {touched.lastAccessedById && !errors.lastAccessedById && (<span className="okCheck"><FaCheckCircle /> looks good!</span>)}</b>
              
              
              
          
          {/* lastAccessedById  TEXT FIELD */}
              <Field name="lastAccessedById" type="text"
                className={errors.lastAccessedById  ? 'form-control field-error' : ' nice-form-control form-control'} />    
                        <ErrorMessage className='error' name="lastAccessedById" component="span" />
            </label>


        
            <label htmlFor="lastAccessedDate" className="nice-form-control">
              <b>Last Accessed Date: {touched.lastAccessedDate && !errors.lastAccessedDate && (<span className="okCheck"><FaCheckCircle /> looks good!</span>)}</b>
              
              
              
          
          {/*lastAccessedDate DATE FIELD */}
              <Field name="lastAccessedDate" type="date"
                className={errors.lastAccessedDate  ? 'form-control field-error' : ' nice-form-control form-control'} />
                        <ErrorMessage className='error' name="lastAccessedDate" component="span" />
            </label>


        
            <label htmlFor="lastModifiedById" className="nice-form-control">
              <b>Last Modified By Id: {touched.lastModifiedById && !errors.lastModifiedById && (<span className="okCheck"><FaCheckCircle /> looks good!</span>)}</b>
              
              
              
          
          {/* lastModifiedById  TEXT FIELD */}
              <Field name="lastModifiedById" type="text"
                className={errors.lastModifiedById  ? 'form-control field-error' : ' nice-form-control form-control'} />    
                        <ErrorMessage className='error' name="lastModifiedById" component="span" />
            </label>


        
            <label htmlFor="lastModifiedDate" className="nice-form-control">
              <b>Last Modified Date: {touched.lastModifiedDate && !errors.lastModifiedDate && (<span className="okCheck"><FaCheckCircle /> looks good!</span>)}</b>
              
              
              
          
          {/*lastModifiedDate DATE FIELD */}
              <Field name="lastModifiedDate" type="date"
                className={errors.lastModifiedDate  ? 'form-control field-error' : ' nice-form-control form-control'} />
                        <ErrorMessage className='error' name="lastModifiedDate" component="span" />
            </label>

 
<br /><br />

                    <CoolButton
                      variant={(touched && isValid) ? (isSubmitting ? 'disabled' : 'success') : 'warning'}
                      type="submit"
                      onClick={() => { }}
                    >
                      {isSubmitting && (
                        <Spinner
                          style={ { float: "left" } }
                          as="span"
                          animation="grow"
                          variant="light"
                          aria-hidden="true"
                        />
                      )}
                      <FaCheckCircle size={30} /> Create New LlmDetails
                    </CoolButton>


                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>

          </form>
        )}
    </Formik>
    </div >
  );
};

/*

lowercase rolelookup
uppercase ROLELOOKUP
snakecase role_lookup
pascalcase RoleLookup
camelcase roleLookup
kebabcase role-lookup


*/

const RoleLookup = () => { 
  return(
  <>
    
    <option value='user' label='User' />
    
    
    <option value='assistant' label='Assistant' />
    
  </>
  )
};



/*

lowercase providerlookup
uppercase PROVIDERLOOKUP
snakecase provider_lookup
pascalcase ProviderLookup
camelcase providerLookup
kebabcase provider-lookup


*/

const ProviderLookup = () => { 
  return(
  <>
    
    <option value='valkyrai' label='Valkyrai' />
    
    
    <option value='openai' label='Openai' />
    
    
    <option value='llama' label='Llama' />
    
    
    <option value='phi' label='Phi' />
    
    
    <option value='gemma' label='Gemma' />
    
    
    <option value='mistral' label='Mistral' />
    
    
    <option value='claude' label='Claude' />
    
    
    <option value='gemini' label='Gemini' />
    
    
    <option value='other' label='Other' />
    
  </>
  )
};



/*

lowercase apitypelookup
uppercase APITYPELOOKUP
snakecase api_type_lookup
pascalcase ApiTypeLookup
camelcase apiTypeLookup
kebabcase api-type-lookup


*/

const ApiTypeLookup = () => { 
  return(
  <>
    
    <option value='openai' label='Openai' />
    
    
    <option value='ollama' label='Ollama' />
    
    
    <option value='other' label='Other' />
    
  </>
  )
};






export default LlmDetailsForm;
