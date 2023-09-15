import Cart from "./components/Cart"
import Card from "./components/Card"
import { useEffect, useState } from "react"
import toast, { Toaster } from "react-hot-toast"

function App() {

  const [courses, setCourses] = useState([])
  const [selectedCourse, setSelectedCourse] = useState([])
  const [totalCreditHour, setTotalCreditHour] = useState(0)
  const [totalPrice, setTotalPrice] = useState(0)

  useEffect(() => {
    selectedCourse.map((course) => {
      let newCreditHour = totalCreditHour + course.credit_hour
      setTotalCreditHour(newCreditHour)
      let newTotal = totalPrice + course.price
      setTotalPrice(newTotal)
    })
  }, [selectedCourse])

  useEffect(() => {
    fetch('../data.json')
      .then(res => res.json())
      .then(data => setCourses(data))
  }, [])

  const handleClick = (course) => {
    const existing = selectedCourse.find((crs) => crs.id === course.id)
    if (existing) {
      toast.error('Course already exist')
    } else if ((totalCreditHour + course.credit_hour) > 20) {
      toast.error('Total credit hour cannot be more than 20hrs')
    } else {
      setSelectedCourse([...selectedCourse, course])
    }
  }
  return (
    <div className="p-4 md:p-6">
      <Toaster />
      <h1 className='text-3xl text-center font-bold m-2'>
        Course Registration
      </h1>
      <div className="flex gap-3 flex-col-reverse items-center md:items-start md:flex-row">
        <div className="cards grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {
            courses.map((course) => <Card key={course.id} course={course} handleClick={handleClick} />)
          }
        </div>
        <div className="cart w-full md:w-1/2 max-w-sm md:max-w-lg">
          <Cart selectedCourse={selectedCourse} totalCreditHour={totalCreditHour} totalPrice={totalPrice} />
        </div>
      </div>
    </div>
  )
}

export default App
