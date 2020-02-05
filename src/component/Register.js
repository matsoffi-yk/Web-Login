import styled from 'styled-components';
import { useState } from 'react';


const StyledWrapper = styled.div`
    border: 1px solid rgba(0,0,0,.15);
    border-radius: 8px;
    max-width: 300px;
    padding: 10px;
    margin-bottom: 10px;
    box-shadow: 0 0 6px 0 rgba(0,0,0,.15);

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
    }

`

const Register = props => {

    const[name, setName] = useState('');
    const[gmail, setGmail] = useState('');
    const[password, setPassword] = useState('');
    const[imageUrl, setImageUrl] = useState('');

    const handleFile = e => {
        const reader =  new FileReader();

        reader.onload = e => {
            setImageUrl(e.target.result)
        }

        if (e.target.files[0])
            reader.readAsDataURL(e.target.files[0]);
    }

    const handleCreate = () => {
        props.handleCreate({ name, gmail, password, imageUrl });
    }

    return (
        <StyledWrapper>
            <div>
                <p>Name</p>
                <input onChange={e => setName(e.target.value)}/>
            </div>
            <div>
                <p>Gmail</p>
                <input onChange={e => setGmail(e.target.value)}/>
            </div>
            <div>
                <p>Password</p>
                <input onChange={e => setPassword(e.target.value)}/>
            </div>
            <input type='file' accept='image/*' onChange={handleFile}/>
            <button onClick={handleCreate}>Create</button>

        </StyledWrapper>
    )
}

export default Register;