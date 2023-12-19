import axios from "axios";
import { useEffect, useState } from "react";
import { Col } from "react-bootstrap";
import PortfolioItem from "../PortfolioItem/PortfolioItem";

function PortfolioApp(){
    const [portfolioApp , setPortfolioApp] = useState([])
    useEffect(() => {
        axios.get('https://teymorim.github.io/jsonapibikin/db.json')
        .then(response => setPortfolioApp(response.data.portfolioApp))
    } , [])
    return(
        <>
                {portfolioApp.map(img => <Col key={img.id}><PortfolioItem {...img} /></Col>)}
        </>
    )
}
export default PortfolioApp;