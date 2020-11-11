import React from "react";
import styled from "styled-components";
import {Card, CardTitle, CardSubtitle} from "reactstrap";
import {Button} from 'reactstrap';

export default function Members (props) {
    const {members} = props;


    return (
        <StyledMembersParentDiv>
            <br></br>
            {members.map((member) => {
                return (
                    <StyledCard>
                        <Card>
                            <CardTitle>{member}</CardTitle>
                            <CardSubtitle>{member}</CardSubtitle>
                        </Card>
                    </StyledCard>
                )
            })}
    
        </StyledMembersParentDiv>
    );
};


const StyledMembersParentDiv = styled.div`
/* border: blue solid 1px; */
display: flex;
flex-flow: column;

align-items: center;
`

const StyledCard = styled.div`
/* border: yellow solid 2px; */
max-width: 70%;
`