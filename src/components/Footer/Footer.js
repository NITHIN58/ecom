import React from 'react'
import './Footer.css'
import homepage from '../../assets/mock/homepage.json' 
import Icons from '../common/Icons'
export default function Footer(props) {
  const iconOption = {
    borderColor: "transparent",
    borderWidth: 10,
    borderStyle: "solid",
    iconColor: "white",
    backgroundColor: "rgba(73,63,252,1)100%)",
    roundness: 30,
    size: 50,
    leftPadding: 5,

    
  };

  const iconList1 = [
    {
      icon: "facebook",
      url: "https://www.facebook.com",
    },
    {
      icon: "twitter",
      url: "https://www.twitter.com",
    },
  ];

  const iconList2 = [
    {
      icon: "youtube",
      url: "https://www.youtube.com",
    },
    {
      icon: "linkedin",
      url: "https://www.linkedin.com",
    },
  ];
    return (
        <div class="f">
         
     
        
       <Icons  iconList={iconList1} iconOption={iconOption}/>
       <Icons iconList={iconList2} iconOption={iconOption}/>
       {`${homepage.copy}`}
       {`${homepage.footer}`}
        </div>
    )
}
