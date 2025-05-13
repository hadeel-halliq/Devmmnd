import { useParams } from 'react-router-dom';

function Registration() {
  const { courseId } = useParams();

  return (
    <div>
      <h2>Register for Course {courseId}</h2>
      {/* Registration form or logic */}
    </div>
  );
}

export default Registration;
