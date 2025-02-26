// importiamo il componente di listato Utente finale
import PostsList from "../components/PostsList";


export default function PostsPage(props) {
    return (
        <>
            <h2>Posts page</h2>
            <PostsList  postPropProps={props.postProp} /> 
        </>
    );
}