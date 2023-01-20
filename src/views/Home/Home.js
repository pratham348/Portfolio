import { Github, Linkedin, Twitter } from 'feather-icons-react/build/IconComponents';
import { Fragment, useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Row,
    Col,
    Card,
} from 'reactstrap';
import user from '../../assets/Images/u2.jpeg'
import bootstrap from '../../assets/Images/bootstrap.svg'
import css from '../../assets/Images/css.svg'
import git from '../../assets/Images/git.svg'
import github from '../../assets/Images/github.svg'
import html from '../../assets/Images/html-5.svg'
import javascript from '../../assets/Images/javascript-logo.svg'
import next from '../../assets/Images/nextjs.svg'
import react from '../../assets/Images/react.svg'
import redux from '../../assets/Images/redux.svg'
import sass from '../../assets/Images/sass.svg'
import tailwind from '../../assets/Images/tailwind.svg'
import vscode from '../../assets/Images/vscode.svg'
import project1 from '../../assets/Images/project1.svg'
import project2 from '../../assets/Images/project2.svg'
import project3 from '../../assets/Images/project3.svg'
import project4 from '../../assets/Images/project4.svg'
import project5 from '../../assets/Images/project5.svg'
import project6 from '../../assets/Images/project6.svg'
import pin from '../../assets/Images/pin-link.svg'
import githubFill from '../../assets/Images/github-fill.svg'

