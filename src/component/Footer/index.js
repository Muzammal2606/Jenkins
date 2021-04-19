import './style.css'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import licence from '../../assets/licence.png'

function Footer(){

    return(
        <div>
            <footer id='footer'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-4'>
                            <p class='box'>
                                <a href='#'>Improve this page</a>
                                    |
                                <a href='#'>Report a problem</a>
                            </p>
                            <div className='license-box'>
                            <div id='creativecommons'>
                                <a href="#">
                                    <p>
                                        <img src={licence} alt="licences" className='licen' />
                                    </p>
                                </a>
                                <p>
                                The content driving this site is licensed under the Creative
                                Commons Attribution-ShareAlike 4.0 license.
                                </p>
                            </div>
                            </div>
                        </div>
                        <div class='links col-md-8'>
                    <div class='container'>
                        <div class='row'>
                            <div class='area col-md-3'>
                                <div class='div-mar'>
                                    <h5>Resources</h5>
                                    <ul class='resources'>
                                        <li>
                                            <a href='#'>
                                                Downloads
                                            </a>
                                        </li>
                                        <li>
                                            <a href='#'>
                                                Blog
                                            </a>
                                        </li>
                                        <li>
                                            <a href='#'>
                                                Documentation
                                            </a>
                                        </li>
                                        <li>
                                            <a href='#'>
                                                Plugins
                                            </a>
                                        </li>
                                        <li>
                                            <a href='#'>
                                                Security
                                            </a>
                                        </li>
                                        <li>
                                            <a href='#'>
                                                Contributing
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class='area col-md-3'>
                                <div class='div-mar'>
                                    <h5>Project</h5>
                                    <ul class='project'>
                                        <li>
                                            <a href='#'>
                                                Structure and governance
                                            </a>
                                        </li>
                                        <li>
                                            <a href='#'>
                                                Issue tracker
                                            </a>
                                        </li>
                                        <li>
                                            <a href='#'>
                                                Roadmap
                                            </a>
                                        </li>
                                        <li>
                                            <a href='#'>
                                                GitHub
                                            </a>
                                        </li>
                                        <li>
                                            <a href='#'>
                                                Jenkins on Jenkins
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class='area col-md-3'>
                                <div class='div-mar'>
                                    <h5>Community</h5>
                                    <ul class='community'>
                                        <li>
                                            <a href='#'>
                                                Events
                                            </a>
                                        </li>
                                        <li>
                                            <a href='#'>
                                                Mailing lists
                                            </a>
                                        </li>
                                        <li>
                                            <a href='#'>
                                                Chats
                                            </a>
                                        </li>
                                        <li>
                                            <a href='#'>
                                                Special Interest Groups
                                            </a>
                                        </li>
                                        <li>
                                            <a href='#'>
                                                Twitter
                                            </a>
                                        </li>
                                        <li>
                                            <a href='#'>
                                                Reddit
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class='area col-md-3'>
                                <div class='div-mar'>
                                    <h5>Other</h5>
                                    <ul class='other'>
                                        <li>
                                            <a href='#'>
                                                Code of Conduct
                                            </a>
                                        </li>
                                        <li>
                                            <a href='#'>
                                                Press information
                                            </a>
                                        </li>
                                        <li>
                                            <a href='#'>
                                                Merchandise
                                            </a>
                                        </li>
                                        <li>
                                            <a href='#'>
                                                Artwork
                                            </a>
                                        </li>
                                        <li>
                                            <a href='#'>
                                                Awards
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
export default Footer