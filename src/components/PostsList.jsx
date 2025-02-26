// import componente Card nel listato
import PostCard from "./PostCard";




const PostsList = () => {

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