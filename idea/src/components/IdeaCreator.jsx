import React, { useState } from 'react'

const IdeaCreator = () => {
    const options = [
        { name: "Personal life" },
        { name: "Job" },
        { name: "Education" },
        { name: "Entertaiment" },
        { name: "Travel" },
        { name: "Other" }
    ]

    const [rating, setRaiting] = useState(5)

    const handleRatingChange = (e) => {
        setRaiting(e.target.value)
    }

    return (
        <div className='ideaCreator'>
           
            <form className='ideaForm'>
            <h1>Idea Creator</h1>
                <div className="innerForm">
                    <div className="submitBtnWrapp">
                        <button className='creatorBtn' type='submit'>Submit</button></div>
                    <div className="formFiled">
                        <label>Order number </label>
                        <input className='formFiledInpt' type='number' />
                    </div>
                    <div className="formFiled">
                        <label>Date </label>
                        <input className='formFiledInpt' type='date' />
                    </div>
                    <div className="formFiled">
                        <label>Time </label>
                        <input className='formFiledInpt' type='time' />
                    </div>
                    <div className="formFiled">
                        <label>Idea Name </label>
                        <input className='formFiledInpt' />
                    </div>
                    <div className="formFiled">
                        <label>Idea Description</label>
                        <textarea className='formFiledInpt'></textarea>
                    </div>
                    <div className="formFiled">
                        <label>Rating</label>
                        <div>
                            <small>{rating}</small>
                            <input className='formFiledInpt' type="range" min="1" max="10" defaultValue={rating} onChange={(e) => handleRatingChange(e)} />
                        </div>
                    </div>
                    <div className="formFiled">
                        <label>Category</label>
                        <select className='formFiledInpt' name="Category" id="">
                            {options.map(el => <option value={el.name}>{el.name}</option>)}
                        </select>
                    </div>
                    <div className="formFiled">
                        <label>Exopacting</label>
                        <textarea className='formFiledInpt'></textarea>
                    </div>
                </div>
            </form>

        </div>
    )
}

export default IdeaCreator
