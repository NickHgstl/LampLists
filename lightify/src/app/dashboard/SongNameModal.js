import { RiCloseLine } from "react-icons/ri";


export default function SongNameModal({renderSpark1,  onButtonClick, renderPlaylists, token, setIsModal4Open, sparkSongs, renderSongNames,aap, renderSongIds}) {


    token = token
    
    function test5(songId){
        var tempId = songId.target.id
        var tempDel = document.getElementById(tempId)
       // console.log(renderSongNames)
        //console.log(renderSongIds)
        var i = 0

        for(i = 0; i <= renderSongIds.length; i++){
            if(tempId == renderSongIds[i]){
                var tempidd = renderSongNames[i]
                var nameDel = document.getElementById(tempidd)
                var idDel = songId.target

                    console.log(renderSongIds[i])
                    console.log(renderSongNames[i])
                    

                    if( i == renderSongIds.length-1){
                        renderSongIds.pop()
                        renderSongNames.pop()
                    }
                    else{
                        renderSongIds.splice(renderSongIds[i], 1)
                        renderSongNames.splice(renderSongNames[i], 1)
                        console.log(renderSongIds[i])
                        console.log(renderSongNames[i])
                    }
                    
                
                

                
                
                console.log(renderSongIds)
                console.log(renderSongNames)
                console.log(" ")
                console.log(nameDel)
                console.log(idDel)
                nameDel.remove()
                idDel.remove()
            }
           
        }

    }

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
                    <div className="modal4Content">



                        <div className="modal4Songs">
                            {renderSongNames.map((songName) => (
                                <>  
                                    <form className="songNameContainer">
                                        <div onClick={() => setIsModal4Open(false)} className="songName" id={songName} >
                                            {songName}
                                        </div>
                                    </form>                        
                                </>        
                            ))}

                        </div>
                        
                        <div className="modal4DelBtn">
                            {renderSongIds.map((songId) => (
                                <>  
                                    <form className="songDelBtn">
                                        <div onClick={test5} className="songName" id={songId}>
                                            x
                                        </div>
                                    </form>                        
                                </>        
                        ))}
                        </div>
                        





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