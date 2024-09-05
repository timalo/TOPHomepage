/* import profilePictureFile from "./images/AmeJump.png";
import gunAme from "./images/ameGun.png";
import ameHehe from "./images/ameHehe.jpeg";
import wizardPfp from "./images/Wizardpfp.png";
import grgrgr from "./images/grgrgr.png";
import AmeWide from "./images/smolAme3DWide.jpeg";
import youtubeIcon from "./images/youtube-icon.svg";
import githubIcon from "./images/github-icon.svg";
import linkedinIcon from "./images/linkedin-square-icon.svg";

function loadImages() {
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

  const bottomDiv = document.getElementsByClassName("contactImage")[0];
  const bottomImg = new Image();
  bottomImg.src = AmeWide;
  bottomDiv.appendChild(bottomImg);
  bottomImg.classList.add("bottomImage");

  /* Icons and their links 
  const IconsDiv = document.getElementsByClassName("iconsDiv")[0];
  const youtubeLink = document.createElement("a");
  youtubeLink.href = "https://www.youtube.com/@WatsonAmelia";
  const youtubeIconImg = new Image();
  youtubeIconImg.src = youtubeIcon;
  youtubeIconImg.classList.add("icon");
  youtubeLink.appendChild(youtubeIconImg);
  IconsDiv.appendChild(youtubeLink);
  const githubLink = document.createElement("a");
  githubLink.href = "github.com/timalo";
  const githubIconImg = new Image();
  githubIconImg.src = githubIcon;
  githubIconImg.classList.add("icon");
  githubLink.appendChild(githubIconImg);
  IconsDiv.appendChild(githubLink);
  const linkedinLink = document.createElement("a");
  linkedinLink.href = "https://www.linkedin.com/in/timo-malo";
  const linkedinIconImg = new Image();
  linkedinIconImg.src = linkedinIcon;
  linkedinIconImg.classList.add("icon");
  linkedinLink.appendChild(linkedinIconImg);
  IconsDiv.appendChild(linkedinLink);

  /* bottom icons 
  const bottomYoutubeLink = document.createElement("a");
  const bottomIconsDiv = document.getElementsByClassName("bottomIconsDiv")[0];
  bottomYoutubeLink.href = "https://www.youtube.com/@WatsonAmelia";
  const bottomYoutubeIconImg = new Image();
  bottomYoutubeIconImg.src = youtubeIcon;
  bottomYoutubeIconImg.classList.add("bottomIcon");
  bottomYoutubeLink.appendChild(bottomYoutubeIconImg);
  bottomIconsDiv.appendChild(bottomYoutubeLink);

  /* Bottom decoration icons 
}

export default { loadImages };
 */
