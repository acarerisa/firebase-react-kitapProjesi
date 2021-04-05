import React,{useState} from 'react'
import fire from '../fBase'

export default function OzetAra() {
    const [ozet, setOzet] = useState("");
    const [input,setInput] = useState("");

const inputHandler=(e)=>{
    setInput(e.target.value.toLocaleUpperCase())
}
const bulHandler=()=>{
    fire.database().ref("kitaplar").once("value", (snapshot) => {
        snapshot.forEach((childSnapshot)=>{
            if(input===childSnapshot.val().adi){
                setOzet(childSnapshot.val().ozet)
            }
          
        })
        
      });
      
}
  
    return (
        <div className="col-5 m-auto mt-5" style={{textAlign:"center"}} >
        <input value={input} onChange={inputHandler} className="form-control form-control-lg mb-3" type="text" placeholder="Kitap Adı..."/>
           
        <button onClick={bulHandler} type="button" className="btn btn-primary mb-5">BUL</button>
        <textarea defaultValue={ozet} className="form-control form-control-lg mb-3" rows="3" placeholder="Özet..." />

      </div>
    )
}
