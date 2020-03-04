import styled from 'styled-components';
import { useState } from 'react';
import Login from '../src/component/Login';
import { connect } from 'react-redux';
import { DataActions } from '../src/redux/data/actions';


const StyledWrapper = styled.div`

    padding: 20px;

    .ReLo {
        display: flex;
        justify-content:space-between;
    }
`


const authen = (props) => {

    const [checkGmail, setGmail] = useState('');
    const [checkPassword, setPassword] = useState('');
    const handleCheck = (check) => {
        setGmail(check.gmail)
        setPassword(check.password)
    }

    const { dataset, createUser } = props;
    const handleCreate = (data) => {
        createUser(data);
    }

    console.log(dataset)

    return (
        <StyledWrapper>
            <div className='ReLo'>
                <Login handleCheck={handleCheck} handleCreate={handleCreate}/>
            </div>
        </StyledWrapper>
    )
}

export default connect(state => state.Data, DataActions)(authen);