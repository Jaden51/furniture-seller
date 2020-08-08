import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

class Dashboard extends Component {
    render() {
        const { auth } = this.props;

        return (
            <StyledDashboard>
                <h3>{auth.user.name}</h3>
            </StyledDashboard>
        )
    }
}

const mapStateToProps = state => {
    return {
        auth: state.auth,
        profile: state.profile
    }
}

export default connect(mapStateToProps)(Dashboard);

const StyledDashboard = styled.div`
`;