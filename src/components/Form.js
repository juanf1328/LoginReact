import React, { useState } from "react";
import FormSignUp from "./formSignUp";
import FormSuccess from "./formsuccess";

const Form = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);

    function submitForm() {
        setIsSubmitted(true);
    }

    return (
        <div>
            <FormSignUp />
            {!isSubmitted ? <FormSignUp submitForm={submitForm} /> : <FormSuccess />}
        </div>
    );

}

export default Form;