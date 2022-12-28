import Home from "../images/nodex_home.JPG"
import Search from "../images/nodex_search.JPG"
import Event from "../images/nodex_event.JPG"


function Photo(){
    return(
        <div id="carouselExampleControls2" class="carousel slide relative" data-bs-ride="carousel">
            <div class="carousel-inner relative w-full overflow-hidden">
                <div class="carousel-item active relative float-left w-full h-full">
                <a href={Home} target="noopener">
                <img
                    src={Home}
                    class="block w-full h-48 object-top object-cover"
                    alt="Landing page"
                />
                </a>      
                </div>
                <div class="carousel-item relative float-left w-full h-full">
                <a href={Search} target="noopener">
                <img
                    src={Search}
                    class="block w-full h-48 object-top object-cover"
                    alt="Search by category"
                />
                </a>
                </div>
                <div class="carousel-item relative float-left w-full h-full">
                <a href={Event} target="noopener">
                <img
                    src={Event}
                    class="block w-full h-48 object-top object-cover"
                    alt="Event infotmation"
                />
                </a>
                </div>                
            </div>
  
            <button
                class="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
                type="button"
                data-bs-target="#carouselExampleControls2"
                data-bs-slide="prev"
            >
                <span class="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button
                class="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
                type="button"
                data-bs-target="#carouselExampleControls2"
                data-bs-slide="next"
            >
                <span class="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    )
}
export default Photo;   