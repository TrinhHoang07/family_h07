import { Divider } from '~h07/components/Divider/Divider';
import { FaRegHeart } from 'react-icons/fa';
import { FaAngleLeft } from 'react-icons/fa';
import { FaAngleRight } from 'react-icons/fa';
import './Post.scss';
import { useState } from 'react';

type _T_Props = {
    avatar: string;
    images: string[];
    description: string;
    nameUser: string;
    dateTime: string;
    likes: number;
};

export const Post = (props: _T_Props) => {
    const [activeImage, setActiveImage] = useState<number>(0);
    const handleIncreActiveImage = () => {
        setActiveImage((prev) => (prev >= props.images.length - 1 ? 0 : ++prev));
    };

    const handleaReduActiveImage = () => {
        setActiveImage((prev) => (prev <= 0 ? props.images.length - 1 : --prev));
    };
    return (
        <div className="post">
            <div className="post-images">
                {props.images.map(
                    (item, index) => activeImage === index && <img key={index} src={item} alt="hoang hon" />,
                )}
                {props.images.length > 1 && (
                    <>
                        {activeImage !== 0 && (
                            <span onClick={handleaReduActiveImage} className="back-image">
                                <FaAngleLeft />
                            </span>
                        )}
                        {activeImage !== props.images.length - 1 && (
                            <span onClick={handleIncreActiveImage} className="next-image">
                                <FaAngleRight />
                            </span>
                        )}
                    </>
                )}
            </div>
            <p className="post-description">{props.description}</p>
            <Divider />
            <div className="post-info">
                <div className="post-info-avatar">
                    <div className="avatar-image">
                        <img src={props.avatar} alt="image avatar" />
                    </div>
                    <div className="avatar-name">
                        <h3 className="post-name-user">{props.nameUser}</h3>
                        <p className="post-date-time">{props.dateTime}</p>
                    </div>
                </div>
                <div className="post-actions">
                    <div className="post-action-item">
                        <p className="post-item-quantity">{props.likes}k</p>
                        <span className="post-item-icon">
                            <FaRegHeart />
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};
