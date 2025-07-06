import React from 'react'
import Card from './Card'

const CardManagement = () => {
let users = [
  {
    "name": "Zobaer Ahmed",
    "age": 25,
    "city": "Dhaka",
    "profession": "Software Engineer"
  },
  {
    "name": "Amina Rahman",
    "age": 28,
    "city": "Chittagong",
    "profession": "Doctor"
  },
  {
    "name": "Farhan Hossain",
    "age": 30,
    "city": "Khulna",
    "profession": "Teacher"
  },
  {
    "name": "Tania Islam",
    "age": 22,
    "city": "Sylhet",
    "profession": "Designer"
  },
  {
    "name": "Rafiul Karim",
    "age": 27,
    "city": "Rajshahi",
    "profession": "Civil Engineer"
  }
]


  return (
    <div className='flex justify-between'>
      {users.map((elem)=>{
        return <Card name={elem.name} age = {elem.age} city = {elem.city} prof = {elem.profession}/>
      })}
    </div>
  )
}

export default CardManagement
