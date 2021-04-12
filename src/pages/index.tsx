import React from "react"
import styled from "styled-components"
import { database } from "lib/firebase"
import GraphComponent from "components/graph"
import MainComponent from "components/main"
import RankingComponent from "components/ranking"

const firebaseConfig = {
    apiKey: "AIzaSyACsEjJsK4H5cLrb5nD69w69IKO0PEdxX0",
    authDomain: "tell-ic-2021.firebaseapp.com",
    projectId: "tell-ic-2021",
    storageBucket: "tell-ic-2021.appspot.com",
    messagingSenderId: "156830715150",
    appId: "1:156830715150:web:3e1c1a6fde9ef764971b5f",
    measurementId: "G-K5K1R7ZW2L"
}

const Compoent: React.FC = (props) => {
    React.useEffect(() => {
        database.ref("ranking/").on("value", snapshot => {
            console.log(snapshot.val());
        })
    }, [])
    return <div {...props} >
        <MainComponent />
        <RankingComponent />
        <GraphComponent />
    </div>
}


const Style = styled(Compoent)`
display: flex;
min-height: 100vh;
height: 100%;
border: 1px solid;
`
export default Style