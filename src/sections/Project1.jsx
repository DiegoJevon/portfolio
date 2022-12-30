import Login from "../images/login_home.JPG"
import Admin from "../images/admin_home.JPG"
import Admin_User from "../images/admin_inventory_home.JPG"
import User_Inventory from "../images/user_inventoryview_home.JPG"

function Photo(){
    return(
        <div id="carouselExampleControls1" class="carousel slide relative" data-bs-ride="carousel">
            <div class="carousel-inner relative w-full overflow-hidden">
                <div class="carousel-item active relative float-left w-full h-full">
                <a href={Login} target="noopener">
                <img
                    src={Login}
                    class="block w-full lg:h-48 object-top object-cover"
                    alt="Login page"
                />
                </a>      
                </div>
                <div class="carousel-item relative float-left w-full h-full">
                <a href={Admin} target="noopener">
                <img
                    src={Admin}
                    class="block w-full lg:h-48 object-top object-cover"
                    alt="Admin page"
                />
                </a>
                </div>
                <div class="carousel-item relative float-left w-full h-full">
                <a href={Admin_User} target="noopener">
                <img
                    src={Admin_User}
                    class="block w-full lg:h-48 object-top object-cover"
                    alt="Admin manage users accounts"
                />
                </a>
                </div>
                <div class="carousel-item relative float-left w-full h-full">
                <a href={User_Inventory} target="noopener">
                <img
                    src={User_Inventory}
                    class="block w-full lg:h-48 object-top object-cover"
                    alt="User page"
                />
                </a>
                </div>
            </div>
  
            <button
                class="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0 "
                type="button"
                data-bs-target="#carouselExampleControls1"
                data-bs-slide="prev"
            >
                <span class="carousel-control-prev-icon inline-block bg-no-repeat " aria-hidden="true"></span>
                <span class="visually-hidden hover:bg-jevon-dark-tx ">Previous</span>
            </button>
            <button
                class="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
                type="button"
                data-bs-target="#carouselExampleControls1"
                data-bs-slide="next"
            >
                <span class="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    )
}
export default Photo;   