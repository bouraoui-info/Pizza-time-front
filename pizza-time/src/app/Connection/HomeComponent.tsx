import { useEffect, useState } from 'react'

const HomeComponent = () => {

const [data, setData] = useState(null)

useEffect(() => {

fetch('http://localhost:3001/api/users')
.then((response) => response.json())
.then((data) => setData(data))
.catch(err => console.error('Error fetching data', err)); 
}, []);


  return (
    <div>Home</div>
  )
}

export default HomeComponent

