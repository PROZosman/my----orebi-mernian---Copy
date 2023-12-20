import * as Yup from "yup";

export const signUp = Yup.object({
    firstname : Yup.string().min(3).max(15).matches(/^[A-Za-z ]*$/, 'Please enter valid name').required("Please Enter your firstName"),
    lastname : Yup.string().min(3).max(15).max(15).matches(/^[A-Za-z ]*$/, 'Please enter valid name').required("Please Enter your lastname"),
    email : Yup.string().email().required("Please Enter your email"),
    password : Yup.string().min(6).required("Please enter your password"),
    // confirmpassword : Yup.string().oneOf([Yup.ref("password"), null],"Passwoord must be matched").required("please give a confirm password"),
    telephon : Yup.string().required("Please Enter a valid telephon"),
    address : Yup.string().required("Please Enter a valid address"),
    city : Yup.string().required("Please Enter a valid citycity"),
    postCode : Yup.string().required("Please Enter a valid postCode"),
    country : Yup.string().required("Please Enter a valid country"),
    state : Yup.string().required("Please Enter a valid state"),
});

export const signIn = Yup.object ({
    email: Yup.string().email().required("Please Enter a valid email"),
    password : Yup.string().min(6).required("Please enter your password"),
});