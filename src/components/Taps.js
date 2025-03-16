import React from "react";

function Taps({ allTaps, selectedTap, setSelectedTap }) {
	return (
		<div className='container px-sm-5 search-section mb-5 sm:px-2 md:px-10 m-auto'>
			<ul className='nav nav-pills justify-content-center gap-[55px] flex justify-center items-center flex-wrap'>
				{allTaps.map((tap) => (
					<li
						key={tap.id}
						className={`nav-item cursor-pointer`}
						onClick={() => setSelectedTap(tap.id)}
					>
						<span
							className={`nav-link ${
								tap.id === selectedTap
									? "active text-red-400"
									: "text-emerald-200"
							}`}
							// href='/'
						>
							{tap.name}
						</span>
					</li>
				))}
			</ul>
		</div>
	);
}

export default Taps;
