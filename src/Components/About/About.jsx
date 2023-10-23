import imgAbout from "../../Img/Rectangle 275.png";
import styleAbout from "./About.module.css";

function About () {
    return (
        <>
            <section className={`${styleAbout.section} p-sections`}>
                <div className={`${styleAbout.aboutSection} container`}>
                    <div className={`${styleAbout.textSection}`}>
                        <h3 className={`${styleAbout.sectionTitle}`}>About Us</h3>
                        <p className={`${styleAbout.sectionLorem}`}>Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the industry's
                        standard dummy text ever since the 1500s, when an unknown
                        printer took a galley of type and scrambled it to make a
                        type specimen book. It has survived not only five centuries,
                        but also the leap into electronic typesetting, remaining
                        essentially unchanged. It was popularised in the 1960s with
                        the release of Letraset sheets containing Lorem Ipsum
                        passages, and more recently with desktop publishing software
                        like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        <button className={`${styleAbout.btnSction}`}>Contact Us</button>
                    </div>
                    <div className={`${styleAbout.imgSectionAbout}`}>
                        <img src={imgAbout} alt="imgAbout" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default About;