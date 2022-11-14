import style from './Button.module.css'

const Button = props => {
  return <button onClick={props.onClickHandler} className={styles.button}></button>
}

export default Button;