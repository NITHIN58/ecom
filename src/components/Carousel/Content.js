import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@material-ui/core'
import './Carousel.css'


export default function Content(props)
{
    var items = [
        {
            name: "Greate Offers",
            img:"https://m.media-amazon.com/images/I/71I4c881wiL._SX3000_.jpg",
            description: "New season Launch"
            
        },
        {
            name: "Second one",
            img:"https://previews.123rf.com/images/mamanamsai/mamanamsai1508/mamanamsai150800516/45042967-e-commerce-concept-design-on-white-background-clean-vector.jpg",
            description: "Second Carousel ..........."
        },
        {
            name: "Third one",
            img:"https://previews.123rf.com/images/djvstock/djvstock1708/djvstock170815651/84754694-e-commerce-related-icons-over-colorful-circles-and-white-background-vector-illustration.jpg",
            description: "Third Carousel........."
        }
    ]

    return (
        <Carousel className="cl">
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
    )
}

function Item(props)
{
    return (
        
        <Paper className="Paper" >
            <h2 style={{textAlign: 'center'}}>{props.item.name}</h2>
            <p>{props.item.description}</p>
            <img className="img" src= {props.item.img}/>
            <Button   className="CheckButton" style={{ backgroundColor: "rgb(238, 236, 250)", color: "blue", cursor: "pointer",marginTop:"10px" }}>
                Check it out!
            </Button>
        </Paper>
    )
}