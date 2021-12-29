import MenueItem from "./menu-item/menue-item";
import { List } from "./menu-item/menue-item-list";
const Directory = () => {
    return (
        <div className="directory-menu">
            {List.map((item) => (
                <MenueItem key={item.id} title={item.title} />
            ))}
        </div>
    )
}

export default Directory;
