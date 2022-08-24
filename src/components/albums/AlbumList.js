import "./AlbumList.css";
import Album from "../albums/Album";
const Columns = require("react-columns").default;

function AlbumList({ albums, image, code, key }) {
    var queries = [
        {
            columns: 2,
            query: "min-width: 500px",
        },
        {
            columns: 3,
            query: "min-width: 1000px",
        },
    ];
    return (
        <Columns queries={queries}>
            {albums.map((album) => (
                <div className="album-wrapper">
                    <Album
                        image={album.image}
                        code={album.code}
                        ref_id={album.key}
                        key={album.key}
                    />
                </div>
            ))}
        </Columns>
    );
    // return (
    //     <Image.PreviewGroup>
    //         <div className="album-list">
    //             {albums.map((album) => (
    //                 <div className="album-wrapper">
    //                     <Album
    //                         image={album.image}
    //                         code={album.code}
    //                         ref_id={album.key}
    //                         key={album.key}
    //                     />
    //                 </div>
    //             ))}
    //         </div>
    //     </Image.PreviewGroup>
    // );
}

export default AlbumList;
