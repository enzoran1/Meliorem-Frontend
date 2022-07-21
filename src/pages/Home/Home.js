import React from 'react';
import PropTypes from 'prop-types';
import styles from './Home.module.scss';
import InputEmail from '../../components/forms/inputs/InputEmail/InputEmail';

import InputPassword from '../../components/forms/inputs/InputPassword/InputPassword';
import Button from '../../components/buttons/Button/Button';
import FormContainer from '../../components/forms/containers/FormContainer/FormContainer';
import InputSearch from '../../components/forms/inputs/InputSearch/InputSearch';
import InputSearchComplex from '../../components/forms/inputs/InputSearchComplex/InputSearchComplex';
import { Formik } from 'formik';



const Home = () => {
  function getValue(value){
    console.log(value);
  }

return (
  <div className={styles.Home} data-testid="Home">

<Formik
       initialValues={{ email: '', password: '' }}
       validate={values => {
         const errors = {};
         if (!values.email) {
           errors.email = 'Required';
         } else if (
           !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
         ) {
           errors.email = 'Invalid email address';
         }
         console.log(errors);
         return errors;
       }}
       onSubmit={(values, { setSubmitting }) => {
        setSubmitting(false);
        
          // values {email , password}
           
         
       }}
     >
       {({
         values,
         errors,
         touched,
         handleChange,
         handleBlur,
         handleSubmit,
         isSubmitting,
         /* and other goodies */
       }) => (
         <FormContainer onSubmit={handleSubmit}>
          <div className={styles.Form__Connexion}>
           <InputEmail
             type="email"
             name="email"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.email}
           />
           {errors.email && touched.email && errors.email}
           <InputPassword
             type="password"
             name="password"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.password}
           />
           </div>
           {errors.password && touched.password && errors.password}
           <div className={styles.Form_Btn}>
           <Button type="submit" titleBtn="Connexion" disabled={isSubmitting}>
             
           </Button>
           </div>
         </FormContainer>
       )}
</Formik>
     
    </div>
);

}

Home.propTypes = {};

Home.defaultProps = {};

export default Home;
