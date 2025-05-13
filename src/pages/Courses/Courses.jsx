import { Link, NavLink, Outlet } from "react-router-dom";

export default function Courses() {
  return (
    <div>
      <h2>Courses category</h2>
      <nav>
        <Link to="web" className="bg-cyan-50 mr-36">Web Courses</Link>
        <Link to="subject" className="bg-amber-300">Subject Courses</Link>
        <Link to="private" className="bg-amber-500">Private Courses</Link>
      </nav>
      <Outlet/>
    </div>
  )
}
