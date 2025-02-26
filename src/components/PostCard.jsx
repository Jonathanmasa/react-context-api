import { Link } from "react-router-dom";



const PostCard = (props) => {

    // destructuring dell'oggetto props
    const { articolo } = props;

    

    return (
        <>

            <div className="card m-3">
                <div className="card-header">
                <h4 className="card-title">{articolo.title}</h4>
                </div>

                <div className="card-body">
                    <p className="card-text">{articolo.content}</p>
                    <p className="card-text"><img className="img-fluid w-25" src={articolo.image} alt={articolo.content} /></p>
                    <p className="card-text">{articolo.tags.join(",")}</p>
                    <Link className="m-2 btn " to={`/posts/${articolo.id}`}>Vai al dettaglio</Link>
                </div>
            </div>

                

        </>
    )

}

export default PostCard