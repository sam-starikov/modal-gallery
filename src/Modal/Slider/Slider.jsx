import './slick.css'
import './slick-theme.css'

import Slider from 'react-slick'

function SimpleSlider({ children }, autoplay, dots) {
	const settings = {
		infinite: true,
		speed: 700,
		slidesToShow: 1,
		slidesToScroll: 1,
		adaptiveHeight: true,
	}

	return (
		<Slider autoplay={autoplay} dots={dots} {...settings}>
			{children}
		</Slider>
	)
}

export default SimpleSlider
