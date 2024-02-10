import React from 'react';
import './App.css';

function App() {
  return (
    <div id="container">
      <header>
        <div id="logo">
          <img src="/img/logo.svg" alt="logo" />
        </div>
      </header>
      <div id="content">
        <div className="section">
          <h1>LIVE:</h1>
          <ul>
            <li>2024/02/28 - Denver - <a href="https://broadwayroxy.com" target="_blank">Roxy on Broadway</a></li>
            <li>2024/08/05 - Denver - <a href="https://multidim.net" target="_blank">Multidim Listening Lawn</a></li>
          </ul>
          <h2 style={{marginBottom: '15px', opacity: 0.5}}>PAST SHOWS:</h2>
          <ul style={{paddingTop: 0, opacity: 0.5}}>
            <li>2019/10/18 - Berlin - <a href="http://www.madameclaude.de" target="_blank">Madame Claude</a></li>
            <li>2019/07/26-28 - Denver - <a href="https://www.undergroundmusicshowcase.com" target="_blank">The Underground Music Showcase</a></li>
            <li>2019/05/16 - Denver - <a href="https://www.denverlibrary.org/content/ross-broadway-branch-library" target="_blank">Ross-Broadway Branch Library</a></li>
            <li>2019/02/13 - Denver - <a href="https://www.facebook.com/events/2230505183905420/" target="_blank">Lost Lake</a></li>
            <li>2018/10/12 - Denver - <a href="https://www.facebook.com/events/478402579328465/" target="_blank">Multidim Launch Party</a></li>
            <li>2018/07/28 - Denver - <a href="https://www.theums.com" target="_blank">UMS</a></li>
            <li>2018/06/11 - Denver - <a href="https://www.facebook.com/events/1886050188072477/" target="_blank">The Ancient Elk House</a></li>
            <li>2018/05/12 - Berlin - <a href="http://www.madameclaude.de" target="_blank">Madame Claude</a></li>
            <li>2018/04/25 - Fort Collins - <a href="http://focomx.focoma.org/" target="_blank">FOCOMX</a></li>
            <li>2018/04/05 - Denver - <a href="http://physicopera.com/" target="_blank">Syntax</a></li>
            <li>2018/01/30 - Denver - <a href="https://www.facebook.com/events/155266328588733/" target="_blank">Animal Shelter</a></li>
            <li>2017/09/09 - Berlin - <a href="http://www.madameclaude.de" target="_blank">Madame Claude</a></li>
            <li>2017/09/02 - Berlin - <a href="https://www.facebook.com/events/478548029172783" target="_blank">Gloria Studios</a></li>
            <li>2017/07/29 - Denver - <a href="https://www.facebook.com/events/122656855000317" target="_blank">Deep Club</a></li>
          </ul>
        </div>

        <div className="section">
          <img src="img/press-photo-glissline.jpg" />
          <p>
            Glissline is Colorado based abstract electronic producer Tom Metz.
            He has performed alongside many international acts including Phantogram, Max Tundra, Ulrich Schnauss, Black Moth Super Rainbow and Starfucker.
            Growing up in Fort Collins and moving to Denver in 2002, he has been heavily involved in the DIY/Indie music scenes of Colorado.
            He has released music with Denver labels Plastic Sound Supply, Bocumast, Laserpalace and more recently with the new Denver imprint Multidim Records.
          </p>
        </div>

        <div className="section">
          <h1>CONNECT</h1>
          <p>
            <a href="https://www.facebook.com/glissline1" target="_blank">facebook</a><br />
            <a href="https://soundcloud.com/glissline" target="_blank">soundcloud</a><br />
            <a href="https://glissline.bandcamp.com" target="_blank">bandcamp</a><br />
            <a href="mailto:tommymetz@gmail.com" target="_blank">tommymetz@gmail.com</a><br />
            <a href="GlisslineEPK.pdf" target="_blank">epk</a><br />
          </p>
        </div>

        <div className="section">
          <img src="img/burst-firing.jpg" />
          <iframe style={{border: 0, height: '307px'}} src="https://bandcamp.com/EmbeddedPlayer/album=1005407694/size=large/bgcol=ffffff/linkcol=7137dc/artwork=none/transparent=true/" seamless></iframe>
        </div>

        <div className="section">
          <img src="img/stynigmaplex.jpg" />
          <iframe style={{border: 0, height: '120x'}} src="https://bandcamp.com/EmbeddedPlayer/album=2689564814/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=none/transparent=true/" seamless><a href="https://glissline.bandcamp.com/album/stynigmaplex">Stynigmaplex by Glissline</a></iframe>
        </div>

        <div className="section">
          <a style={{marginBottom: '15px'}} href="https://multidim.net/releases/digital-bipolarism" target="_blank">
            <img src="img/digital-bipolarism.jpg" />
          </a>
          <h1>'Digital Bipolarism' Out Now<br />On Multidim Records</h1>
          <p>
            <a href="https://multidim.net/releases/digital-bipolarism" target="_blank">multidim</a>&nbsp;&nbsp;|&nbsp;&nbsp;
            <a href="https://open.spotify.com/album/2kL5Pf55jzSU1kD9YOg10o" target="_blank">spotify</a>&nbsp;&nbsp;|&nbsp;&nbsp;
            <a href="https://music.apple.com/us/album/digital-bipolarism/1474718680" target="_blank">apple</a>&nbsp;&nbsp;|&nbsp;&nbsp;
            <a href="https://glissline.bandcamp.com/album/digital-bipolarism" target="_blank">bandcamp</a>
          </p>
        </div>

        <div className="section">
          <a id="feature" href="https://multidim.net/releases/horizon" target="_blank">
            <img src="img/horizon-vinyl.jpg" />
          </a>
          <h1 style={{marginTop: '10px'}}>Horizon' Out Now<br />On Multidim Records</h1>
          <p>
            <a href="https://multidim.net/releases/horizon" target="_blank">multidim</a>&nbsp;&nbsp;|&nbsp;&nbsp;
            <a href="https://open.spotify.com/album/3MnNgxZy1RF2NmARYFBQg2" target="_blank">spotify</a>&nbsp;&nbsp;|&nbsp;&nbsp;
            <a href="https://music.apple.com/us/album/horizon/1472879742" target="_blank">apple</a>&nbsp;&nbsp;|&nbsp;&nbsp;
            <a href="https://glissline.bandcamp.com/album/horizon" target="_blank">bandcamp</a>
          </p>
        </div>

        <div className="section">
          <a href="http://horizon.glissline.com" target="_blank">
            <img src="img/horizon-experience.jpg" />
          </a>
          <h1 style={{marginTop: '10px'}}>Horizon' Interactive Experience</h1>
          <p>
            To coincide with his debut album ‘Horizon’ on <a href="https://multidim.net" target="_blank">Multidim Records</a>, Glissline has created an interactive experience that deconstructs the album from start to finish. Each song’s components are represented with visual abstractions creating a synesthesia between the sound and vision of Glissline's distinct aesthetic. Explore the songs and their parts at <a href="https://horizon.glissline.com" target="_blank">horizon.glissline.com</a>.
          </p>
        </div>

        <div className="section">
          <iframe height="300" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/392995824&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><br /><br />
          <iframe height="300" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/340973690&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><br /><br />
          <iframe height="300" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/567223710&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><br /><br />
        </div>

      </div>
    </div>
  );
}

export default App;
