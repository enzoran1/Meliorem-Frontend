import React , {useState} from 'react';
import PropTypes from 'prop-types';
import styles from './Login.module.scss';
import InputEmail from '../../components/forms/inputs/InputEmail/InputEmail';

import InputPassword from '../../components/forms/inputs/InputPassword/InputPassword';
import Button from '../../components/buttons/Button/Button';
import FormContainer from '../../components/forms/containers/FormContainer/FormContainer';

import { Formik } from 'formik';
import  axios  from 'axios';
import AlertWarning from '../../components/alerts/AlertWarning/AlertWarning';
import AlertDanger from '../../components/alerts/AlertDanger/AlertDanger';

const Login = () => {
  const [error, setError] = useState(<></>);

return (
 
  <div className={styles.Login} data-testid="Login">
    <Formik 
        validateOnChange = {false}
        validateOnBlur = {false}
       initialValues={{ email: '', password: '' }}
       validate={values => {
         const errors = {};
         if (!values.email) {
           errors.email = ''
         } else if (
           !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
         ) {
           errors.email = <AlertWarning/>
           
         }
         console.log(errors);
         return errors;
       }}
       onSubmit={(values, { setSubmitting }) => {
        setSubmitting(false);
        
        
        axios.post('https://127.0.0.1:8000/api/login', {
          username: values.email,
          password: values.password

        },{
          headers: {
            'Content-Type': 'application/json',
            'allow-origin': '*',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
            'Access-Control-Allow-Headers': '*'
        }
        })
        .then(function (response) {
          console.log(response.data); 
        })
        .catch(function (error) {
          console.log(error.response.data);
          if (error.response.data.code == 401)
         
            setError(<AlertDanger title="Identifiants ou mot de passe invalide"/>)
            setInterval(function(){
              setError()
            },5000)
          
        });
           
         
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
           <Button type="submit" titleBtn="Connexion" disabled={isSubmitting}/>
           {error}
           </div>
         </FormContainer>
       )}
</Formik>
  </div>
);

}

Login.propTypes = {};

Login.defaultProps = {};

export default Login;
