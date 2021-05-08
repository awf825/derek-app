/* 
	package is an ext of <img> "evolved for modern web"	

	Next also has support for Image Optimzation by default. This allows for optimizing, and serving images in modern web 
	like Webp when the browser supports it. Avoids shipping large images to small devices, adopts future image formats and
	feeds it to browsers that support them

	Automatic image Optimatization (AIO) works on any image source. 
	Instead of optimizing images at buildtime, Next optimizes images on-demand, as users request them. Unlike static 
	site generators and static only solutins, your build times aren't increased, whether shipping 10 images or 10mil 
	images. 

	IMAGES ARE ALWAYS RENDERED IN SUCH A WAY AS TO AVOID CUMULATIVE LAYOUT SHIFT, A CORE WEB VITAL 
	THAT GOOGLE IS GOING TO USE IN SEARCH RANKING. 

	(https://developers.google.com/search/blog/2020/05/evaluating-page-experience)
	https://nextjs.org/docs/api-reference/next/image
	(https://web.dev/vitals/#core-web-vitals) 
	(https://web.dev/cls/)
	(https://nextjs.org/docs/basic-features/image-optimization)
*/

// import Image from 'next/image';

// const ImageComp = () => {
// 	<Image
// 		src="/images/profile.jpg"
// 		height={144}
// 		width={144}
// 		alt="Aiden"
// 	/>
// }