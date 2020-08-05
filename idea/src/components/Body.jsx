import React from 'react';
import IdeaCreator from '../components/IdeaCreator';
import IdeaList from '../components/IdeaList'

const Body = () => {
    return (
        <div className='appBody'>
            <IdeaCreator/>
            <IdeaList/>
        </div>
    )
}

export default Body
