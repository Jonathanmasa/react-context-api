// import degli elementi della libreria di gestione delle rotte
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// import use state use effect
import { useState, useEffect } from "react";
// import axios
import axios from "axios";
// importiamo il contesto creato (Global)
import GlobalContext from './contexts/GlobalContext';
// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
// import post page
import PostsPage from "./pages/PostsPage";
// import detailPage
import PostsDetailPage from "./pages/PostsDetailPage";


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
      <GlobalContext.Provider value={{ post }}>
          <BrowserRouter>
              <Routes>
                  <Route>
                      <Route index element={<PostsPage />} />
                      <Route path="/posts">
                        <Route path=":id" element={<PostsDetailPage />} />
                      </Route>
                      
                  </Route>
              </Routes>
          </BrowserRouter>
      </GlobalContext.Provider>
    </>
  )
}

export default App
