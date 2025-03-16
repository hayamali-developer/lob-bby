import Image from "next/image";
import React from "react";

function TrendingDestinationsCities() {
	return (
		<div className='container-fluid px-sm-5 mt-4'>
			<div className='row'>
				<div className='col-12 mb-3'>
					<div className='card border-0'>
						<div className='main-trending-dev'>
							{/* <img
								src="/imgs/trending destination  banner  2.png"
								className="card-img-top rounded"
								alt="Event 1"
								height="280px"
							/>  */}
							<div className='trending-dev bottom-0 left-0 right-0 start-0 p-2 text-white'>
								<div>
									<h3>Trending Destniation Cities</h3>
									<p style={{ fontSize: "12px", fontWeight: "normal" }}>
										Lorem ipsum dolor sit, amet consectetur adipisicing elit.
										Facere illum fuga asperiores laudantium itaque, nemo
										accusantium ratione, sit a praesentium delectus tempora
										iusto explicabo saepe possimus unde molestias sapiente
										numquam cupiditate beatae rerum. Quae non repudiandae veniam
										tempora. Aliquam aperiam natus nobis impedit sed nulla ab
										quisquam, iure excepturi optio.
									</p>
								</div>
								<Image
									src='/imgs/city.png'
									alt='city'
									className='pt-5 md:pt-0'
									width={350}
									height={200}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default TrendingDestinationsCities;