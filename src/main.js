import "./styles.css";

import profilePictureFile from "./images/AmeJump.png";
import gunAme from "./images/ameGun.png";
import ameHehe from "./images/ameHehe.jpeg";
import wizardPfp from "./images/Wizardpfp.png";
import grgrgr from "./images/grgrgr.png";

const profilePicture = new Image();
profilePicture.src = profilePictureFile;
const profilePicDiv = document.getElementsByClassName("imgDiv")[0];
profilePicDiv.appendChild(profilePicture);
profilePicture.classList.add("profilePictureImg");

const gunAmeImg = new Image();
gunAmeImg.src = gunAme;

const cardDiv = document.getElementsByClassName("card")[0];
cardDiv.insertBefore(gunAmeImg, cardDiv.firstChild);
gunAmeImg.classList.add("cardImage");

const ameHeheImg = new Image();
ameHeheImg.src = ameHehe;
const cardDiv2 = document.getElementsByClassName("card")[1];
cardDiv2.insertBefore(ameHeheImg, cardDiv2.firstChild);
ameHeheImg.classList.add("cardImage");

const wizardPfpImg = new Image();
wizardPfpImg.src = wizardPfp;
const cardDiv3 = document.getElementsByClassName("card")[2];
cardDiv3.insertBefore(wizardPfpImg, cardDiv3.firstChild);
wizardPfpImg.classList.add("cardImage");

const grgrgrImg = new Image();
grgrgrImg.src = grgrgr;
const cardDiv4 = document.getElementsByClassName("card")[3];
cardDiv4.insertBefore(grgrgrImg, cardDiv4.firstChild);
grgrgrImg.classList.add("cardImage");

const cardDiv5 = document.getElementsByClassName("card")[4];
const profilePicture2 = new Image();
profilePicture2.src = gunAme;
cardDiv5.insertBefore(profilePicture2, cardDiv5.firstChild);
profilePicture2.classList.add("cardImage");

const cardDiv6 = document.getElementsByClassName("card")[5];
const gunAmeImg2 = new Image();
gunAmeImg2.src = grgrgr;
gunAmeImg2.classList.add("cardImage");
cardDiv6.insertBefore(gunAmeImg2, cardDiv6.firstChild);
