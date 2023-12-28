import React, { useEffect, useRef, useState } from 'react';

import TopLeft from './Components/TopLeft';
import TopRight from './Components/TopRight';
import Coms from './Components/Coms';
import Modals from './Components/Modals';
import Menu from './Components/Menu';

function App() {
  const videoRef = useRef(null);

  const [facingMode, setFacingMode] = useState('user');
  const [mic, setMic] = useState(true);
  const [cam, setCam] = useState(true);
  const [account, setAccount] = useState(false)
  const [close, setClose] = useState(false);
  const [addVideo, setAddVideo] = useState(false);
  const [addPeople, setAddPeople] = useState(false);
  const [question, setQuestion] = useState(false);

  const [initViewers, setInitViewers] = useState(0);
  const [viewers, setViewers] = useState(initViewers);
  const [kActived, setKActived] = useState(true);

  const [name, setName] = useState();
  const [image, setImage] = useState(null);
  const [menu, setMenu] = useState(true);

  useEffect(() => {
    !menu &&
    (async function () {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: facingMode } });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (error) {
        console.error('Erreur lors de l\'accès à la caméra :', error);
      }
    })();
  }, [menu, facingMode]);

  return (
    <div>
      { menu ? <Menu setInitViewers={setInitViewers} setKActived={setKActived} setName={setName} setMenu={setMenu} setImage={setImage} /> :
        <>
          <Modals account={account} setAccount={setAccount} name={name} image={image} cam={cam} close={close} setClose={setClose} addVideo={addVideo} setAddVideo={setAddVideo} addPeople={addPeople} setAddPeople={setAddPeople} question={question} setQuestion={setQuestion} setMenu={setMenu} />

          <video ref={videoRef} autoPlay playsInline className={facingMode + ` ${!cam && 'disableVideo'}`}/>

          <TopLeft close={close} setAccount={setAccount} image={image} name={name} />

          <TopRight close={close} viewers={viewers} kActived={kActived} setClose={setClose} setMic={setMic} mic={mic} setCam={setCam} cam={cam} setFacingMode={setFacingMode} setViewers={setViewers} initViewers={initViewers} />

          <Coms setAddVideo={setAddVideo} setAddPeople={setAddPeople} setQuestion={setQuestion} name={name} image={image} menu={menu} />
        </>
      }
    </div>
  );
}

export default App;
