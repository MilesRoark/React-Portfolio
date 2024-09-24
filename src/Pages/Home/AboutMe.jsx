export default function AboutMe() {
  return (
    <section id="AboutMe" className="about--section">
      <div className="about--section--img">
        <img src="./img/about-me.png" alt="About Me" />
      </div>
      <div className="hero--section--content--box about--section--box">
        <div className="hero--section--content">
          <p className="section--title">About</p>
          <h1 className="skills--section--heading">About Me</h1>
          <p className="hero--section-description">
            I've been coding for about a year now. It all started after I
            received my google IT Support Certificate. I was looking through the
            many resources provided to us after the program ended, when I
            stumbled a youtube video. It was about all the ways to start your
            coding journey without paying a dime.
          </p>
          <p className="hero--section-description">
            There were three options. The Odin project, The Harvard CS50 and
            freeCodeCamp. I took a chance and decided to start with
            freeCodeCamp. It's been a great decision, as I've learnt the basic
            front-End stuff. I've gotten the responsive web-design cert. and I'm
            currently working on getting the Javascript and Data Structures
            Certification.
          </p>
        </div>
      </div>
    </section>
  );
}
