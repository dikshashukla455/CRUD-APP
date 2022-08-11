import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const CreateCardPopup = ({ modal, toggle, save }) => {
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

	const handleSave = (e) => {
		e.preventDefault();
		let taskObj = {};
		taskObj["Name"] = CardName;
		taskObj["VideoLink"] = VideoLink;
		taskObj["BucketName"] = BucketName;
		save(taskObj);
	};

	return (
		<Modal isOpen={modal} toggle={toggle}>
			<ModalHeader toggle={toggle}>Create Your own Card</ModalHeader>
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
						placeholder="Ex- pvuN_WvF1to"
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
				<Button color="info" onClick={handleSave}>
					Create
				</Button>{" "}
			</ModalFooter>
		</Modal>
	);
};

export default CreateCardPopup;
