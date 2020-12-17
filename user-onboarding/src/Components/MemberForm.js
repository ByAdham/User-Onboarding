import React, { useEffect, useState } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import Members from "./Members";
import styled from "styled-components";
import axios from "axios";
import * as yup from 'yup';


const schema = yup.object().shape({
    user: yup.string().required('Your name is required'),
    email: yup.string().required('Please enter your email'),
    password: yup.string().required('Please enter a password'),
    accept: yup.boolean().oneOf([true, "You have to accept the risk"]),
});

export default function MemberForm () {
    //Create a slice of state for the current members to be updated when the form is submitted and passed to the members component

    ////STATES/////
    //CREATE A SLICE OF STATE FOR THE MEMBERS THAT WILL BE PASSED DOWN TO THE MEMBERS COMPONENT
    const initialMembers = [];
    const [members, setMembers] = useState(initialMembers);
    //CREATE A SLICE OF STATE FOR THE DATA IN THE FORM
    const initialFormState ={
        user:'',
        email:'',
        password:'',
        accept: false,
    }
    const [form, setForm] = useState(initialFormState);
    //Create a slice of state for the form button to be disabled by default
    const [disabled, setDisabled] = useState(true);


    ////EVENT HANDLERS AND HELPERS 
    ///FORM MANIPULATION
    //Creare a change event to attach to the form elements, receive event data and run the slice of state changer after passing to it the data we parsed
    const change = event => {
        const { checked, value, name, type} = event.target
        const valueToUse = type === 'checkbox' ? checked : value 
        formStateChange(name, valueToUse)
    }
        //Make the form inputs set the form slice of state 
        const formStateChange = (name, value) => {
            setForm({...form, [name]: value})
        }

    //Fire an effect hook to check the schema vs the changes in the form and update the button's slice of state
    useEffect(() => {
        schema.isValid(form).then((valid) => {
            setDisabled(!valid);
        });
     }, [form]);

    ///FORM SUBMISSION 
    //Post new member helper
    const postMember = (member) => {
        axios
        .post ('https://reqres.in/api/users', member)
        
        .then((res) => {
            
            setMembers([...members, res.data]);
        })
    };

    //Form submit event handler to be attached to the form onSubmit property
    const submit = (e) => {
        e.preventDefault();
        const newMember = {
            User: form.user.trim(),
            Email: form.email.trim(),
        };
        postMember(newMember);
        setForm(initialFormState);
    };

    return (
        <>
        <StyledFormParentDiv>
        <h2> Join the Tantive team into hyperspace!</h2>
        <StyledForm>
            <Form onSubmit={submit}>
            <FormGroup>
                <Label for="user">Name</Label>
                <Input type="text" value={form.name} name="user" id="user" onChange={change} placeholder="Name" />
            </FormGroup>
            <FormGroup>
                <Label for="email">Email</Label>
                <Input type="email" value={form.email} name="email" id="email" onChange={change} placeholder="Email" />
            </FormGroup>
            <FormGroup>
                <Label for="password">Password</Label>
                <Input type="password" value={form.password} name="password" id="password" onChange={change} placeholder="Password" />
            </FormGroup>
            {/* <br></br> */}
            <FormGroup>
                <Label check>
                <Input name= "accept" checked={form.accept} type="checkbox" onChange={change} />{' '}
                    I accept the risks of space travel
                </Label>
            </FormGroup>
            <br></br>
            <Button color='primary' disabled={disabled} > Jump through hyperspace! </Button>
            </ Form>
            
        </StyledForm>
        </ StyledFormParentDiv>
        <Members id={members.id} currentMembers={members} />
        </>
    )
}

const StyledFormParentDiv = styled.div `
display: flex;
flex-flow: column;
align-items: center;
justify-content: center;
    h2{
        padding: 25px;
    }
`

const StyledForm = styled.div `
/* border: solid blue 1px; */
max-width: 90%;
min-width: 40%;
min-height: 10vh;
display: flex;
flex-flow: column;
justify-content: space-around;
align-items: center;
`

