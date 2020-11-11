import React, { useEffect, useState } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import Members from "./Members";


export default function MemberForm () {
    const [members, setMembers] = useState([]);

    useEffect(()=> {
        setMembers(['Adham'])
        },[])


    return(
        <>
            <Form>
            <FormGroup>
                    <Label for="exampleEmail">Email</Label>
                    <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
                </FormGroup>
                <FormGroup>
                    <Label for="examplePassword">Password</Label>
                    <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
                </FormGroup>
            </ Form>

            <Members members={members}/>
        </>
    )
}