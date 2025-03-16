"use client";
import React, { useEffect } from "react";
import Buttons from "./Buttons";

function HeroSection() {
	useEffect(() => {
		const eventSection = document.querySelector(".event-section");
		const exploreButton = document.querySelector(".event-section a.btn");
		const headingText = document.querySelector(".event-section h1");
		const sliderButtons = document.querySelectorAll(".slider-btns span");

		const headingTexts = [
			"Choose from trending Events packages or create a new one",
			"Trending Destnations",
			"We offer to you comfort and luxury traveling by providing activities and tourist trips during your tour",
		];

		const backgroundImages = [
			"/imgs/event1.png",
			"/imgs/999.png",
			"/imgs/Entertainment.png",
		];

		eventSection.style.backgroundImage = `url(${backgroundImages[0]})`;

		function updateSliderContent(index) {
			headingText.textContent = headingTexts[index];
			eventSection.style.backgroundImage = `url(${backgroundImages[index]})`;

			sliderButtons.forEach((btn) => btn.classList.remove("active"));
			sliderButtons[index].classList.add("active");
		}

		// Add click event listeners to each slider button
		sliderButtons.forEach((button, index) => {
			button.addEventListener("click", () => {
				updateSliderContent(index);
			});
		});

		document.querySelectorAll(".flip-card").forEach((card) => {
			card.addEventListener("click", function () {
				this.classList.toggle("flipped");
			});
		});
	}, []); // Empty dependency array to run only on mount

	return (
		<section className='event-section flex justify-center items-center text-center'>
			<div className='overlay'>
				<div>
					<h1 className='text-white pb-4 text-2xl md:text-3xl lg:text-4xl'>
						Choose from trending Events packages or create a new one
					</h1>
					<a
						href='#'
						// className='btn btn-warning btn-lg mt-3 text-white px-5 p'
					>
						<Buttons
							text='Explore'
							onClick={() => {}}
							customClassName={"px-10 py-2"}
						/>
					</a>
				</div>
			</div>
			<div className='slider-btns'>
				<span
					data-no='1'
					className='active'
				></span>
				<span data-no='2'></span>
				<span data-no='3'></span>
			</div>
		</section>
	);
}

export default HeroSection;
