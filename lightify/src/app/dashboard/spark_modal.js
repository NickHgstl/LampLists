import { RiCloseLine } from "react-icons/ri";
import { useState } from "react";
import SparkNameModal from "./sparkNameModal";
import SongNameModal from "./SongNameModal";

export default function Sparkmodal({
    setIsModal2Open,
    token,
    addSpark,
    clearSparks,
    closeModal2,
    showSparkHandler,
    showCustomSpark1,
    showCustomSpark2,
    showCustomSpark3,
    showCustomSpark4,
    showCustomSpark5,
    showCustomSpark6,
    showCustomSpark7,
    setShowCustomSpark1,
    setShowCustomSpark2,
    setShowCustomSpark3,
    setShowCustomSpark4,
    setShowCustomSpark5,
    setShowCustomSpark6,
    setShowCustomSpark7,
    spark1SongNames,
    spark2SongNames,
    spark3SongNames,
    spark4SongNames,
    spark5SongNames,
    spark6SongNames,
    spark7SongNames,
    spark8SongNames,
    spark9SongNames,
    spark10SongNames

}) {


    const [renderSongNames, setRenderSongNames] = useState([])


    const renderSpark1 = () => {
       
    }

    function  SparkSongs(e) {
        if (e.target.id === "spark1Songs"){
            setIsModal4Open(true)
            setRenderSongNames(spark1SongNames)
            console.log(renderSongNames) 
             return renderSongNames.map((songName) => (
                <>
                    <div
                    className="songName"
                    >
                    {songName}
                    </div>
                </>        
            ))
    
           
        }
    
        else if (e.target.id === "spark2Songs"){
            setIsModal4Open(true)
            setRenderSongNames(spark2SongNames)
            console.log(renderSongNames) 
            return renderSongNames.map((songName) => (
                <>
                    <div
                    className="songName"
                    >
                    {songName}
                    </div>
                </>        
            ))
        }
    
        else if (e.target.id === "spark3Songs"){
            setIsModal4Open(true)
            setRenderSongNames(spark3SongNames)
            console.log(renderSongNames) 
            return renderSongNames.map((songName) => (
                <>
                    <div
                    className="songName"
                    >
                    {songName}
                    </div>
                </>        
            ))
        }
    
        else if (e.target.id === "spark4Songs"){
            setIsModal4Open(true)
            setRenderSongNames(spark4SongNames)
            console.log(renderSongNames) 
            return renderSongNames.map((songName) => (
                <>
                    <div
                    className="songName"
                    >
                    {songName}
                    </div>
                </>        
            ))
        }
    
        else if (e.target.id === "spark5Songs"){
            setIsModal4Open(true)
            setRenderSongNames(spark5SongNames)
            console.log(renderSongNames) 
            return renderSongNames.map((songName) => (
                <>
                    <div
                    className="songName"
                    >
                    {songName}
                    </div>
                </>        
            ))
        }
    
        else if (e.target.id === "spark6Songs"){
            setIsModal4Open(true)
            setRenderSongNames(spark6SongNames)
            console.log(renderSongNames) 
            return renderSongNames.map((songName) => (
                <>
                    <div
                    className="songName"
                    >
                    {songName}
                    </div>
                </>        
            ))
        }
    
        else if (e.target.id === "spark7Songs"){
            setIsModal4Open(true)
            setRenderSongNames(spark7SongNames)
            console.log(renderSongNames) 
            return renderSongNames.map((songName) => (
                <>
                    <div
                    className="songName"
                    >
                    {songName}
                    </div>
                </>        
            ))
        }
    
        else if (e.target.id === "spark8Songs"){
            setIsModal4Open(true)
            setRenderSongNames(spark8SongNames)
            console.log(renderSongNames) 
            return renderSongNames.map((songName) => (
                <>
                    <div
                    className="songName"
                    >
                    {songName}
                    </div>
                </>        
            ))
        }
    
        else if (e.target.id === "spark9Songs"){
            setIsModal4Open(true)
            setRenderSongNames(spark9SongNames)
            console.log(renderSongNames) 
            return renderSongNames.map((songName) => (
                <>
                    <div
                    className="songName"
                    >
                    {songName}
                    </div>
                </>        
            ))
        }
    
        else if (e.target.id === "spark10Songs"){
            setIsModal4Open(true)
            setRenderSongNames(spark10SongNames)
            console.log(renderSongNames) 
            return renderSongNames.map((songName) => (
                <>
                    <div
                    className="songName"
                    >
                    {songName}
                    </div>
                </>        
            ))
        }
    }


    const [showAddSparkButton, setShowAddSparkButton] = useState(true)
    const [isModal3Open, setIsModal3Open] = useState(false)
    const [isModal4Open, setIsModal4Open] = useState(false)


    token = token
    
    
    

    return (
        <>
            <div className="darkBG" onClick={closeModal2} />
            <div className="centered">
                <div className="modal2">
                    <div className="modal2Header">
                        <h5 className="heading">Add to Spark</h5>
                    </div>
                    <button className="closeBtn" onClick={closeModal2}>
                        <RiCloseLine style={{marginBottom: "-3px"}} />
                    </button>
                    <div className="modal2Content">
                        <div className="modalItemContainer" onClick={addSpark} id="spark 1">
                            <div className="modalItem">Spark 1</div>
                            <button className="modalItem" onClick={SparkSongs} id="spark1Songs">view spark 1</button>                               
                        </div>
                        <div className="modalItemContainer" onClick={addSpark} id="spark 2">
                            <div className="modalItem">Spark 2</div>
                            <button className="modalItem" onClick={SparkSongs} id="spark2Songs">view spark 2</button>                               
                        </div>                        
                        <div className="modalItemContainer" onClick={addSpark} id="spark 3">
                            <div className="modalItem">Spark 3</div>
                            <button className="modalItem" onClick={SparkSongs} id="spark3Songs">view spark 3</button>                               
                        </div>                         
                        {showCustomSpark1 && 
                            <div className="modalItemContainer" onClick={addSpark} id="spark 4">
                                <div className="modalItem">{showCustomSpark1}</div>
                                <button className="modalItem" onClick={SparkSongs} id="spark4Songs">view spark 4</button>                               
                            </div>
                        }
                        {showCustomSpark2 && 
                            <div className="modalItemContainer" onClick={addSpark} id="spark 5">
                                <div className="modalItem">{showCustomSpark2}</div>
                                <button className="modalItem" onClick={SparkSongs} id="spark5Songs">view spark 5</button>                               
                            </div>
                        }
                        {showCustomSpark3 && 
                            <div className="modalItemContainer" onClick={addSpark} id="spark 6">
                                <div className="modalItem">{showCustomSpark3}</div>
                                <button className="modalItem" onClick={SparkSongs} id="spark6Songs">view spark 6</button>                               
                            </div>
                        }
                        {showCustomSpark4 && 
                            <div className="modalItemContainer" onClick={addSpark} id="spark 7">
                                <div className="modalItem">{showCustomSpark4}</div>
                                <button className="modalItem" onClick={SparkSongs} id="spark7Songs">view spark 7</button>                               

                            </div>
                        }
                        {showCustomSpark5 && 
                            <div className="modalItemContainer" onClick={addSpark} id="spark 8">
                                <div className="modalItem">{showCustomSpark5}</div>
                                <button className="modalItem" onClick={SparkSongs} id="spark8Songs">view spark 8</button>                               

                            </div>
                        }
                        {showCustomSpark6 && 
                            <div className="modalItemContainer" onClick={addSpark} id="spark 9">
                                <div className="modalItem">{showCustomSpark6}</div>
                                <button className="modalItem" onClick={SparkSongs} id="spark9Songs">view spark 9</button>                               

                            </div>
                        }
                        {showCustomSpark7 && 
                            <div className="modalItemContainer" onClick={addSpark} id="spark 10">
                                <div className="modalItem">{showCustomSpark7}</div>
                                <button className="modalItem" onClick={SparkSongs} id="spark10Songs">view spark 10</button>                               

                            </div>
                        }
                        {showAddSparkButton && <button id="addSparkButton" onClick={showSparkHandler}>ADD SPARK</button>}
                        <button className="editSparkButton" onClick={() => setIsModal3Open(true)}>EDIT</button>
                        {isModal3Open && <SparkNameModal
                            setShowCustomSpark1={setShowCustomSpark1}
                            setShowCustomSpark2={setShowCustomSpark2}
                            setShowCustomSpark3={setShowCustomSpark3}
                            setShowCustomSpark4={setShowCustomSpark4}
                            setShowCustomSpark5={setShowCustomSpark5}
                            setShowCustomSpark6={setShowCustomSpark6}
                            setShowCustomSpark7={setShowCustomSpark7}
                            setIsModal3Open={setIsModal3Open}
                            />
                        }

                        {isModal4Open && <SongNameModal 
                        setIsModal4Open={setIsModal4Open}
                        renderSpark1={renderSpark1}
                        SparkSongs={SparkSongs}
                        renderSongNames={renderSongNames}

                        />
                        }
                    </div>
                    <div className="modal2Actions">
                        <div className="actionsContainer">
                            <button className="deleteBtn" onClick={clearSparks}>
                                clear Sparks
                            </button>
                            <button
                                className="cancelBtn"
                                onClick={closeModal2}
                            >
                                Done
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            
        </>
    )
}