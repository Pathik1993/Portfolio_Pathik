import { Container } from "./styles";
// import VinayakSingh from "../../assets/VinayakSingh.png";
// import RahulRabadiya from "../../assets/RahulRabadiya.png";
// import wordpress from "../../assets/wordpress.svg";
// import shopify from "../../assets/shopify.svg";
// import htmlIcon from "../../assets/html-icon.svg";
// import cssIcon from "../../assets/css-icon.svg";
import PathikNew from "../../assets/PathikNew.jpg";
import jsIcon from "../../assets/js-icon.svg";
import nodeIcon from "../../assets/node-icon.svg";
import reactIcon from "../../assets/react-icon.svg";
import typescriptIcon from "../../assets/typescript-icon.svg";
import javaIcon from "../../assets/javaicon.png";
import kotlinIcon from "../../assets/Kotlin.png";
// import vueIcon from "../../assets/vue-icon.svg";
// import boostrapIcon from "../../assets/bootstrap-icon.svg";
import postman from "../../assets/postman.png";
import github from "../../assets/github.png";
import firebase from "../../assets/firebase.png";
import googleplay from "../../assets/googleplay.png";
import appstore from "../../assets/appstore.png";
import ScrollAnimation from "react-animate-on-scroll";

export function About() {
  return (
    <Container id="about">
      <div className="about-text">
        <ScrollAnimation animateIn="fadeInLeft">
          <h2>About me</h2>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.1 * 1000}>
          {/* <p>
            Hi there! I'm Rahul, a Mobile Application Developer with a passion
            for creating custom online experiences for my clients. With a skill
            set including HTML, CSS, JavaScript, and React, I have the tools to
            bring any website vision to life.
          </p> */}
          <p>
            Hi there! I'm Pathik, I'm a passionate and skilled mobile
            application developer with over 6 years of experience building
            high-performance, cross-platform mobile applications using React
            Native and native Android development. My work is driven by a strong
            focus on delivering seamless user experiences, clean architecture,
            and scalable solutions that meet both user and business needs.
          </p>
        </ScrollAnimation>
        {/* <ScrollAnimation
          animateIn="fadeInLeft"
          delay={0.2 * 1000}
          style={{ marginTop: "2rem", marginBottom: "2rem" }}
        >
          <p>
            But my services go beyond just custom development - I'm also
            proficient in using CMS systems like WordPress and Shopify, making
            it easy for my clients to take control of their own websites and
            keep them up to date.
          </p>
        </ScrollAnimation> */}
        <ScrollAnimation
          animateIn="fadeInLeft"
          delay={0.3 * 1000}
          style={{ marginTop: "2rem", marginBottom: "2rem" }}
        >
          <p>
            With a deep understanding of the complete mobile development
            lifecycle—from ideation and design to development, testing, and
            deployment—I specialize in crafting robust mobile apps for both
            Android and iOS using reusable, efficient code. I take pride in
            building apps that are not only technically sound but also visually
            intuitive and performance-optimized.
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.4 * 1000}>
          <h3>Here are my main skills:</h3>
        </ScrollAnimation>
        <div className="hard-skills">
          {/* <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.1 * 1000}>
              <img src={wordpress} alt="Wordpress" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.12 * 1000}>
              <img src={shopify} alt="shopify" />
            </ScrollAnimation>
          </div> */}
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.13 * 1000}>
              <img src={reactIcon} alt="React" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
              <img src={jsIcon} alt="JavaScript" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.14 * 1000}>
              <img src={typescriptIcon} alt="Typescript" />
            </ScrollAnimation>
          </div>

          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.14 * 1000}>
              <img src={github} alt="Github" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.14 * 1000}>
              <img src={firebase} alt="Firebase" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.14 * 1000}>
              <img src={postman} alt="Postman" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.14 * 1000}>
              <img src={appstore} alt="Appstore" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.14 * 1000}>
              <img src={googleplay} alt="Googleplay" />
            </ScrollAnimation>
          </div>
          {/* <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.15 * 1000}>
              <img src={vueIcon} alt="Vue" />
            </ScrollAnimation>
          </div> */}
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.16 * 1000}>
              <img src={nodeIcon} alt="Node" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.16 * 1000}>
              <img src={javaIcon} alt="Java" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.16 * 1000}>
              <img src={kotlinIcon} alt="Kotlin" />
            </ScrollAnimation>
          </div>
          {/* <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.17 * 1000}>
              <img src={htmlIcon} alt="Html" />
            </ScrollAnimation>
          </div> */}
          {/* <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.18 * 1000}>
              <img src={cssIcon} alt="Css" />
            </ScrollAnimation>
          </div> */}
          {/* <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
              <img src={boostrapIcon} alt="bootstrap" />
            </ScrollAnimation>
          </div> */}
        </div>
      </div>
      <div className="about-image">
        <ScrollAnimation animateIn="fadeInRight" delay={0.2 * 1000}>
          {/* <img src={VinayakSingh} alt="Rahul Rabadiya" /> */}
          <img
            src={PathikNew}
            alt="Pathik Panchal"
            style={{
              borderRadius: 30,
              width: "300px", // Adjust width as needed
              height: "auto", // Maintain aspect ratio
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
            }}
          />
        </ScrollAnimation>
      </div>
    </Container>
  );
}
