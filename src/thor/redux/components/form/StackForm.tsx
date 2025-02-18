import { ErrorMessage, Field, Formik, FormikHelpers, FormikValues } from 'formik';
import React from 'react';
import { Accordion, Form as BSForm, Spinner } from 'react-bootstrap';
import { FaCheckCircle, FaCogs, FaRegPlusSquare } from 'react-icons/fa';
import * as Yup from 'yup';
import CoolButton from '../../../../components/CoolButton';
import { Stack, StackCategoryEnum, StackLanguageEnum, StackStatusEnum, StackTemplateRepoEnum, } from '../../../model';
import { useAddStackMutation } from '../../services/StackService';

/**
############################## DO NOT EDIT: GENERATED FILE ##############################

Generated by Peragon Games ThorAPI: https://valkyrlabs.com/thorapi

Powered by Swagger Codegen: http://swagger.io

Generated Details:
**GENERATOR VERSION:** 7.5.0
**GENERATED DATE:** 2024-12-30T08:46:46.125225-08:00[America/Los_Angeles]
**GENERATOR CLASS:** org.openapitools.codegen.languages.TypeScriptReduxQueryClientCodegen

Template file: typescript-redux-query/modelForm.mustache

############################## DO NOT EDIT: GENERATED FILE ##############################

Description: Stack
*/

{/* ENUMS FOR FORM VALIDATIONS */}

    

const CategoryValidation = () => { 
  return(
    [
      'Full Stack', 'Front End', 'API', 'Data Library', 'Infrastructure', 'Documentation', 
    ]
  )
};

const LanguageValidation = () => { 
  return(
    [
      'valkyrai_java_spring', 'valkyrai_kotlin_spring', 
    ]
  )
};

const TemplateRepoValidation = () => { 
  return(
    [
      'java_spring', 'typescript_rtk_bootstrap', 
    ]
  )
};

const StatusValidation = () => { 
  return(
    [
      'available', 'syntax_error', 'compilation_error', 'runtime_error', 'database_error', 'locked', 
    ]
  )
};