const Projects = [
    {
        image: project1,
        title: "Project Tile goes here",
        description: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
        stack: ['HTML', 'JavaScript', 'SASS', 'React'],
        live: "#",
        git: "#"
    },
    {
        image: project2,
        title: "Project Tile goes here",
        description: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
        stack: ['HTML', 'JavaScript', 'SASS', 'React'],
        live: "#",
        git: "#"
    }, {
        image: project3,
        title: "Project Tile goes here",
        description: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
        stack: ['HTML', 'JavaScript', 'SASS', 'React'],
        live: "#",
        git: "#"
    }, {
        image: project4,
        title: "Project Tile goes here",
        description: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
        stack: ['HTML', 'JavaScript', 'SASS', 'React'],
        live: "#",
        git: "#"
    }, {
        image: project5,
        title: "Project Tile goes here",
        description: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
        stack: ['HTML', 'JavaScript', 'SASS', 'React'],
        live: "#",
        git: "#"
    }, {
        image: project6,
        title: "Project Tile goes here",
        description: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
        stack: ['HTML', 'JavaScript', 'SASS', 'React'],
        live: "#",
        git: "#"
    },
]
const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    const args = {
        expand: "md",
        container: true,
    }
    return (
        <div>
            <div className="container">
            <Navbar {...args}>
                <NavbarBrand href="/">{"{Pratham}"}</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav navbar>
                        <NavItem>
                            <NavLink href="#home">Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#about"> About </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#techStack"> TechStack </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#projects"> Projects </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#contact">Contact </NavLink>
                        </NavItem>
                        <NavItem className='d-flex justify-content-between'>
                            <NavLink href="#contact"><Github /> </NavLink>
                            <NavLink href="#contact"><Twitter /> </NavLink>
                            <NavLink href="#contact"><Linkedin /> </NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>

                <Row className="home align-items-center" id="home">
                    <Col lg="8" md="8" sm="12">
                        <h1>
                            Hi 👋, <br/>
                            My name is<br/>
                            <span className='gradiant-text'>Pratham Chauhan</span><br/>
                            I build things for web
                        </h1>
                    </Col>
                    <Col lg="4" md="4" sm="12">
                        <img src={user} alt="user" className='img-fluid' />
                    </Col>
                </Row>
                <Row className='stack' id='techStack'>
                    <Col xs="12" className='title'>
                        <h1 className='mb-5'>My Tech Stack</h1>
                        <h4> Technologies I’ve been working with recently</h4>
                    </Col>
                    <Col xs="12">
                        <Row >
                            <Col lg="2" md="4" sm="6" xs="6"><img src={html} alt="technology-logo" className=' w-50 img-fluid mb-5' /> </Col>
                            <Col lg="2" md="4" sm="6" xs="6"><img src={css} alt="technology-logo" className=' w-50 img-fluid mb-5' /> </Col>
                            <Col lg="2" md="4" sm="6" xs="6"><img src={javascript} alt="technology-logo" className=' w-50 img-fluid mb-5' /> </Col>
                            <Col lg="2" md="4" sm="6" xs="6"><img src={react} alt="technology-logo" className=' w-50 img-fluid mb-5' /> </Col>
                            <Col lg="2" md="4" sm="6" xs="6"><img src={redux} alt="technology-logo" className=' w-50 img-fluid mb-5' /> </Col>
                            <Col lg="2" md="4" sm="6" xs="6"><img src={bootstrap} alt="technology-logo" className=' w-50 img-fluid mb-5' /> </Col>
                        </Row>
                        <Row >
                            <Col lg="2" md="4" sm="6" xs="6"><img src={tailwind} alt="technology-logo" className=' w-50 img-fluid mb-5' /> </Col>
                            <Col lg="2" md="4" sm="6" xs="6"><img src={sass} alt="technology-logo" className=' w-50 img-fluid mb-5' /> </Col>
                            <Col lg="2" md="4" sm="6" xs="6"><img src={git} alt="technology-logo" className=' w-50 img-fluid mb-5' /> </Col>
                            <Col lg="2" md="4" sm="6" xs="6"><img src={next} alt="technology-logo" className=' w-50 img-fluid mb-5' /> </Col>
                            <Col lg="2" md="4" sm="6" xs="6"><img src={github} alt="technology-logo" className=' w-50 img-fluid mb-5' /> </Col>
                            <Col lg="2" md="4" sm="6" xs="6"><img src={vscode} alt="technology-logo" className=' w-50 img-fluid mb-5' /> </Col>
                        </Row>
                    </Col>
                </Row>
                <Row className='project' id='projects'>
                    <Col xs="12" className='title'>
                        <h1 className='mb-5'>Projects</h1>
                        <h4> Things I’ve built so far</h4>
                    </Col>
                    <Col xs="12">
                        <Row>
                            {Projects.map((ele, index) => {
                                return (<Col lg="4" md="6" sm="12" key={index} className='mb-5'>
                                    <Card >

                                        <img src={ele.image} alt="project1" />
                                        <div className="text-box">

                                            <h2>{ele.title}</h2>
                                            <p>{ele.description}</p>
                                            <div className='d-flex align-items-baseline'><h6>Tech stack :</h6>&nbsp; <p className='tech-stack'>{ele.stack.map((e, i) => <Fragment key={i}>{e},&nbsp;</Fragment>)}</p></div>
                                            <div className='d-flex justify-content-between'>
                                                <div><img src={pin} alt="pin" className=' img-fluid' /> <a href={ele.live}> Live Preview</a></div>
                                                <div><img src={githubFill} alt="pin" className=' img-fluid' /> <a href={ele.git}> View Code</a></div>
                                            </div>
                                        </div>
                                    </Card>
                                </Col>)
                            })}

                        </Row>
                    </Col>
                </Row>
                <footer id="contact">
                    <Row className='first-row justify-content-between pb-4'>
                        <Col xl="6" lg="4" md="3" sm="12" className='first-col'>
                            <a href="/" className='gradiant-text'>{"{Pratham}"}</a>
                        </Col>
                        <Col xl="2" lg="2" md="3" sm="12" className='first-col'>

                            <a href="tel:1234567895">1234567890</a>
                        </Col>
                        <Col xl="2" lg="3" md="3" sm="12" className='first-col  '>

                            <a href="mailto:someone@example.com">someone@example.com</a>
                        </Col>
                        <Col xl="2" lg="3" md="3" sm="12" className='first-col flex-row justify-content-evenly'>
                            <a href="#contact"><Github /> </a>
                            <a href="#contact"><Twitter /> </a>
                            <a href="#contact"><Linkedin /> </a>
                        </Col>
                    </Row>
                    <Row className='second-row justify-content-between pt-4'>
                        <Col xl="6" lg="6" md="12" sm="12" className='second-col justify-content-between '>
                            <a href="#home">Home</a>
                            <a href="#about"> About </a>
                            <a href="#techStack"> TechStack </a>
                            <a href="#projects"> Projects </a>
                            <a href="#contact">Contact </a>
                        </Col>
                        <Col xl="6" lg="6" md="12" sm="12" className='second-col justify-content-lg-end justify-content-md-center'>
                            <p>Designed and built by <a  href="/" className='gradiant-text'>Pratham Chauhan</a> with <span className='gradiant-text'>Love</span> & <span className='gradiant-text'>Coffee</span></p>
                        </Col>
                    </Row>
                </footer>
            </div>
        </div>
    );
};

export default Home;