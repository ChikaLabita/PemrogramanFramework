import React, { Component } from "react";
import './BlogPost.css';
import Post from "../../Component/BlogPost/Post";
import { render } from "react-dom";

class BlogPost extends Component {
    
    state = {
        listArtikel: []
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(jsonHasilAmbilDariAPI => {
                this.setState({
                    listArtikel: jsonHasilAmbilDariAPI
                })
            })
    }

    render() {
        return ( 
            <div class = "post-artikel" >
            <h2 > Daftar artikel </h2> {
                this.state.listArtikel.map(artikel => {
                    return <Post key = { artikel.id }
                    judul = { artikel.title }
                    isi = { artikel.body }
                    />
                })
            } 
            </div>
        )
    }
}

export default BlogPost;