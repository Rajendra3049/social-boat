import { useEffect, useState } from "react";
import Navbar from "./components/navbar";
import Loader from "./components/loader";
import Card from "./components/card";


function App() {

  // state
  const [videosData, setVideosData] = useState([])
  const [searchQuery, setSearchQuery] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [limit, setLimit] = useState(9)
  const [searchId,setSearchId]=useState(null)


  useEffect(() => {
    if (searchId) {
      clearTimeout(searchId)
  }
    setSearchId(setTimeout(() => {
      handleSearch()
   },500))
  
  }, [searchQuery])

  async function handleSearch() {
    setLimit(9)
    if (searchQuery !== "") {
      try {
        setLoading(true)
        let res = await fetch(`https://asia-south1-socialboat-dev.cloudfunctions.net/assignmentVideos?q=${searchQuery}&numResults=20`)
  
        let data = await res.json()
        if (data.status === "success") {
          setLoading(false)
          setVideosData(data.results)
          
        } else {
          setLoading(false)
          setError(true)
        }
        
      } catch (error) {
        setLoading(false)
        setError(true)
        
      }
    } else {
      setLoading(false)
      setError(false)
      setVideosData([])
    }
  }
  
  return (
    <div className="App">
      <Navbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
  
      <div className="container">
        {loading ? (
          <Loader />
        ) : videosData.length > 0 ? (
          <>
            <div className="row">
              {videosData
                .filter((video, i) => i < limit)
                .map((video, i) => (
                  <Card
                    key={i}
                    video={video.video}
                    heading={video.heading}
                    tags={video.tags}
                  />
                ))}
            </div>
            {limit + 9 <= 20 ? (
              <button
                className="d-grid col-6 btn btn-outline-primary m-auto mt-2 mb-2"
                onClick={() => {
                  setLimit((prev) => prev + 9);
                }}
              >
                Show More
              </button>
            ) : (
              <div className="text-center fs-1 fw-bold">
                <div>No more videos</div>
              </div>
            )}
          </>
        ) : (
          <div className="text-center fs-1 fw-bold">
            <div>Search for videos</div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
