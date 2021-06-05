import HomeHero from '../../Assets/Images/homeHero.png'

import SubSpaCardSection from "./SubSpaCardSection";
import SubInteractionSection from "./SubInteractionSection";
import SubIllustrationSection from "./SubIllustrationSection";
import SubBigClientsSection from "./SubBigClientsSection";
import SubQuoteSection from "./SubQuoteSection";
import SubWorkInqueryCardSection from "./SubWorkInqueryCardSection";
import SubStayConnectedSection from "./SubStayConnectedSection";

const Homepage = () => {
    return (
        <>
            <section className={'bg-white'}>
                <div className={'container mx-auto'}>
                    <div className={'grid grid-cols-1 md:grid-cols-2'}>
                        <div className={'flex items-center'}>
                            <div className={'md:pl-16 pl-3 pt-12 md:pt-0'}>
                                <h2 className={'text-black font-bold text-4xl md:text-5xl tracking-wide font-openSans'}>
                                    Cristopher
                                </h2>
                                <h2 className={'text-black font-bold text-4xl md:text-5xl tracking-wide font-openSans pt-2'}>
                                    Felami
                                </h2>
                                <p className={'uppercase font-light text-gray-900 pt-5'}>Interaction designer and <br/>dog
                                    lover</p>
                                <p className={'text-gray-500 pt-3 md:pt-10 text-xs'}>You are a freelancer and you <br/>love
                                    dogs just like mel Let's shake hand, bro</p>

                                <p className={'pt-7 md:pt-15'}>
                                    <button
                                        className={'uppercase focus:outline-none bg-gray-700 text-white py-3 px-5 rounded-lg'}>Let's
                                        Chat!
                                    </button>
                                </p>
                            </div>

                        </div>
                        <div className={'flex items-center py-10 md:py-20'}>
                            <img src={HomeHero} alt="Nothing here!"/>
                        </div>

                    </div>
                </div>
            </section>

            <SubSpaCardSection/>

            <SubInteractionSection />
            <SubIllustrationSection />
            <SubBigClientsSection />
            <SubQuoteSection />
            <SubWorkInqueryCardSection />
            <SubStayConnectedSection />
        </>
    )
}


export default Homepage