import _ from "lodash"
export default function validate(values, validators) {
        let errors = {};
        
        if(validators && validators.length>0){
            validators.forEach(element => {
                if(values==='submit'){
                    validator(element)
                }
                else{
                   let arr = Object.keys(values);
                    if(arr.length !== 0){
                      arr.map(function(key) {
                         if(element.type===key){
                            validator(element)
                         }
                      })
                    }
                }
            });
        }
        function validator(element) {
            let arr_error =[]
            if(element.validate && element.validate.length>0){
                element.validate.forEach(validator => {
                  let error = undefined;
                  if (validator.name === 'required') {
                      error = requiredValidate(validator, element);
                  } else if (validator.name === 'regex') {
                      error = regexValidate(validator, element);
                  } else if (validator.name === 'custom') {
                     // error = customeValidator(validator);
                  }
                  if (error) {
                    arr_error.push(error);
                   }
                  
              })
            }
            if(arr_error && arr_error.length>0){
                errors[element.type] = _.first(arr_error)
            }
            
        }
        function requiredValidate(validator, element) {
            let res = checkEmpty(validator.message, element);
            if (res !== null) return msg(validator.message);
        }
        function regexValidate(validator, element) {

            let res = checkEmpty(validator.message, element);
            if (res !== null) return res;

            if (!isNil(validator.expression)) {
                let expression = validator.expression;
                let re = new RegExp(_.trim(expression, '/'));
                if (element.type == "FileUpload") {
                    if (!re.test(element.value)) {
                        return msg(validator.message);
                    }
                } else {
                    if (!re.test(element.value)) {
                        return msg(validator.message);
                    }
                }
            }
        }

        function checkEmpty(message, data) {
            if (isNil(data.value) || data.value === '') {
                if (data.required) {
                    return msg(message);
                } else {
                    return;
                }
            }
            return null;
        }
        function isNil(value) {
            return value === null || value === undefined;
        }
        function msg(text) {
            if (text != null && arguments.length > 1) {
                for (let i = 1; i < arguments.length; i++) {
                    text = text.replace('{' + (i - 1) + '}', arguments[i]);
                }
            }
            return text;
        }
        function customeValidator(validator) {
            return this.msg(validator.message);
        }
       
        // if (!values.email) {
        //     errors.email = 'Email address is required';
        // } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        //     errors.email = 'Email address is invalid';
        // }
        return errors;
    }

        //     this.validationErrors = [];
        //     if (!this.field) {
        //         return;
        //     }
        //     if(this.field.validators){
        //     this.field.validators.forEach(validator => {
        //         let error = undefined;
        //         if (validator.name == 'required') {
        //             error = this.requiredValidate(validator);
        //         } else if (validator.name == 'regex') {
        //             error = this.regexValidate(validator);
        //         } else if (validator.name == 'custom') {
        //             error = this.customeValidator(validator);
        //         }
        //         if (error) {
        //             this.validationErrors.push(error);
        //         }
        //     });
        // }
        // },
        // regexValidate(validator) {

        //     let res = this.checkEmpty(validator.message);
        //     if (res != null) return res;

        //     if (!_.isNil(validator.expression)) {
        //         let expression = validator.expression;
        //         let re = new RegExp(_.trim(expression, '/'));
        //         if (this.field.type == "FileUpload") {
        //             if (!re.test(this.field.value.value)) {
        //                 return this.msg(validator.message);
        //             }
        //         } else {
        //             if (!re.test(this.field.value)) {
        //                 return this.msg(validator.message);
        //             }
        //         }
        //     }
        // },
        // requiredValidate(validator) {
        //     let res = this.checkEmpty(validator.message);
        //     if (res != null) return this.msg(validator.message);
        // },
        // checkEmpty(message) {

        //     if (_.isNil(this.field.value) || this.field.value === '') {
        //         if (this.field.required) {
        //             return this.msg(message);
        //         } else {
        //             return;
        //         }
        //     }


        //     return null;
        // },
        // msg(text) {
        //     if (text != null && arguments.length > 1) {
        //         for (let i = 1; i < arguments.length; i++) {
        //             text = text.replace('{' + (i - 1) + '}', arguments[i]);
        //         }
        //     }
        //     return text;
        // },
        // customeValidator(validator) {
        //     return this.msg(validator.message);
        // }
