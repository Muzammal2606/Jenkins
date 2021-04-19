import './style.css'

import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import image_1 from '../../assets/images.jpg'
import image_2 from '../../assets/image2.png'
import image_3 from '../../assets/image3.png'
import image_4 from '../../assets/image4.jpg'
import image_5 from '../../assets/image5.png'
import Carousel from '../../../node_modules/react-bootstrap/Carousel'

function Slider(){
    

    return(
        <div >
            <Carousel className='slider'>
                <Carousel.Item>
                    <img src={image_1} alt='image-1' className="africa d-block w-100" />
                    <Carousel.Caption className ='afric'>
                    <h2>
                        SheCodeAfrica Contributhon
                    </h2>
                    <p>
                        The SheCodeAfrica Contributhon started April 1, 2021. Jenkins Project is mentoring women in Africa as they propose pull requests to improve Pipeline help and Pipeline examples. The participants include Onyinye Ezike, Sharon Jebitok, Esther Ejidike, Cynthia Iradukunda, and Lucy Karimi
                    </p>
                    <a class='btn btn-primary' href='#'>
                        More info
                    </a>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={image_2} alt="image-2" className ="img2" />
                    <Carousel.Caption className ="caption2">
                    <h2>
                        GSoC 2021: Call for student proposals
                    </h2>
                    <p>
                        Jenkins project will be a mentoring organization in Google Summer of Code 2021. We are looking for students and mentors, join us! Applications close on April 13.
                    </p>
                    <a class='btn btn-primary' href='#'>
                        More info
                    </a>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={image_3} alt ="image3" className ="img3" />
                <Carousel.Caption className ="caption2">
                <h2>
                    Jenkins is the Way!
                </h2>
                <p>
                    We are looking for experiences of Jenkins users from around the world showcasing how they are building, deploying, and automating great software with Jenkins. Check out their user stories and share yours
                </p>
                <a class='btn btn-primary' href='#'>
                    More info
                </a>
                </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src ={image_4} alt='image4' className ="img4"  />
                <Carousel.Caption className ="caption2">
                <h2>
                    cdCon
                </h2>
                <p>
                    Join Jenkins at cdCon on June 22-25, 2021! The event is focused on improving the world's capacity to deliver software with security and speed. Become part of the conversation that drives continuous delivery by meeting peers, sharing ideas and talking to industry leaders on all things software delivery and DevOps.
                </p>
                <a class='btn btn-primary' href='#'>
                    Register for cdCon
                </a>
                </Carousel.Caption>
                </Carousel.Item>
            <Carousel.Item>
                <img src={image_5} alt="image5" className ="img3"/>
            <Carousel.Caption className ="caption2">
            <h2>
                Participate and Contribute!
            </h2>
            <p>
                Jenkins is a community-driven project. We invite everyone to join us and move it forward. Any contribution matters: code, documentation, localization, blog posts, artwork, meetups, and anything else. If you have five minutes or a few hours, you can help!
            </p>
            <a class='btn btn-primary' href='#'>
                More info
            </a>
            </Carousel.Caption>
            </Carousel.Item>
            </Carousel>
        </div>
    );
}
export default Slider