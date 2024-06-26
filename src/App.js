import React from 'react';
// import { Logo } from './components'
import './App.css';

function App() {
  const showContent = true
  return (
    <div id="container">
      <header>
        {/* <Logo /> */}
      </header>
      {showContent && (
        <>
          <div id="content">
            <div className="section">
              <img src="img/press-photo-glissline.jpg" alt="press" />
              <p>
                Glissline is Colorado based abstract electronic producer Tom Metz.
                He has performed alongside many international acts including Phantogram, Max Tundra, Ulrich Schnauss, Black Moth Super Rainbow and Starfucker.
                Growing up in Fort Collins and moving to Denver in 2002, he has been heavily involved in the DIY/Indie music scenes of Colorado.
                He has released music with Denver labels Plastic Sound Supply, Bocumast, Laserpalace and more recently with the new Denver imprint Multidim Records.
              </p>
            </div>

            <div className="section">
              <h1>2024 LIVE DATES:</h1>
              <ul className="live-dates">
                <li className="date-item">
                  <div className="date">2024/08/03</div>
                  <div className="location">Denver</div>
                  <div className="link"><a href="https://multidim.net" target="_blank" rel="noreferrer">Multidim Listening Lawn</a></div>
                </li>
              </ul>
              <h2 style={{ marginBottom: '15px', opacity: 0.5 }}>PAST SHOWS:</h2>
              <ul className="past-shows" style={{ paddingTop: 0, opacity: 0.5 }}>
                <li className="date-item">
                  <div className="date">2024/02/28</div>
                  <div className="location">Denver</div>
                  <div className="link"><a href="https://broadwayroxy.com" target="_blank" rel="noreferrer">Roxy on Broadway</a></div>
                </li>
                <li className="date-item">
                  <div className="date">2019/10/18</div>
                  <div className="location">Berlin</div>
                  <div className="link"><a href="http://www.madameclaude.de" target="_blank" rel="noreferrer">Madame Claude</a></div>
                </li>
                <li className="date-item">
                  <div className="date">2019/07/26-28</div>
                  <div className="location">Denver</div>
                  <div className="link"><a href="https://www.undergroundmusicshowcase.com" target="_blank" rel="noreferrer">The Underground Music Showcase</a></div>
                </li>
                <li className="date-item">
                  <div className="date">2019/05/16</div>
                  <div className="location">Denver</div>
                  <div className="link"><a href="https://www.denverlibrary.org/content/ross-broadway-branch-library" target="_blank" rel="noreferrer">Ross-Broadway Branch Library</a></div>
                </li>
                <li className="date-item">
                  <div className="date">2019/02/13</div>
                  <div className="location">Denver</div>
                  <div className="link"><a href="https://www.facebook.com/events/2230505183905420/" target="_blank" rel="noreferrer">Lost Lake</a></div>
                </li>
                <li className="date-item">
                  <div className="date">2018/10/12</div>
                  <div className="location">Denver</div>
                  <div className="link"><a href="https://www.facebook.com/events/478402579328465/" target="_blank" rel="noreferrer">Multidim Launch Party</a></div>
                </li>
                <li className="date-item">
                  <div className="date">2018/07/28</div>
                  <div className="location">Denver</div>
                  <div className="link"><a href="https://www.theums.com" target="_blank" rel="noreferrer">UMS</a></div>
                </li>
                <li className="date-item">
                  <div className="date">2018/06/11</div>
                  <div className="location">Denver</div>
                  <div className="link"><a href="https://www.facebook.com/events/1886050188072477/" target="_blank" rel="noreferrer">The Ancient Elk House</a></div>
                </li>
                <li className="date-item">
                  <div className="date">2018/05/12</div>
                  <div className="location">Berlin</div>
                  <div className="link"><a href="http://www.madameclaude.de" target="_blank" rel="noreferrer">Madame Claude</a></div>
                </li>
                <li className="date-item">
                  <div className="date">2018/04/25</div>
                  <div className="location">Fort Collins</div>
                  <div className="link"><a href="http://focomx.focoma.org/" target="_blank" rel="noreferrer">FOCOMX</a></div>
                </li>
                <li className="date-item">
                  <div className="date">2018/04/05</div>
                  <div className="location">Denver</div>
                  <div className="link"><a href="http://physicopera.com/" target="_blank" rel="noreferrer">Syntax</a></div>
                </li>
                <li className="date-item">
                  <div className="date">2018/01/30</div>
                  <div className="location">Denver</div>
                  <div className="link"><a href="https://www.facebook.com/events/155266328588733/" target="_blank" rel="noreferrer">Animal Shelter</a></div>
                </li>
                <li className="date-item">
                  <div className="date">2017/09/09</div>
                  <div className="location">Berlin</div>
                  <div className="link"><a href="http://www.madameclaude.de" target="_blank" rel="noreferrer">Madame Claude</a></div>
                </li>
                <li className="date-item">
                  <div className="date">2017/09/02</div>
                  <div className="location">Berlin</div>
                  <div className="link"><a href="https://www.facebook.com/events/478548029172783" target="_blank" rel="noreferrer">Gloria Studios</a></div>
                </li>
                <li className="date-item">
                  <div className="date">2017/07/29</div>
                  <div className="location">Denver</div>
                  <div className="link"><a href="https://www.facebook.com/events/122656855000317" target="_blank" rel="noreferrer">Deep Club</a></div>
                </li>
              </ul>
            </div>

            {/* <div className="section">
              <h1>2024 LIVE DATES:</h1>
              <ul>
                <li>2024/08/03 - Denver - <a href="https://multidim.net" target="_blank" rel="noreferrer">Multidim Listening Lawn</a></li>
              </ul>
              <h2 style={{marginBottom: '15px', opacity: 0.5}}>PAST SHOWS:</h2>
              <ul style={{paddingTop: 0, opacity: 0.5}}>
                <li>2024/02/28 - Denver - <a href="https://broadwayroxy.com" target="_blank" rel="noreferrer">Roxy on Broadway</a></li>
                <li>2019/10/18 - Berlin - <a href="http://www.madameclaude.de" target="_blank" rel="noreferrer">Madame Claude</a></li>
                <li>2019/07/26-28 - Denver - <a href="https://www.undergroundmusicshowcase.com" target="_blank" rel="noreferrer">The Underground Music Showcase</a></li>
                <li>2019/05/16 - Denver - <a href="https://www.denverlibrary.org/content/ross-broadway-branch-library" target="_blank" rel="noreferrer">Ross-Broadway Branch Library</a></li>
                <li>2019/02/13 - Denver - <a href="https://www.facebook.com/events/2230505183905420/" target="_blank" rel="noreferrer">Lost Lake</a></li>
                <li>2018/10/12 - Denver - <a href="https://www.facebook.com/events/478402579328465/" target="_blank" rel="noreferrer">Multidim Launch Party</a></li>
                <li>2018/07/28 - Denver - <a href="https://www.theums.com" target="_blank" rel="noreferrer">UMS</a></li>
                <li>2018/06/11 - Denver - <a href="https://www.facebook.com/events/1886050188072477/" target="_blank" rel="noreferrer">The Ancient Elk House</a></li>
                <li>2018/05/12 - Berlin - <a href="http://www.madameclaude.de" target="_blank" rel="noreferrer">Madame Claude</a></li>
                <li>2018/04/25 - Fort Collins - <a href="http://focomx.focoma.org/" target="_blank" rel="noreferrer">FOCOMX</a></li>
                <li>2018/04/05 - Denver - <a href="http://physicopera.com/" target="_blank" rel="noreferrer">Syntax</a></li>
                <li>2018/01/30 - Denver - <a href="https://www.facebook.com/events/155266328588733/" target="_blank" rel="noreferrer">Animal Shelter</a></li>
                <li>2017/09/09 - Berlin - <a href="http://www.madameclaude.de" target="_blank" rel="noreferrer">Madame Claude</a></li>
                <li>2017/09/02 - Berlin - <a href="https://www.facebook.com/events/478548029172783" target="_blank" rel="noreferrer">Gloria Studios</a></li>
                <li>2017/07/29 - Denver - <a href="https://www.facebook.com/events/122656855000317" target="_blank" rel="noreferrer">Deep Club</a></li>
              </ul>
            </div> */}

            <div className="section">
              <h1>CONNECT</h1>
              <p>
                <a href="https://www.facebook.com/glissline1" target="_blank" rel="noreferrer">facebook</a><br />
                <a href="https://soundcloud.com/glissline" target="_blank" rel="noreferrer">soundcloud</a><br />
                <a href="https://glissline.bandcamp.com" target="_blank" rel="noreferrer">bandcamp</a><br />
                <a href="mailto:tommymetz@gmail.com" target="_blank" rel="noreferrer">tommymetz@gmail.com</a><br />
                <a href="GlisslineEPK.pdf" target="_blank" rel="noreferrer">electronic press kit</a><br />
              </p>
            </div>

            <div className="section">
              <img src="img/burst-firing.jpg" alt="burst firing" />
              <iframe title="burst firing embed" style={{border: 0, height: '307px'}} src="https://bandcamp.com/EmbeddedPlayer/album=1005407694/size=large/bgcol=ffffff/linkcol=7137dc/artwork=none/transparent=true/" seamless></iframe>
            </div>

            <div className="section">
              <img src="img/stynigmaplex.jpg" alt="stynigmaplex" />
              <iframe title="stynigmaplex" style={{border: 0, height: '120x'}} src="https://bandcamp.com/EmbeddedPlayer/album=2689564814/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=none/transparent=true/" seamless><a href="https://glissline.bandcamp.com/album/stynigmaplex">Stynigmaplex by Glissline</a></iframe>
            </div>

            <div className="section">
              <a style={{marginBottom: '15px'}} href="https://multidim.net/releases/digital-bipolarism" target="_blank" rel="noreferrer">
                <img src="img/digital-bipolarism.jpg" alt="digital bipolarism" />
              </a>
              <h1>'Digital Bipolarism' Out Now<br />On Multidim Records</h1>
              <p>
                <a href="https://multidim.net/releases/digital-bipolarism" target="_blank" rel="noreferrer">multidim</a>&nbsp;&nbsp;|&nbsp;&nbsp;
                <a href="https://open.spotify.com/album/2kL5Pf55jzSU1kD9YOg10o" target="_blank" rel="noreferrer">spotify</a>&nbsp;&nbsp;|&nbsp;&nbsp;
                <a href="https://music.apple.com/us/album/digital-bipolarism/1474718680" target="_blank" rel="noreferrer">apple</a>&nbsp;&nbsp;|&nbsp;&nbsp;
                <a href="https://glissline.bandcamp.com/album/digital-bipolarism" target="_blank" rel="noreferrer">bandcamp</a>
              </p>
            </div>

            <div className="section">
              <a id="feature" href="https://multidim.net/releases/horizon" target="_blank" rel="noreferrer">
                <img src="img/horizon-vinyl.jpg" alt="horizon-vinyl" />
              </a>
              <h1 style={{marginTop: '10px'}}>Horizon' Out Now<br />On Multidim Records</h1>
              <p>
                <a href="https://multidim.net/releases/horizon" target="_blank" rel="noreferrer">multidim</a>&nbsp;&nbsp;|&nbsp;&nbsp;
                <a href="https://open.spotify.com/album/3MnNgxZy1RF2NmARYFBQg2" target="_blank" rel="noreferrer">spotify</a>&nbsp;&nbsp;|&nbsp;&nbsp;
                <a href="https://music.apple.com/us/album/horizon/1472879742" target="_blank" rel="noreferrer">apple</a>&nbsp;&nbsp;|&nbsp;&nbsp;
                <a href="https://glissline.bandcamp.com/album/horizon" target="_blank" rel="noreferrer">bandcamp</a>
              </p>
            </div>

            <div className="section">
              <a href="http://horizon.glissline.com" target="_blank" rel="noreferrer">
                <img src="img/horizon-experience.jpg" alt="horizon experience" />
              </a>
              <h1 style={{marginTop: '10px'}}>Horizon' Interactive Experience</h1>
              <p>
                To coincide with his debut album ‘Horizon’ on <a href="https://multidim.net" target="_blank" rel="noreferrer">Multidim Records</a>, Glissline has created an interactive experience that deconstructs the album from start to finish. Each song’s components are represented with visual abstractions creating a synesthesia between the sound and vision of Glissline's distinct aesthetic. Explore the songs and their parts at <a href="https://horizon.glissline.com" target="_blank" rel="noreferrer">horizon.glissline.com</a>.
              </p>
            </div>

            <div className="section">
              <iframe title="horizon" height="300" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/392995824&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><br /><br />
              <iframe title="details" height="300" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/340973690&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><br /><br />
              <iframe title="waiting for time 2" height="300" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/567223710&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><br /><br />
            </div>

          </div>
          <footer>
            <p>&copy; Glissline</p>
          </footer>
        </>
      )}
    </div>
  );
}

export default App;
