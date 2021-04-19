import './style.css'
import jenkin from '../../assets/jenkin.PNG'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'

function LogoPart() {
     return(
         <div>
             <img src={jenkin} alt="logo" className ="logo"/>
             <div className='col-md-5 col-lg-4'>
                <h1 className='page-title'><span>
                    Jenkins
                </span></h1>
                <div className ="str">
                <p >
                 <strong>
                    Build great things at any scale
                </strong>
                </p>
            <p>
                The leading open source automation server, Jenkins provides
                hundreds of plugins to support building, deploying and automating
                any project.
            </p>
            <a class='btn btn-secondary m-1'>
                Documentation
            </a>
            <a class='btn btn-primary m-1' >
                Download
            </a>
            </div>
        </div>
         </div>
     );
}
export default LogoPart;