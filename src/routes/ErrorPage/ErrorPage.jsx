import { useRouteError } from "react-router-dom";
import styles from "./ErrorPage.module.css"

function ErrorPage(){
   
    const error = useRouteError();
    

    return(
        <div className = {styles.errorPage}>
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
        <span>Take me <a href="/Home">Home</a></span>
      </div>
    )

}


export default ErrorPage;