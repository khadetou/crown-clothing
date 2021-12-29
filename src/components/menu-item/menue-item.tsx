
interface MenueItemProps {
    title: string;
}
const MenueItem: React.FC<MenueItemProps> = ({ title }) => {
    return (
        <div className="menu-item">
            <div className="content">
                <div className="title">{title}
                    <div className="subtitle">SHOP NOW</div>
                </div>
            </div>
        </div>
    )
}

export default MenueItem;
