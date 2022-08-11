import React, { useState, useEffect } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const EditTaskPopup = ({ modal, toggle, updateCard, taskObj }) => {
	const [CardName, setCardName] = useState("");
	const [VideoLink, setVideoLink] = useState("");
	const [BucketName, setBucketName] = useState("");

	const handleChange = (e) => {
		const { name, value } = e.target;

		if (name === "CardName") {
			setCardName(value);
		} else if (name === "VideoLink") {
			setVideoLink(value);
		} else {
			setBucketName(value);
		}
	};

	useEffect(() => {
		setCardName(taskObj.Name);
		setVideoLink(taskObj.VideoLink);
		setBucketName(taskObj.BucketName);
	}, []);

	const handleUpdate = (e) => {
		e.preventDefault();
		let tempObj = {};
		tempObj["Name"] = CardName;
		tempObj["VideoLink"] = VideoLink;
		tempObj["BucketName"] = BucketName;
		updateCard(tempObj);
	};

	return (
		<Modal isOpen={modal} toggle={toggle}>
			<ModalHeader toggle={toggle}>Update Your Card</ModalHeader>
			<ModalBody>
				<div className="form-group">
					<label> Card Name</label>
					<input
						type="text"
						className="form-control"
						value={CardName}
						onChange={handleChange}
						name="CardName"
					/>
				</div>
				<div className="form-group">
					<label>YouTube Video Link Id</label>
					<input
						type="text"
						className="form-control"
						value={VideoLink}
						onChange={handleChange}
						name="VideoLink"
					/>
				</div>
				<div className="form-group">
					<label> Bucket Name</label>
					<input
						type="text"
						className="form-control"
						value={BucketName}
						onChange={handleChange}
						name="BucketName"
					/>
				</div>
			</ModalBody>
			<ModalFooter>
				<Button color="warning" onClick={handleUpdate}>
					Update
				</Button>{" "}
				<Button color="dark" onClick={toggle}>
					Cancel
				</Button>
			</ModalFooter>
		</Modal>
	);
};

export default EditTaskPopup;
