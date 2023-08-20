import { Link } from "react-router-dom"


export const PopularPosts = ({post}) => {
  return (
    <div className="bg-gray-600 my-1">
      <Link to={`${post._id}`} className="flex text-xs p-2 text-gray-400 hover:bg-gray-700 hover:text-white">
        {post.title}
      </Link>
    </div>
  )
}
