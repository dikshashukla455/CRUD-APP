import React from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const CardPop = ({ modal1, toggle }) => {
	return (
		<Modal isOpen={modal1} toggle={toggle}>
			<ModalHeader toggle={toggle}>Your Card</ModalHeader>
			<ModalBody>
				<div className="form-group">
					<label>Name</label>
				</div>
				<div className="form-group">
					<label>VideoLink</label>
				</div>
				<div className="form-group">
					<label>BucketName</label>
				</div>
			</ModalBody>
			<ModalFooter></ModalFooter>
		</Modal>
	);
};

export default CardPop;
