import { RiCloseLine } from "react-icons/ri";

export default function SparkListModal({
    ismodal1Open,
    setIsModal4Open,
    onButtonClick,
    token,
    addSpark1toPlaylist,
    addSpark2toPlaylist,
    addSpark3toPlaylist,
    addSpark4toPlaylist,
    addSpark5toPlaylist,
    addSpark6toPlaylist,
    addSpark7toPlaylist,
    addSpark8toPlaylist,
    addSpark9toPlaylist,
    addSpark10toPlaylist,
    showCustomSpark1,
    showCustomSpark2,
    showCustomSpark3,
    showCustomSpark4,
    showCustomSpark5,
    showCustomSpark6,
    showCustomSpark7


}) {


    token = token
    
 

    return (
        <>
            <div className="darkBG" onClick={() => setIsModal4Open(false)} />
            <div className="centered">
                <div className="modal1">
                    <div className="modal1Header">
                        <h5 className="heading">Add to playlist</h5>
                    </div>
                    <button className="closeBtn" onClick={() => setIsModal4Open(false)}>
                        <RiCloseLine style={{marginBottom: "-3px"}} />
                    </button>
                    <div className="modal1Content">
                    <button className="sparkButton" id="spark1" onClick={addSpark1toPlaylist}>Add Spark 1 to playlist</button>
                    <button className="sparkButton" id="spark2" onClick={addSpark2toPlaylist}>Add spark 2 to playlist</button>
                    <button className="sparkButton" id="spark3" onClick={addSpark3toPlaylist}>Add spark 3 to playlist</button>
                    <button className="sparkButton" id="spark3" onClick={addSpark4toPlaylist}>Add {showCustomSpark1} to playlist</button>
                    <button className="sparkButton" id="spark3" onClick={addSpark5toPlaylist}>Add {showCustomSpark2} to playlist</button>
                    <button className="sparkButton" id="spark3" onClick={addSpark6toPlaylist}>Add {showCustomSpark3} to playlist</button>
                    <button className="sparkButton" id="spark3" onClick={addSpark7toPlaylist}>Add {showCustomSpark4} to playlist</button>
                    <button className="sparkButton" id="spark3" onClick={addSpark8toPlaylist}>Add {showCustomSpark5} to playlist</button>
                    <button className="sparkButton" id="spark3" onClick={addSpark9toPlaylist}>Add {showCustomSpark6} to playlist</button>
                    <button className="sparkButton" id="spark3" onClick={addSpark10toPlaylist}>Add {showCustomSpark7} to playlist</button>
                    </div>
                    <div className="modal1Actions">
                        <div className="actionsContainer">
                            <button className="deleteBtn" onClick={onButtonClick}>
                                Delete
                            </button>
                            <button
                                className="cancelBtn"
                                onClick={() => setIsModal4Open(false)}
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            
        </>
    )
}