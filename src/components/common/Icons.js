/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import YouTubeIcon from "@material-ui/icons/YouTube";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import AppleIcon from "@material-ui/icons/Apple";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import { red, yellow } from "@material-ui/core/colors";
// import { Facebook, Instagram, You } from "@material-ui/icons";
function Icons(props) {
  const { iconOption } = props;
  const iconObject = {
    facebook: (
      <FacebookIcon
        style={{
          borderColor: iconOption.borderColor,
          borderWidth: iconOption.borderWidth,
          borderStyle: "solid",
          color: iconOption.iconColor,
          backgroundColor: iconOption.backgroundColor,
          borderRadius: iconOption.roundness,
          fontSize: iconOption.size,
        }}
      />
    ),
    instagram: (
      <InstagramIcon
        style={{
          borderColor: iconOption.borderColor,
          borderWidth: iconOption.borderWidth,
          borderStyle: "solid",
          color: iconOption.iconColor,
          backgroundColor: iconOption.backgroundColor,
          borderRadius: iconOption.roundness,
          fontSize: iconOption.size,
        }}
      />
    ),
    twitter: (
      <TwitterIcon
        style={{
          borderColor: iconOption.borderColor,
          borderWidth: iconOption.borderWidth,
          borderStyle: "solid",
          color: iconOption.iconColor,
          backgroundColor: iconOption.backgroundColor,
          borderRadius: iconOption.roundness,
          fontSize: iconOption.size,
        }}
      />
    ),
    youtube: (
      <YouTubeIcon
        style={{
          borderColor: iconOption.borderColor,
          borderWidth: iconOption.borderWidth,
          borderStyle: "solid",
          color: iconOption.iconColor,
          backgroundColor: iconOption.backgroundColor,
          borderRadius: iconOption.roundness,
          fontSize: iconOption.size,
        }}
      />
    ),
    linkedin: (
      <LinkedInIcon
        style={{
          borderColor: iconOption.borderColor,
          borderWidth: iconOption.borderWidth,
          borderStyle: "solid",
          color: iconOption.iconColor,
          backgroundColor: iconOption.backgroundColor,
          borderRadius: iconOption.roundness,
          fontSize: iconOption.size,
        }}
      />
    ),
    apple: (
      <AppleIcon
        style={{
          borderColor: iconOption.borderColor,
          borderWidth: iconOption.borderWidth,
          borderStyle: "solid",
          color: iconOption.iconColor,
          backgroundColor: iconOption.backgroundColor,
          borderRadius: iconOption.roundness,
          fontSize: iconOption.size,
        }}
      />
    ),
    playstore: (
      <PlayArrowIcon
        style={{
          borderColor: iconOption.borderColor,
          borderWidth: iconOption.borderWidth,
          borderStyle: "solid",
          color: iconOption.iconColor,
          backgroundColor: iconOption.backgroundColor,
          borderRadius: iconOption.roundness,
          fontSize: iconOption.size,
        }}
      />
    ),
  };
  const { iconList } = props;
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: "10px",
        width: "500px",
        marginLeft: "450px"
      
      }}
    >
      {iconList.map((icon, iconIndex) => {
        return (
          <div
            className="icon-wrapper"
            style={{ marginLeft: "10px" }}
            key={`icon-${iconIndex}`}
          >
            <a href={icon.url} target="blank">
              {iconObject[icon.icon]}
            </a>
          </div>
        );
      })}
    </div>
  );
}

export default Icons;
