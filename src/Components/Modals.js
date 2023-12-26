const Modals = ({account, setAccount, name, image, cam, close, setClose, addVideo, setAddVideo, addPeople, setAddPeople, question, setQuestion, setMenu}) => {
    return (<>
      {
        account && <div className='modal' onClick={() => setAccount(false)}>
        <div className='content'>
          <p>{name}'s live video</p>
          <div>
            <img src={image} alt='Profil' />
            <div className='fxdc pl5'>
              <small>{name}</small>
              <small>Host</small>
            </div>
          </div>
        </div>
      </div>
      }

      {
        !cam && <div className='modal camoff' onClick={() => setAccount(false)}>
          <div className='bg-img'></div>
          <img src={image} alt='Profil' />
      </div>
      }

      {
        close && <div className='modal closing'>
          <p>Are you sure that you want<br/>to end your live video ?</p>
          <div>
            <button onClick={() => {setClose(false);setMenu(true)}}>End Now</button>
            <button onClick={() => setClose(false)}>Cancel</button>
          </div>
      </div>
      }

      {
        addVideo && <div className='modal' onClick={() => setAddVideo(false)}>
        <div className='content'>
          <p>Share Video</p>
          <div>
            <small className='fwl tac w100 mt1r'>You can't share any video here.</small>
          </div>
        </div>
      </div>
      }

      {
        addPeople && <div className='modal' onClick={() => setAddPeople(false)}>
        <div className='content'>
          <p>Invite friends</p>
          <div>
            <small className='fwl tac w100 mt1r'>You can't invite people in this live.</small>
          </div>
        </div>
      </div>
      }

      {
        question && <div className='modal' onClick={() => setQuestion(false)}>
        <div className='content'>
          <p>Questions</p>
          <div className='fxdc'>
            <small className='tac w100 mt1r'>No questions yet</small>
            <small className='fwl tac w100 mt1r'>Anyone watching cand send and see<br/>questions here.</small>
          </div>
        </div>
      </div>
      }
    </>)
}

export default Modals;