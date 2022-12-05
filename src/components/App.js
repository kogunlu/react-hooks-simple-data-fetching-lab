import React, {useEffect, useState} from "react";

const URL = "https://dog.ceo/api/breeds/image/random"
let dogPhotoUrl
let shownItem

function App(){

    const [dogPicture, setDogPicture] = useState("")

    useEffect(() => {
        fetch(URL)
        .then(resp => resp.json())
        .then(json => {
            setDogPicture(json.message)
        })
    },[])

    if (!dogPicture) return <p>Loading...</p>;
    
    return <img src={dogPicture} alt="A Random Dog" />;

}


export default App
