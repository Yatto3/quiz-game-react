import { useState } from "react";
import styles from "./MainPage.module.css"
import Header from "../../Header";

function MainPage(){

    const COLORS = [
        "#40679E",
        "#FFCAD4",
        "#FF407D",
        "#F2F597",
        "#37B5B6",
        "#FF9843",
        "#86A7FC",
        "#AC87C5",
        "#756AB6",
        "#FFDD95",
    ]
    let [topics,setTopic] = useState("");
    let index = 0 ;
  

    return(
        <>
        <div className={styles["main-container"]}>
            <Header />
            <div className={styles.content}>
                <section>
                    <h1>Quiz</h1>
                    <h3>What is a <span><a href="https://en.wikipedia.org/wiki/Quiz">Quiz</a></span> ? </h3><br /> 
                    <p>
                    A quiz refers to a short test of knowledge, typically around 10 questions in length, 
                    with question formats often including multiple choice, fill in the blanks, 
                    true or false and short answer.
                    </p>
                </section>

                <section>
                    <h3>World Record</h3><br />
                    <p>The largest quiz, according to Guinness, was the "Quiz for Life", held at the Flanders Expo Halls in Ghent, Belgium, on 11 December 2010 with 2,280 participants.
                        The winning team Café De Kastaar from Leuven consisted of Marnix Baes, Erik Derycke, Eric Hemelaers, Bart Permentier and Tom Trogh.</p>
                </section>

                <section>
                    <h3>How to start a Quiz ?</h3><br />
                    <p>
                    Feel free to choose a topic for your next quiz , after that hit the START button to start the quiz
                    </p>
                </section>
            </div>
            <div className={styles.topics}>
                <ul onClick={(e) => {
                    if (e.target.tagName === "LI"){
                       
                        if (!e.target.selected){
                            e.target.parentNode.querySelectorAll("li").forEach(li => {
                                li.style.borderColor = ""; li.selected = false
                            });
                            let topic = e.target.innerText ;
                            e.target.selected = true;
                            e.target.style.borderColor = "black"
                            setTopic(topic); 
                           
                        }
                    }
                }}>
                    <li style={{backgroundColor : COLORS[index++]}} selected = {false}> <img src="src\assets\icons8-music.svg" alt="music-logo" /> Music </li>
                    <li style={{backgroundColor : COLORS[index++]}} selected = {false}> <img src="src\assets\icons8-museum-50.png" alt="history-logo" /> History</li>
                    <li style={{backgroundColor : COLORS[index++]}} selected = {false}> <img src="src\assets\icons8-science-48.png" alt="science-logo" />Science </li>
                    <li style={{backgroundColor : COLORS[index++]}} selected = {false}> <img src="src\assets\icons8-idea-50.png" alt="inventions-logo" />Invention</li>
                    <li style={{backgroundColor : COLORS[index++]}} selected = {false}> <img src="src\assets\icons8-thoghts-50.png" alt="quotes-logo" />Quotes</li>
                    <li style={{backgroundColor : COLORS[index++]}} selected = {false}> <img src="src\assets\icons8-movie-50.png" alt="movie-logo" />Movies</li>
                    <li style={{backgroundColor : COLORS[index++]}} selected = {false}> <img src="src\assets\icons8-tech-50.png" alt="tech-logo" />Tech</li>
                    <li style={{backgroundColor : COLORS[index++]}} selected = {false}> <img src="src\assets\icons8-Books-50.png" alt="books-logo" />Books</li>
                    <li style={{backgroundColor : COLORS[index++]}} selected = {false}> <img src="src\assets\icons8-Food-50.png" alt="food-logo" />Food</li>
                    <li style={{backgroundColor : COLORS[index++]}} selected = {false}> <img src="src\assets\icons8-Nature-50.png" alt="nature-logo" />Nature</li>
                </ul>
                <button onClick={(e) => {
                    e.preventDefault();
                    if (topics){
                        window.location.replace(topics);
                    }else{
                        alert("Please select a topic");
                    }
                }}>START</button>
            </div>
            
            <div className="footer">
                
            </div>
        </div>  
        </>
    )
}


export default MainPage;