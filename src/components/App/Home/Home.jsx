import { useHistory } from 'react-router-dom';

function Home () {
    const history = useHistory();
    return(
        <div className='intro'>
        <h1><span id='problem'>Problem:</span> Determine if user's answer is correct.</h1>
        <button onClick={() => history.push('/find')}>Works Pretty Good</button>
        <button className = 'broken' onClick={() => history.push('/soup')}>Very Broken But Fun</button>
        </div>
    )
}

export default Home;