
import Axios from 'axios';
import  React , {useState , useEffect} from 'react';
import '../static-elements/cryptos.css'

function Cryptos(){

    let [data , setData] = useState([])
    let [search , setSearch] = useState("")
     
    useEffect(()=> {
        Axios.get('/cryptos').then( (res) => {
            console.log(res.data)
            setData(...data,  res.data)
        
        }).catch( (err) => {
            console.log(err)
        })     
    } , [])
    

    function searchBar(e){
        setSearch(e.target.value)
    }

    return (
        <section className="cryptos-section">
            <h2> Cryptos page </h2>   
            
            <form> 
                <input type="text" value={search} onChange={searchBar} placeholder="Search..."/>
            </form>
            <div className="flex crypto-flex"> 
                <div className="grid crypto-grid">
                { data.map( crypto => 
                    <a href= {"/cryptos/" + crypto.id} ><button className="container crypto-items">
                        <h5> {crypto.name} : {crypto.id} , price : {crypto.price}</h5>
                    </button></a>)}
                </div>
            </div>
        </section>
    )
}

export default Cryptos;

