import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const validationSchema = Yup.object({
  username: Yup.string().required('Username is required').min(4, 'Username must be at least 4 characters'),
  password: Yup.string().required('Password is required').min(3, 'Password must be at least 3 characters'),
});

const LoginForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (values) => {
    setIsSubmitting(true);
    setErrorMessage('');
    try {
      const response = await axios.post('http://localhost:5000/login', values);
      localStorage.setItem('token', response.data.token);
      navigate('/dashboard');
    } catch (error) {
      setErrorMessage('Error: ' + (error.response ? error.response.data.message : 'Unexpected error occurred'));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white shadow-lg rounded-lg">
        <h1 className="text-3xl font-semibold mb-6 text-gray-800 text-center">Login</h1>
        <Formik
          initialValues={{ username: '', password: '' }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {() => (
            <Form className="space-y-6">
              <div>
                <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
                <Field
                  type="text"
                  id="username"
                  name="username"
                  autoComplete="username"  // Added autocomplete attribute
                  className="mt-1 p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full"
                />
                <ErrorMessage name="username" component="div" className="text-red-600 text-sm mt-1" />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                <Field
                  type="password"
                  id="password"
                  name="password"
                  autoComplete="current-password"  // Added autocomplete attribute
                  className="mt-1 p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full"
                />
                <ErrorMessage name="password" component="div" className="text-red-600 text-sm mt-1" />
              </div>

              {errorMessage && (
                <div className="text-red-600 text-sm">{errorMessage}</div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 text-white py-3 px-4 rounded-md shadow-md hover:bg-blue-700 disabled:bg-blue-400 transition duration-150 ease-in-out"
              >
                {isSubmitting ? 'Submitting...' : 'Login'}
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default LoginForm;
