export default function About() {
  return (
    <section id="about" className="about sec-pad">
      <div className="about-section">
        <div className="heading-sec">
          <h2 className="heading-sec__main">About me</h2>
          <p className="heading-sec__sub p">
            Here you will find more information about me, what I do, and my
            current skills mostly in terms of programming and technology
          </p>
        </div>
        <div className="about-content">
          <div className="about-content__main">
            <h3 className="about-content__heading">Get to know me!</h3>
            <div className="about-content__para">
              <p className="about-content__sub p">
                I'm a{" "}
                <span className="p_heighlight">
                  Frontend Focused Web Developer
                </span>{" "}
                building and managing the Front-end of Websites and Web
                Applications that leads to the success of the overall product.
                Check out some of my work in the
                <span className="p_heighlight">Projects</span> section.
              </p>
              <p className="about-content__sub p">
                I also like sharing content related to the stuff that I have
                learned over the years in{" "}
                <span className="p_heighlight">Web Development</span> so it can
                help other people of the Dev Community. Feel free to Connect or
                Follow me on my Linkedin and Instagram where I post useful
                content related to Web Development and Programming
              </p>
              <p className="about-content__sub p">
                I'm open to <span className="p_heighlight">Job</span>{" "}
                opportunities where I can contribute, learn and grow. If you
                have a good opportunity that matches my skills and experience
                then don't hesitate to{" "}
                <span className="p_heighlight"> contact</span> me.
              </p>
            </div>

            <div>
              <a href="#contact" className="button button--med">
                Contact
              </a>
            </div>
          </div>
          <div className="about-content__myskills">
            <h3 className="about-content__heading">My Skills</h3>
            <div className="about-content__skills">
              <div className="about-content__skill">HTML</div>
              <div className="about-content__skill">CSS</div>
              <div className="about-content__skill">Javascript</div>
              <div className="about-content__skill">Github</div>
              <div className="about-content__skill">React</div>
              <div className="about-content__skill">SEO</div>
              <div className="about-content__skill">SQL</div>
              <div className="about-content__skill">Web Development</div>
              <div className="about-content__skill">C++</div>
              <div className="about-content__skill">C</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
