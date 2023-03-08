import { useState } from "react";
import styles from "./Form.module.css"
import Card from "./Card";

const Form  = () =>{

    const [name, setName] = useState("");
    const [music, setMusic] = useState("");
    const [error, setError] = useState("");
    const [show, setShow] = useState(false);


    const onChangeName = (event) => setName(event.target.value);
    const onChangeMusic = (event) => setMusic(event.target.value);

    const validateName = () =>{
        const nameWhitOutSpace = name.trim();
        return nameWhitOutSpace.length >= 3;
    }

    const validateMusic = () => {
        const musicWhitOutSpace = music.trim();
        return musicWhitOutSpace.length >= 6;
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const isNameValidate = validateName();
        const isMusicValidate = validateMusic();

        if(!isNameValidate || !isMusicValidate){
            setError("Por favor chequea que la informacion sea correcta");
            setShow(false);
        } else {
            setShow(true);
            setError("");
        }
    }
    return (
        <div className={styles.superContainer}>
            <h1>Elige tu musica 🎼</h1>
            <div className={styles.container}>
                <form onSubmit={handleSubmit}>
                    <div>
                        <input type="text" placeholder="Ingresa tu nombre" onChange={onChangeName} value={name}/>
                    </div>
                    <div>
                        <input type="text" placeholder="Ingresa tu genero de musica favorita" onChange={onChangeMusic} value={music}/>
                    </div>
                    <button className={styles.buttonSubmit} type="submit">Enviar</button>
                </form>
            </div>
            {error ? <div className={styles.error}>{error}</div> : null}
            {show ? <Card name={name} music={music}/> : null}
        </div>
    )
}
export default Form;
