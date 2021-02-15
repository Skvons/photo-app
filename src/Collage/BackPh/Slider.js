import React from 'react';
import Ph1 from './Source/1.jpg';
import Ph2 from './Source/2.jpg';
import Ph3 from './Source/3.jpg';
import Ph4 from './Source/4.jpg';

/*const slides = [
		<img key={Slide1} src={Ph1} style={headerImage}/>,
		<img key={Slide2} src={Ph2} style={headerImage}/>,
		<img key={Slide3} src={Ph3} style={headerImage}/>,
		<img key={Slide4} src={Ph4} style={headerImage}/>
]*/

const headerImage = {
	width:'60%',
	color:'#0767b0',
	position: 'absolute',
	height: '100vh',
	objectFit: 'cover',
	opacity: '1',
	transition: '1.7s',
	filter: 'brightness(100%)'
}

function Slider() {
	/*const [activeSlide, setActiveSlide] = useState(0)

	useEffect( () => {
		const interval = setInterval(() => {
			setActiveSlide( (current) => 
				current === images.length - 1 ? 0 : current +1
			)
		},3000)
		return () => clearInterval();
	},[])
	*/
	
	return (
	<div>
		<img src={Ph1} style={headerImage}/>
	</div>
	);
}


export default Slider;