// 'use client';
// import React, { useState } from 'react';
// import { FaGamepad, FaEnvelope } from 'react-icons/fa'; // Icons for the tracker and form

// const PlayGameWithMe = () => {
//   const [formData, setFormData] = useState({
//     email: '',
//     message: '',
//   });

//   const [formStatus, setFormStatus] = useState('');

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Here you can add form submission logic (e.g., email sending via API)
//     setFormStatus('Your invite has been sent! I’ll get back to you soon.');
//     setFormData({
//       email: '',
//       message: '',
//     });
//   };

//   return (
//     <div className='relative px-8 lg:px-12 w-full max-w-5xl container'>
//       <div className='lg:gap-8 space-y-5 lg:grid lg:grid-cols-2 mx-auto pt-12 lg:pt-28 max-w-2xl lg:max-w-full'>
//         {/* First Column: Tracker Link and Icons */}
//         <div className='space-y-5'>
//           <h2 className='font-semibold text-3xl text-zinc-800 dark:text-zinc-100'>
//             Play Dream League Soccer with Me
//           </h2>
//           <p className='text-zinc-600 dark:text-zinc-300'>
//             Want to track my progress or challenge me to a game? Follow the link
//             below and let's play!
//           </p>
//           <div className='flex items-center space-x-4'>
//             <FaGamepad className='w-8 h-8 text-teal-500' />
//             <a
//               href='https://tracker.ftgames.com/?id=k48rjfrr'
//               target='_blank'
//               rel='noopener noreferrer'
//               className='inline-block bg-teal-500 hover:bg-teal-600 px-4 py-2 rounded-lg text-white transition'>
//               Track My Profile
//             </a>
//           </div>
//         </div>

//         {/* Second Column: Invite Form */}
//         <div className='space-y-4'>
//           <form
//             onSubmit={handleSubmit}
//             className='bg-white dark:bg-zinc-800 shadow-lg p-6 rounded-lg'>
//             <h3 className='mb-4 font-semibold text-xl text-zinc-800 dark:text-zinc-100'>
//               <FaEnvelope className='inline-block mr-2' />
//               Send me an Invite
//             </h3>

//             <div className='mb-4'>
//               <label
//                 htmlFor='email'
//                 className='block font-semibold text-zinc-800 dark:text-zinc-100'>
//                 Your Email
//               </label>
//               <input
//                 type='email'
//                 id='email'
//                 name='email'
//                 value={formData.email}
//                 onChange={handleChange}
//                 required
//                 className='border-zinc-300 dark:border-zinc-700 bg-zinc-100 dark:bg-zinc-900 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-teal-500 w-full text-zinc-800 dark:text-zinc-100 focus:outline-none'
//               />
//             </div>

//             <div className='mb-4'>
//               <label
//                 htmlFor='message'
//                 className='block font-semibold text-zinc-800 dark:text-zinc-100'>
//                 Message
//               </label>
//               <textarea
//                 id='message'
//                 name='message'
//                 value={formData.message}
//                 onChange={handleChange}
//                 rows='2'
//                 required
//                 className='border-zinc-300 dark:border-zinc-700 bg-zinc-100 dark:bg-zinc-900 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-teal-500 w-full text-zinc-800 dark:text-zinc-100 focus:outline-none'></textarea>
//             </div>

//             <div className='text-center'>
//               <button
//                 type='submit'
//                 className='bg-teal-500 hover:bg-teal-600 px-4 py-2 rounded-lg w-full text-white transition'>
//                 Send Invite
//               </button>
//             </div>

//             {/* Submission Status */}
//             {formStatus && (
//               <p className='mt-4 text-center text-teal-500'>{formStatus}</p>
//             )}
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PlayGameWithMe;
