import { useEffect, useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updatePost } from "../redux/features/post/postSlice";

import axios from "../utils/axios";

export const EditPostPage = () => {
	const [title, setTitle] = useState("");
	const [text, setText] = useState("");
	const [oldImage, setOldImage] = useState("");
	const [newImage, setNewImage] = useState("");

	const dispatch = useDispatch();
	const navigate = useNavigate();
	const params = useParams();

	const fetchPost = useCallback(async () => {
		const { data } = await axios.get(`/posts/${params.id}`);
		setTitle(data.title);
		setText(data.text);
		setOldImage(data.imgUrl);
	}, [params.id]);

	const submitHandler = () => {
		try {
			const updatedPost = new FormData();
			updatedPost.append("title", title);
			updatedPost.append("text", text);
			updatedPost.append("id", params.id);
			updatedPost.append("image", newImage);
			dispatch(updatePost(updatedPost));
			navigate("/posts");
		} catch (error) {
			console.log(error);
		}
	};

	const clearFormHandler = () => {
		setTitle("");
		setText("");
	};

	useEffect(() => {
		fetchPost();
	}, [fetchPost]);

	return (
		<form className="w-1/3 mx-auto py-10" onSubmit={(e) => e.preventDefault()}>
			<label className="text-gray-300 py-2 bg-gray-600 text-xs mt-2 flex items-center justify-center border-2 border-dotted cursor-pointer">
				Прикрепить изображение:
				<input
					type="file"
					className="hidden"
					onChange={(e) => {
						setNewImage(e.target.files[0]);
						setOldImage("");
					}}
				/>
			</label>
			<div className="flex object-cover py-2">
				{oldImage && (
					<img
						src={`https://mern-journal-app.onrender.com/${oldImage}`}
						alt={oldImage.name}
					/>
				)}
				{newImage && (
					<img src={URL.createObjectURL(newImage)} alt={oldImage.name} />
				)}
			</div>

			<label className=" text-lg text-green-500 font-bold">
				Title:
				<input
					type="text"
					value={title}
					onChange={(e) => setTitle(e.target.value)}
					placeholder="Введите заголовок"
					className="mt-1 text-black w-full  bg-slate-300 border py-1 px-2 text-xs outline-none placeholder:text-gray-400"
				/>
			</label>
			<label className=" text-lg  text text-sky-600 font-bold">
				Post text:
				<textarea
					value={text}
					onChange={(e) => setText(e.target.value)}
					placeholder="Введите текст поста"
					className="mt-1 text-black w-full rounded-lg bg-slate-300 border py-1 px-2 text-xs outline-none resize-none h-40 placeholder:text-gray-400"
				/>
			</label>
			<div className="flex gap-8 items-center justify-center mt-4">
				<button
					onClick={submitHandler}
					className="flex justify-center items-center bg- bg-green-400 text-xs text-white rounded-sm py-2 px-4"
				>
					Update post
				</button>
				<button
					onClick={clearFormHandler}
					className="flex justify-center items-center bg-red-500 text-xs text-white rounded-sm py-2 px-4"
				>
					Cancel
				</button>
			</div>
		</form>
	);
};
