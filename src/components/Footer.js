import { Link } from "react-router-dom";
import { AiFillFacebook, AiOutlineTwitter, AiFillYoutube } from 'react-icons/ai';
import { ImInstagram } from 'react-icons/im';

export default function Footer() {
    return (
        <div className="footer">
            <div className="footer-content">
                <div className="online-shopping-and-links">
                    <div className="online-shopping">
                        <h3>
                            online shopping
                        </h3>
                        <ul>
                            <li>
                                <Link to="">Men</Link>
                            </li>
                            <li>
                                <Link to="">Women</Link>
                            </li>
                            <li>
                                <Link to="">Kids</Link>
                            </li>
                            <li>
                                <Link to="">Home and Living</Link>
                            </li>
                            <li>
                                <Link to="">Beauty</Link>
                            </li>
                            <li>
                                <Link to="">Gift Cards</Link>
                            </li>
                            <li>
                                <Link to="">Myntra Insider</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="useful-links">
                        <h3>USEFUL LINKS</h3>
                        <ul>
                            <li>
                                <Link to="">Blog</Link>
                            </li>
                            <li>
                                <Link to="">Careers</Link>
                            </li>
                            <li>
                                <Link to="">Site Map</Link>
                            </li>
                            <li>
                                <Link to="">Corporate Information</Link>
                            </li>
                            <li>
                                <Link to="">Whitehat</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="customer-policies">
                    <h3>customer policies</h3>
                    <ul>
                        <li><Link to="">Contact us</Link></li>
                        <li><Link to="">faq</Link></li>
                        <li><Link to="">T&C</Link></li>
                        <li><Link to="">terms of use</Link></li>
                        <li><Link to="">track orders</Link></li>
                        <li><Link to="">shipping</Link></li>
                        <li><Link to="">cancellation</Link></li>
                        <li><Link to="">Returns</Link></li>
                        <li><Link to="">privacy policy</Link></li>
                        <li><Link to="">grievance officer</Link></li>
                    </ul>
                </div>
                <div className="experience-in-mobile">
                    <h3>Experience myntra app in mobile</h3>
                    <div className="mobile-app-images">
                        <img src="https://www.freepnglogos.com/uploads/app-store-logo-png/google-play-and-apple-app-store-logos-22.png" alt="" />
                    </div>
                    <div className="keep-in-touch">
                        <h3>keep in touch</h3>
                        <ul>
                            <li>
                                <Link to=""><AiFillFacebook /></Link>
                            </li>
                            <li>
                                <Link to=""><AiOutlineTwitter /></Link>
                            </li>
                            <li>
                                <Link to=""><AiFillYoutube /></Link>
                            </li>
                            <li>
                                <Link to=""><ImInstagram /></Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="guarenty-policy">
                    <div className="inner-policy">
                        <img src="https://w7.pngwing.com/pngs/171/916/png-transparent-grunge-stamp-guaranteed-100-original-thumbnail.png" alt="" />
                        <p>100% ORIGINAL guarantee for all products at myntra.com</p>
                    </div>
                    <div className="inner-policy">
                        <img src="https://www.pngall.com/wp-content/uploads/13/14-Days-Money-Back-Guarantee-PNG-Free-Image.png" alt="" />
                        <p>Return within 14days of receiving your order</p>
                    </div>
                </div>
            </div>
        </div>
    )
}