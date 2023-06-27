import { RiCloseLine } from "react-icons/ri";


export default function Modal({setIsOpen,  onButtonClick, renderPlaylists, token}) {


    token = token
    
 

    return (
        <>
            <div className="darkBG" onClick={() => setIsOpen(false)} />
            <div className="centered">
                <div className="modal">
                    <div className="modalHeader">
                        <h5 className="heading">Add to playlist</h5>
                    </div>
                    <button className="closeBtn" onClick={() => setIsOpen(false)}>
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
                                onClick={() => setIsOpen(false)}
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