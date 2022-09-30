import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'; 
import React, {useEffect,useState} from 'react';

function Border() {

    const [weight, setWeight] = useState(0);
    const [size, setSize] = useState(0);
    const [sonuc, setsonuc] = useState("");
    const [message, setmessage] = useState("");



    const changeValuesize = event => setSize(event.target.value);

    const changeValueweight = event => setWeight(event.target.value);


    let calculate = (event) => {
        event.preventDefault();
        if(weight === 0 || size === 0){
            alert("değer giriniz.")
        }else{
            let sonuc = (weight) / (size * size) * 10000;
            setsonuc(sonuc.toFixed(2));

            if(sonuc < 19 ){
                setmessage("Zayıfsın")
            }else if(sonuc >= 19 &&  sonuc < 25){
                setmessage("İdeal")
            }else if(sonuc >= 25 && sonuc < 30){
                setmessage("Şişman")
            }else if(sonuc >= 30 && sonuc < 35){
                setmessage("Obez")
            }else if(sonuc >= 35){
                setmessage("Aşırı Obez")
            }


        }
    }

        let imgsrc;
        if(sonuc < 1){
            imgsrc = null
        }else{

            if(sonuc < 19 ){
                imgsrc = require("../Assets/img/bmi-zayif.png")
            }else if(sonuc >= 19 &&  sonuc < 25){
                imgsrc = require("../Assets/img/bmi-ideal.png")
            }else if(sonuc >= 25 && sonuc < 30){
                imgsrc = require("../Assets/img/bmi-sisman.png")
            }else if(sonuc >= 30 && sonuc < 35){
                imgsrc = require("../Assets/img/bmi-obez.png")
            }else if(sonuc >= 35){
                imgsrc = require("../Assets/img/bmi-asirisisman.png")
            }
        }


    let reload = () =>{
        window.location.reload();
    }

  return (
      <div className="Calculater">
        <Form onSubmit={calculate}>
            <Form.Group className="mt-5">
                <Form.Label>Boyunuz</Form.Label>
                <Form.Control 
                type="text" 
                id="size" 
                placeholder="Boyunuz" 
                onChange={ changeValuesize} 
                value={size} 
                maxLength="3" />
            </Form.Group>

            <Form.Group className="mt-3">
                <Form.Label>Ağırlığınız</Form.Label>
                <Form.Control 
                type="text" 
                placeholder="Ağırlığınız" 
                onChange={ changeValueweight} 
                value={weight}   
                maxLength="3"/>
            </Form.Group>
            <Button className="mt-3" variant="primary" type="submit" id="submit" >Hesapla</Button>
            <Button className="mt-3 ml-3" variant="secondary" type="submit" id="submit" onClick={reload}>Sıfırla</Button>

        </Form>
        <div className="sonuc">
            <img src={imgsrc} />
            <p>Vücut Kitle İndeksin: <span>{sonuc}</span></p>
            <p>Sonuç: <span>{message}</span></p>
        </div>
      </div>
      
  );
}

export default Border;