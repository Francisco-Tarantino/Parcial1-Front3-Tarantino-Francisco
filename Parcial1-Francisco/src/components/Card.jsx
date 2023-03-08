import styles from "./Card.module.css"

const Card  = ({name, music}) => {
    return (
        <div className={styles.container}>
            <h2>Hola {name}!!</h2>
            <h3>Sabemos que el genero que elegiste es:</h3>
            <div><p className={styles.color}>{music}</p></div>
        </div>
    )
}
export default Card;