import React, { useState, useEffect } from "react";

const AboutPage = () => {
  const images = [
    "../src/assets/MeandSamiha.jpg",
    "../src/assets/Meandtheboys.jpg",
    "../src/assets/Mehiking.jpg",
    "../src/assets/Mewithmystar.jpg",
    "../src/assets/MeTandAndrew.JPG"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [show, setShow] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setShow(false);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        setShow(true); 
      }, 2750); 
    }, 5000); 

    return () => clearInterval(intervalId);
  }, [images.length]);

  return (
    <>
      <h1>About Me</h1>
      <h2>I am a Fullstack Developer with a passion for creating systems and solving problems</h2>
      <div className="image-slideshow-container">
        <img
          id="imageArray"
          src={images[currentIndex]}
          alt="Slideshow of me and my experiences"
          className={show ? "show" : ""}
        />
      </div>
      <section className="infoCard">
        <h3>
          A Small Town Midwestener Looking To Make An Impact
        </h3>
        <p>
          Ever since I was young, I've known that I had a passion for solving problems and learning new things. Coming from a hardworking family, my mom and dad taught me that if you want something, you have to work for it. From the jump I've known that if you work hard for the things you want in life, you'll be able to succeed and chase your dreams! I started coding as a side interest in 2022 (Although this was not my first experience as I had taken some coding classes in my undergrad years) and fell in love with programming! Solving problems, creating algorythms, and designing applications make me so happy!
        </p>
        <h3>
          Education
        </h3>
        <p>
          I obtained my bachelors degree from Michigan State University (Go Green!) where I majored in Media and Information. During my undergrad, I learned valuable skills related to marketing, coding, and media production. These skills have brought me a lot of great opportunities over the years and I am excited to continue using those skills!
          <br />
          <br />
          I have also completed certification in coding with The University of Michigan College of Engineering (I guess I have to say Go Blue too huh 😅) where I furthered my education by learning more comprehensive skills pertaining to full stack development. Getting to work alongside others during this cohort also gave me valuable experience working within a team agile/scrum enviornment!
        </p>
        <img src="../src/assets/Cert.jpg" alt="My certification" id="Cert"/>
        <h3>
          Skills
        </h3>
        <ul className="list-container">
        <li className="list-item">JavaScript</li>
        <li className="list-item">HTML</li>
        <li className="list-item">CSS</li>
        <li className="list-item">React/React Native</li>
        <li className="list-item">PostgreSQL/SQL</li>
        <li className="list-item">Prisma.io</li>
        <li className="list-item">Expo Go</li>
        <li className="list-item">Express.js</li>
        <li className="list-item">Node.js</li>
        <li className="list-item">Fullstack Development</li>
        <li className="list-item">Project Leading</li>
        <li className="list-item">Github Projects</li>
        <li className="list-item">Management</li>
        <li className="list-item">Graphic Design</li>
        <li className="list-item">Adobe Photoshop</li>
        <li className="list-item">Adobe Premiere</li>
        <li className="list-item">Social Media Marketing</li>
        <li className="list-item">Canva</li>
        </ul>
        <h3>
        Hobbies
        </h3>
        <p>
          In my spare time I love learning new things, golfing, bowling, hiking, and exercising! I started golfing and bowling about three years ago and now do them both quite often! I find they are very fun activities to do with friends and help stay in touch with others! I also love spending time with my friends and family as well. I am a huge sports fan who roots for all things Detroit/MSU.
        </p>
      </section>

    </>
  );
};

export default AboutPage;
