import './_Footer.scss';

const Footer = () => {

    return (
        <footer className="footer">
            <section className="footer__setion">
                <div className="footer__cotainer">
                    <div className="footer__contacts">
                        <div className="footer__contact__card">
                            <p className="suptitle footer__p-grey">Phone</p>
                            <h4 className="footer__title">+32 50 31 28 32</h4>
                        </div>
                        <div className="footer__contact__card">
                            <p className="suptitle footer__p-grey">Address</p>
                            <h4 className="footer__title">491 Merlin Crest Suite 963</h4>
                        </div>
                    </div>
                    <div className="footer__answers__soc__icon">
                        <div className="footer__answers">
                            <div className="footer__answers__raws">
                                <h4 className="raws_title">Services</h4>
                                <ul className="raws__list">
                                    <li className="raws__list__item footer__p-grey"><a href="#" className="footer__item__link">Strategy Design</a></li>
                                    <li className="raws__list__item footer__p-grey"><a href="#" className="footer__item__link">Product Design</a></li>
                                    <li className="raws__list__item footer__p-grey"><a href="#" className="footer__item__link">Content Strategy</a></li>
                                    <li className="raws__list__item footer__p-grey"><a href="#" className="footer__item__link">Brand Strategy</a></li>
                                    <li className="raws__list__item footer__p-grey"><a href="#" className="footer__item__link">Development</a></li>
                                </ul>
                            </div>
                            <div className="footer__answers__raws">
                                <h4 className="raws_title">Help And Advice</h4>
                                <ul className="raws__list">
                                    <li className="raws__list__item footer__p-grey"><a href="#" className="footer__item__link">How it works</a></li>
                                    <li className="raws__list__item footer__p-grey"><a href="#" className="footer__item__link">Contact Support</a></li>
                                    <li className="raws__list__item footer__p-grey"><a href="#" className="footer__item__link">Privacy Policy</a></li>
                                    <li className="raws__list__item footer__p-grey"><a href="#" className="footer__item__link">FAQ</a></li>
                                </ul>
                            </div>
                            <div className="footer__answers__raws">
                                <h4 className="raws_title">Company</h4>
                                <ul className="raws__list">
                                    <li className="raws__list__item footer__p-grey"><a href="#" className="footer__item__link">About</a></li>
                                    <li className="raws__list__item footer__p-grey"><a href="#" className="footer__item__link">Blog</a></li>
                                    <li className="raws__list__item footer__p-grey"><a href="#" className="footer__item__link">Contact</a></li>
                                    <li className="raws__list__item footer__p-grey"><a href="#" className="footer__item__link">Jobs</a></li>
                                </ul>
                                <div className="side__border"></div>
                            </div>
                        </div>
                        <div className="footer__social">
                            <div className="footer__social__sup">
                                <h4 className="raws_title">Get in Touch</h4>
                                <p className="footer__social__info">Feel free to get in touch with us vai email</p>
                            </div>
                            <div className="footer__social__icon">
                                <h3 className="footer__email">info.webovio@gmail.com</h3>
                                <div className="footer__social__icon__place">
                                    <div className="footer__social__icon__item"><img src="img/facebook.png" alt="Facebook_Icon"/></div>
                                    <div className="footer__social__icon__item"><img src="img/twitter.png" alt="Facebook_Icon"/></div>
                                    <div className="footer__social__icon__item"><img src="img/google-plus.png" alt="Facebook_Icon"/></div>
                                    <div className="footer__social__icon__item"><img src="img/linkedin.png" alt="Facebook_Icon"/></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer__logo__caption">
                        <div className="footer__logo">
                            <img src="img/header_logo.png" alt="Logo"/>
                        </div>
                        <div className="footer__caption">
                            <p className="footer__caption__p">© 2020@webovio. All Rights Reserved.</p>
                        </div>
                    </div>
                </div>
            </section>
        </footer>
    )
}

export default Footer;