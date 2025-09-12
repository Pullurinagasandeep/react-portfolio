export default function Contact() {
  function onSubmit() {
    console.log("form submitted");
  }

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
          <form action={onSubmit}>
            <h3>Contact form</h3>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your name.."
              required
            />
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your email.."
              required
            />
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="8"
              placeholder="Write some message.."
              required
            ></textarea>
            <input
              type="submit"
              className="button button--med"
              value="Send msg"
              id="form-submit"
            />
          </form>
        </div>
      </div>
    </section>
  );
}
