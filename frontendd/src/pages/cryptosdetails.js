
import Axios from 'axios';
import  React , {useState , useEffect} from 'react';
import { useParams } from 'react-router-dom';
import '../static-elements/cryptos.css'

function CryptoDetails(props){
    
    //console.log(props.match.params.id)
    let [data , setData] = useState([])
     
    useEffect(()=> {
        console.log('loaded crypto detail page')
        Axios.get('/cryptos/' + props.match.params.id ).then( (res) => {
            console.log(res.data)
            setData(...data,  res.data)
        
        }).catch( (err) => {
            console.log(err)
        })     
    } , [])
    

    return (
        <section className="cryptos-section">
            <h2> Crypto Details page </h2>   
            
            <h2> {data.id} , {data.name} </h2>
            <h4> Current Price: {data.price} </h4>
            <h4> 24 Hour change: {data.change_24h}</h4>
            <h4> last hour change : {data.change_1h} </h4>
        </section>
    )
}

export default CryptoDetails;

