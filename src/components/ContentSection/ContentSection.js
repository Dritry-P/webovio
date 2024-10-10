import './_ContentSection.scss';

const ContentSection = () => {

    return (
        <section className="section__content">
            <div className="content__conteiner">
                <div className="section__item">
                    <div className="section__item__info">
                        <div className="info__sup__title">What we do for you</div>
                        <h3 className="info__title">Strategy. Design  Content. Technology Development</h3>
                        <p className="default__content__sub__title">There’s no secret sauce, no wizard behind the curtain. What makes Aerolab tick is an interdisciplinary team with a framework that fosters candid collaboration.</p>
                        <p className="default__content__link"><a className="getintouch" href="#">More know About us</a></p>
                    </div>
                    <div className="section__item__for__card">
                        <div className="content__card">
                            <p className="card__sup__title">With More than 10 Years of Knowledge and Expertise we Design and Code Websites and Apps, We Build Brands and Help Them Succeed</p>
                            <div className="card__hero__placemant">
                                <div className="placemant__img">
                                    <img className="person__photo" src="img/hero_photo.jpg" alt="person photo"/>
                                </div>
                                <div className="placemant__name">
                                    <p className="content__card__name">Genevieve Rodriquez</p>
                                    <p className="content__card__direction">Founder & CEO, Webovio</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section__title__of__content">
                    <div className="title__place">
                        <h3 className="title__of__content">We Have Some Awesomr Project.</h3>
                    </div>
                    <div className="p__place"> 
                        <p className="p__of__content">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                    </div>
                </div>
                <div className="wrapper__container">
                    <div className="conteiner__section__item">
                        <div className="content__image__section">
                            <div className="content__img">
                                <img src="img/section_item1.png" alt="Картинка"/>
                            </div>
                            <div className="content__card">
                                <p className="card__sup__title">“In my history of working with trade show vendors, I can honestly say that there is not one company that I've ever worked with that has better service than Exhibit Systems.”</p>
                                <div className="card__hero__placemant">
                                    <div className="placemant__img">
                                        <img src="img/hero_photo.jpg" alt="person photo"/>
                                    </div>
                                    <div className="placemant__name">
                                        <p className="content__card__name">Angel Armstrong</p>
                                        <p className="content__card__direction">Founder & CEO, Google</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="content__info__place">
                            <h3 className="default__content__title">The wall new Balenciaga.com</h3>
                            <p className="default__content__sub__title">This article is floated online with an aim to help you find the best dvd printing solution.</p>
                            <p className="default__content__sub__title">Dvd printing is an important feature used by large and small DVD production houses to print information on DVDs.</p>
                            <p className="default__content__link"><a className="getintouch" href="#">See Case Study</a></p>
                        </div>
                    </div>
                    <div className="conteiner__section__item">
                        <div className="content__image__section">
                            <div className="content__img">
                                <img src="img/content_bg.png" alt="Картинка"/>
                            </div>
                            <div className="content__card for__even">
                                <p className="card__sup__title">“I know they are going to be honest with me. I am not going to get a subpar product; I know it is going to be good. That is the number one advantage of working with Exhibit Systems.</p>
                                <div className="card__hero__placemant">
                                    <div className="placemant__img">
                                        <img src="img/hero_photo.jpg" alt="person photo"/>
                                    </div>
                                    <div className="placemant__name">
                                        <p className="content__card__name">Eunice Oliver</p>
                                        <p className="content__card__direction">Founder & CEO, Zeem</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="content__info__place">
                            <h3 className="default__content__title">Is this the future of 3D model?</h3>
                            <p className="default__content__sub__title">While it was just a TV show, that little speech at the beginning of the original Star Trek show really did do a good job of capturing our feelings about space.</p>
                            <p className="default__content__sub__title">It is those feelings that drive our love of astronomy and our desire to learn more and more about it.</p>
                            <p className="default__content__link"><a className="getintouch" href="#">See Case Study</a></p>
                        </div>
                    </div>
                    <div className="conteiner__section__item">
                        <div className="content__image__section">
                            <div className="content__img">
                                <img src="img/section_item3.png" alt="Картинка"/>
                            </div>
                            <div className="content__card">
                                <p className="card__sup__title">“Exhibit Systems is not a provider. They are not a supplier. They are a partner with expertise in making trade shows effective.”</p>
                                <div className="card__hero__placemant">
                                    <div className="placemant__img">
                                        <img src="img/hero_photo.jpg" alt="person photo"/>
                                    </div>
                                    <div className="placemant__name">
                                        <p className="content__card__name">Eunice Oliver</p>
                                        <p className="content__card__direction">Founder & CEO, Zeem</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="content__info__place">
                            <h3 className="default__content__title">Is this the future of Online Booking</h3>
                            <p className="default__content__sub__title">You should be able to find several indispensable facts about motivation in the following paragraphs.</p>
                            <p className="default__content__sub__title">If there’s at least one fact you didn’t know before, imagine the difference it might make.</p>
                            <p className="default__content__link"><a className="getintouch" href="#">See Case Study</a></p>
                        </div>
                    </div>   
                    <div className="border__bott"></div>
                </div>             
            </div>
        </section>
    )
}

export default ContentSection;