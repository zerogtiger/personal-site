'use client';

import emailjs from "@emailjs/browser";
import { useState, useRef } from "react";

export default function ContactForm() {

  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [validMessage, setValidMessage] = useState(true);
  const [validEmail, setValidEmail] = useState(true);
  const [failed, setFailed] = useState(false);

  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    let invalid = false;

    e.preventDefault();
    setLoading(true);
    setFailed(false);

    if (form.message.trim().toLowerCase().length === 0) {
      setValidMessage(false);
      setLoading(false);
      invalid = true;
    } else {
      setValidMessage(true);
    }
    if (!form.email.trim().toLowerCase().match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
      setValidEmail(false);
      setLoading(false);
      invalid = true;
    } else {
      setValidEmail(true);
    }
    if (invalid)
      return;
    console.log(validMessage);
    console.log(validEmail);
    console.log('email sent');
    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: process.env.NEXT_PUBLIC_TO_NAME,
          from_email: form.email,
          to_email: process.env.NEXT_PUBLIC_DESTINATIOIN_EMAIL,
          message: form.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_API_PUBLIC_KEY,
      )
      .then(
        (response) => {
          setLoading(false);
          setFailed(false);
          setSent(true);

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          setFailed(true);
          console.error(error);
        }
      );
  };
  return (
    <div className="w-full border-2 rounded-[0.5rem] border-fg px-4 py-4">
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className='w-full'
      >
        <label className='-border flex flex-col mb-4'>
          <span className='text-fg text-sm sm:text-l mb-4'>Message</span>
          <textarea
            rows={7}
            name='message'
            value={form.message}
            onChange={handleChange}
            placeholder="Message"
            className='bg-bg1 py-4 px-6 text-sm sm:text placeholder:text-gray text-fg rounded-[0.5rem] outline-none border-none'
          />
        </label>
        <label className='flex flex-col mb-4'>
          <span className='text-fg text-sm sm:text-l mb-4'>Your name</span>
          <input
            type='text'
            name='name'
            value={form.name}
            onChange={handleChange}
            placeholder="Name"
            className='bg-bg1 py-4 px-6 text-sm sm:text placeholder:text-gray text-fg rounded-[0.5rem] outline-none border-none'
          />
        </label>
        <label className='flex flex-col mb-6'>
          <span className='text-fg text-sm sm:text-l mb-4'>Email address</span>
          <input
            type='email'
            name='email'
            value={form.email}
            onChange={handleChange}
            placeholder="address@email.com"
            className='bg-bg1 py-4 px-6 text-sm sm:text placeholder:text-gray text-fg rounded-[0.5rem] outline-none border-none'
          />
        </label>
        <div className="sm:flex">
          <button
            type='submit'
            className='bg-bg2 border-2 py-2 px-8 rounded-[0.5rem] text-sm sm:text  text-center border-fg w-fit text-green font-bold text-l hover:bg-fg hover:text-bg'
          >
            {loading ? "Sending..." : "Send"}
          </button>
          <p className="my-auto px-4 -border text-yellow w-fit ">
            {validMessage && validEmail && !failed
              ? (sent ? 'Message sent, you\'ll likely receive a reply from me in the next 48 hours.' : '')
              : (failed
                ? 'Bruh, something broke. Please try again later or send me a direct email.'
                : ((!validMessage
                  ? 'Please send a non-empty message. '
                  : '') +
                  (!validEmail
                    ? 'Please enter a valid email.'
                    : '')
                )
              )
            }
          </p>
        </div>
      </form >
    </div >
  )
}



