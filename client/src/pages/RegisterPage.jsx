import React, { useState, useEffect } from "react";

import { Link, useNavigate } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import { registerUser,checkIsAuth } from "../redux/features/auth/authSlice";
import { toast } from "react-toastify";

export const RegisterPage = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const { status } = useSelector((state) => state.auth);
  const isAuth = useSelector(checkIsAuth)

  const dispatch = useDispatch();
  const navigate = useNavigate();

	useEffect(() => {
    if (status){
      toast(status)
    }
    if (isAuth) navigate('/')
  }, [status, isAuth, navigate]);
    




	const handleSubmit = () => {
		try {
			dispatch(registerUser({ username, password }));
			setPassword("");
			setUsername("");
		} catch (error) {
			console.log(error);
		}
	};

  


	return (
		<form
			onSubmit={(e) => e.preventDefault()}
			className="w-1/4 h-60 mx-auto mt-40"
		>
			<h1 className="font-bold text-2xl text-gray-700 text-center">
				Регистрация
			</h1>
			<label className="text-xs text-gray-600">
				<input
					value={username}
					onChange={(e) => setUsername(e.target.value)}
					type="text"
					placeholder="Username"
					className="mt-5 text-black w-full rounded-lg bg-slate-200 border py-2 px-4 text-xs outline-none placeholder:text-gray-600 placeholder:text-sm"
				/>
			</label>
			<label className="text-xs text-gray-600">
				<input
					type="password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					placeholder="Password"
					className="mt-5 text-black w-full rounded-lg bg-slate-200 border py-2 px-4 text-xs outline-none placeholder:text-gray-600 placeholder:text-sm"
				/>
			</label>
			<div className="flex gap-8 justify-center mt-4">
				<button
					type="submit"
					onClick={handleSubmit}
					className="flex justify-center items-center text-xs text-white bg-green-400 rounded-sm py-2 px-4"
				>
					Create account
				</button>
				<Link
					to="/login"
					className="flex justify-center items-center text-xs text-gray-600"
				>
					Уже зарегестрированы?
				</Link>
			</div>
		</form>
	);
};
