import { useState, useEffect } from "react";
import ImageCard from "./components/ImageCard";
import ImageSearch from "./components/ImageSearch";
import axios from "axios";
function App() {
  const [images, setImages] = useState([]);
  const [isloading, setIsLoading] = useState(true);
  const [term, setTerm] = useState("");

  useEffect(() => {
    // console.log(term);
    // fetch(
    //  `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true`
    //  )
    //   .then((res) => res.json())
    //  .then((data) => {
    //    console.log(data.hits);
    //    setImages(data.hits);
    //   setIsLoading(false);
    //  })
    // .catch((err) => console.log(err));

    const fetchData = async () => {
      const { data } = await axios.get(
        `https://pixabay.com/api/?key=24702359-bb7d3e67aa7b6d36f53b7f91d&q=${term}&image_type=photo`
      );
      console.log(data);
      setImages(data.hits);
      setIsLoading(false);
    };
    fetchData();
  }, [term]);
  return (
    <div className="container mx-auto">
      <ImageSearch searchText={(text) => setTerm(text)} />
      {isloading ? (
        <h1 className="text-6xl text-center mx-automt-32">Loading</h1>
      ) : (
        <div className="grid grid-cols-3 gap-4">
          {images.map((image) => (
            <ImageCard key={image.id} image={image} />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
