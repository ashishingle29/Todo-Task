import React, { useEffect, useState } from 'react';
import './HomePage.css';
import { NavLink } from 'react-router-dom';

function HomePage() {
    const [storedFormData, setStoredFormData] = useState(null);
    const storedFormAllData = JSON.parse(localStorage.getItem('formData'));
    useEffect(() => {
      
            setStoredFormData(storedFormAllData)
        
       
    }, [storedFormData]);



    const handleClearClick = () => {
        const shouldClear = window.confirm('Are you sure you want to clear the data?');
        if (shouldClear) {
            localStorage.removeItem('formData');
        }
    };

    return (
        <div className="homepage-container">
            <h1 className="welcome-message">Welcome to Todo Web Application</h1>
            {
                !storedFormData && (
                    <div className='addedName'>
                        <h3>
                            Hello! User Please Fill Contact Form First <NavLink to='/contact'>Contact</NavLink>
                        </h3>
                    </div>
                )
            }
            {storedFormData && (
                <div className='addedName'>
                    <h3>
                        Hello {storedFormData.firstName} {storedFormData.lastName}!
                    </h3>
                    <br />
                    <p>Click Here to Create <NavLink to='/todotask'>To-Do Task</NavLink></p>
                </div>
            )}

            <button className="clear-button" onClick={handleClearClick}>
                Clear Data
            </button>
        </div>
    );
}

export default HomePage;
