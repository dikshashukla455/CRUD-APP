import React, { useState } from "react";
import EditCard from "../modals/EditCard";

const Card = ({ taskObj, index, deleteCard, updateListArray }) => {
	const [modal, setModal] = useState(false);

	const colors = [
		{
			primaryColor: "#6366f1",
			secondaryColor: "#a5b4fc",
		},
		{
			primaryColor: "#F9D288",
			secondaryColor: "#FEFAF1",
		},
		{
			primaryColor: "#d946ef",
			secondaryColor: "#f0abfc",
		},
		{
			primaryColor: "#14b8a6",
			secondaryColor: "#5eead4",
		},
	];

	const toggle = () => {
		setModal(!modal);
	};

	const updateCard = (obj) => {
		updateListArray(obj, index);
	};

	const handleDelete = () => {
		deleteCard(index);
	};

	return (
		<center>
			<div class="card-wrapper mr-3 mt-3" style={{ borderRadius: "10px" }}>
				<div class="card-holder">
					<span
						class="card-header"
						style={{
							"background-color": colors[index % 4].secondaryColor,
							"border-radius": "10px",
							color: "black",
						}}
					>
						{taskObj.BucketName}
					</span>
					<h4 className="mt-3 ml-3">{taskObj.Name}</h4>
					{taskObj.VideoLink && (
						<center>
							<iframe
								src={`https://www.youtube.com/embed/${taskObj.VideoLink}`}
								frameborder="0"
								width="250px"
								height="120px"
								title="Embedded"
								className="mt-3"
							></iframe>
						</center>
					)}
					<div style={{ position: "absolute", right: "20px", bottom: "20px" }}>
						<i
							class="far fa-edit mr-3"
							style={{
								color: colors[index % 4].primaryColor,
								cursor: "pointer",
							}}
							onClick={() => setModal(true)}
						></i>
						<i
							class="fas fa-trash-alt"
							style={{
								color: colors[index % 4].primaryColor,
								cursor: "pointer",
							}}
							onClick={handleDelete}
						></i>
					</div>
				</div>
				<EditCard
					modal={modal}
					toggle={toggle}
					updateCard={updateCard}
					taskObj={taskObj}
				/>
			</div>
		</center>
	);
};

export default Card;
