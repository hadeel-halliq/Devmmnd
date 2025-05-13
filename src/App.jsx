import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home/Home";
import Books from "./pages/Books/Books";
import Courses from "./pages/Courses/Courses";
import Gallery from "./pages/Gallery/Gallery";
import About from "./pages/About/About";
import WebCourses from "./pages/Courses/WebCourses";
import SubjectCourses from "./pages/Courses/SubjectCourses";
import PrivateCourses from "./pages/Courses/PrivateCourses";
import CoursesDetails from "./pages/Courses/CourseDetails";
import Registration from "./pages/Courses/Registration";

// import { useState } from "react";

function App() {
  // const [ isAuthorized , setIsAuthorized] = useState(false)
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/books" element={<Books />} />
        <Route path="/courses" element={<Courses />}>
        
          <Route path="web" element={<WebCourses />} />
          <Route path="subject" element={<SubjectCourses />} />
          <Route path="private" element={<PrivateCourses />} />

          <Route path="web/:courseId" element={<CoursesDetails />} />
          <Route path="subject/:courseId" element={<CoursesDetails />} />
          <Route path="private/:courseId" element={<CoursesDetails />} />

          <Route path="register/:courseId?" element={<Registration />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
