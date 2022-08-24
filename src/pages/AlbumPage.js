import AlbumList from "../components/albums/AlbumList";
import { useParams } from "react-router-dom";
import AlbumDetails from "../components/albums/AlbumDetails";

const albumsData = [
    {
        key: "12",
        code: "21",
        image: "https://ichef.bbci.co.uk/news/976/cpsprodpb/17638/production/_124800859_gettyimages-817514614.jpg",
    },
    {
        key: "22",
        code: "23",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg",
    },
    {
        key: "32",
        code: "22",
        image: "https://ichef.bbci.co.uk/news/976/cpsprodpb/1486F/production/_105597048_snakes8.jpg",
    },
    {
        key: "42",
        code: "22",
        image: "https://ichef.bbci.co.uk/news/976/cpsprodpb/1486F/production/_105597048_snakes8.jpg",
    },
    {
        key: "52",
        code: "22",
        image: "https://ichef.bbci.co.uk/news/976/cpsprodpb/1486F/production/_105597048_snakes8.jpg",
    },
    {
        key: "62",
        code: "22",
        image: "https://ichef.bbci.co.uk/news/976/cpsprodpb/1486F/production/_105597048_snakes8.jpg",
    },
    {
        key: "72",
        code: "22",
        image: "https://ichef.bbci.co.uk/news/976/cpsprodpb/1486F/production/_105597048_snakes8.jpg",
    },
    {
        key: "82",
        code: "21",
        image: "https://ichef.bbci.co.uk/news/976/cpsprodpb/17638/production/_124800859_gettyimages-817514614.jpg",
    },
    {
        key: "92",
        code: "23",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg",
    },
    {
        key: "102",
        code: "22",
        image: "https://ichef.bbci.co.uk/news/976/cpsprodpb/1486F/production/_105597048_snakes8.jpg",
    },
    {
        key: "112",
        code: "22",
        image: "https://ichef.bbci.co.uk/news/976/cpsprodpb/1486F/production/_105597048_snakes8.jpg",
    },
    {
        key: "122",
        code: "21",
        image: "https://ichef.bbci.co.uk/news/976/cpsprodpb/17638/production/_124800859_gettyimages-817514614.jpg",
    },
    {
        key: "132",
        code: "223",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg",
    },
    {
        key: "142",
        code: "22",
        image: "https://ichef.bbci.co.uk/news/976/cpsprodpb/1486F/production/_105597048_snakes8.jpg",
    },
    {
        key: "152",
        code: "22",
        image: "https://ichef.bbci.co.uk/news/976/cpsprodpb/1486F/production/_105597048_snakes8.jpg",
    },
    {
        key: "162",
        code: "21",
        image: "https://ichef.bbci.co.uk/news/976/cpsprodpb/17638/production/_124800859_gettyimages-817514614.jpg",
    },
    {
        key: "172",
        code: "23",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg",
    },
    {
        key: "182",
        code: "22",
        image: "https://ichef.bbci.co.uk/news/976/cpsprodpb/1486F/production/_105597048_snakes8.jpg",
    },
    {
        key: "192",
        code: "22",
        image: "https://ichef.bbci.co.uk/news/976/cpsprodpb/1486F/production/_105597048_snakes8.jpg",
    },
];

function AlbumPage(props) {
    const { collection, album } = useParams();
    return (
        <section>
            <h2
                style={{
                    color: "gold",
                    fontSize: "8rem",
                    padding: "0",
                    margin: "0",
                    textAlign: "center",
                }}
            >
                {album.toUpperCase()}
            </h2>
            <AlbumList albums={albumsData} />
        </section>
    );
}

export default AlbumPage;
