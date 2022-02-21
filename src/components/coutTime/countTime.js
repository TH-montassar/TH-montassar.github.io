import Facebook from "./img/Facebook.svg";
import React from "react";
import "./countTime.css";

export default function countTime() {

  const timeDawn = ()=>{
    const future =Date.parse("2022-06-31T00:00:00.000Z");
    const   now = Date.now();
    const  timeLeftForGraduation=future-now;
    
    const days =Math.floor(timeLeftForGraduation/(1000*60*60*24));
    const hours =Math.floor(timeLeftForGraduation/(1000*60*60));
    const Minutes =Math.floor( timeLeftForGraduation/(1000*60));
    const seconds =Math.floor(timeLeftForGraduation/1000)
    
    const d =days;
    const h=hours-days*24;
    const m=Minutes-hours*60;
    const s=seconds -Minutes*60;
    
    document.getElementById("Days").innerText=d;
    document.getElementById("Hours").innerText=h;
    document.getElementById("Minutes").innerText=m;
    document.getElementById("Seconds").innerText=s;
      
    }
    setInterval(timeDawn, 1000);




  return (
    <div className="coutTime">
      <header>
        <a href="#">
          <span id="logo">high</span>level
        </a>
        <nav>
          <a href="#">
            Menu <i class="fas fa-bars"></i>
          </a>
        </nav>
      </header>
      <section class="sec">
        <div class="bio">
          <h1>
            We are working on something <span id="awesome">awesome !</span>
          </h1>
          <div class="disc">
            <p>
              <span>HIDHLEVEL</span> is working hard to launch a new site that's
              going to revolutionize
            </p>
            <p> the way you do business</p>
          </div>
        </div>
        <div class="cardTime">
          <div class="card">
            <div class="value" id="Days">
              --
            </div>
            <div>Days</div>
          </div>
          <div class="card">
            <div class="value" id="Hours">
              --
            </div>
            <div>Hours</div>
          </div>
          <div class="card">
            <div class="value" id="Minutes">
              --
            </div>
            <div>Minutes</div>
          </div>
          <div class="card">
            <div class="value" id="Seconds">
              --
            </div>
            <div>Seconds</div>
          </div>
        </div>

        <div class="email">
          <div>
            <i class="far fa-envelope"></i>
          </div>

          <form onsubmit="sendEmail(); reset(); return false;">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email here to get notified"
              required
            />
            <button type="submit">Send</button>
          </form>
        </div>
        <div class="social">
          <a
            href="https://www.linkedin.com/in/themri-montassar-160042149/"
            target="_blank"
            title="go to linkedin"
          >
            {" "}
            <i class="fab fa-linkedin"></i>{" "}
          </a>
          <a
            href="https://www.facebook.com/Montassarthemri/"
            target="_blank"
            title="go to facebook"
          >
            <i className="fab fa-facebook-square"></i>
          </a>
          <a
            href="https://github.com/TH-montassar"
            target="_blank"
            title="go to github"
          >
            <i class="fab fa-github"></i>
          </a>
          <a
            href="https://www.instagram.com/montassarthemri/?hl=fr"
            target="_blank"
            title="go to instagram"
          >
            <i class="fab fa-instagram"></i>
          </a>
        </div>
      </section>
    </div>
  );
}
