import classes from './Header.module.css'

const Header = (props) => {

    const userButtonClass = props.active ? `active` : ''

    return <header className={classes['main-header']}>
        <h1>Okr</h1>
        <div >
          <button className={`${classes.headerButton} ${userButtonClass}`} onClick={props.onNewUser} >
            New User
          </button>
          <button className={classes.headerButton}>New Okr</button>
        </div>
    </header>
}

export default Header