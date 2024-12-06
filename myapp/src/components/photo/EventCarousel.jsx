import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';

function EventCarousel() {
  return (
    <>
    <div>
      <h1>Stills From Corporate Events</h1>
    </div>
    <div className='carouseldiv'>
    <Carousel>
      <Carousel.Item interval={1000}>
        <img 
        src="/photography/event3.webp"
        alt="image not found"
        width="100%"
        height="600px"
        />
        {/* <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption> */}
      </Carousel.Item>

      <Carousel.Item interval={1000}>
      <img 
        src="/photography/event1.jpg"
        alt="image not found"
        width="100%"
        height="600px"
        />
        {/* <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
      <img 
        src="/photography/event4.jpg"
        alt="image not found"
        width="100%"
        height="600px"
        />
        {/* <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption> */}
      </Carousel.Item>
    </Carousel>
    </div>

    </>

  );
}

export default EventCarousel;