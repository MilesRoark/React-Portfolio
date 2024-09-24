export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section-content">
          <p className="section--title">Hey, I'm Miles</p>
          <h1 className="hero--section--title">
            <span className="hero--section--title--color">Hobbyist</span>
            {""}
            <br />
            Coder
          </h1>
          <p className="hero--section-description">
            Learning to code, one project at a time.
            <br />
            Discovered freeCodeCamp about a year ago. I got through the
            Responsive Web Design Cert. and have been slowly re-enforcing what I
            learned by doing these tutorial projects to keep using the skills
            I've acquired so far, and to learn some new ones.
          </p>
        </div>
        <a
          href="https://www.linkedin.com/in/babatunjiafolayan/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="btn btn-primary">Get In Touch</button>
        </a>
      </div>
      <div className="hero--section--img">
        <img
          src="./img/hero_img.png"
          alt="Hero Section"
          className="front--pic"
        />
      </div>
    </section>
  );
}
