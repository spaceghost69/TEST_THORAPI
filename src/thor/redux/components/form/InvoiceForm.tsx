import { ErrorMessage, Field, Formik, FormikHelpers, FormikValues } from 'formik';
import React from 'react';
import { Form as BSForm, Accordion, Col, Nav, Row, Spinner } from 'react-bootstrap';
import { FaCheckCircle, FaCogs, FaRegPlusSquare } from 'react-icons/fa';
import CoolButton from '../../../../components/CoolButton';
import * as Yup from 'yup';
import { Invoice, InvoiceStatusEnum,  } from '../../../model';
import { useAddInvoiceMutation } from '../../services/InvoiceService';

/**
############################## DO NOT EDIT: GENERATED FILE ##############################

Generated by CARMINA GAMES ThorAPI: https://valkyrlabs.com/thorapi

Powered by Swagger Codegen: http://swagger.io

Generated Details:
**GENERATOR VERSION:** 7.5.0
**GENERATED DATE:** 2024-12-30T08:46:46.125225-08:00[America/Los_Angeles]
**GENERATOR CLASS:** org.openapitools.codegen.languages.TypeScriptReduxQueryClientCodegen

Template file: typescript-redux-query/modelForm.mustache

############################## DO NOT EDIT: GENERATED FILE ##############################

Description: Invoice
*/

{/* ENUMS FOR FORM VALIDATIONS */}

    

const StatusValidation = () => { 
  return(
    [
      'draft', 'sent', 'paid', 'overdue', 'canceled', 
    ]
  )
};



{/* MUSTACHE FORM VALIDATIONS */}
const validationSchema = Yup.object().shape({

     invoiceId: Yup.string()
    
    
    .required('invoiceId is required.')
    
    ,
     customerId: Yup.string()
    
    
    .required('customerId is required.')
    
    ,
     invoiceDate: Yup.date()
    
    
    .required('invoiceDate is required.')
    
    ,
     dueDate: Yup.date()
    
    
    .required('dueDate is required.')
    
    ,
     amount: Yup.number()
    
    
    .required('amount is required.')
    
    ,
     status: Yup.string().oneOf(StatusValidation(), 'Invalid value selected for status')
    
    
    .required('status is required.')
    
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

const InvoiceForm: React.FC = () => {
  const [addInvoice, addInvoiceResult] = useAddInvoiceMutation();

  const initialValues: Invoice = {
    
    
    invoiceId : 'null',
    
    
    
    
    
    
    
    customerId : 'null',
    
    
    
    
    
    
    
    
    invoiceDate : new Date(), 
    
    
    
    
    
    
    
    dueDate : new Date(), 
    
    
    
    
    
    
    
    
    
    
    amount : 0.00, 
    
        status :   InvoiceStatusEnum[Object.keys(InvoiceStatusEnum)[0]], 
    
    
    id : 'fee74202-e9ad-4896-be3d-708909e0a5ca',
    
    
    
    
    
    
    
    ownerId : 'fa2c61ee-0bb4-4ac9-bd07-4223dc2bc2c8',
    
    
    
    
    
    
    
    
    createdDate : new Date(), 
    
    
    
    
    
    
    keyHash : 'null',
    
    
    
    
    
    
    
    lastAccessedById : '70636fad-9e9a-4343-bb62-5f6eca37be03',
    
    
    
    
    
    
    
    
    lastAccessedDate : new Date(), 
    
    
    
    
    
    
    lastModifiedById : '3fb95a51-6340-4ee8-8b73-7c915fdc2d06',
    
    
    
    
    
    
    
    
    lastModifiedDate : new Date(), 
    
    
    
    
    
  };

  const handleSubmit = (values: FormikValues,
    { setSubmitting }: FormikHelpers<Invoice>) => {
    setTimeout(() => {
      console.log(values);
      addInvoice(values);
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
                          addInvoiceResult: {JSON.stringify(addInvoiceResult)}
                        </Accordion.Body>
                      </Accordion.Item>

                      <Accordion.Item eventKey="1">
                        <Accordion.Header><FaRegPlusSquare  size={36}/> Add New Invoice</Accordion.Header>
                        <Accordion.Body>

        {/* MUSTACHE FORM FIELDS */}


        
            <label htmlFor="invoiceId" className="nice-form-control">
              <b>Invoice Id: {touched.invoiceId && !errors.invoiceId && (<span className="okCheck"><FaCheckCircle /> looks good!</span>)}</b>
              
              
              
          
          {/* invoiceId  TEXT FIELD */}
              <Field name="invoiceId" type="text"
                className={errors.invoiceId  ? 'form-control field-error' : ' nice-form-control form-control'} />    
                        <ErrorMessage className='error' name="invoiceId" component="span" />
            </label>


        
            <label htmlFor="customerId" className="nice-form-control">
              <b>Customer Id: {touched.customerId && !errors.customerId && (<span className="okCheck"><FaCheckCircle /> looks good!</span>)}</b>
              
              
              
          
          {/* customerId  TEXT FIELD */}
              <Field name="customerId" type="text"
                className={errors.customerId  ? 'form-control field-error' : ' nice-form-control form-control'} />    
                        <ErrorMessage className='error' name="customerId" component="span" />
            </label>


        
            <label htmlFor="invoiceDate" className="nice-form-control">
              <b>Invoice Date: {touched.invoiceDate && !errors.invoiceDate && (<span className="okCheck"><FaCheckCircle /> looks good!</span>)}</b>
              
              
              
          
          {/*invoiceDate DATE FIELD */}
              <Field name="invoiceDate" type="date"
                className={errors.invoiceDate  ? 'form-control field-error' : ' nice-form-control form-control'} />
                        <ErrorMessage className='error' name="invoiceDate" component="span" />
            </label>


        
            <label htmlFor="dueDate" className="nice-form-control">
              <b>Due Date: {touched.dueDate && !errors.dueDate && (<span className="okCheck"><FaCheckCircle /> looks good!</span>)}</b>
              
              
              
          
          {/*dueDate DATE FIELD */}
              <Field name="dueDate" type="date"
                className={errors.dueDate  ? 'form-control field-error' : ' nice-form-control form-control'} />
                        <ErrorMessage className='error' name="dueDate" component="span" />
            </label>


        
            <label htmlFor="amount" className="nice-form-control">
              <b>Amount: {touched.amount && !errors.amount && (<span className="okCheck"><FaCheckCircle /> looks good!</span>)}</b>
              
              
              
          
          {/*amount DATE FIELD */}
              <Field name="amount" type="date"
                className={errors.amount  ? 'form-control field-error' : ' nice-form-control form-control'} />
                        <ErrorMessage className='error' name="amount" component="span" />
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
                      <FaCheckCircle size={30} /> Create New Invoice
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
    
    <option value='draft' label='Draft' />
    
    
    <option value='sent' label='Sent' />
    
    
    <option value='paid' label='Paid' />
    
    
    <option value='overdue' label='Overdue' />
    
    
    <option value='canceled' label='Canceled' />
    
  </>
  )
};






export default InvoiceForm;
