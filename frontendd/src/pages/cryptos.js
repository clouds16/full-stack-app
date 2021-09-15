
import Axios from 'axios';
import  React , {useState , useEffect} from 'react';

import '../static-elements/cryptos.css'

function Cryptos(){

    let [data , setData] = useState([])
    let [check , setCheck] = useState(false)
    
  

    function getData(e) {
        if(!check) {
            Axios.get('/cryptos').then( (res) => {
                console.log(res.data)
                setData(...data, res.data)
                
                console.log('the data is', data)
            }).catch( (err) => {
                console.log(err)
            })
        }
        e.preventDefault();
        setCheck( true)
    }



    return (
        <section className="cryptos-section">
            
            <h2> Cryptos page </h2>   
            <button onClick={getData}>  Get List of Cryptos </button> 

            <div className="flex "> 
                <div className="mygrid">
                { data.map( crypto => 
                    <div className="box item">
                        <h5> {crypto.name} : {crypto.id} </h5>
                    </div>)}
                </div>
            </div>
        </section>
    )
}

export default Cryptos;

// {Object.keys(data).map((key, value) =>{
//     return (
//         <div>
//             <p> name : {key.name} </p>
//             <p> symbol : {key.symbol} </p>
//         </div>
//     )
// })}