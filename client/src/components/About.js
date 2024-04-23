import React from "react";
import "./AboutUs.css";

const AboutUsPage = () => {
  return (
    <div className="about-us">
      <h1>About Book Reviews</h1>
      <p>
        Welcome to BookReviews, your ultimate destination for all things
        literature! We are a passionate community of book lovers dedicated to
        celebrating the written word and fostering a love for reading.
      </p>

      <h2>Our Mission</h2>
      <p>
        At BookReviews, our mission is to create a vibrant and inclusive
        platform where readers can discover new books, share their thoughts, and
        connect with like-minded individuals. We believe that books have the
        power to transport us to different worlds, challenge our perspectives,
        and enrich our lives in countless ways.
      </p>

      <h2>Our Story</h2>
      <p>
        BookReviews was founded in 2018 by a group of avid readers who
        recognized the need for a comprehensive online resource that catered to
        book enthusiasts of all genres and interests. What started as a modest
        book blog has now blossomed into a thriving community with thousands of
        members from around the world.
      </p>

      <h2>Our Team</h2>
      <p>
        Our team is comprised of passionate individuals who share a deep love
        for literature. From seasoned writers and editors to avid readers and
        book club organizers, we come from diverse backgrounds but are united by
        our commitment to fostering a vibrant literary community.
      </p>

      <h3>Meet Our Founders</h3>
      <div className="founder">
        <img src="./profile-2.jpg" alt="Founder 1" />
        <div>
          <h4>Jane Doe</h4>
          <p>
            Jane is an avid reader and lifelong learner who has a passion for
            discovering new worlds through books. She founded BookReviews with
            the goal of creating a welcoming space for book lovers to connect
            and share their literary discoveries.
          </p>
        </div>
      </div>
      <div className="founder">
        <img src="images.jpg" alt="Founder 2" />
        <div>
          <h4>John Smith</h4>
          <p>
            John is a former English teacher and a passionate advocate for
            literature education. He brings his expertise and love for books to
            BookReviews, ensuring that our platform provides valuable resources
            for readers of all ages and backgrounds.
          </p>
        </div>
      </div>

      <h2>Our Community</h2>
      <p>
        At the heart of BookReviews is our vibrant community of readers. From
        book clubs and reading challenges to lively discussions and author
        interviews, our platform offers numerous opportunities for members to
        engage with one another and explore their shared love for literature.
      </p>

      <h2>Join Us</h2>
      <p>
        Whether you're a voracious reader, a casual bookworm, or simply someone
        who appreciates the power of words, we invite you to join our community.
        Explore our vast collection of book reviews, participate in discussions,
        and discover your next literary adventure. Together, we can celebrate
        the magic of books and create lasting connections through the shared
        experience of reading.
      </p>
    </div>
  );
};

export default AboutUsPage;
