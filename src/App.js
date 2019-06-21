import React, { Component } from 'react'
import './App.css'
import axios from 'axios'
import cheerio from 'cheerio'

class App extends Component {
  state = {
    news: ''
  }

  handleGetArticles = event =>{
    console.log('ping')
    axios.get('https://www.nytimes.com/section/world/asia')
      .then(({data})=>{
        const $ = cheerio.load(data)
        console.log(data)
      })
  }
  render(){
    return(
      <>
      <h1>React Mongo Scrappppinggg</h1>
      <button onClick={this.handleGetArticles}>Get Articles</button>
      </>
      )
    }
  }


export default App;
