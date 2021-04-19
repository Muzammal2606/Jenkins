import ReactPlayer from '../../../node_modules/react-player'
import './style.css'

function Video(){

    return(
        <div className='vid'>
            <ReactPlayer url='https://www.youtube.com/embed/_MXtbjwsz3A' className='video_363' width='100%' height='800px' />
        </div>
    );
}

export default Video