import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/authContext';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';



const SignupForm = ({setIsAuthenticated}) => {
    const [username, setUsername]=useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const {signup,isAuthenticated }=useContext(AuthContext);
    const {token}= useContext(AuthContext);
    const navigate = useNavigate();


    const handleFormSubmit = async (e) => {
        
        e.preventDefault();
    
        try {
          await signup(username ,email, password);
          // await logout ()
          console.log(token);
  
          navigate(-1);
          // Login successful, perform any necessary actions
          // For example, you can navigate to a different page or update the component state
          // after successful login
  
          setError('');
          setIsAuthenticated(true);
          // localStorage.setItem('token', token);
  
        } catch (error) {
          setError('Failed Sign up in.');
        }
      };

  return (
    <div class="mt-20 mb-20 w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
    <div class="px-6 py-4">
        <div class="flex justify-center mx-auto">
            <img class="w-auto h-7 sm:h-8" src="https://merakiui.com/images/logo.svg" alt=""></img>
        </div>

        <h3 class="mt-6 text-xl font-medium text-center text-gray-600 dark:text-gray-200">Bienvenue de retour ! </h3>

        <p class="mt-1 text-center text-gray-500 dark:text-gray-400">Inscription</p>
        {error && <p>{error}</p>}
        <form onSubmit={handleFormSubmit}>
            <div class="w-full mt-4">
                <input 
                class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300" 
                type="username" 
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username" 
                aria-label="Username" />
            </div>
            <div class="w-full mt-4">
                <input class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300" 
                type="email" 
                value={email}
  onChange={(e) => setEmail(e.target.value)}
                placeholder="Email Address" 
                aria-label="Email Address" />
            </div>

            <div class="w-full mt-4">
                <input class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300" 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password" 
                aria-label="Password" />
            </div>

            <div class="flex  items-center justify-between mt-4">
                <Link to="/forget-password" class=" underline text-sm text-gray-600 dark:text-gray-200 hover:text-gray-500">Mot de passe oublié</Link>

                <button 
                type='submit'
                class="px-6 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                    Inscription
                </button>
            </div>
        </form>
    </div>

    <div class="flex items-center justify-center py-4 text-center bg-gray-50 dark:bg-gray-700">
        <Link to='/login'>
        <span class="text-sm text-gray-600 dark:text-gray-200">Avez-vous déjà un compte ? </span>
</Link>
        <Link to="/signup" class="mx-2 text-sm font-bold text-blue-500 dark:text-blue-400 hover:underline">Connexion</Link>
    </div>
</div>
  )}
export default SignupForm;
