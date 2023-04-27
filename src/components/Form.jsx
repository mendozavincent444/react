import { useState } from "react";


function Form() {
    const [emailAddress, setEmailAddress] = useState("");
    const [firstName, setFirstName] = useState("");
    const [password, setPassword] = useState("");

    const elements = [
        { label: "Email Address", type: "email", set: setEmailAddress },
        { label: "First Name", type: "text", set: setFirstName },
        { label: "Password", type: "password", set: setPassword },

    ];


    return (


        <section class="vh-100" styles="background-color: #508bfc;">
            <div class="container py-5 h-100">
                <div class="row d-flex justify-content-center align-items-center h-100">
                    <div class="col-12 col-md-8 col-lg-6 col-xl-5">
                        <div class="card shadow-2-strong" styles="border-radius: 1rem;">
                            <div class="card-body p-5 text-center">

                                <form>
                                    {elements.map((element) => {
                                        return (
                                            <div class="form-outline mb-4">
                                                <input onChange={ (e) => element.set(e.target.value) } type={element.type} id="typeEmailX-2" class="form-control form-control-lg" />
                                                <label class="form-label" for="typeEmailX-2">{element.label}</label>
                                            </div>
                                        )
                                    })}
                                    
                                </form>

                                <div class="form-check d-flex justify-content-start mb-4">
                                    <input class="form-check-input" type="checkbox" value="" id="form1Example3" />
                                    <label class="form-check-label" for="form1Example3"> Remember password </label>
                                </div>

                                <button class="btn btn-primary btn-lg btn-block" type="submit">Login</button>
                                <h3> Hi {emailAddress}</h3>
                                <h3> Hi {firstName}</h3>
                                <h3> Hi {password}</h3>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>


    );
}

export default Form;