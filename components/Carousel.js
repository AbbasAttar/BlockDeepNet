import  React  from  'react';
import  Carousel  from  'semantic-ui-carousel-react';
import { Image, Button } from  'semantic-ui-react'
const  App  = () => {
	let  elements  = [
		{
			render:()=>{
				return <Button  fluid>1111111</Button>
			}
		},
		{
			render:()=>{
				return <Button  fluid>2222222</Button>
			}
	    },
	]
	return (
		<div>
			<Carousel
				elements  =  {  elements  }
				duration  ={3000}
				animation  ='slide left'
				showNextPrev  =  {false}
				showIndicators  ={true}
			/>
		</div>
	)

}
export  default  App;