// const Contact = () => {
//     const formRef = useRef();
//     const [form, setForm] = useState({
//         name: "",
//         email: "",
//         message: "",
//     });
//
//     const [loading, setLoading] = useState(false);
//
//     const Contact = () => {
//         const formRef = useRef();
//         const [form, setForm] = useState({
//             name: "",
//             email: "",
//             message: "",
//         });
//
//         const [loading, setLoading] = useState(false);
//
//         const handleChange = (e) => {
//             const { target } = e;
//             const { name, value } = target;
//
//             setForm({
//                 ...form,
//                 [name]: value,
//             });
//         };
//
//         const handleSubmit = (e) => {
//             e.preventDefault();
//             setLoading(true);
//
//             emailjs
//                 .send(
//                     import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
//                     import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
//                     {
//                         from_name: form.name,
//                         to_name: "JavaScript Mastery",
//                         from_email: form.email,
//                         to_email: "sujata@jsmastery.pro",
//                         message: form.message,
//                     },
//                     import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
//                 )
//                 .then(
//                     () => {
//                         setLoading(false);
//                         alert("Thank you. I will get back to you as soon as possible.");
//
//                         setForm({
//                             name: "",
//                             email: "",
//                             message: "",
//                         });
//                     },
//                     (error) => {
//                         setLoading(false);
//                         console.error(error);
//
//                         alert("Ahh, something went wrong. Please try again.");
//                     }
//                 );
//         };
//
//         return (
//             <div
//                 className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
//             >
//                 <motion.div
//                     variants={slideIn("left", "tween", 0.2, 1)}
//                     className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
//                 >
//                     <p className={styles.sectionSubText}>Get in touch</p>
//                     <h3 className={styles.sectionHeadText}>Contact.</h3>
//
//                     <form
//                         ref={formRef}
//                         onSubmit={handleSubmit}
//                         className='mt-12 flex flex-col gap-8'
//                     >
//                         <label className='flex flex-col'>
//                             <span className='text-white font-medium mb-4'>Your Name</span>
//                             <input
//                                 type='text'
//                                 name='name'
//                                 value={form.name}
//                                 onChange={handleChange}
//                                 placeholder="What's your good name?"
//                                 className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
//                             />
//                         </label>
//                         <label className='flex flex-col'>
//                             <span className='text-white font-medium mb-4'>Your email</span>
//                             <input
//                                 type='email'
//                                 name='email'
//                                 value={form.email}
//                                 onChange={handleChange}
//                                 placeholder="What's your web address?"
//                                 className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
//                             />
//                         </label>
//                         <label className='flex flex-col'>
//                             <span className='text-white font-medium mb-4'>Your Message</span>
//                             <textarea
//                                 rows={7}
//                                 name='message'
//                                 value={form.message}
//                                 onChange={handleChange}
//                                 placeholder='What you want to say?'
//                                 className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
//                             />
//                         </label>
//
//                         <button
//                             type='submit'
//                             className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
//                         >
//                             {loading ? "Sending..." : "Send"}
//                         </button>
//                     </form>
//                 </motion.div>
//
//                 <motion.div
//                     variants={slideIn("right", "tween", 0.2, 1)}
//                     className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
//                 >
//                     <EarthCanvas />
//                 </motion.div>
//             </div>
//         );
//     };
//

