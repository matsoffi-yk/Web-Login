import styled from 'styled-components';
import { useState } from 'react';

const StyledWrapper = styled.div`
    p {
        margin: 5px;
    }
    
    .Login {
        margin-bottom: 20px;
        border: 1px solid rgba(0,0,0,.15);
        border-radius: 8px;
        width: 200px;
        padding: 10px;
        margin-bottom: 10px;
        box-shadow: 0 0 6px 0 rgba(0,0,0,.15);
    }
    .bb {
        margin-bottom: 10px;
    }

    button {
        padding: 4px 8px;
        border: none;
        border-radius: 6px;
        outline: none;
        cursor: pointer;
    }
    .Register{

    }
`

const Login = props => {

    const [name, setName] = useState('');
    const [gmail, setGmail] = useState('');
    const [password, setPassword] = useState('');
    const [imageUrl, setImageUrl] = useState('');

    const handleCheck = () => {
        props.handleCheck({ gmail, password });
    }

    const handleFile = e => {
        const reader = new FileReader();

        reader.onload = e => {
            setImageUrl(e.target.result)
        }

        if (e.target.files[0])
            reader.readAsDataURL(e.target.files[0]);
    }

    const handleCreate = () => {
        props.handleCreate({ name, gmail, password, imageUrl });
    }
    let a
    console.log('a1/',a)
    if (a == true) {
        return (
            <StyledWrapper>
                {console.log('aaa')}
                <div>
                    <h2>Register</h2>
                </div>
                <div>
                    <p>Name</p>
                    <input onChange={e => setName(e.target.value)} />
                </div>
                <div>
                    <p>Gmail</p>
                    <input onChange={e => setGmail(e.target.value)} />
                </div>
                <div>
                    <p>Password</p>
                    <input onChange={e => setPassword(e.target.value)} />
                </div>
                <input type='file' accept='image/*' onChange={handleFile} />
                <button onClick={handleCreate}>Create</button>

            </StyledWrapper>
        )
    }
    return (
        <StyledWrapper>
            <div className='Login'>
                <h2>Login</h2>
                <p>Gmail</p>
                <input onChange={e => setGmail(e.target.value)} />
                <p>password</p>
                <input className='bb' type='password' onChange={e => setPassword(e.target.value)} />
                <button onClick={handleCheck}>Login</button>
            </div>
            <div>
                <button onClick={() => (a = true )} className='Register'>for get password</button>
            </div>
        </StyledWrapper >
    )

}

export default Login;