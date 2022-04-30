import React, { Component } from "react";
import './BlogPost.css';
import Post from "../../Component/BlogPost/Post";
import API from "../../Services";

//import { render } from "react-dom";
//import { event } from "jquery";

class BlogPost extends Component {

    /*render(){
        return(
            <div class="post-artikel">
                <h2>Daftar Artikel</h2>
                <Post judul="JTI Polinema" isi="Jurusan Teknologi Informasi - Politeknik Negeri Malang"/>
            </div>
        )
    }*/
    /*render(){
        return(
            <div class="post-artikel">
                <h2>Daftar Artikel</h2>
                <Post/>
            </div>
        )
    }*/

    /*render(){
        return(
            <div class="post-artikel">
                <h2>Daftar Artikel</h2>
                <div class="post-artikel">
                    <div class="gambar-artikel">
                        <img src="http://placeimg.com/80/80/tech" alt="Gambar Thumbnail Artikel"></img>
                    </div>
                    <div class="kontent-artikel">
                        <div class="judul-artikel">Judul Artikel</div>
                        <p class="isi-artikel">Isi Artikel</p>
                    </div>
                </div>
            </div>
        )
    } */

    state = {
        listArtikel: [],
        insertArtikel: {
            userId: 1,
            id: 1,
            title: "",
            body: ""
        }
    }

    componentDidMount() {
            API.getNewsBlog().then(result =>{
                this.setState({
                    listArtikel: result
                })
            })
        /*fetch('http://localhost:3001/posts?_sort=id&_order=desc')
            .then(response => response.json())
            .then(jsonHasilAmbilDariAPI => {
                this.setState({
                    listArtikel: jsonHasilAmbilDariAPI
                })
            })*/
    }

    handleHapusArtikel = (data) => {
        API.deleteNewsBlog(data).then((response) => {
            this.ambilDataDariServerAPI();
        })
        /*fetch('http://localhost:3001/posts/${data}', {method: 'DELETE'})
        .then(res =>{
            this.componentDidMount()
        })*/
    }

    handleTambahArtikel = (event) => {
        let formInsertArtikel = { ...this.state.insertArtikel };
        let timestamp = new Date().getTime();
        formInsertArtikel['id'] = timestamp;
        formInsertArtikel[event.target.name] = event.target.value;
        this.setState({
            insertArtikel: formInsertArtikel
        });
    }

    handleTombolSimpan = () => {
        API.postNewsBlog(this.state.insertArtikel)
            .then((response) => {
                this.ambilDataDariServerAPI();
            });
        /*fetch('http://localhost:3001/posts', {
            method: 'post',
            headers: {
                'Accept' : 'application/json',
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(this.state.insertArtikel)
        }).then((Response) =>{
            this.componentDidMount();
        })*/
    }

    render() {
        return (
            <div className="post-artikel" >
                <div className="form pb-2 border-bottom">
                    <div className="form-group row">
                        <label htmlFor="title" className="col-sm-2 col-form-label">Judul</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="title" name="title" onChange={this.handleTambahArtikel} />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="body" className="col-sm-2 col-form-label">Isi</label>
                        <div className="col-sm-10">
                            <textarea className="form-control" id="body" name="body" rows="3" onChange={this.handleTambahArtikel}></textarea>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={this.handleTombolSimpan}>Simpan</button>
                </div>
                <h2 > Daftar artikel </h2> {
                    this.state.listArtikel.map(artikel => {
                        return <Post key={artikel.id} judul={artikel.title} isi={artikel.body} idArtikel={artikel.id}
                            hapusArtikel={this.handleHapusArtikel} />
                    })
                }
            </div>
        )
    }
}

export default BlogPost;