import './style.css'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Dropdown from '../../../node_modules/react-bootstrap/Dropdown'
import cd from '../../assets/cd.png'

function Header(){

    return(
        <div className ="header">
            <h4 className="h3">jenkins</h4>
            <img src={cd} alt="cd" className/>
            <Dropdown>
                <Dropdown.Toggle className ='cd'>
                     
                </Dropdown.Toggle> 
                <Dropdown.Menu className ="menu">
                    <Dropdown.Item>What is CDF?</Dropdown.Item>
                    <Dropdown.Item>Jenkins X</Dropdown.Item>
                    <Dropdown.Item>Tekton</Dropdown.Item>
                    <Dropdown.Item>Spinnaker</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            <a href ="#" className ="blog">Blog</a>
            <Dropdown>
                <Dropdown.Toggle className="doc">
                    Documentation
                </Dropdown.Toggle>
                <Dropdown.Menu className ="menu">
                    <Dropdown.Item><strong>User Guide</strong></Dropdown.Item>
                    <Dropdown.Item>&nbsp;-&nbsp;Installing Jenkins</Dropdown.Item>
                    <Dropdown.Item>&nbsp;-&nbsp;Jenkins Pipeline</Dropdown.Item>
                    <Dropdown.Item>&nbsp;-&nbsp;Managing Jenkins</Dropdown.Item>
                    <Dropdown.Item>&nbsp;-&nbsp;System Administration</Dropdown.Item>
                    <Dropdown.Item>&nbsp;-&nbsp;Terms and Definitions</Dropdown.Item>
                    <Dropdown.Item><strong>Solution Pages</strong></Dropdown.Item>
                    <Dropdown.Item><strong>Tutorials</strong></Dropdown.Item>
                    <Dropdown.Item>&nbsp;-&nbsp;Guided Tour</Dropdown.Item>
                    <Dropdown.Item>&nbsp;-&nbsp;More Tutorials</Dropdown.Item>
                    <Dropdown.Item><strong>Developer Guide</strong></Dropdown.Item>
                    <Dropdown.Item><strong>Contributor Guide</strong></Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            <a href ="#" className ="plug">Plugins</a>
            <Dropdown>
                <Dropdown.Toggle className="com">
                    Community
                </Dropdown.Toggle>
                <Dropdown.Menu className ="menu">
                    <Dropdown.Item>Overview</Dropdown.Item>
                    <Dropdown.Item>Chat</Dropdown.Item>
                    <Dropdown.Item>Meet</Dropdown.Item>
                    <Dropdown.Item>Events</Dropdown.Item>
                    <Dropdown.Item>Issue Tracker</Dropdown.Item>
                    <Dropdown.Item>Mailing Lists</Dropdown.Item>
                    <Dropdown.Item>Roadmap</Dropdown.Item>
                    <Dropdown.Item>Account Management</Dropdown.Item>
                    <Dropdown.Item><strong>Special Interest Groups</strong></Dropdown.Item>
                    <Dropdown.Item>&nbsp;-&nbsp;Advocacy and Outreach</Dropdown.Item>
                    <Dropdown.Item>&nbsp;-&nbsp;Chinese Localization</Dropdown.Item>
                    <Dropdown.Item>&nbsp;-&nbsp;Cloud Native</Dropdown.Item>
                    <Dropdown.Item>&nbsp;-&nbsp;Documentation</Dropdown.Item>
                    <Dropdown.Item>&nbsp;-&nbsp;Google Summer of Code</Dropdown.Item>
                    <Dropdown.Item>&nbsp;-&nbsp;Hardware and EDA</Dropdown.Item>
                    <Dropdown.Item>&nbsp;-&nbsp;Pipeline Authoring</Dropdown.Item>
                    <Dropdown.Item>&nbsp;-&nbsp;Platform</Dropdown.Item>
                    <Dropdown.Item>&nbsp;-&nbsp;User Experience</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            <Dropdown>
                <Dropdown.Toggle className ="sub">
                    Sub Project
                </Dropdown.Toggle>
                <Dropdown.Menu className ="menu">
                    <Dropdown.Item>Overview</Dropdown.Item>
                    <Dropdown.Item>Evergreen</Dropdown.Item>
                    <Dropdown.Item>Google Summer of Code in Jenkins</Dropdown.Item>
                    <Dropdown.Item>Infrastructure</Dropdown.Item>
                    <Dropdown.Item>CI/CD and Jenkins Area Meetups</Dropdown.Item>
                    <Dropdown.Item>Jenkins Configuration as Code</Dropdown.Item>
                    <Dropdown.Item>Jenkins Operator</Dropdown.Item>
                    <Dropdown.Item>Jenkins Remoting</Dropdown.Item>
                    <Dropdown.Item>Document Jenkins on Kubernetes</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            <Dropdown>
                <Dropdown.Toggle className ="about">
                    About
                </Dropdown.Toggle>
                <Dropdown.Menu className ="menu">
                    <Dropdown.Item>Roadmap</Dropdown.Item>
                    <Dropdown.Item>Security</Dropdown.Item>
                    <Dropdown.Item>Press</Dropdown.Item>
                    <Dropdown.Item>Awards</Dropdown.Item>
                    <Dropdown.Item>Conduct</Dropdown.Item>
                    <Dropdown.Item>Artwork</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            <Dropdown>
                <Dropdown.Toggle className ="eng">
                    English
                </Dropdown.Toggle>
                <Dropdown.Menu className ="menu">
                    <Dropdown.Item>中文 Chinese</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            <button className="btn btnn">
                Download
            </button>
            <input placeholder ="Search" className ="inp"/>
            
        </div>
    );
}

export default Header;