import React, { useState, useEffect } from "react";
import fire from "../fBase";

export default function KitapListesi() {
  const [liste, setliste] = useState([]);

  useEffect(() => {
    fire.database().ref("kitaplar").once("value", (snapshot) => {
        snapshot.forEach((childSnapshot)=>{
          setliste(prevState=>[...prevState,childSnapshot.val()])
          
        })
        
      });
  },[]);

  return (
    <div>
      <table className="table table-hover table-light mt-5">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Kitap Adı</th>
            <th scope="col">Yazari</th>
            <th scope="col">Sayfa Sayısı</th>
          </tr>
        </thead>

        <tbody>
          {liste.map((kitap, index) => {
            return (
              <tr key={index}>
                <th scope="row">{index}</th>
                <td>{kitap.adi}</td>
                <td>{kitap.yazari}</td>
                <td>{kitap.sayfaAdedi}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
