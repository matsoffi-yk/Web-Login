import Topbar from "../src/component/Topbar";
import styled from 'styled-components';
import Profile from '../src/component/Profile';
import { connect } from 'react-redux';
import { useState } from 'react';
import { DataActions } from "../src/redux/data/actions";

const StyledWrapper = styled.div`
    .profile {
        display: grid;
        grid-template-columns: repeat(8, 1fr);
        grid-columns-gap: 10px;
    }
`

const home = props => {
    const [checkGmail, setGmail] = useState(props.gmail);
    const [checkPassword, setPassword] = useState(props.password);
    const handleCheck = (check) => {
        setGmail(check.gmail)
        setPassword(check.password)
    }
    const { dataset } = props;
    console.log(dataset)
    return (
        <StyledWrapper>
            <Topbar />
            <div className='profile'>
                {
                    dataset.map((item, index) => {
                        return (
                            <Profile
                                profile={item}
                                key={index}
                                isLogin={item.gmail === checkGmail && item.password === checkPassword}
                            />
                        )
                    })
                }
            </div>
        </StyledWrapper>
    )
}

export default connect(state => state.Data, DataActions)(home);