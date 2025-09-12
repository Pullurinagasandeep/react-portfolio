export default function Hero() {
  return (
    <section id="hero" className="home-hero">
      <div className="home-hero__content">
        <h1 className="hero__name"> Hey, I'm Naga Sandeep</h1>
        <div className="hero__info">
          <p className="hero__sub">
            A Result-Oriented Web Developer building and managing Websites and
            Web Applications that leads to the success of the overall product
          </p>
        </div>

        <div className="hero__cta">
          <a href="#projects" className="button">
            Projects
          </a>
        </div>
      </div>
      <div className="home-hero__mouse-scroll-cont">
        <div className="mouse"></div>
      </div>
    </section>
  );
}
