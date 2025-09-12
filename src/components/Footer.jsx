export default function Footer() {
  return (
    <footer className="footer ">
      <div className="footer-container">
        <div className="foot-info">
          <div className="author">
            <h3 className="author__heading">NAGA SANDEEP</h3>
            <p className="author__sub">
              A Frontend focused Web Developer building the Frontend of Websites
              and Web Applications that leads to the success of the overall
              product
            </p>
          </div>
          <div className="social">
            <h3 className="social__heading">SOCIAL</h3>
            <div className="social__links">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/pulluri-naga-sandeep"
              >
                <img
                  className="social__image"
                  src="linkedin-ico.png"
                  alt="icon"
                />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/Pullurinagasandeep"
              >
                <img
                  className="social__image"
                  src="github-ico.png"
                  alt="icon"
                />
              </a>

              <a
                target="_blank"
                rel="noreferrer"
                href="https://youtube.com/@sandyyt2908"
              >
                <img className="social__image" src="yt-ico.png" alt="icon" />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.instagram.com/p.sandeep._.28"
              >
                <img className="social__image" src="insta-ico.png" alt="icon" />
              </a>
            </div>
          </div>
        </div>
        <div className="copywrite">
          <p>
            © Copyright 2025. Made by
            <span className="underline">Naga Sandeep</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
