import React from 'react';
import Styled from 'styled-components/native'

const Container= Styled.View `
background: #28ada4;
flex:1;
`;
const Text= Styled.Text ``;

const Profile=()=>{
return(
    <Container>
        <Text>
            Profile
        </Text>
    </Container>
)
}

export default Profile;