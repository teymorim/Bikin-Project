import axios from "axios";
import { useEffect, useState } from "react";
import { Col } from "react-bootstrap";
import PortfolioItem from "../PortfolioItem/PortfolioItem";
import './PortfolioAll.css'

function PortfolioAll(){
    const [portfolioAlls , setPortfolioAlls] = useState([])
    useEffect(() => {
        axios.get('https://teymorim.github.io/jsonapibikin/db.json')
        .then(response => setPortfolioAlls(response.data.portfolioAll))
    } , [])
    return(
        <>
        {portfolioAlls.map(img => <Col  key={img.id}><PortfolioItem {...img} /></Col>)}
        
        </>
    )
}
export default PortfolioAll;