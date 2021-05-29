import React,{useRef} from 'react';
import Styled from 'styled-components/native'
import Images from './images'
import {Transition, Transitioning} from 'react-native-reanimated'

const Container=Styled.TouchableWithoutFeedback ``;
const Background=Styled(Transitioning.View) `
    flex:auto;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background: ${(props)=>(props.focused? '#adedd0':'white')};
    border-radius:100px;
    margin:5px;
`;
const Icon=Styled.Image `
    height:30px;
    width:30px;
`;
const Label=Styled.Text `
    
    font-weight:500;
    margin-left:8px;
`;

const Tab= ({label,accessibilityState,onPress})=>{
const focused= accessibilityState.selected
const icon= !focused ? Images.icons[label]: Images.icons[`${label}Focused`];
const transition =(
    <Transition.Sequence>
        <Transition.Out type="fade" durationMs={0} />
        <Transition.Change interpolation='easeInOut' durationMs={100} />
        <Transition.In type="fade" durationMs={10}/>
    </Transition.Sequence>
);  

const ref=useRef();
return(
        <Container onPress={()=>{
            ref.current.animateNextTransition();
            onPress();
        }}>
        <Background focused={focused} Label={label} ref={ref} transition={transition}>
            <Icon source={icon}/>
            {focused && <Label>{label}</Label>}
        </Background>
            
        </Container>
    )
}
export default Tab;