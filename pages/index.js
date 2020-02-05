import Register from '../src/component/Register'
import styled from 'styled-components';
import { useState } from 'react';
import Profile from '../src/component/Profile';
import Login from '../src/component/Login';
import { connect } from 'react-redux';
import { DataActions } from '../src/redux/data/actions';


const StyledWrapper = styled.div`
    .profile {
        display: grid;

        grid-template-columns: repeat(8, 1fr);
        grid-columns-gap: 10px;
    }

    padding: 20px;

    h4 {
        margin-bottom: 4px;
    }

    .ReLo {
        display: flex;
        justify-content:space-between;
    }
`


const Homepage = (props) => {

    console.log(props)

    const [checkGmail, setGmail] = useState('');
    const [checkPassword, setPassword] = useState('');
    const handleCheck = (check) => {
        setGmail(check.gmail)
        setPassword(check.password)
    }

    const { dataset, createUser } = props;
    const handleCreate = (data) => {
        createUser(data);
        // dispatch({type: 'CREATE_DATA', addload: data})
        // dataset.push(data);
        // setProfile([...profile]);
    }

    return (
        <StyledWrapper>
            <div className='ReLo'>
                <Register handleCreate={handleCreate} />
                <Login handleCheck={handleCheck}/>
            </div>
            <div className='profile'>
                {
                    dataset.map((item, index) => {
                        return (
                            <Profile
                                profile={item}
                                key={index}
                                isLogin = {item.gmail === checkGmail && item.password === checkPassword}
                            />
                        )
                    })
                }
            </div>
        </StyledWrapper>
    )
}

export default connect(state => state.Data, DataActions)(Homepage);