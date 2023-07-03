import { RiCloseLine } from "react-icons/ri";

export default function SparkNameModal({
    setIsModal3Open,
    onButtonClick,
    renderPlaylists,
    token,
    setShowCustomSpark1,
    setShowCustomSpark2,
    setShowCustomSpark3,
    setShowCustomSpark4,
    setShowCustomSpark5,
    setShowCustomSpark6,
    setShowCustomSpark7,

}) {


    token = token
    
 

    return (
        <>
            <div className="darkBG" onClick={() => setIsModal3Open(false)} />
            <div className="centered">
                <div className="modal1">
                    <div className="modal1Header">
                        <h5 className="heading">Add to playlist</h5>
                    </div>
                    <button className="closeBtn" onClick={() => setIsModal3Open(false)}>
                        <RiCloseLine style={{marginBottom: "-3px"}} />
                    </button>
                    <div className="modal1Content">
                        <input placeholder="Enter new name for Spark" onChange={e => setShowCustomSpark1(e.target.value)}></input>
                        <input placeholder="Enter new name for Spark" onChange={e => setShowCustomSpark2(e.target.value)}></input>
                        <input placeholder="Enter new name for Spark" onChange={e => setShowCustomSpark3(e.target.value)}></input>
                        <input placeholder="Enter new name for Spark" onChange={e => setShowCustomSpark4(e.target.value)}></input>
                        <input placeholder="Enter new name for Spark" onChange={e => setShowCustomSpark5(e.target.value)}></input>
                        <input placeholder="Enter new name for Spark" onChange={e => setShowCustomSpark6(e.target.value)}></input>
                        <input placeholder="Enter new name for Spark" onChange={e => setShowCustomSpark7(e.target.value)}></input>

                    </div>
                    <div className="modal1Actions">
                        <div className="actionsContainer">
                            <button className="deleteBtn" onClick={onButtonClick}>
                                Delete
                            </button>
                            <button
                                className="cancelBtn"
                                onClick={() => setIsModal3Open(false)}
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