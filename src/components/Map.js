import React from "react";

function Map({ title = "Location", mapSrc }) {
	return (
		<div className='py-5'>
			<h5 className='font-bold pb-2'>{title}</h5>
			<iframe
				id='my-map'
				title={title}
				src={mapSrc}
				style={{ width: "100%", height: "400px", border: "0" }}
				allowFullScreen
				loading='lazy'
			></iframe>
		</div>
	);
}

export default Map;
