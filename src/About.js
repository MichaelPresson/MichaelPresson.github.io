import Card from 'react-bootstrap/Card'
import MERN from './MERN.jpg'

function About() {
  return (
    <>
    <Card className="text-center" text='white' id='about'>
      <Card.Img src={MERN} alt="Card image"></Card.Img>
      <Card.ImgOverlay>
      <Card.Body>
        <Card.Title>Michael Presson</Card.Title>
        <Card.Text>
        My name is Michael Presson and I am currently looking for work in Software Development. I recently earned a
          Professional Certificate in Coding: Full Stack with MERN through Emeritus and MIT xPRO. This page is designed
          to showcase some of my progress on my journey to learning Software Development.        </Card.Text>
      </Card.Body>
      </Card.ImgOverlay>
    </Card>
    </>
  );
}

export default About;