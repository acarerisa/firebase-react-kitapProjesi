import React from "react";
import fire from '../fBase'

export default function Kitap({kitap, index}) {

    const alHandler=()=>{        
        fire.database().ref(`kitaplar/${kitap.adi}`).update({
            adet: kitap.adet - 1
        })        
    }
    
    return (
       
           <tr>
                <th scope="row">{index}</th>
                <td>{kitap.adi}</td>
                <td>{kitap.yazari}</td>
                <td>{kitap.adet}</td>
                {
                    kitap.adet ? <td><button onClick={alHandler} >Al</button></td> : <td>Stokta Yok</td>
                }
                
                
            </tr>
        
    )
}
