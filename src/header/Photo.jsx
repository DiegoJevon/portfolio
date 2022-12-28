import PhotoJevon from "../images/photo.jpg"

function Photo(){
    return(
        
        <div class="flex justify-center">
            <div class="w-auto">
            <img className="object-cover rounded-full shadow-lg shadow-jevon-gold w-80 h-80 " src={PhotoJevon} alt="Diego's photo"/>
            </div>
        </div>
        
    )
}
export default Photo;   