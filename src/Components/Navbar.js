import React from "react";
import KitapKayit from './KitapKayit'
import './Navbar.css'
import {BrowserRouter,Switch,Route,Link} from "react-router-dom";
import Home from "./Home";
import KitapListesi from "./KitapListesi";
import OzetAra from "./OzetAra";

const linkStyle={
    display:"block", 
    color:"white", 
    textAlign:"center",
    padding:"14px 16px",
    textDecotration:"none"}

export default function Navbar() {
  return (
    <BrowserRouter>
      <div>
        
          <ul>
            <li>
              <Link style={linkStyle} to="/">Anasayfa</Link>
            </li>
            <li>
              <Link style={linkStyle}  to="/kitap_listesi">Kitap Listesi</Link>
            </li>
            <li>
              <Link style={linkStyle} to="/kitap_kayit_formu">Kitap Kayıt Formu</Link>
            </li>
            <li>
              <Link style={linkStyle} to="/kitap_ozetleri">Kitap Özetleri</Link>
            </li>
            </ul>
        

      
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/kitap_kayit_formu" component={KitapKayit}/>
            <Route path="/kitap_listesi" component={KitapListesi}/>
            <Route path="/kitap_ozetleri" component={OzetAra}/>
          
        </Switch>
      </div>
    </BrowserRouter>
  );
}
