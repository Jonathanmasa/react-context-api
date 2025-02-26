// import componente Card nel listato
import PostCard from "./PostCard";




const PostsList = (props) => {

    return (
        <>

            {
                props.postPropProps.map((articolo) => (
                    <PostCard key={articolo.id} articolo={articolo} />
                ))


            }
        </>
    )

}

export default PostsList