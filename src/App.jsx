// import degli elementi della libreria di gestione delle rotte
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// import use state use effect
import { useState, useEffect } from "react";
// import axios
import axios from "axios";

function App() {

    const [post, setPost] = useState([]);

    // Fetching dei dati
    function fetchPosts() {
      axios.get("http://localhost:3000/posts")
        .then((res) => 
          setPost(res.data)
        )
    }

    useEffect(fetchPosts, []);

  return (
    <>

       <BrowserRouter>
          <Routes>
              <Route element={<DefaultLayout />} >
                  <Route index element={<PostsPage />} />
              </Route>
          </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App