{/* MUSTACHE FORM VALIDATIONS */}
const validationSchema = Yup.object().shape({

     name: Yup.string()
    
    
    .required('name is required.')
    
    ,
     schemaData: Yup.string()
    
    
    .required('schemaData is required.')
    
    ,
     execModuleId: Yup.string()
    
    
    
    
    ,
     category: Yup.string().oneOf(CategoryValidation(), 'Invalid value selected for category')
    
    
    
    
    ,
     artifactId: Yup.string()
    
    
    
    
    ,
     applicationId: Yup.string()
    
    
    
    
    ,
     adminServerHost: Yup.string()
    
    
    
    
    ,
     adminServerPort: Yup.string()
    
    
    
    
    ,
     hostName: Yup.string()
    
    
    
    
    ,
     hostPort: Yup.string()
    
    
    
    
    ,
     orgName: Yup.string()
    
    
    
    
    ,
     gitUser: Yup.string()
    
    
    
    
    ,
     gitRepo: Yup.string()
    
    
    
    
    ,
    skipSwaggerGen: Yup.boolean()
    
    .oneOf([true], "The skipSwaggerGen value must be true.")
    
    
    ,
    skipJavaGen: Yup.boolean()
    
    .oneOf([true], "The skipJavaGen value must be true.")
    
    
    ,
    skipDbGen: Yup.boolean()
    
    .oneOf([true], "The skipDbGen value must be true.")
    
    
    ,
    skipReactGen: Yup.boolean()
    
    .oneOf([true], "The skipReactGen value must be true.")
    
    
    ,
    dbGenDropTable: Yup.boolean()
    
    .oneOf([true], "The dbGenDropTable value must be true.")
    
    
    ,
     thorApiSecureKey: Yup.string()
    
    
    
    
    ,
     dbUrl: Yup.string()
    
    
    
    
    ,
     dbName: Yup.string()
    
    
    
    
    ,
     dbUser: Yup.string()
    
    
    
    
    ,
     dbPassword: Yup.string()
    
    
    
    
    ,
     schemaName: Yup.string()
    
    
    
    
    ,
     language: Yup.string().oneOf(LanguageValidation(), 'Invalid value selected for language')
    
    
    
    
    ,
     templateRepo: Yup.string().oneOf(TemplateRepoValidation(), 'Invalid value selected for templateRepo')
    
    
    
    
    ,
     schemaFileName: Yup.string()
    
    
    
    
    ,
     status: Yup.string().oneOf(StatusValidation(), 'Invalid value selected for status')
    
    
    
    
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

const StackForm: React.FC = () => {
  const [addStack, addStackResult] = useAddStackMutation();

  const initialValues: Stack = {
    
    
    name : 'My New Stack',
    
    
    
    
    
    
    
    schemaData : '&lt;your schema here&gt;',
    
    
    
    
    
    
    
    execModuleId : 'null',
    
    
    
    
    
        category :   StackCategoryEnum[Object.keys(StackCategoryEnum)[0]], 
    
    
    artifactId : 'valkyrai',
    
    
    
    
    
    
    
    applicationId : 'null',
    
    
    
    
    
    
    
    adminServerHost : 'www.mycompany.com',
    
    
    
    
    
    
    
    adminServerPort : '8009',
    
    
    
    
    
    
    
    hostName : 'localhost',
    
    
    
    
    
    
    
    hostPort : '8099',
    
    
    
    
    
    
    
    orgName : 'Peragon Games INC.',
    
    
    
    
    
    
    
    gitUser : 'Peragon Games INC',
    
    
    
    
    
    
    
    gitRepo : 'MyPeragonAIApp',
    
    
    
    
    
    
    skipSwaggerGen : false,
    
    
    
    
    
    
    
    skipJavaGen : false,
    
    
    
    
    
    
    
    skipDbGen : false,
    
    
    
    
    
    
    
    skipReactGen : false,
    
    
    
    
    
    
    
    dbGenDropTable : true,
    
    
    
    
    
    
    
    
    thorApiSecureKey : '&#x3D;W34sdcwdsfwC34W34sdcwdsfwC34W34sdcwdsfw&#x3D;',
    
    
    
    
    
    
    
    dbUrl : 'jdbc:mysql//db.myco.com',
    
    
    
    
    
    
    
    dbName : 'PeragonAIApp1',
    
    
    
    
    
    
    
    dbUser : 'igniteuser',
    
    
    
    
    
    
    
    dbPassword : 'hard2Gu3ss',
    
    
    
    
    
    
    
    schemaName : 'starter',
    
    
    
    
    
        language :   StackLanguageEnum[Object.keys(StackLanguageEnum)[0]], 
        templateRepo :   StackTemplateRepoEnum[Object.keys(StackTemplateRepoEnum)[0]], 
    
    
    schemaFileName : 'ignite_commerce.yml',
    
    
    
    
    
        status :   StackStatusEnum[Object.keys(StackStatusEnum)[0]], 
    
    
    id : 'f730d042-7ee5-4ec4-bd1f-2baa4d964783',
    
    
    
    
    
    
    
    ownerId : '2677c88f-247e-451c-9e1d-e1bb17ba80e9',
    
    
    
    
    
    
    
    
    createdDate : new Date(), 
    
    
    
    
    
    
    keyHash : 'null',
    
    
    
    
    
    
    
    lastAccessedById : 'dfe112ee-b126-44ad-af05-afab1a7f2a89',
    
    
    
    
    
    
    
    
    lastAccessedDate : new Date(), 
    
    
    
    
    
    
    lastModifiedById : 'd7670237-d377-4646-9419-60101d599d30',
    
    
    
    
    
    
    
    
    lastModifiedDate : new Date(), 
    
    
    
    
    
  };

  const handleSubmit = (values: FormikValues,
    { setSubmitting }: FormikHelpers<Stack>) => {
    setTimeout(() => {
      console.log(values);
      addStack(values);
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
                          addStackResult: {JSON.stringify(addStackResult)}
                        </Accordion.Body>
                      </Accordion.Item>

                      <Accordion.Item eventKey="1">
                        <Accordion.Header><FaRegPlusSquare  size={36}/> Add New Stack</Accordion.Header>
                        <Accordion.Body>

        {/* MUSTACHE FORM FIELDS */}


        
            <label htmlFor="name" className="nice-form-control">
              <b>Name: {touched.name && !errors.name && (<span className="okCheck"><FaCheckCircle /> looks good!</span>)}</b>
              
              
              
          
          {/* name  TEXT FIELD */}
              <Field name="name" type="text"
                className={errors.name  ? 'form-control field-error' : ' nice-form-control form-control'} />    
                        <ErrorMessage className='error' name="name" component="span" />
            </label>


        
            <label htmlFor="schemaData" className="nice-form-control">
              <b>Schema Data: {touched.schemaData && !errors.schemaData && (<span className="okCheck"><FaCheckCircle /> looks good!</span>)}</b>
              
              
              
          
          {/* schemaData  TEXT FIELD */}
              <Field name="schemaData" type="text"
                className={errors.schemaData  ? 'form-control field-error' : ' nice-form-control form-control'} />    
                        <ErrorMessage className='error' name="schemaData" component="span" />
            </label>


        
            <label htmlFor="execModuleId" className="nice-form-control">
              <b>Exec Module Id: {touched.execModuleId && !errors.execModuleId && (<span className="okCheck"><FaCheckCircle /> looks good!</span>)}</b>
              
              
              
          
          {/* execModuleId  TEXT FIELD */}
              <Field name="execModuleId" type="text"
                className={errors.execModuleId  ? 'form-control field-error' : ' nice-form-control form-control'} />    
                        <ErrorMessage className='error' name="execModuleId" component="span" />
            </label>


        
            <label htmlFor="category" className="nice-form-control">
              <b>Category: {touched.category && !errors.category && (<span className="okCheck"><FaCheckCircle /> looks good!</span>)}</b>
              
              
              
                    {/* DROPDOWN FOR ENUM */}
              <BSForm.Select
                name="category"
                className={errors.category ? 'form-control field-error' : 'nice-form-control form-control'}
                onChange={e => {
                  setFieldTouched('category', true);
                  setFieldValue('category', e.target.value);
                }}
              >
                <option value="" label="Select Category" />
                <CategoryLookup />
              </BSForm.Select>
              <ErrorMessage className='error' name="category" component="span" />
            </label>


        
            <label htmlFor="artifactId" className="nice-form-control">
              <b>Artifact Id: {touched.artifactId && !errors.artifactId && (<span className="okCheck"><FaCheckCircle /> looks good!</span>)}</b>
              
              
              
          
          {/* artifactId  TEXT FIELD */}
              <Field name="artifactId" type="text"
                className={errors.artifactId  ? 'form-control field-error' : ' nice-form-control form-control'} />    
                        <ErrorMessage className='error' name="artifactId" component="span" />
            </label>


        
            <label htmlFor="applicationId" className="nice-form-control">
              <b>Application Id: {touched.applicationId && !errors.applicationId && (<span className="okCheck"><FaCheckCircle /> looks good!</span>)}</b>
              
              
              
          
          {/* applicationId  TEXT FIELD */}
              <Field name="applicationId" type="text"
                className={errors.applicationId  ? 'form-control field-error' : ' nice-form-control form-control'} />    
                        <ErrorMessage className='error' name="applicationId" component="span" />
            </label>


        
            <label htmlFor="adminServerHost" className="nice-form-control">
              <b>Admin Server Host: {touched.adminServerHost && !errors.adminServerHost && (<span className="okCheck"><FaCheckCircle /> looks good!</span>)}</b>
              
              
              
          
          {/* adminServerHost  TEXT FIELD */}
              <Field name="adminServerHost" type="text"
                className={errors.adminServerHost  ? 'form-control field-error' : ' nice-form-control form-control'} />    
                        <ErrorMessage className='error' name="adminServerHost" component="span" />
            </label>


        
            <label htmlFor="adminServerPort" className="nice-form-control">
              <b>Admin Server Port: {touched.adminServerPort && !errors.adminServerPort && (<span className="okCheck"><FaCheckCircle /> looks good!</span>)}</b>
              
              
              
          
          {/* adminServerPort  TEXT FIELD */}
              <Field name="adminServerPort" type="text"
                className={errors.adminServerPort  ? 'form-control field-error' : ' nice-form-control form-control'} />    
                        <ErrorMessage className='error' name="adminServerPort" component="span" />
            </label>


        
            <label htmlFor="hostName" className="nice-form-control">
              <b>Host Name: {touched.hostName && !errors.hostName && (<span className="okCheck"><FaCheckCircle /> looks good!</span>)}</b>
              
              
              
          
          {/* hostName  TEXT FIELD */}
              <Field name="hostName" type="text"
                className={errors.hostName  ? 'form-control field-error' : ' nice-form-control form-control'} />    
                        <ErrorMessage className='error' name="hostName" component="span" />
            </label>


        
            <label htmlFor="hostPort" className="nice-form-control">
              <b>Host Port: {touched.hostPort && !errors.hostPort && (<span className="okCheck"><FaCheckCircle /> looks good!</span>)}</b>
              
              
              
          
          {/* hostPort  TEXT FIELD */}
              <Field name="hostPort" type="text"
                className={errors.hostPort  ? 'form-control field-error' : ' nice-form-control form-control'} />    
                        <ErrorMessage className='error' name="hostPort" component="span" />
            </label>


        
            <label htmlFor="orgName" className="nice-form-control">
              <b>Org Name: {touched.orgName && !errors.orgName && (<span className="okCheck"><FaCheckCircle /> looks good!</span>)}</b>
              
              
              
          
          {/* orgName  TEXT FIELD */}
              <Field name="orgName" type="text"
                className={errors.orgName  ? 'form-control field-error' : ' nice-form-control form-control'} />    
                        <ErrorMessage className='error' name="orgName" component="span" />
            </label>


        
            <label htmlFor="gitUser" className="nice-form-control">
              <b>Git User: {touched.gitUser && !errors.gitUser && (<span className="okCheck"><FaCheckCircle /> looks good!</span>)}</b>
              
              
              
          
          {/* gitUser  TEXT FIELD */}
              <Field name="gitUser" type="text"
                className={errors.gitUser  ? 'form-control field-error' : ' nice-form-control form-control'} />    
                        <ErrorMessage className='error' name="gitUser" component="span" />
            </label>


        
            <label htmlFor="gitRepo" className="nice-form-control">
              <b>Git Repo: {touched.gitRepo && !errors.gitRepo && (<span className="okCheck"><FaCheckCircle /> looks good!</span>)}</b>
              
              
              
          
          {/* gitRepo  TEXT FIELD */}
              <Field name="gitRepo" type="text"
                className={errors.gitRepo  ? 'form-control field-error' : ' nice-form-control form-control'} />    
                        <ErrorMessage className='error' name="gitRepo" component="span" />
            </label>


        
            <label htmlFor="skipSwaggerGen" className="nice-form-control">
              <b>Skip Swagger Gen: {touched.skipSwaggerGen && !errors.skipSwaggerGen && (<span className="okCheck"><FaCheckCircle /> looks good!</span>)}</b>
              
              
              
          
          {/* CHECKBOX FIELD */}
              <BSForm.Check
                required
                id="skipSwaggerGen"
                name="skipSwaggerGen"
                onChange={e => {
                  setFieldTouched('skipSwaggerGen', true);
                  setFieldValue('skipSwaggerGen', e.target.checked);
                }}
                isInvalid={!!errors.skipSwaggerGen }                  
                className={errors.skipSwaggerGen  ? 'error ' : ''} />
              <ErrorMessage className='error' name="skipSwaggerGen" component="span" />
            </label>


        
            <label htmlFor="skipJavaGen" className="nice-form-control">
              <b>Skip Java Gen: {touched.skipJavaGen && !errors.skipJavaGen && (<span className="okCheck"><FaCheckCircle /> looks good!</span>)}</b>
              
              
              
          
          {/* CHECKBOX FIELD */}
              <BSForm.Check
                required
                id="skipJavaGen"
                name="skipJavaGen"
                onChange={e => {
                  setFieldTouched('skipJavaGen', true);
                  setFieldValue('skipJavaGen', e.target.checked);
                }}
                isInvalid={!!errors.skipJavaGen }                  
                className={errors.skipJavaGen  ? 'error ' : ''} />
              <ErrorMessage className='error' name="skipJavaGen" component="span" />
            </label>


        
            <label htmlFor="skipDbGen" className="nice-form-control">
              <b>Skip Db Gen: {touched.skipDbGen && !errors.skipDbGen && (<span className="okCheck"><FaCheckCircle /> looks good!</span>)}</b>
              
              
              
          
          {/* CHECKBOX FIELD */}
              <BSForm.Check
                required
                id="skipDbGen"
                name="skipDbGen"
                onChange={e => {
                  setFieldTouched('skipDbGen', true);
                  setFieldValue('skipDbGen', e.target.checked);
                }}
                isInvalid={!!errors.skipDbGen }                  
                className={errors.skipDbGen  ? 'error ' : ''} />
              <ErrorMessage className='error' name="skipDbGen" component="span" />
            </label>


        
            <label htmlFor="skipReactGen" className="nice-form-control">
              <b>Skip React Gen: {touched.skipReactGen && !errors.skipReactGen && (<span className="okCheck"><FaCheckCircle /> looks good!</span>)}</b>
              
              
              
          
          {/* CHECKBOX FIELD */}
              <BSForm.Check
                required
                id="skipReactGen"
                name="skipReactGen"
                onChange={e => {
                  setFieldTouched('skipReactGen', true);
                  setFieldValue('skipReactGen', e.target.checked);
                }}
                isInvalid={!!errors.skipReactGen }                  
                className={errors.skipReactGen  ? 'error ' : ''} />
              <ErrorMessage className='error' name="skipReactGen" component="span" />
            </label>


        
            <label htmlFor="dbGenDropTable" className="nice-form-control">
              <b>Db Gen Drop Table: {touched.dbGenDropTable && !errors.dbGenDropTable && (<span className="okCheck"><FaCheckCircle /> looks good!</span>)}</b>
              
              
              
          
          {/* CHECKBOX FIELD */}
              <BSForm.Check
                required
                id="dbGenDropTable"
                name="dbGenDropTable"
                onChange={e => {
                  setFieldTouched('dbGenDropTable', true);
                  setFieldValue('dbGenDropTable', e.target.checked);
                }}
                isInvalid={!!errors.dbGenDropTable }                  
                className={errors.dbGenDropTable  ? 'error ' : ''} />
              <ErrorMessage className='error' name="dbGenDropTable" component="span" />
            </label>


        
            <label htmlFor="thorApiSecureKey" className="nice-form-control">
              <b>Thor Api Secure Key: {touched.thorApiSecureKey && !errors.thorApiSecureKey && (<span className="okCheck"><FaCheckCircle /> looks good!</span>)}</b>
              
              
              
          
          {/* thorApiSecureKey  TEXT FIELD */}
              <Field name="thorApiSecureKey" type="text"
                className={errors.thorApiSecureKey  ? 'form-control field-error' : ' nice-form-control form-control'} />    
                        <ErrorMessage className='error' name="thorApiSecureKey" component="span" />
            </label>


        
            <label htmlFor="dbUrl" className="nice-form-control">
              <b>Db Url: {touched.dbUrl && !errors.dbUrl && (<span className="okCheck"><FaCheckCircle /> looks good!</span>)}</b>
              
              
              
          
          {/* dbUrl  TEXT FIELD */}
              <Field name="dbUrl" type="text"
                className={errors.dbUrl  ? 'form-control field-error' : ' nice-form-control form-control'} />    
                        <ErrorMessage className='error' name="dbUrl" component="span" />
            </label>


        
            <label htmlFor="dbName" className="nice-form-control">
              <b>Db Name: {touched.dbName && !errors.dbName && (<span className="okCheck"><FaCheckCircle /> looks good!</span>)}</b>
              
              
              
          
          {/* dbName  TEXT FIELD */}
              <Field name="dbName" type="text"
                className={errors.dbName  ? 'form-control field-error' : ' nice-form-control form-control'} />    
                        <ErrorMessage className='error' name="dbName" component="span" />
            </label>


        
            <label htmlFor="dbUser" className="nice-form-control">
              <b>Db User: {touched.dbUser && !errors.dbUser && (<span className="okCheck"><FaCheckCircle /> looks good!</span>)}</b>
              
              
              
          
          {/* dbUser  TEXT FIELD */}
              <Field name="dbUser" type="text"
                className={errors.dbUser  ? 'form-control field-error' : ' nice-form-control form-control'} />    
                        <ErrorMessage className='error' name="dbUser" component="span" />
            </label>


        
            <label htmlFor="dbPassword" className="nice-form-control">
              <b>Db Password: {touched.dbPassword && !errors.dbPassword && (<span className="okCheck"><FaCheckCircle /> looks good!</span>)}</b>
              
              
              
          
          {/* dbPassword  TEXT FIELD */}
              <Field name="dbPassword" type="text"
                className={errors.dbPassword  ? 'form-control field-error' : ' nice-form-control form-control'} />    
                        <ErrorMessage className='error' name="dbPassword" component="span" />
            </label>


        
            <label htmlFor="schemaName" className="nice-form-control">
              <b>Schema Name: {touched.schemaName && !errors.schemaName && (<span className="okCheck"><FaCheckCircle /> looks good!</span>)}</b>
              
              
              
          
          {/* schemaName  TEXT FIELD */}
              <Field name="schemaName" type="text"
                className={errors.schemaName  ? 'form-control field-error' : ' nice-form-control form-control'} />    
                        <ErrorMessage className='error' name="schemaName" component="span" />
            </label>


        
            <label htmlFor="language" className="nice-form-control">
              <b>Language: {touched.language && !errors.language && (<span className="okCheck"><FaCheckCircle /> looks good!</span>)}</b>
              
              
              
                    {/* DROPDOWN FOR ENUM */}
              <BSForm.Select
                name="language"
                className={errors.language ? 'form-control field-error' : 'nice-form-control form-control'}
                onChange={e => {
                  setFieldTouched('language', true);
                  setFieldValue('language', e.target.value);
                }}
              >
                <option value="" label="Select Language" />
                <LanguageLookup />
              </BSForm.Select>
              <ErrorMessage className='error' name="language" component="span" />
            </label>


        
            <label htmlFor="templateRepo" className="nice-form-control">
              <b>Template Repo: {touched.templateRepo && !errors.templateRepo && (<span className="okCheck"><FaCheckCircle /> looks good!</span>)}</b>
              
              
              
                    {/* DROPDOWN FOR ENUM */}
              <BSForm.Select
                name="templateRepo"
                className={errors.templateRepo ? 'form-control field-error' : 'nice-form-control form-control'}
                onChange={e => {
                  setFieldTouched('templateRepo', true);
                  setFieldValue('templateRepo', e.target.value);
                }}
              >
                <option value="" label="Select Template Repo" />
                <TemplateRepoLookup />
              </BSForm.Select>
              <ErrorMessage className='error' name="templateRepo" component="span" />
            </label>


        
            <label htmlFor="schemaFileName" className="nice-form-control">
              <b>Schema File Name: {touched.schemaFileName && !errors.schemaFileName && (<span className="okCheck"><FaCheckCircle /> looks good!</span>)}</b>
              
              
              
          
          {/* schemaFileName  TEXT FIELD */}
              <Field name="schemaFileName" type="text"
                className={errors.schemaFileName  ? 'form-control field-error' : ' nice-form-control form-control'} />    
                        <ErrorMessage className='error' name="schemaFileName" component="span" />
            </label>


        
            <label htmlFor="status" className="nice-form-control">
              <b>Status: {touched.status && !errors.status && (<span className="okCheck"><FaCheckCircle /> looks good!</span>)}</b>
              
              
              
                    {/* DROPDOWN FOR ENUM */}
              <BSForm.Select
                name="status"
                className={errors.status ? 'form-control field-error' : 'nice-form-control form-control'}
                onChange={e => {
                  setFieldTouched('status', true);
                  setFieldValue('status', e.target.value);
                }}
              >
                <option value="" label="Select Status" />
                <StatusLookup />
              </BSForm.Select>
              <ErrorMessage className='error' name="status" component="span" />
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
                      <FaCheckCircle size={30} /> Create New Stack
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

lowercase categorylookup
uppercase CATEGORYLOOKUP
snakecase category_lookup
pascalcase CategoryLookup
camelcase categoryLookup
kebabcase category-lookup


*/

const CategoryLookup = () => { 
  return(
  <>
    
    <option value='Full Stack' label='Full Stack' />
    
    
    <option value='Front End' label='Front End' />
    
    
    <option value='API' label='Api' />
    
    
    <option value='Data Library' label='Data Library' />
    
    
    <option value='Infrastructure' label='Infrastructure' />
    
    
    <option value='Documentation' label='Documentation' />
    
  </>
  )
};



/*

lowercase languagelookup
uppercase LANGUAGELOOKUP
snakecase language_lookup
pascalcase LanguageLookup
camelcase languageLookup
kebabcase language-lookup


*/

const LanguageLookup = () => { 
  return(
  <>
    
    <option value='valkyrai_java_spring' label='Java Spring' />
    
    
    <option value='valkyrai_kotlin_spring' label='Kotlin Spring' />
    
  </>
  )
};



/*

lowercase templaterepolookup
uppercase TEMPLATEREPOLOOKUP
snakecase template_repo_lookup
pascalcase TemplateRepoLookup
camelcase templateRepoLookup
kebabcase template-repo-lookup


*/

const TemplateRepoLookup = () => { 
  return(
  <>
    
    <option value='java_spring' label='Java Spring' />
    
    
    <option value='typescript_rtk_bootstrap' label='Typescript Rtk Bootstrap' />
    
  </>
  )
};



/*

lowercase statuslookup
uppercase STATUSLOOKUP
snakecase status_lookup
pascalcase StatusLookup
camelcase statusLookup
kebabcase status-lookup


*/

const StatusLookup = () => { 
  return(
  <>
    
    <option value='available' label='Available' />
    
    
    <option value='syntax_error' label='Syntax Error' />
    
    
    <option value='compilation_error' label='Compilation Error' />
    
    
    <option value='runtime_error' label='Runtime Error' />
    
    
    <option value='database_error' label='Database Error' />
    
    
    <option value='locked' label='Locked' />
    
  </>
  )
};






export default StackForm;
