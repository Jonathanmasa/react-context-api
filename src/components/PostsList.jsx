import { useContext } from "react";
import GlobalContext from '../contexts/GlobalContext'
// import componente Card nel listato
import PostCard from "./PostCard";




const PostsList = () => {

    // destrutturiamo l'esecuzione del useContext (oggetto di ritorno)
    const { post } = useContext(GlobalContext);

    return (
        <>

            {
                post.map((articolo) => (
                    <PostCard key={articolo.id} articolo={articolo} />
                ))


            }
        </>
    )

}

export default PostsList