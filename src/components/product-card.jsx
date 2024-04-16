"use client"
import Image from "next/image";
import React from "react";
import { Badge, Card } from "react-bootstrap";
import "./product-card.scss"

const ProductCard = ({ name, price, image }) => {
	return (
		<Card className="product-card">
            <div className="image">
                <Image src={image} alt={name} fill className="card-img-top" />
            </div>
			
			<Card.Body>
				<Card.Title>{name}</Card.Title>
				<Card.Subtitle>
					<Badge>{price}</Badge>
				</Card.Subtitle>
			</Card.Body>
		</Card>
	);
};

export default ProductCard;