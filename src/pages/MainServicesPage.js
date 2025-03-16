"use client";
import DetailsPage from "@/components/DetailsPage";
import React, {useEffect, useState} from "react";
import { useParams } from "next/navigation";
import axios from "axios";
function MainServicesPage() {
	const { id } = useParams();

	const [categoryField, setCategoryField] = useState({
		name_en: "",
		description_en: "",
		images: [],
		cover: "",
		location: "",
	  });

	useEffect(() => {
		(async () => {
			try {
				const response = await axios.get(`http://127.0.0.1:8000/api/get/service/${id}`);
				console.log("API Response:", response.data.images); // Check image URLs in the console
				setCategoryField(response.data.data ?? { name_en: "", description_en: "", images: [] ,cover:"",location: "" });
			} catch (error) {
				console.error("Error fetching provider:", error);
				setCategoryField({
					name_en: "",
					description_en: "",
					images: [],
					cover: "",
					location: "",
				  });
			}

		})();
	}, [id]);



	let mapAddress =
		"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d157186.2175747697!2d31.7800598!3d30.6836844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f131!3m3!1m2!1s0x14f8231d398fa279%3A0x56f4f3e6a82ace8!2sAl-Sawaleh%2C%20Fakous%2C%20Al%20Sharqia%2C%20Egypt!5e0!3m2!1sen!2sbd!4v1693855678321!5m2!1sen!2sbd"
	return (
		<div>
			<DetailsPage
				title={categoryField.name_en || "Service Name"}
				data={categoryField.images || []}
				mapLocation={categoryField.location || mapAddress}
				description={categoryField.description_en || "No description available."}
				reverceAction={() => console.log("reverceAction")}
				websiteName={categoryField.link}
				websiteUrl={categoryField.link}
				reverceTime={"12 am to 5am"}
				reverceTitle={"Reserve Venue"}
			/>
		</div>
	);
}

export default MainServicesPage;
