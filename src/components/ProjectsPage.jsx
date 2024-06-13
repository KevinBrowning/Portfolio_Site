import React, { useState } from "react";

const ProjectsPage = () => {
  const videos = [
    {
      title: "Clubhouse",
      src: "../src/assets/ClubhouseAppPresentation.mp4",
      description:
        "Clubhouse is an interactive mobile application that utilizes React Native. It allows users to sign up for an account, navigate the application, create posts, edit profile details, and start conversations with other users. As project leader, I had a ton of fun working on this project and leading its direction!",
    },
    {
      title: "VHS Depot",
      src: "../src/assets/2402-VHS-Depot.mp4",
      description:
        "VHS Depot is an all-in-one e-commerce web application centered around users being able to create an account, view inventory of movies, see movie details, and check out movies from the site. Looking for that retro BlockBuster feel? VHS Depot's got you covered!",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextVideo = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % videos.length);
  };

  const prevVideo = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + videos.length) % videos.length);
  };

  return (
    <div>
      <h1>Take a look at some of my projects!</h1>
      <div className="carousel-container">
        <button onClick={prevVideo} className="carousel-btn prev-btn">
          &lt;
        </button>
        <section key={currentIndex} className="infoCard">
          <h2>{videos[currentIndex].title}</h2>
          <video controls className="video">
            <source src={videos[currentIndex].src} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <p>{videos[currentIndex].description}</p>
        </section>
        <button onClick={nextVideo} className="carousel-btn next-btn">
          &gt;
        </button>
      </div>
    </div>
  );
};

export default ProjectsPage;
