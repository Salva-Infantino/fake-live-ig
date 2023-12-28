import { useEffect } from "react";

const TopRight = ({close, viewers, kActived, setClose, setMic, mic, setCam, cam, setFacingMode, initViewers, setViewers}) => {

  useEffect(() => {
    const maxTime = 8000;
    const minTime = 4000;
    const maxLimit = initViewers / 0.85;
    const minLimit = initViewers * 0.85;
    const gapNum = initViewers / 8;
    const refreshTime = Math.random() * maxTime + minTime;
    
    const updateViewers = setInterval(() => {
      const randomNum = Math.random() * gapNum + 1;
      const signe = Math.random() < 0.5 ? -1 : 1;

      viewers > maxLimit ?
        setViewers(viewers - randomNum)
      : viewers < minLimit ?
        setViewers(viewers + randomNum)
        // eslint-disable-next-line
      : setViewers(viewers += signe * randomNum);
    }, refreshTime);

    return () => clearInterval(updateViewers);
  }, [initViewers, viewers, setViewers]);

  const Rounded = (n) => {
    return n % 1 === 0 ? n.toFixed(0) : n.toFixed(1);
  }

  return (
      <div id='top-right' className={close === true ? 'hidden' : ''}>
        <div>
          <small id='live'>LIVE</small>
          <small id='viewers'>
            <svg className="x1lliihq x1n2onr6 x9bdzbf" fill="white" height="14" role="img" viewBox="0 0 48 48" width="14"><g fill="none" fillRule="evenodd"><rect height="48" width="48"></rect><g fill="currentColor"><path d="M3.267 24.652C8.32 14.772 15.156 9.94 23.905 9.94c8.761 0 15.768 4.847 21.136 14.745a1.47 1.47 0 1 0 2.583-1.401C41.774 12.496 33.83 7 23.905 7 13.97 7 6.175 12.51.651 23.314a1.47 1.47 0 0 0 2.616 1.338Z" fillRule="nonzero"></path><path d="M24.245 16.796c.782 0 1.546.078 2.285.227l-.022.02a6.367 6.367 0 1 0 9.02 8.977c.149.739.227 1.503.227 2.286 0 6.357-5.153 11.51-11.51 11.51s-11.51-5.153-11.51-11.51 5.153-11.51 11.51-11.51Z"></path></g></g></svg>
            {Rounded(viewers)} {kActived && 'k'}
          </small>
          <svg onClick={() => setClose(true)} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        </div>
        <div onClick={() => setMic(!mic)}>
          {mic ?
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-mic"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><line x1="12" y1="19" x2="12" y2="23"></line><line x1="8" y1="23" x2="16" y2="23"></line></svg>
            :
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-mic-off"><line x1="1" y1="1" x2="23" y2="23"></line><path d="M9 9v3a3 3 0 0 0 5.12 2.12M15 9.34V4a3 3 0 0 0-5.94-.6"></path><path d="M17 16.95A7 7 0 0 1 5 12v-2m14 0v2a7 7 0 0 1-.11 1.23"></path><line x1="12" y1="19" x2="12" y2="23"></line><line x1="8" y1="23" x2="16" y2="23"></line></svg>
          }
        </div>
        <div onClick={() => setCam(!cam)}>
          {cam ?
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-video"><polygon points="23 7 16 12 23 17 23 7"></polygon><rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect></svg>
            :
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-video-off"><path d="M16 16v1a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2m5.66 0H14a2 2 0 0 1 2 2v3.34l1 1L23 7v10"></path><line x1="1" y1="1" x2="23" y2="23"></line></svg>
          }
        </div>
        {
          cam &&
          <div onClick={() => setFacingMode((prevMode) => (prevMode === 'user' ? 'environment' : 'user'))}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-refresh-ccw"><polyline points="1 4 1 10 7 10"></polyline><polyline points="23 20 23 14 17 14"></polyline><path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15"></path></svg>
          </div>
        }
      </div>
  )
}

export default TopRight;