import styled from 'styled-components';
import Link from 'next/link';
import { connect } from 'react-redux';
import { DataActions } from '../redux/data/actions';

const StyledWrapper = styled.div`
    display: flex;
    height: 48px;
    box-shadow: 0 4px 6px 0 rgba(0,0,0,.15);
    align-items: center;
    padding: 0 24px;
    justify-content:space-between;
    
    .menu{
        display: flex;
        cursor: pointer;

        h4{
            padding: 0 24px;
        }
    }
`

const Topbar = props => {
    const { dataset } = props;

    return (
        <StyledWrapper>
            <div className="name"><h4>{dataset[0].name}</h4></div>
            <div className='menu'>
                <Link href='/home'>
                    <div>
                        <h4>Home</h4>
                    </div>
                </Link>
                <Link href='/'>
                    <div>
                        <h4>Admin</h4>
                    </div>
                </Link>
                <Link href='/authen'>
                    <div>
                        <h4>Logout</h4>
                    </div>
                </Link>
            </div>

        </StyledWrapper>
    )
}

export default connect(state => state.Data, DataActions)(Topbar);