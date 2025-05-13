import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const fakeApi = {
  courses: {
    "react-js": {
      id: "react-js",
      title: "React.js",
      description: "Learn React",
    },
    css: { id: "css", title: "CSS Basics", description: "Learn CSS" },
  },
};

export default function CourseDetails() {
  const { courseId } = useParams();
  const [ course, setCourse] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
      const fetchCourse = () => {
        const data = fakeApi.courses[courseId];
        setCourse(data)
      };
      fetchCourse()
  }, [courseId])

  if (!course) return <div>Loading . . . </div>
  return (
    <div>
      <h2>{course.title}</h2>
      <p>{course.description}</p>
      <button onClick={() => navigate(`/courses/register/${course.id}`)}>Register</button>
    </div>
  )
}

