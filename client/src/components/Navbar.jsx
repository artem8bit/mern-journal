import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { Link, NavLink, useNavigate } from "react-router-dom";
import { checkIsAuth, logout } from "../redux/features/auth/authSlice";
import { toast } from "react-toastify";

export const Navbar = () => {
	const isAuth = useSelector(checkIsAuth);
	const dispatch = useDispatch();
	const activeStyles = {
		color: "#c31f3f",
	};
	const navigate = useNavigate();
	const logoutHandler = () => {
		dispatch(logout());
		window.localStorage.removeItem("token");
		toast("Вы вышли из системы");
		navigate("/login");
	};

	return (
		<div className="flex py-4 justify-between items-center">
			{isAuth && (
				
				<span className="flex justify-center items-center w-6 h-6 bg-emerald-400 text-sm text-white rounded-full px-5 py-5 m-1">
					
				</span>
			)}

			{isAuth && (
				<ul className="flex gap-20 font-bold">
					<li>
						<NavLink
							to={"/"}
							className="text-base text-gray-600 hover:text-black"
							style={({ isActive }) => (isActive ? activeStyles : undefined)}
						>
							Главная
						</NavLink>
					</li>
					<li>
						<NavLink
							to={"/posts"}
							className="text-base text-gray-600 hover:text-black"
							style={({ isActive }) => (isActive ? activeStyles : undefined)}
						>
							Мои посты
						</NavLink>
					</li>
					<li>
						<NavLink
							to={"/new"}
							className="text-base text-gray-600 hover:text-black"
							style={({ isActive }) => (isActive ? activeStyles : undefined)}
						>
							Добавить пост
						</NavLink>
					</li>
				</ul>
			)}
			<div className="flex justify-center items-center bg-gray-700 text-sm text-white rounded-sm  p-2 m-1">
				{isAuth ? (
					<button onClick={logoutHandler}>Log out</button>
				) : (
					<Link to={"/login"}>Log in</Link>
				)}
			</div>
		</div>
	);
};
