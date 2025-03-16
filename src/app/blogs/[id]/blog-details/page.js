import Image from "next/image";
import React from "react";

function BlogDetails() {
	return (
		<div>
			<div>
				<section
					className='blogs-section blogs-section-details flex justify-center items-center text-center'
					style={{ backgroundImage: "url('/imgs/blog banner.png')" }}
				>
					<h1 className='text-white text-left w-full mx-52 pb-4 text-2xl md:text-3xl lg:text-4xl font-bold'>
						blog
					</h1>
				</section>
			</div>
			<section className='mx-10 flex flex-col md:flex-row gap-6 my-16 justify-between bg-[#FAFAFA] rounded-lg p-5'>
				<Image
					width={300}
					height={300}
					src='/imgs/blog post.png'
					alt='logo'
					objectFit='cover'
					className='w-full md:w-[50%] h-[450px]'
				/>
				<div className='w-full md:w-[50%]'>
					<div className='flex justify-between items-center'>
						<div className='flex justify-center items-center gap-3'>
							<Image
								width={50}
								height={50}
								src='/imgs/Ellipse 62.png'
								alt='user'
								objectFit='cover'
								className=''
							/>
							<span>Eman</span>
						</div>
						<p>3-nov-2024</p>
					</div>
					<div className='flex justify-between my-3'>
						<div className='w-[72%]'>
							<h3 className='text-2xl md:text-3xl font-bold mb-3'>
								4 places to extend your summer vacation{" "}
							</h3>
							<p className='text-sm md:text-lg text-[5A5A5A]'>
								It is a long established fact that a reader will be distracted
								by the readable content of a page when looking at its layout.
								The point of using Lorem Ipsum is that it has a more-or-less
								normal distribution of letters, as opposed to using Content
								here, content here, making it look like readable English. Many
								desktop publishing packages and web page editors now use Lorem
								Ipsum as their default model text, and a search for lorem ipsum
								will uncover many web sites still in their infancy. Various
								versions have evolved over the years, sometimes by accident,
								sometimes on purpose (injected humour and the like).
							</p>
						</div>
						<div className='flex gap-3 items-end'>
							<Image
								width={30}
								height={30}
								src='/imgs/facebook.svg'
								alt='facebook'
								objectFit='cover'
								className=''
							/>
							<Image
								width={30}
								height={30}
								src='/imgs/instagram 1.svg'
								alt='instagram'
								objectFit='cover'
								className=''
							/>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}

export default BlogDetails;
