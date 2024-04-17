"use client";
import React from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import ButtonBack from "./button-back";

const DashboardProductsNew = () => {
	return (
		<Form>
			<Form.Group className="mb-3">
				<Form.Label>Title</Form.Label>
				<Form.Control type="text" />
			</Form.Group>
			<Form.Group className="mb-3">
				<Form.Label>Description</Form.Label>
				<Form.Control type="text" />
			</Form.Group>
			<Form.Group className="mb-3">
				<Form.Label>Category</Form.Label>
				<Form.Select aria-label="Default select example">
					<option>Select</option>
					<option value="Home">Home</option>
					<option value="Computers">Computers</option>
					<option value="Clothing">Clothing</option>
					<option value="Kids">Kids</option>
					<option value="Grocery">Grocery</option>
				</Form.Select>
			</Form.Group>
			<Form.Group className="mb-3">
				<Form.Label>Price</Form.Label>
				<Form.Control type="number" />
			</Form.Group>
			<Form.Group className="mb-3">
				<Form.Label>Image</Form.Label>
				<InputGroup>
					<Form.Select>
						<option value="https://images.pexels.com">
							Pexels
						</option>
						<option value="https://loremflickr.com">
							Lorem Flickr
						</option>
					</Form.Select>
					<Form.Control type="text" />
				</InputGroup>
			</Form.Group>

			<div className="d-flex justify-content-between">
				<ButtonBack/>
				<Button type="submit" variant="danger">
					Create
				</Button>
			</div>
		</Form>
	);
};

export default DashboardProductsNew;