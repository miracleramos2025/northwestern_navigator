import React from 'react';
import movie1 from '../assets/images/movie_1.jpeg';
import movie2 from '../assets/images/movie_2.jpeg';
import movie3 from '../assets/images/movie_3.jpeg';
import music1 from '../assets/images/music_1.jpeg';
import music2 from '../assets/images/music_2.png';
import music3 from '../assets/images/music_3.jpeg';

const MusicMoviesPage = () => (
  <div>
    <h2>Christmas Music & Movies</h2>
    <div className="nav-links">
      <a href="#movies">Movies</a>
      <a href="#music">Music</a>
    </div>
    <div id="movies">
      <div className="media-item">
        <img src={movie1} alt="Fred Claus Movie Poster" />
        <div className="media-text">
          <h3>Fred Claus</h3>
          <p>Of the two Claus brothers, Fred (Vince Vaughn) is the troublemaker and polar opposite of his saintly sibling, Nicholas (Paul Giamatti). When Fred's criminal ways finally land him in big trouble, Nicholas bails him out and brings him to the North Pole to work off the debt by making toys.</p>
          <p>Watch <a href="https://www.amazon.com/Fred-Claus-Vince-Vaughn/dp/B001M55MG4" target="_blank" rel="noopener noreferrer">Here</a></p>
        </div>
      </div>
      <div className="media-item">
        <img src={movie2} alt="Elf Movie Poster" />
        <div className="media-text">
          <h3>Elf</h3>
          <p>Buddy (Will Ferrell) was accidentally transported to the North Pole as a toddler and raised to adulthood among Santa's elves. Unable to shake the feeling that he doesn't fit in, the adult Buddy travels to New York, in full elf uniform, in search of his real father.</p>
          <p>Watch <a href="https://www.amazon.com/Elf-Will-Ferrell/dp/B09PQ88296" target="_blank" rel="noopener noreferrer">Here</a></p>
        </div>
      </div>
      <div className="media-item">
        <img src={movie3} alt="Home Alone Movie Poster" />
        <div className="media-text">
          <h3>Home Alone</h3>
          <p>The original comedy classic! Little Kevin gets left behind when the family leaves for an overseas Christmas vacation, and finds himself outwitting a pair of bumbling burglars in this slapstick riot!</p>
          <p>Watch <a href="https://www.amazon.com/gp/video/detail/B00AGE6856/ref=atv_dp_share_cu_r" target="_blank" rel="noopener noreferrer">Here</a></p>
        </div>
      </div>
    </div>
    <div id="music">
      <div className="media-item">
        <img src={music1} alt="All I Want for Christmas Is You Album Cover" />
        <div className="media-text">
          <h3>All I Want for Christmas Is You</h3>
          <p>By Mariah Carey</p>
          <p>Listen <a href="https://open.spotify.com/track/0bYg9bo50gSsH3LtXe2SQn?si=5e7588a23f184108" target="_blank" rel="noopener noreferrer">Here</a></p>
        </div>
      </div>
      <div className="media-item">
        <img src={music2} alt="Christmas (Baby Please Come Home) Album Cover" />
        <div className="media-text">
          <h3>Christmas (Baby Please Come Home)</h3>
          <p>By Michael Bublé</p>
          <p>Listen <a href="https://open.spotify.com/track/3grVxsPu2nUtbXzdlT59PN?si=334dc60bdcdc4fdb" target="_blank" rel="noopener noreferrer">Here</a></p>
        </div>
      </div>
      <div className="media-item">
        <img src={music3} alt="Mistletoe Album Cover" />
        <div className="media-text">
          <h3>Mistletoe</h3>
          <p>By Justin Bieber</p>
          <p>Listen <a href="https://open.spotify.com/track/7xapw9Oy21WpfEcib2ErSA?si=fa02b027c1ce4048" target="_blank" rel="noopener noreferrer">Here</a></p>
        </div>
      </div>
    </div>
  </div>
);

export default MusicMoviesPage;
