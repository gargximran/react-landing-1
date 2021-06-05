import interaction from '../../../Assets/Images/interactionPartImage.webp'
import phoneLogo from "../../../Assets/Images/phoneLogo.png";

const SubInteractionSection = () => {
    return (
        <section className={'container text-left my-10'}>
            <div className="grid grid-cols-1 md:grid-cols-2 bg-blueWhite rounded-r-2xl mr-2 md:mr-0 overflow-hidden">
                <div>
                    <img src={interaction} alt="nothing!" className={'w-full'}/>
                </div>

                <div className={'pl-10 md:pl-2 flex items-center py-8 md:py-0'}>
                    <div className={'md:pl-20'}>
                        <p className={'block'}>
                            <img src={phoneLogo} alt="Nothing!" className={'w-16'}/>
                        </p>
                        <h2 className={'font-bold text-2xl text-black pt-3 pl-3 font-openSans'}>Interaction</h2>
                        <p className="text-gray-500 font-light pl-3 pt-2 text-sm">
                            Optimized UI/UX for digital products, <br/> help business grow more
                        </p>
                        <p className="text-gray-700 font-bold pl-3 pt-7 text-sm cursor-pointer font-openSans">SEE PROJECTS</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SubInteractionSection