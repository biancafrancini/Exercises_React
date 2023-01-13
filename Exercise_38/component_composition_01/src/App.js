import React from 'react';
import { Welcome } from './Welcome';
import { Container } from './Container';

export class App extends React.Component{
    render(){
        return(
            <Container>
                <Welcome name="Bianca"/>
            </Container>
        )
    }
}