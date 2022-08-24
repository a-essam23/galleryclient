import { useParams } from "react-router-dom";
import CollectionList from "../components/collections/collectionList/CollectionList";

const collectionData = [
    {
        key: "1",
        code: "21",
        image: "https://ichef.bbci.co.uk/news/976/cpsprodpb/17638/production/_124800859_gettyimages-817514614.jpg",
    },
    {
        key: "2",
        code: "23",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg",
    },
    {
        key: "3",
        code: "22",
        image: "https://ichef.bbci.co.uk/news/976/cpsprodpb/1486F/production/_105597048_snakes8.jpg",
    },
    {
        key: "4",
        code: "22",
        image: "https://ichef.bbci.co.uk/news/976/cpsprodpb/1486F/production/_105597048_snakes8.jpg",
    },
    {
        key: "5",
        code: "22",
        image: "https://ichef.bbci.co.uk/news/976/cpsprodpb/1486F/production/_105597048_snakes8.jpg",
    },
    {
        key: "6",
        code: "22",
        image: "https://ichef.bbci.co.uk/news/976/cpsprodpb/1486F/production/_105597048_snakes8.jpg",
    },
    {
        key: "7",
        code: "22",
        image: "https://ichef.bbci.co.uk/news/976/cpsprodpb/1486F/production/_105597048_snakes8.jpg",
    },
    {
        key: "8",
        code: "21",
        image: "https://ichef.bbci.co.uk/news/976/cpsprodpb/17638/production/_124800859_gettyimages-817514614.jpg",
    },
    {
        key: "9",
        code: "23",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg",
    },
    {
        key: "10",
        code: "22",
        image: "https://ichef.bbci.co.uk/news/976/cpsprodpb/1486F/production/_105597048_snakes8.jpg",
    },
    {
        key: "11",
        code: "22",
        image: "https://ichef.bbci.co.uk/news/976/cpsprodpb/1486F/production/_105597048_snakes8.jpg",
    },
    {
        key: "12",
        code: "21",
        image: "https://ichef.bbci.co.uk/news/976/cpsprodpb/17638/production/_124800859_gettyimages-817514614.jpg",
    },
    {
        key: "13",
        code: "23",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg",
    },
    {
        key: "14",
        code: "22",
        image: "https://ichef.bbci.co.uk/news/976/cpsprodpb/1486F/production/_105597048_snakes8.jpg",
    },
    {
        key: "15",
        code: "22",
        image: "https://ichef.bbci.co.uk/news/976/cpsprodpb/1486F/production/_105597048_snakes8.jpg",
    },
    {
        key: "16",
        code: "21",
        image: "https://ichef.bbci.co.uk/news/976/cpsprodpb/17638/production/_124800859_gettyimages-817514614.jpg",
    },
    {
        key: "17",
        code: "23",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg",
    },
    {
        key: "18",
        code: "22",
        image: "https://ichef.bbci.co.uk/news/976/cpsprodpb/1486F/production/_105597048_snakes8.jpg",
    },
    {
        key: "19",
        code: "22",
        image: "https://ichef.bbci.co.uk/news/976/cpsprodpb/1486F/production/_105597048_snakes8.jpg",
    },
];

function ColletionPage(props) {
    const { collection } = useParams();
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
                {collection.toUpperCase()}
            </h2>
            <CollectionList collections={collectionData} />
        </section>
    );
}

export default ColletionPage;
