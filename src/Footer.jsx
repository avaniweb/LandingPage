import logo from '../src/image/Logo.png'
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { TiWorld } from "react-icons/ti";
export default function Footer() {
    return (
        <div className='hero-footer'>
            <div className="d-flex">
                <div className="col">
                    <img src={logo}></img>
                    <p>Nam posuere accumsan porta. Integer id orci sed ante tincidunt
                        tincidunt sit amet sed libero.</p>
                    <p>© Skyrev Theme 2020</p>
                </div>
                <div className="col">
                    <h6>COMPANY</h6>
                    <div className='company-text'>
                        <p> Donec dignissim</p>
                        <p> Curabitur egestas</p>
                        <p> Nam posuere</p>
                        <p> Aenean facilisis</p>
                    </div>
                </div>
                <div className="col">
                    <h6>SERVICES</h6>
                    <div className='Services-text'>
                        <p> Cras convallis</p>
                        <p>Vestibulum faucibus</p>
                        <p>Quisque lacinia purus</p>
                        <p> Aliquam nec ex</p>
                    </div>
                </div>
                <div className="col">
                    <h6>RESOURCES</h6>
                    <div className='resources-text'>
                        <p>Suspendisse porttitor</p>
                        <p>Curabitur egestas</p>
                        <p>Nam posuere</p>
                    </div>

                </div>
                <div className="col">
                    <div className='d-flex'>

                        <div className='col'>
                            <div className='facebook-background'>
                                <FaFacebookF className='facebook-icon' />
                            </div>
                        </div>
                        <div className='col'>
                            <div className='linked-background'>
                                <FaLinkedin className='linked-icon' />
                            </div>
                        </div>
                        <div className='col'>
                            <div className='twitter-background'>
                                <FaTwitter className='twitter-icon' />
                            </div>
                        </div>
                        <div className='col'>
                            <div className='instagram-background'>
                                <FiInstagram className='instagram-icon' />
                            </div>
                        </div>
                    </div>
                    <div class="dropdown">
                        <button class="btn btn-outline-secondary " type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <TiWorld />  Language
                        </button>
                        <ul class="dropdown-menu bg-black color  ">

                            <li><a class="dropdown-item active" href="#">English</a></li>
                            <li><a class="dropdown-item" href="#">Hindi</a></li>
                            <li><a class="dropdown-item" href="#">Gujarati</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

    )
}