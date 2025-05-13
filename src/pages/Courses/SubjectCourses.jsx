import { Link } from "react-router-dom"

export default function SubjectCourses() {
  const subjects = [{id: 1, title: "Digital"}, {id: 2, title: "Optical"}];
  return (
    <div>
      {subjects.map((subject) => (
        <Link key={subject.id} to={`subject/${subject.id}`}>{subject.title}</Link>
      ))}
    </div>
  )
}
