import React from "react";
import styled from "styled-components";
import {Card, CardTitle, CardSubtitle} from "reactstrap";


export default function Members (props) {
    const {currentMembers} = props;
   
    console.log(currentMembers);

    return (
        <StyledMembersParentDiv>
            {currentMembers.map((member) => {
                return (
                    <StyledCard>
                        <Card>
                            <CardTitle>{member.User}</CardTitle>
                            <CardSubtitle>{member.Email}</CardSubtitle>
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
margin: 20px;
align-items: center;
`

const StyledCard = styled.div`
/* border: yellow solid 2px; */
max-width: 70%;
`