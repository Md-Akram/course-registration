export default function Cart({ selectedCourse, totalCreditHour, totalPrice }) {

    return (
        <div className="card bg-base-100 shadow-xl p-0 ">
            <div className="card-body p-4">
                <h2 className="text-lg font-semibold text-sky-600">Credit hours remaining: {20 - totalCreditHour} hrs</h2>
                <hr />
                <h2 className="card-title">Course name</h2>
                <div>{
                    selectedCourse.map((course, idx) => <h1 key={course.id}>{idx + 1}. {course.course_name}</h1>)
                }</div>
                <hr />
                <h2 className="text-base font-semibold text-gray-600">Total Credit Hour: {totalCreditHour} hrs</h2>
                <hr />
                <h2 className="text-base font-semibold text-gray-600">Total Price: {totalPrice.toFixed(2)} USD</h2>

            </div>
        </div>
    )
}
