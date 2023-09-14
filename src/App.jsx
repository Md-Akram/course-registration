import Cart from "./components/Cart"
import Card from "./components/Card"
import { useEffect, useState } from "react"

function App() {

  const [courses, setCourses] = useState([])

  useEffect(() => {
    fetch('../data.json')
      .then(res => res.json())
      .then(data => setCourses(data))
  }, [])

  return (
    <div className="p-4 md:p-6">
      <h1 className='text-3xl text-center font-bold m-2'>
        Course Registration
      </h1>
      <div className="flex gap-3 flex-col-reverse items-center md:items-start md:flex-row">
        <div className="cards grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {
            courses.map((course) => <Card key={course.id} course={course} />)
          }
        </div>
        <div className="cart w-full md:w-1/2 max-w-sm md:max-w-lg">
          <Cart />
        </div>
      </div>
    </div>
  )
}

export default App
