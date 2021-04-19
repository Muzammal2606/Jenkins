import './style.css'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import shuffle from '../../assets/shuffle.png';
import install from '../../assets/install.png';
import conf from '../../assets/conf.png'
import plug from '../../assets/plug.png'
import exten from '../../assets/exten.png'
import dist from '../../assets/dist.png'


function Feature(){

    return(
        <div className='feature'>
             <div class='segment' id='feature-list-segment'>
        <div class='container'>
            <div class='row chunks features uniform-height'>
                <div class='col-md-6 col-lg-4'>
                    <img src={shuffle} alt="arrow" className='icons' />
                    <h5 className ="h">
                        Continuous Integration and Continuous Delivery
                    </h5>
                    <p className='par'>
                        As an extensible automation server, Jenkins can be used as a simple
                        CI server or turned into the continuous delivery hub for any project.
                    </p>

                </div>
                <div class='col-md-6 col-lg-4'>
                    <img src={install} alt="arrow" className='icons'/>
                    <h5 className ="h">
                        Easy installation
                    </h5>
                    <p  className='par'>
                        Jenkins is a self-contained Java-based program, ready to run
                        out-of-the-box, with packages for Windows, Linux, macOS and other
                        Unix-like operating systems.
                    </p>
                </div>
                <div class='col-md-6 col-lg-4'>
                    <img src={conf} alt="arrow" className='icons'/>
                    <h5 className ="h">
                        Easy configuration
                    </h5>
                    <p className='par'>
                        Jenkins can be easily set up and configured via its web interface,
                        which includes on-the-fly error checks and built-in help.
                    </p>
                </div>
                <div class='col-md-6 col-lg-4'>
                    <img src={plug} alt="arrow" className='icons' />
                    <h5 className ="h">
                        Plugins
                    </h5>
                    <p className='par'>
                        With hundreds of plugins in the Update Center, Jenkins integrates
                        with practically every tool in the continuous integration and
                        continuous delivery toolchain.
                    </p>
                </div>
                <div class='col-md-6 col-lg-4'>
                    <img src={exten} alt="arrow" className='icons'  />
                    <h5 className ="h">
                        Extensible
                    </h5>
                    <p className='par'>
                        Jenkins can be extended via its plugin architecture, providing
                        nearly infinite possibilities for what Jenkins can do.
                    </p>

                </div>
                <div class='col-md-6 col-lg-4'>
                    <img src={dist} alt="arrow" className='icons' />
                    <h5 className ="h">
                        Distributed
                    </h5>
                    <p className='par'>
                        Jenkins can easily distribute work across multiple machines,
                        helping drive builds, tests and deployments across multiple
                        platforms faster.
                    </p>
                </div>
            </div>
        </div>
    </div>
        </div>
    );
}

export default Feature