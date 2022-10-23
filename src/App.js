import logo from './logo.svg';
import './App.css';
import YouTube from 'react-youtube';
import Particles from 'react-particles-js';
import { Timeline } from 'react-twitter-widgets'
import RGBShiftBox from './RGBShiftBox/RGBShiftBox'
import {
  BrowserView,
  MobileView,
} from "react-device-detect";
import { Parallax  } from 'react-scroll-parallax';


function App() {
  return (
    <div className="App">
      <div className="Header">
        <video src={`${process.env.PUBLIC_URL}/source/TestPlay.mp4`} autoPlay muted loop>
        </video>
        <div className="TitleBox">
          <img src={`${process.env.PUBLIC_URL}/source/white@400x.png`} />
          
          <RGBShiftBox> 開発中 / Development....</RGBShiftBox>
        </div>
      </div>
          <div className="PageBody">
          <Particles
        className="BackGroundParticle"
         params={{
          "particles": {
              "number": {
                  "value": 100
              },
              "size": {
                  "value": 3,
                  "anim": {
                    speed: 1
                  }
              }
          },
          "interactivity": {
              "events": {
                  "onhover": {
                      "enable": true,
                      "mode": "repulse"
                  }
              }
          }
        }}/>
          <RGBShiftBox>BulletLiveとは</RGBShiftBox>
          <YouTube
            videoId={"ri9Ifrdjg9Y"}                  // defaults -> null
            className="VideoPlayer"
            opts={{
              
              playerVars: {controls: 1, fs: 1, modestbranding: 0, showinfo: 0, loop: 1 }
            }}
          />
          <div className="PageDescription">
            リズムに乗ってノーツを撃つ<span className="DescriptionTxt_UnderLine">VRリズムゲーム</span><br /><br />
            楽曲プレイステージに実装されている、<br />
            <span className="DescriptionTxt_UnderLine">BulletLiveシステム</span>によって<br/>
            臨場感のあるプレイ体験を実現しています
          </div>
          <RGBShiftBox>BulletLiveシステムとは</RGBShiftBox>
          <YouTube
            videoId={"2Qe3-12EeGY"}                  // defaults -> null
            className="VideoPlayer"
            opts={{
              
              playerVars: {controls: 1, fs: 1, modestbranding: 0, showinfo: 0, loop: 1  }
            }}
          />
          <div className="PageDescription">
            楽曲プレイ中、<br/>最高に盛り上がったタイミングで<br/>
            一定以上のスコアを獲得していると<br/>
            ステージに特別な演出が追加されます
          </div>
          <RGBShiftBox>Twitter</RGBShiftBox>
          <MobileView style={{marginTop: '40px'}}>
            <Timeline 
             dataSource={{
              sourceType: 'profile',
              screenName: 'kousoku_tactics'
             }}
             options={{ height: 600, width: '90%', theme: 'dark', }}
            ></Timeline>
          </MobileView>
          <BrowserView>
            <Timeline 
              dataSource={{
                sourceType: 'profile',
                screenName: 'kousoku_tactics'
              }}
             options={{ height: 700, width: '30vw', theme: 'dark', }}
            ></Timeline>
          </BrowserView>
          <RGBShiftBox>問い合わせフォーム</RGBShiftBox>
          <div style={{textAlign: 'center'}}>
            <a className="JumpLink" href="https://docs.google.com/forms/d/e/1FAIpQLSfxmyo2SduN2YppbV0UIGrSBCrB_z6QSr9_GIhECTcLmzmaCQ/viewform?usp=sf_link">フォーム(Googleフォームリンクに遷移します)</a>
          </div>
          </div>
      <div className="Bottom">
        <div className="BottomTxt">Copyright  ©2021 東京高速戦術 All Right reserved.</div>
      </div>
    </div>
  );
}

export default App;
