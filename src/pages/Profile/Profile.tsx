import { FaCaretDown } from 'react-icons/fa';
import { Post } from '~h07/components/Post/Post';
import img_1 from '~h07/assets/images/img_1.jpg';
import img_2 from '~h07/assets/images/img_2.jpg';
import './Profile.scss';

export const Profile = () => {
    return (
        <div className="profile">
            <h3 className="profile-account">
                hoangtrinh.van
                <span className="down-icon">
                    <FaCaretDown />
                </span>
            </h3>
            <div className="profile-wall">
                <img
                    src="https://antimatter.vn/wp-content/uploads/2022/05/background-vu-tru-cac-hanh-tinh.jpg"
                    alt="profile-wall"
                />
            </div>
            <div className="profile-infos">
                <div className="profile-user">
                    <img
                        src="https://cdn.sforum.vn/sforum/wp-content/uploads/2023/11/avatar-dep-89.jpg"
                        alt="profile user"
                    />
                </div>
                <div className="profile-post-edit">
                    <div className="profile-post">
                        <p className="post-quantity">5</p>
                        <p className="post-push">Bài viết</p>
                    </div>
                    <button className="profile-edit">Chỉnh sửa</button>
                </div>
            </div>
            <div className="profile-posts-pushed">
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
