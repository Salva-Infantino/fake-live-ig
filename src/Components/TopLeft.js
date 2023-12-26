const TopLeft = ({close, setAccount, image, name}) => {
    return (
        <div id='top-left' className={close === true ? 'hidden' : ''} onClick={() => setAccount(true)}>
        <img src={image} alt='Profil' />
        <span>{name}</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-down"><polyline points="6 9 12 15 18 9"></polyline></svg>
      </div>
    )
}

export default TopLeft;