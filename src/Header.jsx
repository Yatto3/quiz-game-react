import styles from "./routes/MainPage/MainPage.module.css"

function Header(){
    return(
         <div className={styles.header}>
                <div className={styles.menu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div className={styles.logo}>
                    <h1 ><a href="Home">QuizizGame</a></h1>
                </div>
                <div className={styles.profile}>
                    <p>Guest</p>
                    <img src="src/assets/icons8-user-guest-32.png" alt="user-profile-icon" draggable = "false" />
                </div>
        </div>
    )
}

export default Header;