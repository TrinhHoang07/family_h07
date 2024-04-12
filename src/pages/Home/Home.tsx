import { Post } from '~h07/components/Post/Post';
import { IoIosSearch } from 'react-icons/io';
import { FaCaretDown } from 'react-icons/fa';
import img_1 from '~h07/assets/images/img_1.jpg';
import img_2 from '~h07/assets/images/img_2.jpg';
import './Home.scss';

export const Home = () => {
    return (
        <div className="home">
            <div className="home-header">
                <div className="header-account">
                    <h3 className="name-logo">h07_family</h3>
                    <h5 className="header-user-name">
                        hoangtrinh.van
                        <span className="down-icon">
                            <FaCaretDown />
                        </span>
                    </h5>
                </div>
                <div className="home-header-search">
                    <span className="search-icon">
                        <IoIosSearch />
                    </span>
                    <input type="text" placeholder="Tìm kiếm bài đăng..." />
                </div>
            </div>
            <div className="home-posts">
                <Post
                    images={[img_1, img_2]}
                    description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia repellat consequatur accusamus itaque,
                    consectetur quisquam aliquam molestiae exercitationem libero eligendi labore maiores non veritatis ut
                    placeat optio a voluptatibus rerum!"
                    avatar="https://cdn.sforum.vn/sforum/wp-content/uploads/2023/11/avatar-dep-89.jpg"
                    nameUser="hoangtrinh.van"
                    dateTime="20/04/2024 10:00"
                    likes={10}
                />
                <Post
                    images={[img_1, img_2]}
                    description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia repellat consequatur accusamus itaque,
                    consectetur quisquam aliquam molestiae exercitationem libero eligendi labore maiores non veritatis ut
                    placeat optio a voluptatibus rerum!"
                    avatar="https://cdn.sforum.vn/sforum/wp-content/uploads/2023/11/avatar-dep-89.jpg"
                    nameUser="hoangtrinh.van"
                    dateTime="20/04/2024 10:00"
                    likes={10}
                />
            </div>
        </div>
    );
};
