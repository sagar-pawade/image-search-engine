import React from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
import ImageList from "./components/ImageList";
import axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY;

class App extends React.Component {
  state = { images: [] };

  onSearchSubmit = async (term) => {
    const response = await axios.get(
      `https://api.unsplash.com/search/photos?page=1&query=${term}&client_id=${API_KEY}&per_page=30`,
      {
        params: { query: term },
        headers: {
          Authorization: `Client-ID ${API_KEY}`,
        },
      }
    );

    this.setState({ images: response.data.results });
  };

  render() {
    return (
      <div className="container">
        <SearchBar userSubmit={this.onSearchSubmit} />
        <span>{this.state.images.length} images has been found</span>
        <ImageList className="photos" foundImages={this.state.images} />
      </div>
    );
  }
}

export default App;
