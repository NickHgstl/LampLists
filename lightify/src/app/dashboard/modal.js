import { RiCloseLine } from "react-icons/ri";


export default function Modal({setIsModal1Open,  onButtonClick, renderPlaylists, token}) {


    token = token
    
 

    return (
        <>
            <div className="darkBG" onClick={() => setIsModal1Open(false)} />
            <div className="centered">
                <div className="modal">
                    <div className="modalHeader">
                        <h5 className="heading">Add to playlist</h5>
                    </div>
                    <button className="closeBtn" onClick={() => setIsModal1Open(false)}>
                        <RiCloseLine style={{marginBottom: "-3px"}} />
                    </button>
                    <div className="modalContent">
                        {renderPlaylists()}
                    </div>
                    <div className="modalActions">
                        <div className="actionsContainer">
                            <button className="deleteBtn" onClick={onButtonClick}>
                                Delete
                            </button>
                            <button
                                className="cancelBtn"
                                onClick={() => setIsModal1Open(false)}
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