import { FaPhoneSquare } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import './Contacts.scss';
import { useEffect } from 'react';

export const Contacts = () => {
    useEffect(() => {
        document.title = 'Liên hệ! Family h07';
        window.scrollTo({
            behavior: 'smooth',
            top: 0,
        });
    }, []);

    return (
        <div className="contacts">
            <h3 className="contacts-heading">Team h07_family</h3>
            <div className="contacts-container">
                {[1, 2, 3, 4, 5].map((item) => (
                    <div key={item} className="contact-item">
                        <div className="contact-item-wall">
                            <img
                                src="https://static.kinhtedothi.vn/images/upload/2022/06/22/ngaygiadinhvietnam28-6.png"
                                alt="user-wall"
                            />
                        </div>
                        <div className="contact-infos">
                            <div className="contact-avatar-container">
                                <div className="contact-user-avatar">
                                    <img
                                        src="https://cdn.sforum.vn/sforum/wp-content/uploads/2023/11/avatar-dep-89.jpg"
                                        alt="contact-user-avatar"
                                    />
                                </div>
                            </div>
                            <h3 className="contact-item-name">hoangtrinh.van</h3>
                            <p className="contact-item-description">in the sky, i love you everything!</p>
                            <div className="contact-calls">
                                <a href="tel:+84396254427" className="contact-item-phone">
                                    <span className="contact-icon">
                                        <FaPhoneSquare />
                                    </span>
                                    0396254427
                                </a>
                                <a href="https://facebook.com/hoang.redbul" className="contact-item-fb">
                                    <span className="contact-icon">
                                        <FaFacebook />
                                    </span>
                                    Hoangf
                                </a>
                            </div>
                            <button className="contact-role">Anh trai</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
