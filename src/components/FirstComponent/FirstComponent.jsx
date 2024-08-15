import MyImage from '../FirstComponent/MyImage.jpg';
function FirstComponent(){
    return(
        <div id='image'>
            <img src={MyImage} alt="image" id='Myimage'/>
        </div>
    )
}
export default FirstComponent
