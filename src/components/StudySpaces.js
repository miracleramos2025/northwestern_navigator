import React from 'react';
import image1 from '../assets/images/frances_searle.jpeg';
import image2 from '../assets/images/main_library.jpeg';
import image3 from '../assets/images/deering_library.jpeg';
import image4 from '../assets/images/mudd_library.jpeg';
import image5 from '../assets/images/source.png';

const StudySpaces = () => (
  <div className="study-spaces-page">
    <h2 className="study-title">Study Spaces</h2>

    <div className="study-space">
      <img src={image3} alt="Deering Library" className="study-image left-align" />
      <div className="study-text">
        <h3>Deering Library</h3>
        <p>
          Deering Library at Northwestern is a historic gem, offering a serene and inspiring study atmosphere. With its Gothic architecture, cozy reading rooms, and quiet nooks, it’s a favorite for those seeking a peaceful and aesthetically pleasing environment. The library's rich history and beautiful interior, including stained glass windows and wood-paneled walls, create a unique ambiance that's perfect for focused studying or a quiet escape from the busier parts of campus.
        </p>
        <p>Learn More <a href="https://www.library.northwestern.edu/libraries-collections/deering-library/" target="_blank" rel="noopener noreferrer">Here</a></p>
      </div>
    </div>

    <div className="study-space">
      <img src={image4} alt="Mudd Library" className="study-image right-align" />
      <div className="study-text">
        <h3>Mudd Library</h3>
        <p>
          Mudd Library at Northwestern is a modern and tech-friendly study spot, particularly popular among STEM students. Located on North Campus, it offers spacious, well-lit areas designed for both individual and group study. The library’s advanced facilities, including whiteboards, computer stations, and access to specialized resources, make it ideal for collaborative work and research. Its quiet atmosphere and proximity to other science and engineering buildings make Mudd a convenient and efficient place to study.
        </p>
        <p>Learn More <a href="https://www.library.northwestern.edu/libraries-collections/mudd-library/" target="_blank" rel="noopener noreferrer">Here</a></p>
      </div>
    </div>

    <div className="study-space">
      <img src={image2} alt="University Library" className="study-image left-align" />
      <div className="study-text">
        <h3>University Library (Main Library)</h3>
        <p>
          The University Library at Northwestern is a central hub for students seeking a productive study environment. With its extensive collection of resources, quiet study zones, and vibrant collaborative spaces, the library caters to various study needs. The different floors offer a mix of silent areas for deep focus and more open spaces for group work. Its modern design, coupled with stunning views of Lake Michigan, makes it a popular spot for long study sessions.
        </p>
        <p>Learn More <a href="https://www.library.northwestern.edu/libraries-collections/university-library/" target="_blank" rel="noopener noreferrer">Here</a></p>
      </div>
    </div>

    <div className="study-space">
      <img src={image1} alt="Frances Searle" className="study-image right-align" />
      <div className="study-text">
        <h3>Frances Searle</h3>
        <p>
          Enjoy studying at Frances Searle - Northwestern's school of communication! The building, located near Lake Michigan, provides plenty of natural light and quiet study spaces. It’s a favorite spot for students looking to escape the busier parts of campus, with a mix of modern facilities and comfortable seating areas, making it ideal for both solo and group study sessions.
        </p>
        <p>Learn More <a href="https://maps.northwestern.edu/txt/facility/92" target="_blank" rel="noopener noreferrer">Here</a></p>
      </div>
    </div>

    <div className="study-space">
      <img src={image5} alt="Source in Norris" className="study-image left-align" />
      <div className="study-text">
        <h3>Source in Norris</h3>
        <p>
          Studying at SOURCE in Norris University Center offers a lively and flexible environment for students. As a café-style space, it’s perfect for those who enjoy a more casual, social study setting. With comfortable seating, plenty of natural light, and easy access to food and coffee, SOURCE is a great spot for group work or a relaxed study session between classes. Its central location in Norris makes it a convenient choice for students looking to balance study time with campus activities.
        </p>
        <p>Learn More <a href="https://www.northwestern.edu/norris/" target="_blank" rel="noopener noreferrer">Here</a></p>
      </div>
    </div>
  </div>
);

export default StudySpaces;
