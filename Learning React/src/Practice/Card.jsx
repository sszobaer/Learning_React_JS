import React from 'react'

const Card = (props) => {
  return (
    <div className="flex m-4">
  <div className="bg-white text-gray-800 p-6 rounded-2xl shadow-lg max-w-md transition-transform transform hover:scale-105 duration-300">
    <div className="space-y-2 text-center">
      <h1 className="text-2xl font-semibold">👤 {props.name}</h1>
      <p className="text-lg">🎂 {props.age}</p>
      <p className="text-lg">🏙️ {props.city}</p>
      <p className="text-lg font-medium text-blue-700">💼 {props.prof}</p>
    </div>
    <div className="mt-5 text-center">
      <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-full text-lg font-medium shadow-md hover:shadow-lg transition-all">Add Friend
      </button>
    </div>
  </div>
</div>
  )
}

export default Card
