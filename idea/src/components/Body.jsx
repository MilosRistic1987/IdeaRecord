import React, { useState } from 'react';
import IdeaCreator from '../components/IdeaCreator';
import IdeaList from '../components/IdeaList';

const Body = ({setModalOpened,options}) => {

    const[formData, setFormdata]=useState([])
    const[creatorFormData, setCreatorFormData] = useState({ rating:5, time:'', date:'', ideaName:'', ideaDescription:'', expectations:'', category:'Personal life'})

    return (
        <div className='appBody'>
            <IdeaCreator formData={formData} setFormdata={setFormdata} creatorFormData={creatorFormData} setCreatorFormData={setCreatorFormData} setModalOpened={setModalOpened} options={options}/>
            <IdeaList formData={formData} setFormdata={setFormdata} setCreatorFormData={setCreatorFormData}/>
        </div>
    )
}

export default Body
