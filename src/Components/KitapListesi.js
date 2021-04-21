import React, { useState, useEffect } from "react";
import fire from "../fBase";
import Kitap from "./Kitap";

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
            <th scope="col">Sıra No</th>
            <th scope="col">Kitap Adı</th>
            <th scope="col">Yazarı</th>
            <th scope="col">Stok Durumu</th>
            <th scope="col">Durum</th>
          </tr>
        </thead>

        <tbody>
          {liste.map((kitap,index) => {
            return (
              <Kitap key={index} kitap={kitap} index={index} />
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
