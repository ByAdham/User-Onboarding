import React from "react";
import styled from "styled-components";
import {Card, CardTitle, CardSubtitle} from "reactstrap";


export default function Members (props) {
    const {members} = props;


    return (
        <div>
            {members.map((member) => {
                return (
                    <Card>
                        <CardTitle>{member.name}</CardTitle>
                        <CardSubtitle>{member.email}</CardSubtitle>
                    </Card>
                )
            })};
        </div>
    );
};
