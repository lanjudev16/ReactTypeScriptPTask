import { postType } from "./Posts";

const Post = ({ title, thumbnail, description, price, category }: postType) => {
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img className="w-full h-[250px]" src={thumbnail} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {title.slice(0,15)}
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>{description.slice(0,75)}</p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">{category}</div>
                        <div className="badge badge-outline">${price}</div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Post;