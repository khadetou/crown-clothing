
interface MenueItemProps {
    title: string;
    subtitle: string;
}
const MenueItem: React.FC<MenueItemProps> = ({ title, subtitle }) => {
    return (
        <div className="menu-item">
            <div className="content">
                <div className="title">{title}
                    <div className="subtitle">{subtitle}</div>
                </div>
            </div>
        </div>
    )
}

export default MenueItem;
