// import { useState, useEffect } from "react";
// import Alert from "./Alert";

// export default function Contact() {
//   const [isFormSubmitted, setIsFormSubmitted] = useState(false);
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [submitMessage, setSubmitMessage] = useState("");

//   // This function is for the Alert component's close button
//   function handleAlertClose() {
//     setIsFormSubmitted(false);
//     setSubmitMessage(""); // Clear message on close
//   }

//   // This effect automatically hides the alert after 4 seconds
//   useEffect(() => {
//     if (isFormSubmitted) {
//       const timer = setTimeout(() => {
//         handleAlertClose();
//       }, 4000);

//       // Clear the timer if the component unmounts or the alert is closed manually
//       return () => clearTimeout(timer);
//     }
//   }, [isFormSubmitted]);

//   // This function handles the form submission
//   async function handleSubmit(event) {
//     // 1. Prevent the default form redirect
//     event.preventDefault();
//     setIsSubmitting(true);
//     setSubmitMessage(""); // Clear previous messages

//     // 2. Get form data
//     const formData = new FormData(event.target);
//     const object = {};
//     formData.forEach((value, key) => {
//       object[key] = value;
//     });

//     // 3. Add your web3forms access key
//     object.access_key = "ace84820-e093-408f-80ba-bddc64320f3c";

//     const json = JSON.stringify(object);

//     // 4. Send the data using fetch
//     try {
//       const response = await fetch("https://api.web3forms.com/submit", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Accept: "application/json",
//         },
//         body: json,
//       });

//       const result = await response.json();

//       // 5. Handle the response
//       if (result.success) {
//         setIsFormSubmitted(true);
//         setSubmitMessage("Success! Your message has been sent.");
//         event.target.reset(); // Clear the form fields
//       } else {
//         setIsFormSubmitted(true);
//         setSubmitMessage(
//           result.message || "An error occurred. Please try again."
//         );
//       }
//     } catch (error) {
//       console.error("Error submitting form:", error);
//       setIsFormSubmitted(true);
//       setSubmitMessage("A network error occurred. Please try again later.");
//     } finally {
//       setIsSubmitting(false);
//     }
//   }

//   return (
//     <section id="contact" className="contact sec-pad">
//       <div className="contact-section">
//         <div className="heading-sec">
//           <h2 className="heading-sec__main">Contact</h2>
//           <p className="heading-sec__sub p">
//             Feel free to Contact me and I will get back to you as soon as
//             possible
//           </p>
//           <div className="contact__cta">
//             <a
//               href="mailto:pullurinagasandeep@gmail.com"
//               className="button button--med"
//             >
//               mail me
//             </a>
//           </div>
//         </div>
//         <div className="contact-form">
//           {/* Conditionally render the Alert component.
//             We pass the message and the close handler.
//             The `success` prop helps style the alert (see Alert.jsx)
//           */}
//           {isFormSubmitted && submitMessage && (
//             <Alert
//               onclick={handleAlertClose}
//               message={submitMessage}
//               success={submitMessage.includes("Success")}
//             />
//           )}

//           {/* Remove the 'action' and 'method' attributes
//             and use the 'onSubmit' event handler instead.
//           */}
//           <form onSubmit={handleSubmit}>
//             {/* The access_key is now sent in the handleSubmit function,
//               so we can remove the hidden input.
//             */}
//             <h3>Contact form</h3>
//             <label htmlFor="name">Name</label>
//             <input
//               type="text"
//               id="name"
//               name="name"
//               placeholder="Your name.."
//               required
//               disabled={isSubmitting}
//             />
//             <label htmlFor="email">Email</label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               placeholder="Your email.."
//               required
//               disabled={isSubmitting}
//             />
//             <label htmlFor="message">Message</label>
//             <textarea
//               id="message"
//               name="message"
//               rows="8"
//               placeholder="Write some message.."
//               required
//               disabled={isSubmitting}
//             ></textarea>
//             <input
//               type="submit"
//               className="button button--med"
//               value={isSubmitting ? "Sending..." : "Send msg"}
//               id="form-submit"
//               disabled={isSubmitting}
//             />
//           </form>
//         </div>
//       </div>
//     </section>
//   );
// }

import { useState, useEffect } from "react";
import Alert from "./Alert";

// It is best practice to store keys in an .env file,
// but for now, we define it as a constant here.
const WEB3FORMS_KEY = "ace84820-e093-408f-80ba-bddc64320f3c";

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState(null);

  const handleAlertClose = () => {
    setIsSubmitted(false);
    setMessage(null);
  };

  // Auto-hide alert after 4 seconds
  useEffect(() => {
    if (isSubmitted) {
      const timer = setTimeout(handleAlertClose, 4000);
      return () => clearTimeout(timer);
    }
  }, [isSubmitted]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setMessage(null);

    // 1. Modern way to extract form data
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());

    // 2. Add key and stringify
    const json = JSON.stringify({ ...data, access_key: WEB3FORMS_KEY });

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });

      const result = await response.json();

      if (result.success) {
        setIsSubmitted(true);
        setMessage("Success! Your message has been sent.");
        event.target.reset();
      } else {
        throw new Error(result.message || "Submission failed");
      }
    } catch (error) {
      setIsSubmitted(true);
      setMessage(error.message || "A network error occurred.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="contact sec-pad">
      <div className="contact-section">
        <div className="heading-sec">
          <h2 className="heading-sec__main">Contact</h2>
          <p className="heading-sec__sub p">
            Feel free to Contact me and I will get back to you as soon as
            possible
          </p>
          <div className="contact__cta">
            <a
              href="mailto:pullurinagasandeep@gmail.com"
              className="button button--med"
            >
              mail me
            </a>
          </div>
        </div>

        <div className="contact-form">
          {isSubmitted && message && (
            <Alert
              onclick={handleAlertClose}
              message={message}
              success={message.includes("Success")}
            />
          )}

          <form onSubmit={handleSubmit}>
            <h3>Contact form</h3>

            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your name.."
              required
              disabled={isSubmitting}
            />

            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your email.."
              required
              disabled={isSubmitting}
            />

            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="8"
              placeholder="Write some message.."
              required
              disabled={isSubmitting}
            ></textarea>

            <input
              type="submit"
              className="button button--med"
              value={isSubmitting ? "Sending..." : "Send msg"}
              id="form-submit"
              disabled={isSubmitting}
            />
          </form>
        </div>
      </div>
    </section>
  );
}
