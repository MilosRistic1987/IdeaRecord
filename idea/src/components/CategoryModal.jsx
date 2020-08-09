import React, { useState } from 'react';
import { AiOutlineAppstoreAdd, AiFillEdit, AiFillDelete } from "react-icons/ai";


const CategoryModal = ({ setModalOpened, isModalOpened, setOptions, options }) => {

    const [modalInptClassNameOpened, setModalInptClassNameOpened] = useState(false);
    const initialInputState = { name: '', id: 0 }
    const [inputData, setInputData] = useState(initialInputState)

    const modalClassName = isModalOpened ? 'displayFlex' : 'displayNone';
    const modalInptClassName = modalInptClassNameOpened ? 'modalInputWrappOpen' : 'modalInputWrappClose';
    const [last] = options.slice(-1)
    const id = last ? last.id + 1 : 1

    const closeModal = () => {
        setModalOpened(false)
    }

    const handleDisplay = () => {
        setModalInptClassNameOpened(true)
    }

    const handleSaveAndUpdate = (e) => {
        const { name } = inputData
        e.preventDefault();
        const newCategory = !inputData.id ? { name, id } : { ...inputData }
        const updatedOptions = !inputData.id ? [...options] : [...options].filter(el => el.id !== inputData.id)
        setModalInptClassNameOpened(false);
        setOptions([...updatedOptions, newCategory].sort((a, b) => a.id - b.id))
        setInputData(initialInputState)
    }

    const handleInput = (e) => {
        setInputData({ ...inputData, name: e.target.value });
    }

    const handleDeleteCategory = (option) => {
        const filteredCategories = [...options].filter(el => el.id !== option.id)
        setOptions(filteredCategories)
    }
    const handleCategoryUpdate = (el) => {
        setInputData(el)
        setModalInptClassNameOpened(true);
    }

    return (
        <div className={modalClassName}>
            <div className="modalCard">
                <div className="modalCardHeader">
                    <h1>Modify Categories</h1>
                    <AiOutlineAppstoreAdd className='addModalIcon' title='addCategories' onClick={handleDisplay} />
                </div>
                <div className={modalInptClassName}>
                    <form onSubmit={(e) => handleSaveAndUpdate(e)}>
                        <input value={inputData.name} placeholder='plaese enter category' onChange={(e) => handleInput(e)} />
                        <button type='submit' >submit</button>
                    </form>
                </div>
                <div className="modalCardBody">
                    {options.map(el => <div className="modalFiled">
                        <h1>{el.name}</h1>
                        <div>
                            <AiFillEdit className='modalCardEditIcon' title='edit category' onClick={() => handleCategoryUpdate(el)} />
                            <AiFillDelete className='modalCardEditIcon' title='delete category' onClick={() => handleDeleteCategory(el)} />
                        </div>
                    </div>)}
                </div>
                <div className="modalCardFooter">
                    <button className='closeModalBtn' type='button' onClick={closeModal}>close</button>
                </div>
            </div>
        </div>
    )
}

export default CategoryModal
