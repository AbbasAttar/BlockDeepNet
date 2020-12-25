import  React  from  'react';
import  Carousel  from  'semantic-ui-carousel-react';
import { Image } from  'semantic-ui-react';
// import Image from "next/image";

const  App  = () => {
	let  elements  = [
		{
			render:()=>{
				return (
					<Image src="/Image1.jpg" alt="img1" id="img1" width="1127px" height="500px" />
                );
			}
		},
		{
			render:()=>{
				return (
						<Image src="/Image1.jpg" alt="img1" id="img1" width="1127px" height="500px" />
					);
			}
	    },
	]
	return (
		<div >
			<Carousel
				elements  =  {  elements  }
				duration  ={10000}
				animation  ='slide left'
				showNextPrev  =  {false}
				showIndicators ={false}
			/>
		</div>
	)

}
export  default  App;