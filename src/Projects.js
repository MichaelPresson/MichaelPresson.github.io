import { CardGroup } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'
import RTBT from './RTBT.png'
import Pacmen from './pacmen.png'
import Eyes from './eyes.png'
import BankApp from './BankApp.webp'
import './styles.css';


function Projects() {
  return (
    <>
    <CardGroup id='projects'>
    <Card style={{ width: '26rem' }} className="text-center" text='white'>
      <Card.Header>BankApp Demonstration</Card.Header>
      <Card.Img variant="top" src={BankApp} alt='img not available' />
      <Card.Body>
        <Card.Text>
          Banking application complete with authorization and 3-tier architecture utilizing the MERN
          stack. This project restricts
          users to unique email addresses as well as having persistent data across logins per user using a MongoDB
          database.
        </Card.Text>
        <Button className='button__icon__Project' href='https://youtu.be/5ihKMbI9T8A' target='_blank'>Watch The Demonstration</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '26rem' }} className="text-center" text='white'>
      <Card.Header>Real Time Bus Tracker</Card.Header>
      <Card.Img variant="top" src={RTBT} alt='img not available' />
      <Card.Body>
        <Card.Text>
          A project webpage that shows the live locations of the Boston MBTA busses around the MIT
          campus.
        </Card.Text>
        <Button className='button__icon__Project' href='https://github.com/MichaelPresson/Real-Time-Bus-Tracker' target='_blank'>See The Code</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '26rem' }} className="text-center" text='white'>
      <Card.Header>PacMen Animation</Card.Header>
      <Card.Img variant="top" src={Pacmen} alt='img not available' />
      <Card.Body>
        <Card.Text>
          A project webpage that has buttons to create PacMen and make them move and bounce off of the edges.
        </Card.Text>
        <Button className='button__icon__Project' href='https://github.com/MichaelPresson/PacMen-Exercise' target='_blank'>See The Code</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '26rem' }} className="text-center" text='white'>
      <Card.Header>Interactive Eyes</Card.Header>
      <Card.Img variant="top" src={Eyes} alt='img not available' />
      <Card.Body>
        <Card.Text>
          A project webpage where animated eyes follow the pointer.
        </Card.Text>
        <Button className='button__icon__Project' href='https://github.com/MichaelPresson/Eyes-Exercise' target='_blank'>See The Code</Button>
      </Card.Body>
    </Card>
    </CardGroup>
    </>
  );
}

export default Projects;