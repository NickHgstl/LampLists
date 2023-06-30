import { RiCloseLine } from "react-icons/ri";


export default function Sparkmodal({setIsModal2Open,  onButtonClick, renderPlaylists, token, addSpark, clearSparks, closeModal2}) {


    token = token
    
    

    return (
        <>
            <div className="darkBG" onClick={() => setIsModal2Open(false)} />
            <div className="centered">
                <div className="modal2">
                    <div className="modal2Header">
                        <h5 className="heading">Add to Spark</h5>
                    </div>
                    <button className="closeBtn" onClick={() => setIsModal2Open(false)}>
                        <RiCloseLine style={{marginBottom: "-3px"}} />
                    </button>
                    <div className="modal2Content">
                        <div className="modalItem" onClick={addSpark} id="spark 1">Spark 1</div>
                        <div className="modalItem" onClick={addSpark} id="spark 2">Spark 2</div>
                        <div className="modalItem" onClick={addSpark} id="spark 3">Spark 3</div>
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