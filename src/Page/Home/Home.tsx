import {SlideBanner} from "./SlideBanner";
import Content from "./content/content";

function Home() {

    return (
        <div>
            <div className="SlideBanner">
                <SlideBanner/>
            </div>
            <div className="Content">
                <Content/>
            </div>
        </div>

    );
}

export default Home;
