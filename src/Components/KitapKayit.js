import React, {useState} from 'react'
import fire from '../fBase'

export default function KitapKayit() {
    const [kitap, setkitap] = useState({
        adi:"",
        yazari:"",
        basim:"",
        sayfaAdedi:"",
        ozet:""
    })
    const adiHandler=(e)=>{
        setkitap({...kitap,adi:e.target.value.toLocaleUpperCase()})
    }
    const yazariHandler=(e)=>{
        setkitap({...kitap,yazari:e.target.value.toLocaleUpperCase()})
    }
    const basimHandler=(e)=>{
        setkitap({...kitap,basim:e.target.value.toLocaleUpperCase()})
    }
    const sayfaAdediHandler=(e)=>{
        setkitap({...kitap,sayfaAdedi:e.target.value.toLocaleUpperCase()})
    }
    const ozetHandler=(e)=>{
        setkitap({...kitap,ozet:e.target.value.toLocaleUpperCase()})
    }
    const submitHandler=()=>{
        if(kitap.adi===""){alert("Kitap adını girmediniz")}
        else if(kitap.yazari===""){alert("Yazar adını girmediniz")}
        else if(kitap.basim===""){alert("Basım yılını girmediniz")}
        else if(kitap.sayfaAdedi===""){alert("Sayfa sayısını girmediniz")}
        else if(kitap.ozet===""){alert("Özeti girmediniz")}
        else{
            fire.database().ref(`kitaplar/${kitap.adi}`).set(kitap);
            setkitap({adi:"",yazari:"",basim:"",sayfaAdedi:"", ozet:""})
        }
        
    }
    return (
        <div className="col-5 m-auto mt-5" style={{textAlign:"center"}} >
        <label  className="form-label form-control-lg" style={{color:"blue",fontSize:"35px"}} >Kitap Kayıt Formu</label>
        <input value={kitap.adi} onChange={adiHandler} className="form-control form-control-lg mb-3" type="text" placeholder="Kitap Adı..."/>
        <input value={kitap.yazari} onChange={yazariHandler} className="form-control form-control-lg mb-3" type="text" placeholder="Yazarı..." />
        <input value={kitap.basim} onChange={basimHandler} className="form-control form-control-lg mb-3" type="text" placeholder="Basım Yılı..." />
        <input value={kitap.sayfaAdedi} onChange={sayfaAdediHandler} className="form-control form-control-lg mb-3" type="text" placeholder="Sayfa Adedi..." />
        <textarea value={kitap.ozet} onChange={ozetHandler} className="form-control form-control-lg mb-3" rows="3" placeholder="Özet..." />    
        <button onClick={submitHandler} type="button" className="btn btn-primary">EKLE</button>
      </div>
    )
}

