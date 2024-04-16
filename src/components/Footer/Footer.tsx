import { routesConfig } from '~h07/config/routes';
import { MdHome } from 'react-icons/md';
import { BiSolidContact } from 'react-icons/bi';
import { FaUser } from 'react-icons/fa';
import { IoMdAdd } from 'react-icons/io';
import { FaUsers } from 'react-icons/fa6';
import './Footer.scss';
import { IconType } from 'react-icons';
import { NavLink } from 'react-router-dom';

type _Item = {
    id: number;
    path: string;
    icon: IconType;
};

export const Footer = () => {
    const data: _Item[] = [
        {
            id: 1,
            path: routesConfig.contacts,
            icon: BiSolidContact,
        },
        {
            id: 2,
            path: routesConfig.friends,
            icon: FaUsers,
        },
        {
            id: 3,
            path: routesConfig.home,
            icon: MdHome,
        },
        {
            id: 4,
            path: routesConfig.addpost,
            icon: IoMdAdd,
        },
        {
            id: 5,
            path: routesConfig.profile,
            icon: FaUser,
        },
    ];

    return (
        <footer className="footer">
            {data.map((item) => (
                <NavLink key={item.id} to={item.path} className="footer-item">
                    <span className="footer-item-icon">{<item.icon />}</span>
                </NavLink>
            ))}
        </footer>
    );
};
