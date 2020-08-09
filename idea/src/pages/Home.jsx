import React, { useState } from 'react';
import Header from '../components/Header';
import Body from '../components/Body';
import CategoryModal from '../components/CategoryModal'

const Home = () => {

  const intialOptions = [
    {
      name: "Personal life",
      id: 1
    },
    {
      name: "Job",
      id: 2
    },
    {
      name: "Education",
      id: 3
    },
    {
      name: "Entertaiment",
      id: 4
    },
    {
      name: "Travel",
      id: 5
    },
    {
      name: "Other",
      id: 6
    }
  ]

  const [options, setOptions] = useState(intialOptions)
  const [isModalOpened, setModalOpened] = useState(false)

  return (
    <>
      <CategoryModal isModalOpened={isModalOpened} setModalOpened={setModalOpened} options={options} setOptions={setOptions} />
      <Header />
      <Body setModalOpened={setModalOpened} options={options} />
    </>
  )
}

export default Home
