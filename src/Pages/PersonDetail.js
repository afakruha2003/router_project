import axios from "axios"
import React, { useState } from 'react'
import { useEffect } from "react";
import { useLocation, useNavigate, useParams } from 'react-router'

const PersonDetail = () => {

  //const { state: person } = useLocation() //başka bir sayfadaki  objelelere ulaşmak için kullandığımız bir hook'tur



  const { id } = useParams();//başka bir sayfadaki  değişkenlere ulaşmak için kullandığımız bir hook'tur
  const navigate = useNavigate()

  const [person, setPerson] = useState("")

  const getPerson = async () => {
    try {
      const response = await axios.get(`https://reqres.in/api/users/${id}`)
      setPerson(response.data.data)
    } catch (error) {
      console.log(error)
    }
  }


  useEffect(() => {
    getPerson()
  }, [])





  return (
    <div className='container text-center'>
      <h3>{person?.first_name} {person.last_name}</h3>
      <img src={person?.avatar} alt="" />
      <p>{person?.email}</p>
      <div>
        <button className='btn btn-success me-2' onClick={() => navigate("/")}>Go Home</button>
        <button className='btn btn-warning ' onClick={() => navigate(-1)}>Go Back</button>

      </div>

    </div>
  )
}

export default PersonDetail

