import React from 'react'

const Post = (props) => {
    return (
        <div className="artikel">
            <div className="mhs-artikel">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="judul-artikel">Nama : {props.nama}</div>
                        <p className="isi-artikel">NIM : {props.NIM}</p>
                        <p className="isi-artikel">Alamat : {props.alamat}</p>
                        <p className="isi-artikel">No Hp : {props.hp}</p>
                        <p className="isi-artikel">Angkatan : {props.angkatan}</p>
                        <p className="isi-artikel">Status : {props.status}</p>
                        <button className="btn btn-sm btn-danger" onClick={() => props.hapusMahasiswa(props.idMahasiswa)}>Hapus</button>
                    </div>
                    <div className="col-sm">

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post;