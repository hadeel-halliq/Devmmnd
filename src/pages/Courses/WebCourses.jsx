import { Link } from "react-router-dom"

export default function WebCourses() {

  const webCourses = [{id: 1, title: "react"}, {id: 2, title: "js"}]

  return (
    <div>
      {webCourses.map((webCourse) => (
        <Link to={`web/${webCourse.id}`} key={webCourse.id}>
          {webCourse.title}
        </Link>
      ))}
    </div>
  )
}
