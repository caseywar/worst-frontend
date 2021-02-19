import React, { Component } from 'react'
import request from 'superagent';


export default class App extends Component {
  state = {
    albumData: [],
    query: '',
  }

  componentDidMount = async () => {
    await this.fetchAlbums();
  }

  fetchAlbums = async () => {
    const data = await request.get(`https://cmw-lab06-backend-first.herokuapp.com/albums`);

    this.setState({
      albumData: data.body.results
    })
  }



  render() {
    return (
      <div>
        {
          this.state.albumData.map(album =>

            <div>
              <div>
                <img src={album.image} alt="album" />
              </div>
              <p>{album.name}</p>
              <p>{album.description}</p>
              <p>{album.category}</p>
              <p>{album.price}</p>
            </div>)
        }
      </div>
    )
  }
}

