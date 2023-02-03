import Card from 'react-bootstrap/Card';
import Button  from 'react-bootstrap/Button';
import FooterBanner from './FooterBanner.png';

function Contact() {
  return (
    <>
    <Card className="text-left text-white" id='contact'>
      <Card.Img src={FooterBanner}></Card.Img>
      <Card.ImgOverlay>
        <Card.Title>Contact Me:</Card.Title>
        <Button className='button__icon__Email' href="mailto:presson.michael.j@gmail.com?subject=You're Hired">Email</Button>
      </Card.ImgOverlay>
    </Card>
    </>
  );
}

export default Contact;