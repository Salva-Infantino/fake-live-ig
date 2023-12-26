import { useState } from "react"

const Menu = ({setInitViewers, setKActived, setName, setImage, setMenu}) => {

    const [newInitViewers, setNewInitViewers] = useState();
    const [newKActived, setNewKActived] = useState(true);
    const [newName, setNewName] = useState();
    // const [newPhoto, setNewPhoto] = useState();

    const onSubmit = (e) => {
        e.preventDefault();
        setInitViewers(newInitViewers);
        setKActived(newKActived);
        setName(newName);
        setMenu(false);
    }

    const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        // Une fois la lecture terminée, mettez à jour le state avec l'URL de l'image
        setImage(reader.result);
      };

      // Lit le contenu du fichier comme une URL de données
      reader.readAsDataURL(file);
    }
  };

    return (
        <div className="Menu">
            <h2>Settings</h2>
            <form>
                <p>
                    <label htmlFor="initViewers">initViewers :</label>
                    <input type="number" id="initViewers" onChange={e => setNewInitViewers(e.target.value)} required />
                </p>
                <p>
                    <label htmlFor="Kactived">K actived :</label>
                    <input type="checkbox" id="Kactived" defaultChecked={true} onChange={e => setNewKActived(e.target.checked)} />
                </p>
                <p>
                    <label htmlFor="Name">Name :</label>
                    <input type="text" id="Name" onChange={e => setNewName(e.target.value)} required />
                </p>
                <p>
                    <label htmlFor="Photo">Photo :</label>
                    <input type="file" id="Photo" onChange={handleImageChange} required />
                </p>
                <button type="submit" onClick={(e) => onSubmit(e)}>Start Live</button>
            </form>
        </div>
    )
}

export default Menu;