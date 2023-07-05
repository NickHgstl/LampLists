import { RiCloseLine } from "react-icons/ri";


export default function SongNameModal({renderSpark1,  onButtonClick, renderPlaylists, token, setIsModal4Open, sparkSongs, renderSongNames,aap}) {


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
                        {renderSongNames.map((songName) => (
                <>
                    <div
                    className="songName"
                    >
                    {songName}
                    </div>
                </>        
            ))}
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