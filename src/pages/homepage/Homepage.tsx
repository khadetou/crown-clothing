import Directory from "../../components/directory";
import MenueItem from "../../components/menu-item/menue-item";
import { List } from "../../components/menu-item/menue-item-list";
import "./homepage.styles.scss";
const Homepage: React.FC = () => {
    return (
        <div className="homepage">
            <Directory />
        </div>
    )
}

export default Homepage;
