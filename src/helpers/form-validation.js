//server action için kullanılacak method

export const convertFormDataToJSON = (formData) => {
    return Object.fromEntries(formData.entries());
}

export const transformYupErrors = (errors) => {
    const errObject = {};
    errors.forEach((error) => (errObject[error.path] = error.message));
    return {
        message:"Validation Error",
        errors: errObject
    }
};


/*
                          <Form.Control.Feedback type="invalid">
                            {formik.errors.isAdvisorTeacher}
                          </Form.Control.Feedback>
*/