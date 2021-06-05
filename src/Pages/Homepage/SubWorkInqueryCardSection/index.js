import contactQueryLogo from '../../../Assets/Images/catContact.png'
import wave from '../../../Assets/Images/wave.svg'


const SubWorkInqueryCardSection = () => {
    return (
        <section className={'container mx-auto py-5'}>
            <div className={'w-4/5 mx-auto relative'}>
                <img src={contactQueryLogo} alt="nothing!" className={'absolute left-2' } style={{bottom: '93%', zIndex: '999'}}/>
                <div className="rounded-2xl overflow-hidden relative" style={{backgroundColor: 'rgba(253, 231, 244, 0.33)'}}>
                    <div className={'w-full'}>
                        <div className="grid grid-cols-1 md:grid-cols-2 z-10">
                            <div className={'py-16 md:pl-24 text-center md:text-left'}>
                                <h2 className={'font-bold text-black py-2 text-4xl font-openSans'}>Work Inquiry</h2>
                                <p className={'font-normal text-gray-500 text-xs font-openSans py-2'}>Let's work together and i'll help you by all my best</p>
                            </div>
                            <div className="flex justify-center items-center pb-16  md:pt-16">
                                <button className={' rounded-md text-white font-openSans py-3 tracking-wider font-bold focus:outline-none px-5  bg-red-500'}>LET'S CHAT!</button>
                            </div>
                        </div>
                    </div>

                    <img src={wave} alt="nothing" className={'absolute -bottom-0 w-full -left-0 opacity-10'} style={{ zIndex: '-1'}}/>
                </div>

            </div>
        </section>
    )
}

export default SubWorkInqueryCardSection