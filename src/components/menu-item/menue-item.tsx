
interface MenueItemProps {
    title: string;
    imageUrl: string;
    size?: string;
}
const MenueItem: React.FC<MenueItemProps> = ({ title, imageUrl, size }) => {
    return (
        <div className={`${size}  menu-item`}>
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
