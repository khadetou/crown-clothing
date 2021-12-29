import { useNavigate } from 'react-router-dom';
interface MenueItemProps {
    title: string;
    imageUrl: string;
    size?: string;
    linkUrl: string;
}
const MenueItem: React.FC<MenueItemProps> = ({ title, imageUrl, size, linkUrl }) => {

    const navigate = useNavigate();
    return (
        <div className={`${size}  menu-item`} onClick={() => navigate(linkUrl)} >
            <div className="background-image" style={{ backgroundImage: `url(${imageUrl})` }} />
            <div className="content">
                <div className="title">{title}
                    <div className="subtitle">SHOP NOW</div>
                </div>
            </div>
        </div>
    )
}

export default MenueItem;
