export default function ValidateInfo(values) {
    let errors = {}

    if(! values.username.trim()) {
        errors.username = "username is required"
    }

    //email
    if(! values.email) {
        errors.email = "Email is required"
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
        errors.email = "Email is invalid"
    }

    if(! values.password){
        errors.password="Password required"
    } else if(values.password.length < 6) {
        errors.password="passwords need to be 6 character or more"
    }

    if(! values.password2){
        errors.password2="Password required"
    } else if(values.password2 !== values.password) {
        errors.password2="passwords do not match"
    }
    return errors;

}