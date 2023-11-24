import Navbar from "../../components/navbar/Navbar"
import Footer from "../../components/footer/Footer"

function Home(){
    return(
        <div>
            <Navbar title="علی بلاگ"/>
            <div className="contaner">
                <h1 style={{textAlign:"right"}}>home</h1>
            </div>
        </div>
    )
}

export default Home