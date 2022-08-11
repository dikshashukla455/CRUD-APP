import React, { useEffect, useState } from "react";
import CreateCard from "../modals/CreateCard";
import Card from "./Card";

const TodoList = () => {
	const [modal, setModal] = useState(false);
	const [cardList, setcardList] = useState([]);

	useEffect(() => {
		let arr = localStorage.getItem("cardList");

		if (arr) {
			let obj = JSON.parse(arr);
			setcardList(obj);
		}
	}, []);

	const deleteCard = (index) => {
		let tempList = cardList;
		tempList.splice(index, 1);
		localStorage.setItem("cardList", JSON.stringify(tempList));
		setcardList(tempList);
		window.location.reload();
	};

	const updateListArray = (obj, index) => {
		let tempList = cardList;
		tempList[index] = obj;
		localStorage.setItem("cardList", JSON.stringify(tempList));
		setcardList(tempList);
		window.location.reload();
	};

	const toggle = () => {
		setModal(!modal);
	};

	const saveCard = (taskObj) => {
		let tempList = cardList;
		tempList.push(taskObj);
		localStorage.setItem("taskList", JSON.stringify(tempList));
		setcardList(cardList);
		setModal(false);
	};

	return (
		<>
			<div className="header text-center">
				<h3>Users card List</h3>
				<button
					className="btn btn-warning mt-2 text-white"
					onClick={() => setModal(true)}
				>
					Create your custom card
				</button>
			</div>
			<div className="card-container">
				{cardList &&
					cardList.map((obj, index) => (
						<Card
							taskObj={obj}
							index={index}
							deleteCard={deleteCard}
							updateListArray={updateListArray}
						/>
					))}
			</div>
			<CreateCard toggle={toggle} modal={modal} save={saveCard} />
		</>
	);
};

export default TodoList;
