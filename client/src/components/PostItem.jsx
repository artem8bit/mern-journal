import Moment from "react-moment";
import { AiFillEye, AiOutlineMessage } from "react-icons/ai";
import { Link } from "react-router-dom";

export const PostItem = ({ post }) => {
	if (!post) {
		return <div className="text-xl text-center py-10">Loading...</div>;
	}
	return (
		<Link to={`/${post._id}`}>
			<div className="flex flex-col basis-1/4 flex-grow">
				<div className={post.ImgUrl ? "flex rounded-sm h-80" : "flex rounded-sm"}>
					{post.imgUrl && (
						<img
							src={`http://localhost:3002/${post.imgUrl}`}
							alt="img"
							className="object-cover w-50 p-5"
						/>
					)}
				</div>
				<div className="flex justify-between items-center pt-2">
					<div>{post.username}</div>
					<div className="text-xs opacity-1">
						<Moment date={post.createdAt} format="DD.MM.YYYY" />
					</div>
				</div>
				<div className="text-xl">{post.title}</div>
				<div className="text-xs pt-4 line-clamp-2">{post.text}</div>

				<div className="flex gap-3 items-center mt-2">
					<button className="flex items-center justify-center gap-2 text-xs opacity-50">
						<AiFillEye /> <span>{post.views}</span>
					</button>
					<button className="flex items-center justify-center gap-2 text-xs opacity-50">
						<AiOutlineMessage /> <span>{post.comments?.length}</span>
					</button>
				</div>
			</div>
		</Link>
	);
};
