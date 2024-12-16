 
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div className="flex items-center justify-center h-screen  ">
      <div className="text-center p-6 rounded-lg   shadow-2xl border">
        <h1 className="text-4xl font-bold text-red-500">Oops! Something went wrong.</h1>
        <p className="text-xl text-white mt-4">Sorry, the page you're looking for doesn't exist or an error occurred.</p>
        <Link to="/" className="mt-6 inline-block px-6 py-2      gradient-bg  text-white rounded-lg ">
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
