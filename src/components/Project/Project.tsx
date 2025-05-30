import { Container } from "./styles";
import githubIcon from "../../assets/github.svg";
// import DownloadApp from '../../assets/download.png'
import externalLink from "../../assets/external-link.svg";
import googleplay from "../../assets/googleplay.png";
import appstore from "../../assets/appstore.png";
import envanto from "../../assets/envanto.png";
import ScrollAnimation from "react-animate-on-scroll";

export function Project() {
  return (
    <Container id="project">
      <h2>My Projects</h2>
      <div className="projects">
        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              {/* <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {" "}
                <title>Folder</title>{" "}
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>{" "}
              </svg> */}
              <div className="project-links">
                <a
                  // href="https://github.com/CodeVinayak/Serverless-Voting-Application"
                  href="https://play.google.com/store/apps/details?id=com.multipz.gpbo&hl=enIN"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={googleplay}
                    alt="Visit site"
                    style={{ width: 35, height: 35 }}
                  />
                </a>
                {/* <a
                  href="https://vote.vinayaksingh.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={appstore}
                    alt="Visit site"
                    style={{ width: 35, height: 35 }}
                  />
                </a>{" "} */}
              </div>
            </header>
            <div className="body">
              <h3>GPBO : Global Patidar Business Organization</h3>
              <p>
                {" "}
                Developed a business and social networking React Native app
                designed to connect professionals and entrepreneurs. The app
                enables users to build networks, collaborate, sharing business
                internal wing wise, social media activities like social post ,
                stories upload and share insights, fostering both business
                growth and social interaction{" "}
              </p>
            </div>
            <footer>
              {" "}
              <ul className="tech-list">
                {" "}
                <li>PayUMoney</li> <li>API Integration</li> <li>Google Map</li>
                <li>Media Picker</li>{" "}
              </ul>{" "}
            </footer>
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              {/* <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {" "}
                <title>Folder</title>{" "}
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>{" "}
              </svg> */}
              <div className="project-links">
                <a
                  // href="https://github.com/CodeVinayak/Serverless-Voting-Application"
                  href="https://play.google.com/store/apps/details?id=com.sose.main&hl=en-IN"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={googleplay}
                    alt="Visit site"
                    style={{ width: 35, height: 35 }}
                  />
                </a>
                {/* <a
                  href="https://vote.vinayaksingh.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={appstore}
                    alt="Visit site"
                    style={{ width: 35, height: 35 }}
                  />
                </a>{" "} */}
              </div>
            </header>
            <div className="body">
              <h3>SOSE : Sidha Kishan Se</h3>
              <p>
                {" "}
                Developed An organic product selling React Native app integrated
                with a Python-based ERP backend for seamless inventory and order
                management. The app provides users with a smooth shopping
                experience, connecting them to a variety of organic products.{" "}
              </p>
            </div>
            <footer>
              {" "}
              <ul className="tech-list">
                {" "}
                <li>Python Backend</li> <li>PayUMoney Payment</li>
                <li>Firebase</li> <li>API Integration</li>{" "}
              </ul>{" "}
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              {/* <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {" "}
                <title>Folder</title>{" "}
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>{" "}
              </svg> */}
              <div className="project-links">
                <a
                  // href="https://github.com/CodeVinayak/Serverless-Voting-Application"
                  href="https://play.google.com/store/apps/details?id=com.indiainfluencer.app"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={googleplay}
                    alt="Visit site"
                    style={{ width: 35, height: 35 }}
                  />
                </a>
                {/* <a
                  href="https://vote.vinayaksingh.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={appstore}
                    alt="Visit site"
                    style={{ width: 35, height: 35 }}
                  />
                </a>{" "} */}
              </div>
            </header>
            <div className="body">
              <h3>
                Influenstar: Marketing, Business Promotion and hire influencer
                App
              </h3>
              <p>
                {" "}
                A marketing, business promotion, and influencer hiring platform
                that allows users or business owners or different influencer to
                send connect requests and engage through chat, developed using
                React Native, Redux Toolkit, and TypeScript. The app streamlines
                influencer collaborations to enhance brand promotion.{" "}
              </p>
            </div>
            <footer>
              {" "}
              <ul className="tech-list">
                {" "}
                <li>Chat</li> <li>Firebase</li>
                <li>Redux-Toolkit</li> <li>Media picker</li>{" "}
              </ul>{" "}
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              {/* <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {" "}
                <title>Folder</title>{" "}
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>{" "}
              </svg> */}
              <div className="project-links">
                <a
                  // href="https://github.com/CodeVinayak/Serverless-Voting-Application"
                  href="https://play.google.com/store/apps/details?id=com.dropili&hl=en-IN"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={googleplay}
                    alt="Visit site"
                    style={{ width: 35, height: 35 }}
                  />
                </a>
                {/* <a
                  href="https://vote.vinayaksingh.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={appstore}
                    alt="Visit site"
                    style={{ width: 35, height: 35 }}
                  />
                </a>{" "} */}
              </div>
            </header>
            <div className="body">
              <h3>Dropili</h3>
              <p>
                {" "}
                Dropili is the easiest way to share your social networks media,
                contact, business or music with anyone you meet. All you have to
                do is touch it against the back of someone's phone and your
                profile will instantly appear on their phone. The Dropili app is
                where you manage your profile. Add, remove or update links.
                Other people don't need an app or a Dropili to receive your
                information. Start connecting with Dropili!{" "}
              </p>
            </div>
            <footer>
              {" "}
              <ul className="tech-list">
                {" "}
                <li>RazorPay</li> <li>SMS Gateway</li>
                <li>Firebase</li> <li>API Integration</li>{" "}
              </ul>{" "}
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              {/* <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {" "}
                <title>Folder</title>{" "}
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>{" "}
              </svg> */}
              <div className="project-links">
                <a
                  // href="https://github.com/CodeVinayak/Serverless-Voting-Application"
                  href="https://play.google.com/store/apps/details?id=mingle.android.mingle"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={googleplay}
                    alt="Visit site"
                    style={{ width: 35, height: 35 }}
                  />
                </a>
                {/* <a
                  href="https://vote.vinayaksingh.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={appstore}
                    alt="Visit site"
                    style={{ width: 35, height: 35 }}
                  />
                </a>{" "} */}
              </div>
            </header>
            <div className="body">
              <h3>Mingle: Online Chat & Dating</h3>
              <p>
                {" "}
                There are millions of singles waiting to meet their next date or
                relationship on Mingle dating app. Our goal is to match you with
                the best dates whether it's someone nearby or the location you
                desire. Tired of scrolling through photos? We have millions of
                members with video profiles too so you can get a better sense of
                chemistry. Dive into the Future of Dating with Our Sizzling AI
                Features! 🚀{" "}
              </p>
            </div>
            <footer>
              {" "}
              <ul className="tech-list">
                {" "}
                <li>RazorPay</li> <li>SMS Gateway</li>
                <li>Firebase</li> <li>API Integration</li>{" "}
              </ul>{" "}
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              {/* <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {" "}
                <title>Folder</title>{" "}
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>{" "}
              </svg> */}
              <div className="project-links">
                <a
                  // href="https://play.google.com/store/apps/details?id=com.vuub&hl=en-IN"
                  href=" https://play.google.com/store/apps/details?id=com.marinotourist "
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={googleplay}
                    alt="Visit site"
                    style={{ width: 35, height: 35 }}
                  />
                </a>
                {/* <a
                  href="https://vote.vinayaksingh.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={appstore}
                    alt="Visit site"
                    style={{ width: 35, height: 35 }}
                  />
                </a>{" "} */}
              </div>
            </header>
            <div className="body">
              <h3>Marino Tourist </h3>
              <p>
                {" "}
                Since 2005 Marino Tourist MT Hotels has been offering its guests
                various accommodation solutions by the sea in San Vito lo Capo:
                from the room in the Hotel with a tasty breakfast overlooking
                the sea, from the apartment in the Residence, from the holiday
                home to the Villa, up to offering exclusive solutions. of
                independent accommodation with SPA or swimming pools, in various
                seaside resorts in the province of Trapani.{" "}
              </p>
            </div>
            <footer>
              {" "}
              <ul className="tech-list">
                {" "}
                <li>React Native</li>{" "}
              </ul>{" "}
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              {/* <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {" "}
                <title>Folder</title>{" "}
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>{" "}
              </svg> */}
              <div className="project-links">
                <a
                  // href="https://github.com/CodeVinayak/Serverless-Voting-Application"
                  href="https://play.google.com/store/apps/details?id=com.eurekamice"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={googleplay}
                    alt="Visit site"
                    style={{ width: 35, height: 35 }}
                  />
                </a>
                {/* <a
                  href="https://vote.vinayaksingh.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={appstore}
                    alt="Visit site"
                    style={{ width: 35, height: 35 }}
                  />
                </a>{" "} */}
              </div>
            </header>
            <div className="body">
              <h3>Eureka EventHub</h3>
              <p>
                {" "}
                With this app you can see events, buyers or suppliers. Download
                info and see badge of other persons{" "}
              </p>
            </div>
            <footer>
              {" "}
              <ul className="tech-list">
                {" "}
                <li>React Native</li> <li>Redux</li>{" "}
              </ul>{" "}
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              {/* <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {" "}
                <title>Folder</title>{" "}
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>{" "}
              </svg> */}
              <div className="project-links">
                <a
                  // href="https://github.com/CodeVinayak/Serverless-Voting-Application"
                  href="https://play.google.com/store/apps/details?id=branded.com.missiondayspa"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={googleplay}
                    alt="Visit site"
                    style={{ width: 35, height: 35 }}
                  />
                </a>
                {/* <a
                  href="https://vote.vinayaksingh.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={appstore}
                    alt="Visit site"
                    style={{ width: 35, height: 35 }}
                  />
                </a>{" "} */}
              </div>
            </header>
            <div className="body">
              <h3>MISSION Day Spa</h3>
              <p>
                {" "}
                Ease of mind, body & spirit, know just you are just a tap away
                from that ultimate spa experience you've come to know and trust.
                Pre schedule your reoccurring appointments for memberships. Look
                for openenings and plan your get-away and that perfect spa
                party. Schedule your couples massage and Ayurvedic facial. It's
                all available at your fingertips. Looking for that perfect gift
                but simply cannot decide? You can purchase a virtual gift
                certificate for a spa experience from our app.{" "}
              </p>
            </div>
            <footer>
              {" "}
              <ul className="tech-list">
                {" "}
                <li>React Native</li> <li>Redux</li>{" "}
              </ul>{" "}
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              {/* <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {" "}
                <title>Folder</title>{" "}
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>{" "}
              </svg> */}
              <div className="project-links">
                <a
                  // href="https://github.com/CodeVinayak/Serverless-Voting-Application"
                  href=" https://play.google.com/store/apps/details?id=chinagate.app"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={googleplay}
                    alt="Visit site"
                    style={{ width: 35, height: 35 }}
                  />
                </a>
                {/* <a
                  href="https://apps.apple.com/in/app/opus-mobile/id1459987656"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={appstore}
                    alt="Visit site"
                    style={{ width: 35, height: 35 }}
                  />
                </a>{" "} */}
              </div>
            </header>
            <div className="body">
              <h3>China Gate</h3>
              <p>
                {" "}
                You can order food delivery or takeaway and also to book tables,
                right from your smartphone! Ordering is now very simple – Order
                – Select your favorite food from the menu and place order Eat -
                You’ll receive an email confirming your delivery time. Just sit
                back and wait for it to arrive. You can rate and review us.
                Enjoy your meal !!{" "}
              </p>
            </div>
            <footer>
              {" "}
              <ul className="tech-list">
                {" "}
                <li>React Native</li>
                <li>Redux</li> <li>Realm</li>{" "}
              </ul>{" "}
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              {/* <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {" "}
                <title>Folder</title>{" "}
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>{" "}
              </svg> */}
              <div className="project-links">
                {/* <a
                  href="https://codecanyon.net/item/restorder-android-a-single-restaurant-food-ordering-app/22900313"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={envanto}
                    alt="Visit site"
                    style={{
                      width: 80,
                      height: 40,
                      borderRadius: 20,
                    }}
                  />
                </a> */}
                <a
                  href="https://apps.apple.com/us/app/esthetician-resource-guide-app/id1574215990"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={appstore}
                    alt="Visit site"
                    style={{ width: 35, height: 35 }}
                  />
                </a>{" "}
              </div>
            </header>
            <div className="body">
              <h3>Esthetician Resource Guide App</h3>
              <p>
                {" "}
                The app offers education courses for licensed professionals. The
                app functionalities contain Customer registration, profile
                creation, watch online videos, read content, view pdf, Customer
                purchase subscription using Apple auto pay, Google auto pay.{" "}
              </p>
            </div>
            <footer>
              {" "}
              <ul className="tech-list">
                {" "}
                <li>React Native</li> <li>Redux</li>
                <li>Auto Pay System</li>{" "}
              </ul>{" "}
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              {/* <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {" "}
                <title>Folder</title>{" "}
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>{" "}
              </svg> */}
              <div className="project-links">
                {/* <a
                  // href="https://github.com/CodeVinayak/Serverless-Voting-Application"
                  href=" https://play.google.com/store/apps/details?id=com.opus.app"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={googleplay}
                    alt="Visit site"
                    style={{ width: 35, height: 35 }}
                  />
                </a>
                <a
                  href="https://apps.apple.com/in/app/opus-mobile/id1459987656"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={appstore}
                    alt="Visit site"
                    style={{ width: 35, height: 35 }}
                  />
                </a>{" "} */}
              </div>
            </header>
            <div className="body">
              <h3>Opus Penpal</h3>
              <p>
                {" "}
                Opus is a penpal connecting app. The most amazing thing is that
                it connects people sharing the same interest. The app
                functionalities contain Customer registration, profile creation,
                creating a post, sending friend requests and the most
                interesting firebase chat with all major chat feature support.{" "}
              </p>
            </div>
            <footer>
              {" "}
              <ul className="tech-list">
                {" "}
                <li>React Native</li> <li>Firebase</li>
                <li>Redux</li> <li>Realm</li>{" "}
              </ul>{" "}
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              {/* <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {" "}
                <title>Folder</title>{" "}
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>{" "}
              </svg> */}
              <div className="project-links">
                {/* <a
                  // href="https://github.com/CodeVinayak/Serverless-Voting-Application"
                  href="https://play.google.com/store/apps/details?id=com.ommart&hl=en-IN"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={googleplay}
                    alt="Visit site"
                    style={{ width: 35, height: 35 }}
                  />
                </a>
                <a
                  href="https://vote.vinayaksingh.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={appstore}
                    alt="Visit site"
                    style={{ width: 35, height: 35 }}
                  />
                </a>{" "} */}
              </div>
            </header>
            <div className="body">
              <h3>Om Mart : B2B Vendor Distribution Channel App</h3>
              <p>
                {" "}
                Developed A B2B vendor distribution channel app built using
                React Native and Redux Toolkit for efficient state management.
                The app enhances vendor operations, streamlining inventory
                control, different login roles like distributor, dealer, ASM,
                area sales manager ordering feature with incentives and order
                processing for businesses.{" "}
              </p>
            </div>
            <footer>
              {" "}
              <ul className="tech-list">
                {" "}
                <li>RazorPay</li> <li>SMS Gateway</li>
                <li>Firebase</li> <li>API Integration</li>{" "}
              </ul>{" "}
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              {/* <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {" "}
                <title>Folder</title>{" "}
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>{" "}
              </svg> */}
              <div className="project-links">
                {/* <a
                  // href="https://github.com/CodeVinayak/Serverless-Voting-Application"
                  href="https://play.google.com/store/apps/details?id=com.rizbook&hl=en-IN"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={googleplay}
                    alt="Visit site"
                    style={{ width: 35, height: 35 }}
                  />
                </a>
                <a
                  href="https://vote.vinayaksingh.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={appstore}
                    alt="Visit site"
                    style={{ width: 35, height: 35 }}
                  />
                </a>{" "} */}
              </div>
            </header>
            <div className="body">
              <h3>RizBook: Service provider and service booking App</h3>
              <p>
                {" "}
                A service provider and service booking app developed using React
                Native, Redux Toolkit, and TypeScript. The app offers seamless
                booking functionality, near by services listing, appointment
                slot booking with date and time availability, booking history,
                booking status tracking, notifications connecting users with
                various service providers efficiently.{" "}
              </p>
            </div>
            <footer>
              {" "}
              <ul className="tech-list">
                {" "}
                <li>Stripe</li> <li>Google Map</li>
                <li>Redux-Toolkit</li> <li>TypeScript</li>{" "}
              </ul>{" "}
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              {/* <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {" "}
                <title>Folder</title>{" "}
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>{" "}
              </svg> */}
              <div className="project-links">
                {/* <a
                  // href="https://github.com/CodeVinayak/Serverless-Voting-Application"
                  href="https://play.google.com/store/apps/details?id=com.vuub&hl=en-IN"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={googleplay}
                    alt="Visit site"
                    style={{ width: 35, height: 35 }}
                  />
                </a>
                <a
                  href="https://vote.vinayaksingh.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={appstore}
                    alt="Visit site"
                    style={{ width: 35, height: 35 }}
                  />
                </a>{" "} */}
              </div>
            </header>
            <div className="body">
              <h3>VuuB Memo: Story reel create and social media App</h3>
              <p>
                {" "}
                A story reel creation and social media app built with React
                Native, Redux Toolkit, and TypeScript. The app allows users to
                create, share, chat each other,follow and engage with dynamic
                story reels on a social platform.{" "}
              </p>
            </div>
            <footer>
              {" "}
              <ul className="tech-list">
                {" "}
                <li>Chat</li> <li>Firebase</li>
                <li>Redux-Toolkit</li> <li>Media picker</li>{" "}
              </ul>{" "}
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              {/* <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {" "}
                <title>Folder</title>{" "}
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>{" "}
              </svg> */}
              <div className="project-links">
                {/* <a
                  // href="https://github.com/CodeVinayak/Serverless-Voting-Application"
                  href=" https://play.google.com/store/apps/details?id=com.opus.app"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={googleplay}
                    alt="Visit site"
                    style={{ width: 35, height: 35 }}
                  />
                </a>
                <a
                  href="https://apps.apple.com/in/app/opus-mobile/id1459987656"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={appstore}
                    alt="Visit site"
                    style={{ width: 35, height: 35 }}
                  />
                </a>{" "} */}
              </div>
            </header>
            <div className="body">
              <h3>Maayaa Clothing</h3>
              <p>
                {" "}
                Maayaa Clothing since its inception in 2001 is into designing,
                manufacturing and wholesale of Indian and Indo- western wear.
                Manage Cart Place a bulk order.{" "}
              </p>
            </div>
            <footer>
              {" "}
              <ul className="tech-list">
                {" "}
                <li>React Native</li>
                <li>Realm</li>{" "}
              </ul>{" "}
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              {/* <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {" "}
                <title>Folder</title>{" "}
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>{" "}
              </svg> */}
              <div className="project-links">
                {/* <a
                  // href="https://github.com/CodeVinayak/Serverless-Voting-Application"
                  href=" https://play.google.com/store/apps/details?id=com.opus.app"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={googleplay}
                    alt="Visit site"
                    style={{ width: 35, height: 35 }}
                  />
                </a>
                <a
                  href="https://apps.apple.com/in/app/opus-mobile/id1459987656"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={appstore}
                    alt="Visit site"
                    style={{ width: 35, height: 35 }}
                  />
                </a>{" "} */}
              </div>
            </header>
            <div className="body">
              <h3>Doric Bed Boutique Hotel</h3>
              <p>
                {" "}
                The Doric Bed Boutique Hotel Resort is immersed in the landscape
                of the Valley of the Temples, a UNESCO heritage site. Hotel
                information, Map, GPS and Location tracking, Speech to Text
                features include. This app is made for special blind people.{" "}
              </p>
            </div>
            <footer>
              {" "}
              <ul className="tech-list">
                {" "}
                <li>React Native</li>{" "}
              </ul>{" "}
            </footer>
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              {/* <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {" "}
                <title>Folder</title>{" "}
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>{" "}
              </svg> */}
              <div className="project-links">
                {/* <a
                  // href="https://github.com/CodeVinayak/Serverless-Voting-Application"
                  href=" https://play.google.com/store/apps/details?id=com.opus.app"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={googleplay}
                    alt="Visit site"
                    style={{ width: 35, height: 35 }}
                  />
                </a>
                <a
                  href="https://apps.apple.com/in/app/opus-mobile/id1459987656"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={appstore}
                    alt="Visit site"
                    style={{ width: 35, height: 35 }}
                  />
                </a>{" "} */}
              </div>
            </header>
            <div className="body">
              <h3>JC Security</h3>
              <p>
                {" "}
                JC Security Services (JCSS) is a licensed Security Agency in
                Singapore. Daily guard attendance, guard patrolling, visitors
                check-in and check-out, incident management, facility
                management, QR code scanning, multiple media upload
                functionalities included in this app.{" "}
              </p>
            </div>
            <footer>
              {" "}
              <ul className="tech-list">
                {" "}
                <li>React Native</li>
                <li>Realm</li>{" "}
              </ul>{" "}
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              {/* <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {" "}
                <title>Folder</title>{" "}
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>{" "}
              </svg> */}
              <div className="project-links">
                {/* <a
                  // href="https://github.com/CodeVinayak/Serverless-Voting-Application"
                  href=" https://play.google.com/store/apps/details?id=com.opus.app"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={googleplay}
                    alt="Visit site"
                    style={{ width: 35, height: 35 }}
                  />
                </a>
                <a
                  href="https://apps.apple.com/in/app/opus-mobile/id1459987656"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={appstore}
                    alt="Visit site"
                    style={{ width: 35, height: 35 }}
                  />
                </a>{" "} */}
              </div>
            </header>
            <div className="body">
              <h3>Ajmal Perfume</h3>
              <p> Shop online ajmal perfumes </p>
            </div>
            <footer>
              {" "}
              <ul className="tech-list">
                {" "}
                <li>Andriod</li> <li>SQLITE</li>{" "}
              </ul>{" "}
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              {/* <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {" "}
                <title>Folder</title>{" "}
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>{" "}
              </svg> */}
              <div className="project-links">
                {/* <a
                  // href="https://github.com/CodeVinayak/Serverless-Voting-Application"
                  href=" https://play.google.com/store/apps/details?id=com.opus.app"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={googleplay}
                    alt="Visit site"
                    style={{ width: 35, height: 35 }}
                  />
                </a>
                <a
                  href="https://apps.apple.com/in/app/opus-mobile/id1459987656"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={appstore}
                    alt="Visit site"
                    style={{ width: 35, height: 35 }}
                  />
                </a>{" "} */}
              </div>
            </header>
            <div className="body">
              <h3>Approach</h3>
              <p>
                {" "}
                User login and Registration, Rich user interface, User-driven
                app allowing networking, Find relevant job opportunities
                matching your skill set right into your profile, Creation and
                sharing of posts{" "}
              </p>
            </div>
            <footer>
              {" "}
              <ul className="tech-list">
                {" "}
                <li>Android</li> <li>SQLITE</li>{" "}
              </ul>{" "}
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              {/* <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {" "}
                <title>Folder</title>{" "}
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>{" "}
              </svg> */}
              <div className="project-links">
                {/* <a
                  // href="https://github.com/CodeVinayak/Serverless-Voting-Application"
                  href=" https://play.google.com/store/apps/details?id=com.opus.app"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={googleplay}
                    alt="Visit site"
                    style={{ width: 35, height: 35 }}
                  />
                </a>
                <a
                  href="https://apps.apple.com/in/app/opus-mobile/id1459987656"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={appstore}
                    alt="Visit site"
                    style={{ width: 35, height: 35 }}
                  />
                </a>{" "} */}
              </div>
            </header>
            <div className="body">
              <h3>Hairfinity</h3>
              <p>
                {" "}
                Use the Hairfinity Commitment App to help you accomplish your
                hair goals. These Apps include Profile, Journal, My plan,
                Message, Events, Find a Retailer, Buy Online, Hair Consultation.{" "}
              </p>
            </div>
            <footer>
              {" "}
              <ul className="tech-list">
                {" "}
                <li>Android</li> <li>SQLITE</li>{" "}
              </ul>{" "}
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              {/* <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {" "}
                <title>Folder</title>{" "}
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>{" "}
              </svg> */}
              <div className="project-links">
                {/* <a
                  // href="https://github.com/CodeVinayak/Serverless-Voting-Application"
                  href=" https://play.google.com/store/apps/details?id=com.opus.app"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={googleplay}
                    alt="Visit site"
                    style={{ width: 35, height: 35 }}
                  />
                </a>
                <a
                  href="https://apps.apple.com/in/app/opus-mobile/id1459987656"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={appstore}
                    alt="Visit site"
                    style={{ width: 35, height: 35 }}
                  />
                </a>{" "} */}
              </div>
            </header>
            <div className="body">
              <h3>BSK Parent.</h3>
              <p>
                {" "}
                Currently in Beta mode,The BSK Parent App is the easiest way for
                parents to stay connected with the school{" "}
              </p>
            </div>
            <footer>
              {" "}
              <ul className="tech-list">
                {" "}
                <li>React Native</li> <li>Redux</li>{" "}
              </ul>{" "}
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              {/* <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {" "}
                <title>Folder</title>{" "}
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>{" "}
              </svg> */}
              <div className="project-links">
                {/* <a
                  // href="https://github.com/CodeVinayak/Serverless-Voting-Application"
                  href=" https://play.google.com/store/apps/details?id=com.opus.app"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={googleplay}
                    alt="Visit site"
                    style={{ width: 35, height: 35 }}
                  />
                </a>
                <a
                  href="https://apps.apple.com/in/app/opus-mobile/id1459987656"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={appstore}
                    alt="Visit site"
                    style={{ width: 35, height: 35 }}
                  />
                </a>{" "} */}
              </div>
            </header>
            <div className="body">
              <h3> Femi Driver & Femi Customer</h3>
              <p>
                {" "}
                Femi App is the most efficient way to find the passenger through
                the app and increase earning. Femi taxi will help the customer
                to avail the finest taxi service in town{" "}
              </p>
            </div>
            <footer>
              {" "}
              <ul className="tech-list">
                {" "}
                <li>React Native</li> <li>Redux</li>{" "}
              </ul>{" "}
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              {/* <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {" "}
                <title>Folder</title>{" "}
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>{" "}
              </svg> */}
              <div className="project-links">
                {/* <a
                  // href="https://github.com/CodeVinayak/Serverless-Voting-Application"
                  href=" https://play.google.com/store/apps/details?id=com.opus.app"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={googleplay}
                    alt="Visit site"
                    style={{ width: 35, height: 35 }}
                  />
                </a>
                <a
                  href="https://apps.apple.com/in/app/opus-mobile/id1459987656"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={appstore}
                    alt="Visit site"
                    style={{ width: 35, height: 35 }}
                  />
                </a>{" "} */}
              </div>
            </header>
            <div className="body">
              <h3>Myra</h3>
              <p>
                {" "}
                Myra is designed to provide young women and men with unbiased
                information on contraception, family planning, pregnancy,
                delivery, sexuality, sexual health, STIs and anatomy{" "}
              </p>
            </div>
            <footer>
              {" "}
              <ul className="tech-list">
                {" "}
                <li>React Native</li> <li>Redux</li>{" "}
              </ul>{" "}
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              {/* <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {" "}
                <title>Folder</title>{" "}
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>{" "}
              </svg> */}
              <div className="project-links">
                {/* <a
                  // href="https://github.com/CodeVinayak/Serverless-Voting-Application"
                  href=" https://play.google.com/store/apps/details?id=com.opus.app"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={googleplay}
                    alt="Visit site"
                    style={{ width: 35, height: 35 }}
                  />
                </a>
                <a
                  href="https://apps.apple.com/in/app/opus-mobile/id1459987656"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={appstore}
                    alt="Visit site"
                    style={{ width: 35, height: 35 }}
                  />
                </a>{" "} */}
              </div>
            </header>
            <div className="body">
              <h3>Club Carlos Fitness</h3>
              <p>
                {" "}
                Club Carlos brings fitness directly to you with up to 5 weekly
                live virtual and over 50 on-demand classes available anytime you
                want them.{" "}
              </p>
            </div>
            <footer>
              {" "}
              <ul className="tech-list">
                {" "}
                <li>React Native</li> <li>Redux</li>{" "}
              </ul>{" "}
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              {/* <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {" "}
                <title>Folder</title>{" "}
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>{" "}
              </svg> */}
              <div className="project-links">
                {/* <a
                  // href="https://github.com/CodeVinayak/Serverless-Voting-Application"
                  href=" https://play.google.com/store/apps/details?id=com.opus.app"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={googleplay}
                    alt="Visit site"
                    style={{ width: 35, height: 35 }}
                  />
                </a>
                <a
                  href="https://apps.apple.com/in/app/opus-mobile/id1459987656"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={appstore}
                    alt="Visit site"
                    style={{ width: 35, height: 35 }}
                  />
                </a>{" "} */}
              </div>
            </header>
            <div className="body">
              <h3> Goatty</h3>
              <p>
                {" "}
                App contains feed, campaign, product listing and user profile
                sections. User can volunteer in campaign and Donate also{" "}
              </p>
            </div>
            <footer>
              {" "}
              <ul className="tech-list">
                {" "}
                <li>React Native</li> <li>Redux</li>{" "}
              </ul>{" "}
            </footer>
          </div>
        </ScrollAnimation>

        

        {/* <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b "
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <title>Folder</title>{" "}
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>{" "}
              </svg>
              <div className="project-links">
                <a
                  href="https://github.com/CodeVinayak/AI-Chatbot-Assistant"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={githubIcon} alt="Visit site" />{" "}
                </a>
                <a
                  href="https://ai-chatbot-t8fn.onrender.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>GeniusBot: AI-Powered Assistance with PDF Insight</h3>
              <p>
                Developed an interactive chatbot application using Streamlit,
                OpenAI's GPT-3.5-turbo language model, and PyPDF2 for PDF text
                extraction, enabling users to ask context-based questions on
                uploaded PDFs and general queries.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Streamlit</li>
                <li>PyPDF2</li>
                <li>LangChain</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a
                  href="https://github.com/CodeVinayak/Jupyter-Notebook/tree/main/Credit%20Risk%20Analysis"
                  target="\_blank"
                  rel="noreferrer"
                >
                  <img src={githubIcon} alt="Visit site" />
                </a>
                <a
                  href="https://github.com/CodeVinayak/Jupyter-Notebook/blob/main/Credit%20Risk%20Analysis/Credit_Risk_Analysis.ipynb"
                  target="\_blank"
                  rel="noreferrer"
                >
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Credit Risk Analysis Project</h3>
              <p>
                Developed a highly accurate credit risk classification model
                using XGBoost, achieving 100% precision, recall, and F1-scores
                for predicting loan defaults.Implemented rigorous data
                preprocessing, feature engineering, and hyperparameter tuning on
                imbalanced credit risk data, employing ensemble methods,
                cross-validation, and model interpretation techniques.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>XGBoost</li>
                <li>Pandas</li>
                <li>Matplotlib</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b "
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a
                  href="https://github.com/CodeVinayak/MediBook-Medical-Appointment-Scheduler-with-Health-History"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={githubIcon} alt="Visit site" />
                </a>
                <a
                  href="https://medibook.vinayaksingh.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>
                MediBook: Medical Appointment Scheduler with Health History
              </h3>
              <p>
                Developed a secure medical appointment management platform with
                CRUD functionality, utilizing role-based access control,
                encryption techniques, and a robust MySQL database with
                normalized schema design and stored procedures for efficient
                scheduling, data privacy, and reliable retrieval of patient
                records.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>PHP</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>MySQL</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <title>Code</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a
                  href="https://github.com/CodeVinayak/Real-Time-Hand-Gesture-Driven-3D-Object-Manipulation"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={githubIcon} alt="Visit site" />
                </a>
                <a
                  href="https://youtu.be/NOm-3MynPLE"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Real-Time Hand Gesture-Driven 3D Object Manipulation</h3>
              <p>
                Developed a real-time hand gesture recognition system for
                intuitive 3D object manipulation. Leveraged a multimodal
                approach integrating OpenCV for video processing, MediaPipe for
                hand detection/landmark extraction, and scikit-learn for machine
                learning model training. Achieved 95.2% accuracy in hand gesture
                classification with efficient real-time performance.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>OpenCV</li>
                <li>MediaPipe</li>
                <li>scikit-learn</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b "
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a
                  href="https://velocityai.vinayaksingh.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>VeloCityAI</h3>
              <p>
                VelocityAI is a website that allows users to get instant answers
                to any question and generate stunning AI pictures using OpenAI's
                GPT-3 and DALL-E model.With VelocityAI, users can type in
                text-based prompts and receive a corresponding response.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>React</li>
                <li>Typescript</li>
                <li>Html</li>
                <li>css</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation> */}

        {/* <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links">
                <a href="https://justmedicalbooks.com/" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>MedicalBooks - Book Selling Site</h3>
              <p>
                This website sells medical books online and is popular with medical students. Medical students use it to buy books and acquire knowledge. The site has all kinds of medical books in one place.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Wordpress</li>
                <li>Woocommerce</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation> */}

        {/* <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links">
                <a href="https://drrohitdamor.com" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Dr.Rohit Damor - Online Appointment Booking Site</h3>
              <p>
                This website allows people to easily book appointments with you online. It takes just a minute to schedule a meeting. This kind of site is helpful for booking appointments and not missing any potential clients. You should try this website to see how convenient and efficient it is.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Wordpress</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation> */}

        {/* <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links">
                <a href="https://mitulindustries.com/" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Mitul Industries - Manufacturing Industries Site</h3>
              <p>
              This manufacturing industry website shows off products and helps the business get more customers and information online. Making products is important but making money from them is the goal. This site can help the business make more profit.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Wordpress</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation> */}

        {/* 
        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links">
                <a href="https://mayatmaj.com/" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Mayatmaj - Film Production Site</h3>
              <p>
                This agency website promotes post production, virtual production, and video marketing services. It shows previous client work and reviews to get more business. If you need help with production, this website can give you information and connect you with the right people.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Wordpress</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation> */}

        {/* <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links">
                <a href="https://www.smartcornersproperties.com/" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>SmartCorners - Real Estate Properties Site</h3>
              <p>
              This real estate site displays land properties and helps buyers and sellers. Buyers can see lots of pictures, videos, and details about properties before visiting in person. It makes it easier for buyers to find what they want and helps sellers get more attention.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Wordpress</li>               
              </ul>
            </footer>
          </div>
        </ScrollAnimation> */}

        {/* <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links">
                <a href="https://madewithluv.in/" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>MadeWithLuv - HomeDecor Site</h3>
              <p>
                This website sells home decor products and helps people decorate their homes. It is easy to find what you need, whether it's furniture or decorations. The site is useful for people who want to make their homes look nice and need some help.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Wordpress</li>
                <li>Woocommerce</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation> */}
      </div>
    </Container>
  );
}
