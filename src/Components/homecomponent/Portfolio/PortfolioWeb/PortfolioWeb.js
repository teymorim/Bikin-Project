import axios from "axios";
import { useEffect, useState } from "react";
import { Col } from "react-bootstrap";
import PortfolioItem from "../PortfolioItem/PortfolioItem";

function PortfolioWeb(){
    const [portfolioWeb , setPortfolioWeb] = useState([])
    useEffect(() => {
        axios.get('https://teymorim.github.io/jsonapibikin/db.json')
        .then(response => setPortfolioWeb(response.data.portfolioWeb))
    } , [])
    return(
        <>
        {portfolioWeb.map(img => <Col key={img.id}><PortfolioItem {...img} /></Col>)}
        </>
    )
}
export default PortfolioWeb;