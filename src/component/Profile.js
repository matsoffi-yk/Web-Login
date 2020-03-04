import styled from 'styled-components'
import { connect } from 'react-redux';

const StyledWrapper = styled.div`
    width: 250px;
    border-radius: 8px;
    box-shadow: 0 0 6px 0 rgba(0,0,0,.15);
    overflow: hidden;
    margin-bottom: 10px;

    img {
        width : 100%;
    }
    
    margin: 5px;
    .content {
        padding: 10px 10px 0 10px;
        h4 , p {
            margin: 0px;
            font-size: px;
        }
    }
    .login {
        background-color: rgba(255,0,144,0.5)
    }
`

const Profile = props => {

    const { imageUrl, name, password, gmail } = props.profile;

    if (props.isLogin == true) {
        return (
            <StyledWrapper>
                <div className='login'>
                    <img src={imageUrl} />
                    <div className='content'>
                        <h4>Name : {name}</h4>
                        <p>Password : {password}</p>
                        <p>Gmail : {gmail}</p>
                    </div>
                </div>
            </StyledWrapper >
        )
    }
    return (
        <StyledWrapper>
            <img src={imageUrl} />
            <div className='content'>
                <h4>Name : {name}</h4>
                <p>Password : {password}</p>
                <p>Gmail : {gmail}</p>
            </div>

        </StyledWrapper>
    )

}

export default connect(state => state.Data)(Profile);