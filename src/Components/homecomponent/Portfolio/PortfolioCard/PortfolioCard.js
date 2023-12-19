import axios from "axios";
import { useEffect, useState } from "react";
import { Col } from "react-bootstrap";
import PortfolioItem from "../PortfolioItem/PortfolioItem";

function PortfolioCard(){
    const [portfolioCard, setPortfolioCard] = useState([])
    useEffect(() => {
        axios.get('https://teymorim.github.io/jsonapibikin/db.json')
        .then(response => setPortfolioCard(response.data.portfolioCard))
    } , [])
    return(
        <>
        {portfolioCard.map(img => <Col key={img.id}><PortfolioItem {...img} /></Col>)}
        </>
    )
}
export default PortfolioCard;