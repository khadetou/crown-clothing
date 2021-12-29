import MenueItem from "../../components/menu-item/menue-item";
import { List } from "../../components/menu-item/menue-item-list";
import "./homepage.styles.scss";
const Homepage: React.FC = () => {
    return (
        <div className="homepage">
            <div className="directory-menu">
                {List.map((item, idx) => (
                    <MenueItem title={item.title} subtitle={item.subtitle} />
                ))}
            </div>
        </div>
    )
}

export default Homepage;
