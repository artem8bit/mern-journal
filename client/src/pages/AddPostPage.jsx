import { useState } from "react";
import {useNavigate} from 'react-router-dom'
import { useDispatch } from "react-redux";
import { createPost } from "../redux/features/post/postSlice";

export const AddPostPage = () => {
	const [title, setTitle]   = useState("");
	const [ text, setText ] = useState("");
	const [image, setImage] = useState("");
	const dispatch = useDispatch();
	const navigate  = useNavigate();

	const submitHandler = () => {
		try {
			const data = new FormData();
			data.append("title", title);
			data.append("text", text);
			data.append("image", image);
			dispatch(createPost(data));
			navigate('/')
		} catch (error) {
			console.log(error);
		}
	};

	const clearFormHandler = () => {
		setText('')
		setTitle('')
	}

	return (
		<form className="w-1/3 mx-auto py-10" onSubmit={(e) => e.preventDefault()}>
			<label className="text-gray-300 py-2 bg-gray-600 text-xs mt-2 flex items-center justify-center border-2 border-dotted cursor-pointer">
				Прикрепить изображение:
				<input
					type="file"
					className="hidden"
					onChange={(e) => setImage(e.target.files[0])}
				/>
			</label>
			<div className="flex object-cover py-2">
				{image && (
					<img src={URL.createObjectURL(image)} alt={image.name}/>
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
					Add post
				</button>
				<button 
				onClick={clearFormHandler}
				className="flex justify-center items-center bg-red-500 text-xs text-white rounded-sm py-2 px-4">
					Cancel
				</button>
			</div>
		</form>
	);
};