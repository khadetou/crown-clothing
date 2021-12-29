import MenueItem from "./menu-item/menue-item";
import { List } from "./menu-item/menue-item-list";


const Directory = () => {

    return (
        <div className="directory-menu">
            {List.map(({ id, ...list }) => (
                <MenueItem
                    key={id}
                    {...list}
                />
            ))}
        </div>
    )
}

export default Directory;
