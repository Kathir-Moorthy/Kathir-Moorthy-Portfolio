import { useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { DarkModeContext } from '../../common/DarkModeContext';
import 'react-toastify/dist/ReactToastify.css';

function NotFound() {
  const navigate = useNavigate();
  const { darkMode } = useContext(DarkModeContext);

  useEffect(() => {
    // Show error toast with darkMode styles
    toast.error('The page you are looking for does not exist. Redirecting to the home page.');

    // Redirect to home after 3 seconds
    const timer = setTimeout(() => {
      navigate('/');
    }, 3000);

    return () => clearTimeout(timer); // Cleanup on unmount
  }, [navigate]);

  return (
    <div
      className={`min-h-screen flex items-center justify-center ${
        darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-black'
      }`}
    >
      <div
        className={`text-center p-6 rounded-lg shadow-md ${
          darkMode ? 'bg-gray-800 border border-gray-600 text-gray-100' : 'bg-white border border-gray-300 text-gray-800'
        }`}
      >
        <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
        <p className="text-lg mb-6">
          The page you are looking for does not exist. You will be redirected shortly.
        </p>
        <ToastContainer
          position="top-center"
          autoClose={3000}
          closeButton={false}
          toastClassName={() =>
            `text-sm font-medium rounded-lg p-4 shadow-md ${
              darkMode
                ? 'bg-gray-800 text-gray-100 border border-gray-600'
                : 'bg-white text-gray-800 border border-gray-300'
            }`
          }
          bodyClassName="flex items-center"
        />
      </div>
    </div>
  );
}

export default NotFound;