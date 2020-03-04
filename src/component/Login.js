import styled from 'styled-components';
import { useState } from 'react';
import Link from 'next/link';

const StyledWrapper = styled.div`
    margin: auto;
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
    .Regis{
        border: 1px solid rgba(0,0,0,.15);
        border-radius: 8px;
        max-width: 300px;
        padding: 10px;
        margin-bottom: 10px;
        box-shadow: 0 0 6px 0 rgba(0,0,0,.15);
    }

    p {
        margin-bottom: 4px;
    }

    input {
        margin-bottom: 4px;
        border: 1px solid rgba(0,0,0,.15);
        border-radius: 4px;
        padding: 4px;
    }

    button {
        padding: 4px 8px;
        border: none;
        border-radius: 6px;
        outline: none;
        cursor: pointer;
        margin: 2px 3px;
    }
    .but{
        text-align: center;
    }
    .back{
        text-align: center;
        color:blue;
        text-decoration-line: underline; 
        cursor: pointer;
    }
`

const Login = props => {

    const [regis, setRegis] = useState(false)
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

    if (regis == true) {
        return (
            <StyledWrapper>
                <div className='Regis'>
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
                    <div className='but'>
                        <button onClick={handleCreate}>Create</button>
                    </div>
                </div>
                <div className='back'>
                    <a onClick={() => setRegis(false)}>Login</a>
                </div>

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
                <Link href='/home'>
                    <div className='but'>
                        <button onClick={handleCheck}>Login</button>
                    </div>
                </Link>
            </div>
            <div className='back'>
                <a onClick={() => setRegis(true)} className='Register'>Register</a>
            </div>

        </StyledWrapper >
    )

}

export default Login;