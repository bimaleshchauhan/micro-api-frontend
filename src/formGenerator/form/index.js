import { useState, useEffect } from 'react';


const useForm = (callback, validate, form) => {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [validation, setValidation] = useState(form);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
    }
    setIsSubmitting(false);
  },[errors, isSubmitting]);

  useEffect(() => { 
      if(Object.keys(values).length !== 0){
        setErrors(validate(values, validation));
      }
  },[values])

  

  const handleSubmit = (event) => {
    if (event) event.preventDefault();
    let arr = Object.keys(values);
    if(arr.length !== 0){
      arr.map(function(key) {
        validation.forEach(element => {
          if(element.type===key){
            element.value=values[key];
          }
        });
      })
      
    }
    setErrors(validate("submit", validation));
    setValidation(validation);
    setIsSubmitting(true);
   
  };

  const handleChange = (event) => {
    event.persist();
    validation.forEach(element => {
       if(element.type===event.target.name){
         element.value=event.target.value;
       }
    });
    setValidation(validation);
    setValues(values => ({ ...values, [event.target.name]: event.target.value }));
  };

  return {
    handleChange,
    handleSubmit,
    validation,
    values,
    errors,
  }
};

export default useForm;