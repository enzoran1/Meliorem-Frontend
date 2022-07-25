import React , {useState,useContext} from 'react';
import styles from './Login.module.scss';
import InputEmail from '../../components/forms/inputs/InputEmail/InputEmail';

import InputPassword from '../../components/forms/inputs/InputPassword/InputPassword';
import Button from '../../components/buttons/Button/Button';
import FormContainer from '../../components/forms/containers/FormContainer/FormContainer';

import { Formik } from 'formik';
import AlertWarning from '../../components/alerts/AlertWarning/AlertWarning';
import AlertDanger from '../../components/alerts/AlertDanger/AlertDanger';
import { login, deleteUser, getUser,getAllUser} from '../../modules/apis/UserAPI';


const Login = () => {
  const [error, setError] = useState(<></>);

  

  function validate (values) {
    const errors = {};
    if (!values.email)
      errors.email = ''
    else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email))
      errors.email = <AlertWarning/>
    return errors;
  }
  
  function submit (values,{ setSubmitting }) {
    setSubmitting(false);
    console.log(values);
    login(values.email,values.password, (data)=>{
      console.log(data.token);
    }
    )
    // login(values.email,values.password,
    // (data)=>{
    //   console.log(data);
    // }
    // ,(data)=>{
    //   console.log(data);
    //   if (data.code == 401){
    //     setError(<AlertDanger title="Identifiants ou mot de passe invalide"/>)
    //     setTimeout(function(){
    //       setError()
    //     },5000)
    //   }
    // });
  }

  return (
  
    <div className={styles.Login} data-testid="Login">
      <Formik 
          validateOnChange = {false}
          validateOnBlur = {false}
          initialValues={{ email: '', password: '' }}
          validate={validate}
          onSubmit={submit}
        >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
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

export default Login;
