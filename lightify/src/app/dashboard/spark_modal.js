import { RiCloseLine } from "react-icons/ri";
import { useState } from "react";
import SparkNameModal from "./sparkNameModal";

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

}) {


    const [showAddSparkButton, setShowAddSparkButton] = useState(true)
    const [isModal3Open, setIsModal3Open] = useState(false)


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
                        <div className="modalItemContainer" onClick={addSpark} id="spark 1">Spark 1</div>
                        <div className="modalItemContainer" onClick={addSpark} id="spark 2">Spark 2</div>
                        <div className="modalItemContainer" onClick={addSpark} id="spark 3">Spark 3</div>
                        {showCustomSpark1 && 
                            <div className="modalItemContainer" onClick={addSpark} id="spark 4">
                                <div className="modalItem">{showCustomSpark1}</div>                               
                            </div>
                        }
                        {showCustomSpark2 && 
                            <div className="modalItemContainer" onClick={addSpark} id="spark 5">
                                <div className="modalItem">{showCustomSpark2}</div>
                            </div>
                        }
                        {showCustomSpark3 && 
                            <div className="modalItemContainer" onClick={addSpark} id="spark 6">
                                <div className="modalItem">{showCustomSpark3}</div>
                            </div>
                        }
                        {showCustomSpark4 && 
                            <div className="modalItemContainer" onClick={addSpark} id="spark 7">
                                <div className="modalItem">{showCustomSpark4}</div>
                            </div>
                        }
                        {showCustomSpark5 && 
                            <div className="modalItemContainer" onClick={addSpark} id="spark 8">
                                <div className="modalItem">{showCustomSpark5}</div>
                            </div>
                        }
                        {showCustomSpark6 && 
                            <div className="modalItemContainer" onClick={addSpark} id="spark 9">
                                <div className="modalItem">{showCustomSpark6}</div>
                            </div>
                        }
                        {showCustomSpark7 && 
                            <div className="modalItemContainer" onClick={addSpark} id="spark 10">
                                <div className="modalItem">{showCustomSpark7}</div>
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