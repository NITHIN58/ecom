import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import axios from "axios";

class Category extends Component {
  constructor(props) {
    super(props);
    this.state = {
      componentProps: [],
    };
  }

  async componentWillMount() {
    const { params } = this.props.match;
    const dataFromDb = await axios.get(
      `/getCategoryPageData/${params.category}`
    );
    const content= [];
    content.push(dataFromDb.data[0]);
    this.setState({ componentProps:content});
  }

  render() {
    const { componentProps } = this.state;
    console.log(componentProps);
    return (
      <div style={{ backgroundColor: "white", color: "black", width: "100%" }}>
        {componentProps.map((component, componentIndex) => {
          return component.componentType === "banner" ? (
            <Grid container direction="row" key={`component-${componentIndex}`}>
              <Grid item lg={12} md={12} xl={12} xm={12}>
                <h2
                  style={{
                    textAlign: component.props.headingElement.alighnment,
                  }}
                >
                  {component.props.headingElement.heading}
                </h2>
              </Grid>
              {component.props.bannerElements.map((banner, bannerIndex) => {
                return (
                  <Grid
                    style={{
                     
                      marginTop: "50px",
                      paddingLeft:"50px",
                      paddingRight:"50px",
                      border:"1px solid black",
                      backgroundColor:"rgb(212, 222, 245)",
                      borderradius: "10px",
  
                      color: "white",
                      textalign: "center"
                    }}
                    item
                    lg={12}
                    md={12}
                    xl={12}
                    xs={12}
                    key={`bannerImage-${bannerIndex}`}
                   
                  >
                    {banner.type === "image" ? (
                      <img alt="" src={banner.src} />
                    ) : null}
                  </Grid>
                );
              })}

              <Grid item lg={12} md={12} xl={12} xm={12}>
                <h2
                  style={{
                    textAlign: component.props.headingElement.alighnment,
                  }}
                >
                  {component.props.headingElement.heading2}
                </h2>
              </Grid>

              {component.props.bannerElements.map((banner, bannerIndex) => {
                return (
                  <Grid
                    style={{
                      paddingRight: "5px",
                      paddingLeft: "5px",
                      marginTop: "5px",
                    }}
                    item
                    lg={3}
                    md={3}
                    xl={3}
                    xs={6}
                    key={`bannerImage-${bannerIndex}`}
                  >
                    {banner.type === "button" ? (
                      <Button
                        href={banner.buttonLink}
                        style={{
                          fontSize: "20px",
                          width: "100%",
                          boxShadow: "1px 2px",
                        }}
                        color="black"
                        variant="outlined"
                        size="large"
                      >
                        {banner.buttonText}
                      </Button>
                    ) : null}
                  </Grid>
                );
              })}

              <Grid item lg={12} md={12} xl={12} xm={12}>
                <h2
                  style={{
                    textAlign: component.props.headingElement.alighnment,
                  }}
                >
                  {component.props.headingElement.heading1}
                </h2>
              </Grid>
              {component.props.bannerElements.map((banner, bannerIndex) => {
                return (
                  <Grid
                    style={{
                      paddingRight: "5px",
                      paddingLeft: "5px",
                      marginTop: "5px",
                      marginBottom: "10px",
                    }}
                    item
                    lg={3}
                    md={3}
                    xl={3}
                    xs={6}
                    key={`bannerImage-${bannerIndex}`}
                  >
                    {banner.type === "imageLink" ? (
                      <a href={banner.url} style={{ cursor: "pointer" }}>
                        <img
                          alt=""
                          style={{ width: "100%" }}
                          src={banner.src}
                        />
                      </a>
                    ) : null}
                  </Grid>
                );
              })}

              {component.props.bannerElements.map((banner, bannerIndex) => {
                return (
                  <Grid
                    item
                    lg={12}
                    md={12}
                    xl={12}
                    xs={12}
                    key={`bannerImage-${bannerIndex}`}
                  >
                    {banner.type === "imageCover" ? (
                      <img alt="" src={banner.src} />
                    ) : null}
                  </Grid>
                );
              })}

              {component.props.bannerElements.map((banner, bannerIndex) => {
                console.log(banner);
                return (
                  <Grid
                    style={{
                      paddingRight: "5px",
                      paddingLeft: "5px",
                      marginTop: "5px",
                      marginBottom: "10px",
                    }}
                    item
                    lg={3}
                    md={3}
                    sm={3}
                    xs={6}
                    key={`bannerImage-${bannerIndex}`}
                  >
                    {banner.type === "imageOffers" ? (
                      <a href={banner.url} style={{ cursor: "pointer" }}>
                        <img
                          alt=""
                          style={{ width: "100%" }}
                          src={banner.src}
                        />
                      </a>
                    ) : null}
                  </Grid>
                );
              })}

              <Grid item lg={12} md={12} xl={12} xm={12}>
                <h2
                  style={{
                    textAlign: component.props.headingElement.alighnment,
                  }}
                >
                  {component.props.headingElement.heading3}
                </h2>
              </Grid>

              {component.props.bannerElements.map((banner, bannerIndex) => {
                console.log(banner);
                return (
                  <Grid
                    style={{
                      paddingRight: "5px",
                      paddingLeft: "5px",
                      marginTop: "5px",
                      marginBottom: "10px",
                    }}
                    item
                    lg={3}
                    md={3}
                    sm={3}
                    xs={6}
                    key={`bannerImage-${bannerIndex}`}
                  >
                    {banner.type === "imageOffers1" ? (
                      <a
                        href={banner.url}
                        style={{
                          cursor: "pointer",
                          textDecoration: "none",
                          color: "black",
                        }}
                      >
                        <img
                          alt=""
                          style={{ width: "100%" }}
                          src={banner.src}
                        />
                      </a>
                    ) : null}
                  </Grid>
                );
              })}
            </Grid>
          ) : null;
        })}
      </div>
    );
  }
}

export default withRouter(Category);