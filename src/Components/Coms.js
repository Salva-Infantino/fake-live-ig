import Users from '../Doc/users.json';
import Comments from '../Doc/coms.json';
import imgs from '../Doc/profils';
import { useEffect, useState, useRef } from 'react';

const Coms = ({setAddVideo, setAddPeople, setQuestion, name, image, menu}) => {
  const [myCom, setMyCom] = useState('');

  const [coms, setComs] = useState([]);

  const myComInput = useRef();

  const getRandomly = (array) => {
    return array[Math.floor(Math.random()*array.length)];
  }

  const submitMyCom = () => {
    myComInput.current.value = "";
    setMyCom('');
    const me = {user: name, com: myCom, img: image};
    setComs(coms => [me, ...coms]);
  }

  useEffect(() => {
    const refreshTime = Math.floor(Math.random() * 9000) + 4000;
    const updateComs = setInterval(() => {
      coms.length > 25 && setComs(coms.slice(0, -1));
      const newEl = {user: getRandomly(Users).user, com: getRandomly(Comments).com, img: getRandomly(imgs)};
      setComs(coms => [newEl, ...coms]);
    }, refreshTime);

    return () => clearInterval(updateComs);
  }, [coms]);

  useEffect(() => {
    if (menu) {
    const refreshTime = Math.floor(Math.random() * 6000) + 1000;
    setInterval(function() {
      var b = Math.floor(Math.random() * 100 + 1);
      var d = ["flowOne", "flowTwo", "flowThree"];
      var a = ["colOne", "colTwo", "colThree", "colFour", "colFive", "colSix"];
      var c = (Math.random() * (1.6 - 1.2) + 1.2).toFixed(1);

      var heartElement = document.createElement("div");
      heartElement.className = "heart part-" + b + " " + a[Math.floor(Math.random() * 6)];
      var fontSize = Math.floor(Math.random() * (50 - 22) + 22);
      heartElement.style.fontSize = fontSize + "px";
      heartElement.innerHTML = '<div class="heart part-13 " style="font-size: 29px; animation: 1.4s linear 0s 1 normal none running flowTwo; display: block;"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-heart"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg></div>'

      var heartsContainer = document.querySelector(".hearts");
      heartsContainer.appendChild(heartElement);

      var randomAnimation = d[Math.floor(Math.random() * 3)];
      heartElement.style.animation = randomAnimation + " " + c + "s linear";

      var partSelector = ".part-" + b;
      document.querySelector(partSelector).style.display = "block";

      setTimeout(function() {
        var elementToRemove = document.querySelector(partSelector);
        if (elementToRemove) {
          elementToRemove.remove();
        }
      }, c * 1000);
    }, refreshTime);
  }
  }, [menu]);

  return (
    <div id='coms'>
      <div id="fakecoms">
        {coms.map((com, i) => {
          return <div className="com" key={i}>
            <img src={com.img} alt="Profil" />
            <div>
              <p>{com.user}</p>
              <small className="fwl">{com.com}</small>
            </div>
          </div>
        })}
      </div>
      <div id='comsbar'>
        <input type='text' placeholder='Comment' ref={myComInput} onChange={(e) => setMyCom(e.target.value)} />
        <div>
          <svg onClick={() => setAddVideo(true)} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-plus-square"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line></svg>
          <svg onClick={() => setAddPeople(true)} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-user-plus"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="20" y1="8" x2="20" y2="14"></line><line x1="23" y1="11" x2="17" y2="11"></line></svg>
          <svg onClick={() => setQuestion(true)} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-help-circle"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
          <svg onClick={submitMyCom} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-send"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
        </div>
      </div>
      <div className="hearts"></div>
    </div>
  )
}

export default Coms;