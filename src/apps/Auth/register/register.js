import React, {useState} from 'react';
import {TextInput} from "../../../components/textInput/TextInput";
import {useForm} from "react-hook-form";
import SubmitButton from "../../../components/submitButton/SubmitButton";
import login from "../login/login";

const Register = () => {
    // const [text, setText] = useState("");

    const {
        register,
        handleSubmit
    } = useForm();

    const onSubmit = (data)  => {
        console.log(data)
    }

    return (
        <div className="container">
            <div className="register">
                <div className="register_card">
                    <h2>Registration</h2>

                    <form onSubmit={handleSubmit(onSubmit)} >
                        <div>
                            <TextInput
                                type="text"
                                placeholder="Username"
                                {...register("username")}
                            />
                        </div>

                        <div>
                            <TextInput
                                type="email"
                                placeholder="Email"
                                {...register("email")}
                            />
                        </div>
                        <div>
                            <SubmitButton
                                caption={"Register"}
                            />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;