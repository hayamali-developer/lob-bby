// Ensure this is the export statement
"use client";

function Buttons({ text, onClick, customClassName, isDisabled = false }) {
	return (
		<button
			onClick={onClick}
			className={`bg-primary text-white rounded-lg hover:bg-primary/80 transition-all ease-in duration-200 ${
				isDisabled ? "opacity-50 cursor-not-allowed" : ""
			} ${customClassName ? customClassName : "px-4 py-2 "}`}
			disabled={isDisabled}
		>
			{text}
		</button>
	);
}

export default Buttons; // Ensure this is a default export
