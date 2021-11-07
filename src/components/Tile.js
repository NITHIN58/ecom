import React from "react";
import ProductTile from "./ProductTile";
import { Grid } from "@material-ui/core";

 const productTile=props=>{
  const productTileDatas = [
    {
      heading: "Electronics",
      linkText: "Link text1",
      showLinkText: true,
      showImageText: true,
      category: "electronics",
      productTileData: [
        {
          imgSrc:
            "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08RDL6H79._SY116_CB667322346_.jpg",
          alt: "ACs",
          text: "ACs",
        },
        {
          imgSrc:
            "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08345R1ZW._SY116_CB667322346_.jpg",
          alt: "Fridge",
          text: "Fridge",
        },
        {
          imgSrc:
            "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B07G5J5FYP._SY116_CB667322346_.jpg",
          alt: "Microwave",
          text: "Microwave",
        },
        {
          imgSrc:
            "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/186x116---wm._SY116_CB667322346_.jpg",
          alt: "Micro Wave",
          text: "Micro Wave",
        },
      ],
    },
    {
      heading: "More everyday essentials to explore",
      linkText: "",
      showLinkText: false,
      showImageText: false,
      category: "appliances",
      productTileData: [
        {
          imgSrc:
            "https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonDevices/FTV-GW/MSO/QC--PC-white1X._SY116_CB660361586_.jpg",
          alt: "Echo Dot",
          text: "Echo Dot",
        },
        {
          imgSrc:
            "https://images-eu.ssl-images-amazon.com/images/G/31/img17/AmazonDevices/2019/PDHINDI/part2/QC-02_1X._SY116_CB660513597_.jpg",
          alt: "All-new Echo Dot",
          text: "All-new Echo Dot",
        },
        {
          imgSrc:
            "https://images-eu.ssl-images-amazon.com/images/G/31/img17/AmazonDevices/2019/PDHINDI/part2/QC-03_1X._SY116_CB660513597_.jpg",
          alt: "Echo Show 5",
          text: "Echo Show 5",
        },
        {
          imgSrc:
            "https://images-eu.ssl-images-amazon.com/images/G/31/img17/AmazonDevices/2019/PDHINDI/part2/QC-04_1X._SY116_CB660513597_.jpg",
          alt: "Amazon Echo",
          text: "Amazon Echo",
        },
      ],
    },
    {
      heading: "Styles for Women | Up to 70% off",
      linkText: "Link text1",
      showLinkText: true,
      category: "fashion",
      showImageText: true,
      productTileData: [
        {
          imgSrc:
            "https://images-eu.ssl-images-amazon.com/images/G/31/img21/Fashion/Event/Gateway/WRS-Jun/PC_QC_186/Comp-186/5-min._SY116_CB666463598_.jpg",
          alt: "Women CLothing",
          text: "Womes Clothing",
        },
        {
          imgSrc:
            "https://images-eu.ssl-images-amazon.com/images/G/31/img21/Fashion/Event/Gateway/WRS-Jun/PC_QC_186/Comp-186/6-min._SY116_CB666463598_.jpg",
          alt: "Handbag",
          text: "Handbag  ",
        },
        {
          imgSrc:
            "https://images-eu.ssl-images-amazon.com/images/G/31/img21/Fashion/Event/Gateway/WRS-Jun/PC_QC_186/Comp-186/8-min._SY116_CB666463598_.jpg",
          alt: "Watches",
          text: "Watches",
        },
        {
          imgSrc:
            "https://images-eu.ssl-images-amazon.com/images/G/31/img21/Fashion/Event/Gateway/WRS-Jun/PC_QC_186/Comp-186/7-min._SY116_CB666463598_.jpg",
          alt: "Fashion Jewellery",
          text: "Fashion Jewellery",
        },
      ],
    },
    {
      heading: "Sale starts early for Prime members",
      linkText: "seeMore",
      showLinkText: true,
      category: "electricals",
      showImageText: true,
      productTileData: [
        {
          imgSrc:
            "https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/JupiterT1/Eng_1x._SY304_CB640989812_.jpg",
          alt: "OFFER",
          text: "Sale starts early for Prime members",
        }
       
      ],
    },
  ];

return(
    
    <Grid spacing={2} container>
    {productTileDatas.map((pData, pDataTileIndex) => {
      return (
        <Grid key={pDataTileIndex} item lg={3} mg={3} xs={3}>
          <ProductTile
            heading={pData.heading}
            linkText={pData.linkText}
            productTileData={pData.productTileData}
            showLinkText={pData.showLinkText}
            category={pData.category}
          />
        </Grid>
      );
    })}
  </Grid>
 
    )
 }
export default  productTile