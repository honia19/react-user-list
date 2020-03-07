import React, { Component } from 'react';
import UserList from './modules/UserList/index';
import { Wrapper } from './styledComponents';

export default class MainComponent extends Component {
    render () {
        return (
            <Wrapper>
                <UserList/>
            </Wrapper>
        );
    }
}