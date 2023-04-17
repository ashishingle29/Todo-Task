import React, { useState } from 'react';
import './ContactPage.css';
import { NavLink } from 'react-router-dom';



function ContactPage() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
    });


    const handleSubmit = (event) => {
        event.preventDefault();

        // Validate email and phone using regex
        const emailRegex = /^\S+@\S+\.\S+$/;
        const validDigits = /^\d{10}$/;
        const phoneRegex = /^([6-9]\d{9})$/;

        if (!emailRegex.test(formData.email)) {
            alert('Please enter a valid email address.');
            return;
        }

        if (!validDigits.test(formData.phone)) {
            alert('Please enter a 10-digit phone number.');
            return;
        }

        if (!phoneRegex.test(formData.phone)) {
            alert('Please enter a Valid Phone Number.');
            return;
        }

        // Save form data to local storage
        localStorage.setItem('formData', JSON.stringify(formData));
        alert("Submitted Successfully...")
        setFormData({
            firstName: '',
                lastName: '',
                    email: '',
                        phone: '',
    })
        
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    return (

        <form className="contact-form" onSubmit={handleSubmit}>
            <h1>Contact Form</h1>
            <label>
                First Name:
                <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="input-field"
                />
            </label>
            <label>
                Last Name:
                <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="input-field"
                />
            </label>
            <label>
                Email:
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="input-field"
                />
            </label>
            <label>
                Phone:
                <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="input-field"
                />
            </label>
            <button type="submit" className="submit-button">
                Submit
            </button>
            {
                localStorage.getItem('formData') && (
                    <div className='addedName'>
            
                        <p>Click Here to Create <NavLink to='/todotask'>To-Do Task</NavLink></p>
                    </div>
                )


            }
        </form>
    );
}

export default ContactPage;
