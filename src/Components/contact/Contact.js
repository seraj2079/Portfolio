import React, { useState } from 'react';
import Title from '../layout/Title';
import ContactLeft from './ContactLeft';


const initData = {
  Name:'',
  number: "",
  email: "",
  subject: "",
  message: ""
}


const Contact = () => {

  const [state,setState] =useState(initData)

 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
}

// console.log("===============",state)


  const getdata = (e) =>{
    const {Name, number, email, subject, message} = state;
     e.preventDefault();
     const options ={
      method: 'POST',
      Headers: {
        'Content-Type' : 'aplication/json'
      },
      body: JSON.stringify({
        Name, number, email, subject, message
      })
     }
     const res = fetch(
      'https://portfolio-9c4f4-default-rtdb.firebaseio.com/UserData.json',
      options
      )
      if(res)
      {
        alert("Message Send")
        window. location. reload();
      }
      else
      {
        alert("Error Occured")
      }
  }
  
  return (
    <section id="contact" className="w-full py-20 border-b-[1px] border-b-black">
      <div className="flex justify-center items-center text-center">
        <Title title="CONTACT" des="Contact With Me" />
      </div>
      <div className="w-full">
        <div className="w-full md:flex justify-between gap-8">
          <ContactLeft />
          <div className="w-full md:w-[60%] py-8 bg-gradient-to-r from-[#1e2024] to-[#23272b] flex flex-col gap-8 p-8 rounded-lg shadow-shadowOne">
            <form className="w-full flex flex-col gap-8">
              <div className="w-full md:flex md:gap-10 md:items-center">
                <div className="w-full flex flex-col gap-4">
                  <p className="text-sm text-gray-400 uppercase tracking-wide">
                    Your name
                  </p>
                  <input
                    value={state.Name}
                    name='Name'
                    className='outline-designColor contactInput'
                    type="text"
                    required
                    onChange={handleChange}
                    
                  />
                </div>
                <div className="w-full flex flex-col gap-4">
                  <p className="text-sm text-gray-400 uppercase tracking-wide">
                    Phone Number
                  </p>
                  <input
                    value={state.number}
                    name='number'
                    className='outline-designColor contactInput'
                    type="text"
                    required
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-sm text-gray-400 uppercase tracking-wide">
                  Email
                </p>
                <input
                  value={state.email}
                  name='email'
                  className='outline-designColor contactInput'
                  type="email"
                  required
                  onChange={handleChange}
                />
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-sm text-gray-400 uppercase tracking-wide">
                  Subject
                </p>
                <input
                name='subject'
                  className='outline-designColor contactInput'
                  value={state.subject}
                  type="text"
                  required
                  onChange={handleChange}
                />
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-sm text-gray-400 uppercase tracking-wide">
                  Message
                </p>
                <textarea
                name='message'
                  className='outline-designColor contactTextArea'
                  value={state.message}
                  required
                  onChange={handleChange}
                ></textarea>
              </div>
              <div className="w-full">
                <button
                onClick={getdata}
                  className="w-full h-12 bg-[#141518] rounded-lg text-base text-gray-400 tracking-wider uppercase hover:text-white duration-300 hover:border-[1px] hover:border-designColor border-transparent"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
