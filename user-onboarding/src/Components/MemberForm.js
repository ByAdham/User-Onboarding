import React, { useEffect, useState } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import Members from "./Members";
import styled from "styled-components";
import axios from "axios";


export default function MemberForm () {
    const [members, setMembers] = useState([]);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        agree: 'false',
    });

    useEffect(()=> {
        setMembers(['Adham', 'Wael', 'Mohamed'])
        },[])


    return(
        <>
        <StyledFormParentDiv>
        <h2> Join the Tantive team into hyperspace!</h2>
        <StyledForm>
            <Form>
            <FormGroup>
                <Label for="name">Name</Label>
                <Input type="name" name="email" id="name" placeholder="Name" />
            </FormGroup>
            <FormGroup>
                <Label for="email">Email</Label>
                <Input type="email" name="email" id="email" placeholder="Email" />
            </FormGroup>
            <FormGroup>
                <Label for="password">Password</Label>
                <Input type="password" name="password" id="password" placeholder="Password" />
            </FormGroup>
            {/* <br></br> */}
            <FormGroup check>
                <Label check>
                <Input name= "accept" type="checkbox" />{' '}
                    I accept the risks of space travel
                </Label>
            </FormGroup>
            <br></br>
            <Button color='primary'> Jump through hyperspace! </Button>
            </ Form>
            
        </StyledForm>
        </ StyledFormParentDiv>
        <Members members={members}/>
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