// export default function Contact() {
//   const [{ name, email, message }, setState] = useState(initialState);
//   const [emailInvalid, setEmailInvalid] = useState(false);
//   const [messageInvalid, setMessageInvalid] = useState(false);
//   const [failed, setFailed] = useState(false);
//   const [submitLabel, setSubmitLabel] = useState("Send");
//
//   const handleChange = (e: any) => {
//     const { name, value } = e.target;
//     setState((prevState) => ({ ...prevState, [name]: value }));
//   };
//   const clearState = () => setState({ ...initialState });
//
//   const handleSubmit = (e: any) => {
//     e.preventDefault();
//
//     if (!validateEmail(email)) {
//       setEmailInvalid(true);
//       return;
//     }
//     setEmailInvalid(false);
//     if (message.trim().length === 0) {
//       setMessageInvalid(true);
//       return;
//     }
//     setMessageInvalid(false);
//     setSubmitLabel("Sending...");
//
//     emailjs
//       .sendForm(
//         process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
//         process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
//         e.target,
//         process.env.NEXT_PUBLIC_EMAILJS_USER_ID!
//       )
//       .then((result) => {
//         clearState();
//         setFailed(false);
//         setSubmitLabel("Sent!");
//         console.log(result);
//       })
//       .catch((error) => {
//         setFailed(true);
//         setSubmitLabel("Send");
//         console.log("error:", error);
//       });
//   };
//
//   const validateEmail = (email: string) => {
//     return String(email)
//       .toLowerCase()
//       .match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
//   };
//
//   return (
//     <main
//       id="contact"
//       className="w-screen py-32 grid grid-cols-1 md:grid-cols-2 px-10 md:px-20 lg:px-48 z-0"
//     >
//       <div className="flex flex-col items-start justify-start h-full">
//         <h2
//           className="text-2xl md:text-3xl lg:text-5xl drop-shadow-lg text-white text-center uppercase tracking-[0.3em]"
//           data-aos="fade-right"
//         >
//           Contact
//         </h2>
//         <p
//           className="text-white font-montserrat tracking-[0.05em] text-sm md:text-base my-5 font-normal pr-8"
//           data-aos="fade-right"
//           data-aos-delay={200}
//         >
//           Let&apos;s get in touch! Fill out the form, and I&apos;ll get back to
//           you!
//         </p>
//         <p
//           className="text-white font-montserrat tracking-[0.05em] text-sm md:text-base font-normal"
//           data-aos="fade-right"
//           data-aos-delay={400}
//         >
//           Feel free to contact me about anything!
//         </p>
//         <div className="w-full flex flex-col justify-start items-start">
//           <a
//             href="mailto:rz.ryanzhu@gmail.com"
//             className="text-white font-montserrat tracking-[0.05em] text-sm md:text-base my-3 font-normal"
//             data-aos="fade-right"
//             data-aos-delay={800}
//           >
//             <FaEnvelope className="inline-block mr-4" />
//             rz.ryanzhu@gmail.com
//           </a>
//           <div
//             className="text-white font-montserrat tracking-[0.05em] text-sm md:text-base font-normal"
//             data-aos="fade-right"
//             data-aos-delay={900}
//           >
//             <FaPhoneAlt className="inline-block mr-4" />
//             (437) 776-1039
//           </div>
//         </div>
//       </div>
//       <form
//         onSubmit={handleSubmit}
//         className="gradient-mauve w-full h-full p-5 mt-5"
//         name="form"
//         autoComplete="off"
//         data-aos="fade-left"
//       >
//         <input
//           type="text"
//           id="name"
//           name="name"
//           placeholder="Name"
//           className="w-full h-12 p-5 mb-5 duration-500 ease-in-out focus:outline-none ring-purple-200/10 ring-1 focus:ring-white hover:ring-mauve bg-purple-200/10  placeholder:text-mauve-light text-white"
//           required
//           onChange={handleChange}
//         />
//         <input
//           type="email"
//           id="email"
//           name="email"
//           placeholder="Email"
//           className="w-full h-12 p-5 mb-5 duration-500 ease-in-out focus:outline-none ring-purple-200/10 ring-1 focus:ring-white hover:ring-mauve bg-purple-200/10 placeholder:text-mauve-light text-white"
//           required
//           onChange={handleChange}
//         />
//         <textarea
//           name="message"
//           id="message"
//           placeholder="Message"
//           rows={5}
//           className="w-full h-40 p-5 mb-5 resize-none duration-500 ease-in-out focus:outline-none ring-purple-200/10 ring-1 focus:ring-white hover:ring-mauve bg-purple-200/10 placeholder:text-mauve-light text-white"
//           required
//           onChange={handleChange}
//         />
//         <button
//           type="submit"
//           className={
//             "h-12 px-10 mb-5 duration-500 ease-in-out font-bold font-montserrat tracking-[0.05em] text-base md:text-lg " +
//             (submitLabel === "Sent!"
//               ? "bg-transparent border-2 border-white text-white"
//               : submitLabel === "Sending..."
//               ? "bg-white text-mauve-darker"
//               : "bg-white opacity-70 hover:opacity-100 text-mauve-darker ")
//           }
//           disabled={submitLabel != "Send"}
//         >
//           {submitLabel}
//         </button>
//         <div className="h-6">
//           {emailInvalid && (
//             <p className="text-red-500 text-sm font-semibold">
//               Please enter a valid email address.
//             </p>
//           )}
//           {messageInvalid && (
//             <p className="text-red-500 text-sm font-semibold">
//               Please enter a message.
//             </p>
//           )}
//           {failed && (
//             <p className="text-red-500 text-sm font-semibold">
//               Something went wrong. Please try again.
//             </p>
//           )}
//           {submitLabel === "Sent!" && (
//             <p className="text-white text-sm font-semibold">
//               Looking forward to connecting with you!
//             </p>
//           )}
//         </div>
//       </form>
//     </main>
//   );
// }
