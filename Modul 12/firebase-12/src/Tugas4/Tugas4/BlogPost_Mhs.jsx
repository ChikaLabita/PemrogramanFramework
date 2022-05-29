import React, { Component } from "react";
import './BlogPost_Mhs.css';
import Post from "./Post";
//import { render } from "react-dom";
//import { event } from "jquery";

class BlogPost_Mhs extends Component {

    state = {
        listMahasiswa: [],
        insertMahasiswa: {
            id: 1,
            NIM: 1,
            nama: "",
            alamat: "",
            hp: "",
            angkatan: 1,
            status: ""
        }
    }

    AmbilDataDariServerAPI() {
        fetch('http://localhost:3001/mahasiswa?_sort=id&_order=desc')
            .then(response => response.json())
            .then(jsonHasilAmbilDariAPI => {
                this.setState({
                    listMahasiswa: jsonHasilAmbilDariAPI
                })
            })
    }

    componentDidMount(){
        this.AmbilDataDariServerAPI();
    }

    handleHapusMahasiswa = (data) => {
        fetch(`http://localhost:3001/mahasiswa/${data}`, { method: 'DELETE'})
        .then(res =>{
            this.componentDidMount()
        })
    }

    handleTambahMahasiswa = (event) => {
        let formInsertMahasiswa = {...this.state.insertMahasiswa};
        let timestamp = new Date().getTime();
        formInsertMahasiswa['id'] = timestamp;
        formInsertMahasiswa[event.target.name] = event.target.value;
        this.setState({
            insertMahasiswa: formInsertMahasiswa
        });
    }

    handleTombolSimpan = () => {
        fetch('http://localhost:3001/mahasiswa', {
            method: 'POST',
            headers: {
                'Accept' : 'application/json',
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(this.state.insertMahasiswa)
        }).then((Response) =>{
            this.AmbilDataDariServerAPI();
        })
    }

    render() {
        return (
            <div className = "mhs-artikel" >
                <h4>Input Data Mahasiswa</h4>
                <hr></hr>
                <div className="form pb-2 border-bottom">
                                <div className="form-group row">
                                    <label htmlFor="NIM" className="col-sm-2 col-form-label">NIM</label>
                                    <div className="col-sm-10">
                                        <input type="text" className="form-control" id="NIM" name="NIM" onChange={this.handleTambahMahasiswa} />
                                    </div>
                                </div>
                                <br />
                                <div className="form-group row">
                                    <label htmlFor="nama" className="col-sm-2 col-form-label">Nama</label>
                                    <div className="col-sm-10">
                                        <input type="text" className="form-control" id="nama" name="nama" onChange={this.handleTambahMahasiswa} />
                                    </div>
                                </div>
                                <br />
                                <div className="form-group row">
                                    <label htmlFor="alamat" className="col-sm-2 col-form-label">Alamat</label>
                                    <div className="col-sm-10">
                                        <textarea type="text" className="form-control" id="alamat" name="alamat" rows="3" onChange={this.handleTambahMahasiswa} />
                                    </div>
                                </div>
                                <br />
                                <div className="form-group row">
                                    <label htmlFor="hp" className="col-sm-2 col-form-label">No Hp</label>
                                    <div className="col-sm-10">
                                        <input type="text" className="form-control" id="hp" name="hp" onChange={this.handleTambahMahasiswa} />
                                    </div>
                                </div>
                                <br />
                                <div className="form-group row">
                                    <label htmlFor="angkatan" className="col-sm-2 col-form-label">Angkatan</label>
                                    <div className="col-sm-10">
                                        <input type="number" className="form-control" id="angkatan" name="angkatan" onChange={this.handleTambahMahasiswa} />
                                    </div>
                                </div>
                                <br />
                                <div className="form-group row">
                                    <label htmlFor="status" className="col-sm-2 col-form-label">Status</label>
                                    <div className="col-sm-10">
                                        <input type="text" className="form-control" id="status" name="status" onChange={this.handleTambahMahasiswa} />
                                    </div>
                                </div>
                    <div className="col-sm-10">
                        <button type="submit" className="btn btn-primary" onClick={ this.handleTombolSimpan }>Simpan</button>
                    </div>
            </div>
            <hr></hr>
            <h4> Daftar Mahasiswa | | Politeknik Negeri Malang</h4> {
                this.state.listMahasiswa.map(mahasiswa => {
                    return <Post key = {mahasiswa.id} nama = { mahasiswa.nama } NIM = { mahasiswa.NIM } alamat = {mahasiswa.alamat}
                    hp = {mahasiswa.hp} angkatan = {mahasiswa.angkatan} status = {mahasiswa.status} idMahasiswa={mahasiswa.id}
                    hapusMahasiswa = { this.handleHapusMahasiswa }/>
                })
            }
            </div>
        )
    }
}

export default BlogPost_Mhs;