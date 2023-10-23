
import { useEffect , useState} from "react";
import HowStyle from './How.module.css';
import axios from "axios";

function How() {

    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
        try {
            const response = await axios.get(
            "https://www.themealdb.com/api/json/v1/1/filter.php?c=Breakfast"
            );
            setData(response.data.meals);
            response.data.meals.forEach((meal) => {
            // console.log(meal.strMealThumb);
            });
        } catch (error) {
            console.error("Error fetching data", error);
        }
        };

        fetchData();
    }, []);

    return (
        <>
            <section className={`${HowStyle.section} p-sections`}>
                <div className={`${HowStyle.howSection} container`} >
                    <div className={`${HowStyle.textSection}`}>
                        <p className={`${HowStyle.sectionLorem}`}>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the industry's
                            standard dummy text ever since the
                        </p>
                        <h3 className={`${HowStyle.sectionTitle}`}>How We Work</h3>
                    </div>
                    <div className={`${HowStyle.imgsSectionHow}`}>
                        {data.slice(0, 4).map((item, index) => (
                            <img className={`${HowStyle.imgHowSection}`} src={item.strMealThumb} alt={item.strMeal} />
                        ))}
                    </div>
                    <button className={`${HowStyle.btnSction}`}>Contact Us</button>
                </div>
            </section>
        </>
    )
}
export default How