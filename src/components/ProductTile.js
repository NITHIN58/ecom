/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { Grid } from "@material-ui/core";
import { useState } from "react";
import "./styles/productTile.scss";
import ModelWrapper from "./common/modelWrapper.component";
import OverlayComponent from "./common/OverlayComponent";
import { Link } from "react-router-dom";
const ProductTile = (props) => {
  const [showOverlay, setShowOerlay] = useState(false);
  const onOverlayEvent = (e, type) => {
    // console.log(type);
    if (type === "closeicon") {
      setShowOerlay(false);
    } else if (type === "okbutton") {
      setShowOerlay(false);
    }
  };

  return (
    <div className="productTile-Continaer">
      {/* <button
        onClick={(e) => {
          if (e.type === "click") {
            setShowOerlay(true);
          }
        }}
      >
        popup
      </button>
      {showOverlay ? (
      <ModelWrapper >
        <OverlayComponent
          heading="hi nithin"
          body="welcome"
          showCloseIcon
          showOkButton
          showCloseButton={false}
          OkButtonText="Back"
          CloseButtonText=""
          onEvent={onOverlayEvent}
        />
      </ModelWrapper>): null} */}
      <Grid container spacing={2} justifyContent="center" alignItems="center">
        <Grid
          item
          lg={12}
          sm={12}
          md={12}
          xl={12}
          className="productTile-Heading"
        >
          <h2>{props.heading}</h2>
        </Grid>
        {props.productTileData.map((product, productIndex) => {
          return props.productTileData.length===1? (
            <Grid
              key={productIndex}
              item
              lg={12}
              sm={12}
              md={12}
              xl={12}
              className="productTile-ImageContainer"
            >
              <Link
                to={`/category/${props.category}?category=${props.category}&user="nithin"`}
              >
                <img src={product.imgSrc} alt={product.alt} />
              </Link>
              <p className="productTile-Text">{product.text}</p>
            
            </Grid>
               ):   

              (
                <Grid
                  key={productIndex}
                  item
                  lg={6}
                  sm={6}
                  md={6}
                  xl={6}
                  className="productTile-ImageContainer"
                >
                  <Link
                    to={`/category/${props.category}?category=${props.category}&user="nithin"`}
                  >
                    <img src={product.imgSrc} alt={product.alt} />
                  </Link>
                  <p className="productTile-Text">{product.text}</p>
                
                </Grid>



          );


        })}




        <Grid item lg={12} sm={12} md={12} xl={12} className="productTile-Link">
          <a href="">{props.linkText}</a>
        </Grid>
      </Grid>
    </div>
  );
};

export default ProductTile;
