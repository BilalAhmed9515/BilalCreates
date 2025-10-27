import React, { useState } from 'react'
import bg from '../Contact_Us/Images/bg.jpg'
import Hero from '../Hero Section/Hero'
import { FaCloudUploadAlt } from "react-icons/fa";


// Contact Us page component
const Contact_Us = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
        reason: "",
        contactMethod: "",
        topics: [],
        file: []
    })
    const [file, setFile] = useState(null)
    const [preview, setPreview] = useState(null)

    const handlechage = (e) => {
        const { name, type, checked, value, files } = e.target
        if (type == 'checkbox') {
            setFormData((prev)=>{
                if (checked) {
                    return {...prev, topics : [...prev.topics, value]}
                } else {
                    return {...prev, topics : [prev.topics.filter((item)=>item !==value)]}
                }
            })
        } else if (type == 'file') {
            setFormData((prev)=>{
                return {...prev, file : [prev.file, files]}
            })
        }else{
            setFormData({...formData, [name] : value})
        }

    }

       

    const handlesubmit = (e) => {
        e.preventDefault()
        console.log(formData);

    }

    return (
        <>
            {/* Hero section at the top with background image and page title */}
            <Hero bgimg={bg} name={"Contact Us"} />

            {/* Main container to center the contact form on the page */}
            <div className='flex justify-center items-center w-full mt-10'>

                {/* Wrapper for the contact section (includes form and optional sidebar/content area) */}
                <div className='w-[80%] shadow-lg p-20 flex justify-between gap-20'>

                    {/* Left section (currently placeholder for additional info like contact details or map) */}
                    <div className='w-full border'>Name</div>

                    {/* Right section: actual contact form */}
                    <div className='flex flex-col gap-10 justify-start border w-full p-4'>

                        {/* Contact form starts here */}
                        <form action="" className='flex flex-col gap-6'>

                            {/* Form heading */}
                            <div>
                                <h2 className='text-center font-royal text-5xl'>Have a Question?</h2>
                            </div>

                            {/* Name input field */}
                            <div>
                                <label htmlFor="name" className='font-quicksand font-bold'>Name: </label>
                                <input
                                    className='p-2 outline-none shadow-md w-full rounded-md font-quicksand focus:ring-2 focus:ring-blue-400'
                                    type="text"
                                    name='name'
                                    onChange={handlechage}
                                    id='name'
                                    placeholder='Enter Your Name'
                                />
                            </div>

                            {/* Email input field */}
                            <div>
                                <label htmlFor="email" className='font-quicksand font-bold'>Email: </label>
                                <input
                                    className='p-2 outline-none shadow-md w-full rounded-md font-quicksand focus:ring-2 focus:ring-blue-400'
                                    type="email"
                                    name='email'
                                    onChange={handlechage}
                                    id='email'
                                    placeholder='Enter Your Email'
                                />
                            </div>

                            {/* Message textarea */}
                            <div>
                                <label htmlFor="message" className='font-quicksand font-bold '>Message: </label>
                                <textarea
                                    className='p-2 outline-none shadow-md w-full rounded-md font-quicksand focus:ring-2 focus:ring-blue-400'
                                    rows="3"
                                    name='message'
                                    onChange={handlechage}
                                    id='message'
                                    placeholder='Enter Your Message'
                                />
                            </div>

                            {/* Dropdown (select) field for choosing reason */}
                            <div>
                                <label htmlFor="reason" className='font-quicksand font-bold text-center'>
                                    Reason for Contact:
                                </label>
                                <select
                                    id="reason"
                                    onChange={handlechage}
                                    name="reason"
                                    className="p-3 outline-none shadow-md w-full rounded-md font-quicksand focus:ring-2 focus:ring-blue-400"
                                    required
                                >
                                    <option value="">Select a reason</option>
                                    <option value="support">Support</option>
                                    <option value="feedback">Feedback</option>
                                    <option value="business">Business Inquiry</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>

                            {/* Radio buttons for preferred contact method */}
                            <div>
                                <span className="font-semibold font-quicksand mb-2">
                                    Preferred Contact Method:
                                </span>
                                <div className="flex gap-4">
                                    <label className="flex items-center gap-2">
                                        <input
                                            className='font-quicksand'
                                            type="radio"
                                            onChange={handlechage}
                                            name="contactMethod"
                                            value="email"
                                            required
                                        />
                                        Email
                                    </label>
                                    <label className="flex items-center gap-2">
                                        <input
                                            className='font-quicksand'
                                            type="radio"
                                            onChange={handlechage}
                                            name="contactMethod"
                                            value="phone"
                                        />
                                        Phone
                                    </label>
                                </div>
                            </div>

                            {/* Multiple Checkboxes Section */}
                            <div>
                                <span className="block font-semibold font-quicksand mb-2">
                                    Topics of Interest:
                                </span>

                                <div className="flex flex-col gap-3">
                                    <label className="flex items-center gap-3">
                                        <input
                                            type="checkbox"
                                            onChange={handlechage}
                                            checked={formData.topics.includes('newsletter')}
                                            name="topics"
                                            value="newsletter"
                                            className="accent-blue-500"
                                        />
                                        <span>Subscribe to our newsletter</span>
                                    </label>

                                    <label className="flex items-center gap-3">
                                        <input
                                            type="checkbox"
                                            onChange={handlechage}
                                            checked={formData.topics.includes('offers')}
                                            name="topics"
                                            value="offers"
                                            className="accent-blue-500"
                                        />
                                        <span>Receive special offers</span>
                                    </label>

                                    <label className="flex items-center gap-3">
                                        <input
                                            type="checkbox"
                                            onChange={handlechage}
                                            checked={formData.topics.includes('updates')}
                                            name="topics"
                                            value="updates"
                                            className="accent-blue-500"
                                        />
                                        <span>Get product updates</span>
                                    </label>

                                    <label className="flex items-center gap-3">
                                        <input
                                            type="checkbox"
                                            onChange={handlechage}
                                            checked={formData.topics.includes('events')}
                                            name="topics"
                                            value="events"
                                            className="accent-blue-500"
                                        />
                                        <span>Be notified about upcoming events</span>
                                    </label>
                                </div>
                            </div>



                            {/* File upload input (optional) */}
                            <div className="mb-4">
                                <label className="block font-semibold mb-2" htmlFor="file">
                                    {
                                        preview ? (
                                            <div className='grid grid-cols-2 w-full'>
                                                {
                                                    preview.map((item, index) => {
                                                        return (
                                                            item.type.startsWith('image') ?
                                                                <img key={index} src={URL.createObjectURL(item)} alt="image" className='w-full h-20' /> :
                                                                item.type.startsWith('video') ?
                                                                    <video controls key={index} src={URL.createObjectURL(item)} className='w-full h-20' /> :
                                                                    item.type.startsWith('audio') ?
                                                                        <audio key={index} controls src={URL.createObjectURL(item)} className='w-full h-20' /> :
                                                                        <iframe key={index} src={URL.createObjectURL(item)} className='w-full h-20'></iframe>
                                                        )
                                                    })
                                                }

                                            </div>
                                        ) : (
                                            <div>
                                                <div className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-lg p-6 hover:border-blue-500 transition cursor-pointer">
                                                    <FaCloudUploadAlt className="text-4xl text-blue-500 mb-2" />
                                                    <p className="text-gray-600 font-medium">
                                                        Click to upload or drag & drop
                                                    </p>
                                                    <p className="text-gray-400 text-sm">PDF, PNG, JPG (max 5MB)</p>

                                                </div>
                                            </div>
                                        )
                                    }


                                </label>
                                <input
                                    onChange={handlechage}
                                    name='file'
                                    multiple
                                    id="file"
                                    type="file"
                                    className="hidden" />
                            </div>

                            {/* Submit button */}
                            <button
                                type="submit"
                                onClick={handlesubmit}
                                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-md transition duration-200"
                            >
                                Submit
                            </button>
                        </form>
                        {/* End of form */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact_Us
