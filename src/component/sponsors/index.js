import './style.css'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import cloudbees from '../../assets/cloudbees.png'
import osuosl from '../../assets/osuosl.png'
import cdf from '../../assets/cdf.png'
import redhat from '../../assets/redhat.png'
import aws from '../../assets/aws.png'
import github from '../../assets/github.png'
import jfrog from '../../assets/jfrog.png'

function Sponsors(){

    return(
        <>
            <div className='jumbotron' id='sponsorsblock'>
        <div className='sponsors'>
            <p>
                <strong>
                    We thank the following organizations for their major commitments to
                    support the Jenkins project.
                </strong>
            </p>
            <ul className ="spon">
                <li>
                    <a href='#'>
                        <img alt='CloudBees, Inc.' src={cloudbees} className='spon1' />
                    </a>
                </li>
                <li>
                    <a href='#'>
                        <img alt='Oregon State University Open Source Lab' src={osuosl} className='spon2' />
                    </a>
                </li>
                <li>
                    <a href='#'>
                        <img alt='Continuous Delivery Foundation' src={cdf} className='spon3' />
                    </a>
                </li>
                <li>
                    <a href='#'>
                        <img alt='Red Hat, Inc.' src={redhat} className='spon4' />
                    </a>
                </li>
                <li>
                    <a href='#'>
                        <img alt='AWS' src={aws} className='spon5' />
                    </a>
                </li>
                <li>
                    <a href='#'>
                        <img alt='GitHub, Inc.' src={github} className='spon6' />
                    </a>
                </li>
                <li>
                    <a href='#'>
                        <img alt='JFrog' src={jfrog} className='spon7' />
                    </a>
                </li>
            </ul>
        </div>
        <div className='supporters'>
            <p>
                <strong>
                    We thank the following organizations for their support of the Jenkins
                    project through free and/or open source licensing programs.
                </strong>
            </p>
            <ul>
                <li>
                    <a href='#'>Atlassian</a>
                </li>
                <li>
                    <a href='#'>Datadog</a>
                </li>
                <li>
                    <a href='#'>Mac Cloud</a>
                </li>
                <li>
                    <a href='#'>PagerDuty</a>
                </li>
                <li>
                    <a href='#'>Sentry</a>
                </li>
                <li>
                    <a href='#'>XMission</a>
                </li>
                <li>
                    <a href='#'>Tsinghua University</a>
                </li>
                <li>
                    <a href='#'>Fastly</a>
                </li>
                <li>
                    <a href='#'>SpinUp</a>
                </li>
                <li>
                    <a href='#'>IBM</a>
                </li>
            </ul>
        </div>
    </div>
        </>
    );
}

export default Sponsors