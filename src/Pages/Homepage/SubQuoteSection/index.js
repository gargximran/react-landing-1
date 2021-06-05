import quoteLogo from "../../../Assets/Images/quoteLogo.webp";
import quateSectionPic from "../../../Assets/Images/quateSectionPic.webp";



const SubQuoteSection = () => {
    return (
        <section className={'container ml-auto mr-auto md:mr-7 py-5'}>
            <div className={'grid grid-cols-1 md:grid-cols-12'}>
                <div className={'md:col-span-4 ml-4 mr-4 pb-7 md:pb-0 md:mr-0 md:ml-7 md:pl-10 flex items-center'}>
                    <div className={'md:pl-14'}>
                        <p className={'block'}>
                            <img src={quoteLogo} alt="Nothing!" className={'w-16'}/>
                        </p>
                        <p className="text-gray-700 text-openSans pl-1 pt-2">
                            I don't know what else to say, this is<br/>
                            something that you haven't seen before.
                            <br/>
                            Unique design, lightweight, and
                            <br/>
                            outstanding support
                        </p>
                        <p className="text-gray-700 font-bold pl-1 pt-7 text-sm cursor-pointer font-openSans">Edison Cavani</p>
                        <p className="text-gray-500 font-light pl-1 text-xs cursor-pointer font-openSans">Product Management at Spotify</p>
                    </div>
                </div>
                <div className="md:col-span-8 flex justify-end overflow-hidden md:mr-3 ml-4 mr-4 md:ml-0">
                    <img src={quateSectionPic} alt="Nothing!" className={'w-full'}/>
                </div>

            </div>
        </section>
    )
}

export default SubQuoteSection