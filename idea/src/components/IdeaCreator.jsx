import React, { useEffect } from 'react';
import { sendFormData, getAllIdeas, updateIdea } from '../fireBaseServices/fireBaseAPI';
import { AiFillInteraction } from "react-icons/ai";


const IdeaCreator = ({ setFormdata, creatorFormData, setCreatorFormData, formData, setModalOpened, options }) => {

    const { rating, time, date, ideaName, ideaDescription, expectations, category } = creatorFormData

    const initialFormState = { rating: 5, time: '', date: '', ideaName: '', ideaDescription: '', expectations: '', category: 'Personal life' }

    const getAllIdeaWithKeys = () => {
        getAllIdeas().then(res => {
            const { data } = res
            const resultData = data ? Object.keys(data).map(key => { return { ...data[key], key } }) : []
            setFormdata(resultData)
        })
    }

    const updateDataAndResetForm = () => {
        getAllIdeaWithKeys();
        setCreatorFormData(initialFormState)
    }

    useEffect(() => {
        getAllIdeaWithKeys()
    }, [])

    const createData = () => {
        const [last] = formData.slice(-1)
        const orderNumber = last ? last.orderNumber + 1 : 1
        sendFormData({ ...creatorFormData, orderNumber }).then(res => {
            updateDataAndResetForm()
        }
        )
            .catch(error => console.log(error))
    }

    const updateData = () => {
        updateIdea(creatorFormData).then(res => {
            updateDataAndResetForm()
        }
        )
            .catch(error => console.log(error))
    }

    const onSubmit = (e) => {
        e.preventDefault()
        creatorFormData.key ? updateData() : createData()
    }

    const handleInputChange = (e) => {
        const updatedForm = { ...creatorFormData, [e.target.name]: e.target.value }
        setCreatorFormData(updatedForm)
    }

    const handleCategories = () => {
        setModalOpened(true)
    }

    return (
        <div className='ideaCreator'>
            <form className='ideaForm' onSubmit={(e) => onSubmit(e)}>
                <h1>Idea Creator</h1>
                <div className="innerForm">
                    <div className="submitBtnWrapp">
                        <button className='creatorBtn' type='submit' >Submit</button></div>
                    <div className="formFiled">
                        <label>Date </label>
                        <input className='formFiledInpt' type='date' name='date' value={date} onChange={(e) => handleInputChange(e)} required />
                    </div>
                    <div className="formFiled">
                        <label>Time </label>
                        <input className='formFiledInpt' type='time' name='time' value={time} onChange={(e) => handleInputChange(e)} required />
                    </div>
                    <div className="formFiled">
                        <label>Idea Name </label>
                        <input className='formFiledInpt' name='ideaName' value={ideaName} onChange={(e) => handleInputChange(e)} required />
                    </div>
                    <div className="formFiled">
                        <label>Idea Description</label>
                        <textarea className='formFiledInpt' name='ideaDescription' value={ideaDescription} onChange={(e) => handleInputChange(e)} required></textarea>
                    </div>
                    <div className="formFiled">
                        <label>Rating</label>
                        <div>
                            <small>{rating}</small>
                            <input className='slider' type="range" min="1" max="10" defaultValue={rating} value={rating} onChange={(e) => handleInputChange(e)} name='rating' required />
                        </div>
                    </div>
                    <div className="formFiled">
                        <label>Category</label>
                        <AiFillInteraction className='categoryIcon' title='click to modify categories' onClick={handleCategories} />
                        <select className='formFiledInpt' name="category" value={category} onChange={(e) => handleInputChange(e)} required>
                            {options.map(el => <option value={el.name}>{el.name}</option>)}
                        </select>
                    </div>
                    <div className="formFiled">
                        <label>Expectations</label>
                        <textarea className='formFiledInpt' name='expectations' value={expectations} onChange={(e) => handleInputChange(e)} required></textarea>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default IdeaCreator
