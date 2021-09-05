import "./styles.css";
import { useState } from "react";

var musicDB = {
  Metal: [
    { name: "The Stage", rating: "9/10" },
    { name: "Acid Rain", rating: "8.5/10" },
    { name: "Numb", rating: "8/10" }
  ],

  Rap: [
    { name: "Rap God", rating: "8.5/10" },
    { name: "Not Afraid", rating: "9/10" },
    { name: "Remember This", rating: "8/10" }
  ],
  Pop: [
    { name: "Save Your Tears", rating: "9/10" },
    { name: "Bad Habits", rating: "8.5/10" },
    { name: "Closer", rating: "8/10" }
  ]
};

export default function App() {
  var [selectedGenre, setselectedGenre] = useState("Metal");
  function changeHandler(genre) {
    setselectedGenre(genre);
  }

  return (
    <div className="App">
      <h1> Music Recommendations</h1>
      <p style={{ fontSize: "smaller" }}>
        {" "}
        Checkout my favorite songs. Select a genre to get started{" "}
      </p>

      <div>
        {Object.keys(musicDB).map((genre) => (
          <button class="genresbtn" onClick={() => changeHandler(genre)}>
            {genre}
          </button>
        ))}
      </div>
      <hr />

      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {musicDB[selectedGenre].map((song) => (
            <li class="songs" key={song.name}>
              {" "}
              <div style={{ fontSize: "larger" }}> {song.name} </div>
              <div style={{ fontSize: "smaller" }}> {song.rating} </div>
            </li>
          ))}
        </ul>
      </div> 
    </div>
  );
}
