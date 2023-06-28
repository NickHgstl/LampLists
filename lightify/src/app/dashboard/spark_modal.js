import { RiCloseLine } from "react-icons/ri";


export default function Sparkmodal({setIsModal2Open,  onButtonClick, renderPlaylists, token, addSpark, clearSparks}) {


    token = token
    
    

    return (
        <>
            <div className="darkBG" onClick={() => setIsModal2Open(false)} />
            <div className="centered">
                <div className="modal">
                    <div className="modalHeader">
                        <h5 className="heading">Add to Spark</h5>
                    </div>
                    <button className="closeBtn" onClick={() => setIsModal2Open(false)}>
                        <RiCloseLine style={{marginBottom: "-3px"}} />
                    </button>
                    <div className="modalContent">
                        <div className="modalItem" onClick={addSpark}>Spark 1</div>
                        <div className="modalItem">Spark 2</div>
                        <div className="modalItem">Spark 3</div>
                    </div>
                    <div className="modalActions">
                        <div className="actionsContainer">
                            <button className="deleteBtn" onClick={clearSparks}>
                                clear Sparks
                            </button>
                            <button
                                className="cancelBtn"
                                onClick={() => setIsModal2Open(false)}
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