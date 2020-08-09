import React from 'react';
import IdeaFiled from '../components/IdeaFiled'

const IdeaList = ({formData, setFormdata, setCreatorFormData}) => {
    
    return (
        <div className='ideaList'>
            {formData.map(el=><IdeaFiled formData={el} key={el.key} setFormdata={setFormdata} setCreatorFormData={setCreatorFormData}/>)}       
        </div>
    )
}

export default IdeaList
