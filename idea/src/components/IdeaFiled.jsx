import React from 'react';
import { AiFillEdit, AiFillDelete, AiFillStar } from "react-icons/ai";
import { deleteIdea, getAllIdeas } from "../fireBaseServices/fireBaseAPI";


const IdeaFiled = ({ formData, setFormdata, setCreatorFormData }) => {

    let { orderNumber, date, time, ideaName, ideaDescription, expectations, rating, category, key } = formData
    const swapClasses = rating == 10 ? 'goldenFiled' : 'ideaFiled'

    const getAllIdeaWithKeys = () => {
        getAllIdeas().then(res => {
            const { data } = res
            const resultData = data ? Object.keys(data).map(key => { return { ...data[key], key } }) : []
            setFormdata(resultData)
        })
    }

    const handleIdeaDelete = () => {
        deleteIdea(key).then(res => getAllIdeaWithKeys())
    }

    const handleIdeaEdit = () => {
        setCreatorFormData(formData)
    }

    return (
        <div className={swapClasses}>
            <div className='dateTimeWraper'>
                <div >
                    <h3>{time}</h3>
                </div>
                <div>
                    <h3>{date}</h3>
                </div>
            </div>
            <div className='orderNumberWrapp'>
                <h1>{orderNumber}.</h1>
            </div>
            <div className='ideaHeading'>
                <h1 >{ideaName}</h1>
                <p>{ideaDescription}</p>
                <p>{expectations}</p>
            </div>
            <div className='ratingWrapp'>
                <div>
                    <AiFillStar className='ratingIcon' title='ratings' />
                    <h2>{rating}</h2>
                </div>
            </div>
            <div className='categoryWrapp'>
                <h1>{category}</h1>
            </div>
            <div className='ideaFiledBtnsWrapp'>
                <div>
                    <button className='ideaFiledBtns' type='button' title='delete' onClick={handleIdeaDelete}><AiFillDelete /></button>
                    <button className='ideaFiledBtns' type='button' title='edit' onClick={handleIdeaEdit}><AiFillEdit /></button>
                </div>
            </div>
        </div>
    )
}

export default IdeaFiled
