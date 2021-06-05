import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor'
import {useState} from "react";


import zeplinLogo from '../../../Assets/Images/zeplin-logo.png'
import slackLogo from '../../../Assets/Images/slack-logo-icon.png'
import dropboxLogo from '../../../Assets/Images/dropbox-logo.png'
import shopigyLogo from '../../../Assets/Images/shopify-logo.png'
import wooComLogo from '../../../Assets/Images/wooCommerceLogo.png'


const SubBigClientsSection = () => {

    const [focused, setFocused] = useState(false)

    const changeFocus = (e) => {
        if (!focused) {
            setFocused(e)
        }
    }

    return (
        <section className={'container ml-auto mr-auto md:mr-7 py-5'}>
            <div
                className={'ml-4 md:ml-7 font-openSans text-3xl md:text-4xl font-bold text-black tracking-wide pt-5 md:pt-16'}>
                <h2>Big Clients</h2>
                <p className="text-sm text-gray-500 font-normal pt-5 md:pt-8 pr-4">Work with many big brands, brings for
                    me great experience.</p>

            </div>

            {/* clients cards */}
            <div className="ml-4 md:ml-7 flex flex-wrap py-5 md:py-10">
                <div className="inline rounded-xl bg-red-200 my-4 mr-6 md:mr-8 bg-opacity-50">
                    <div className={'text-center px-6 py-8'}>
                        <div style={{width: '96px', height: '89px'}}>
                            <img src={zeplinLogo} alt="nothing!" className={'w-full'}/>
                        </div>

                        <p className={'text-black text-sm font-openSans pt-7'}>Zeplin</p>
                    </div>
                </div>

                <div className="inline rounded-xl bg-blue-200 bg-opacity-50 my-4 mr-6 md:mr-8">
                    <div className={'text-center px-6 py-8'}>
                        <div style={{width: '96px', height: '89px'}}>
                            <img src={dropboxLogo} alt="nothing!" className={'w-full'}/>
                        </div>

                        <p className={'text-black text-sm font-openSans pt-7'}>Dropbox</p>
                    </div>
                </div>

                <div className="inline rounded-xl bg-gray-200 bg-opacity-50 my-4 mr-6 md:mr-8">
                    <div className={'text-center px-6 py-8'}>
                        <div style={{width: '96px', height: '89px'}}>
                            <img src={shopigyLogo} alt="nothing!" className={'w-full'}/>
                        </div>
                        <p className={'text-black text-sm font-openSans pt-7'}>Shopify</p>
                    </div>
                </div>

                <div className="inline rounded-xl bg-gray-300 bg-opacity-50 my-4 mr-6 md:mr-8">
                    <div className={'text-center px-6 py-8'}>
                        <div style={{width: '96px', height: '89px'}}>
                            <img src={slackLogo} alt="nothing!" className={'w-full'}/>
                        </div>
                        <p className={'text-black text-sm font-openSans pt-7'}>Slack</p>
                    </div>
                </div>

                <div className="inline rounded-xl bg-red-300 bg-opacity-50 my-4 mr-6 md:mr-8">
                    <div className={'text-center px-6 py-8'}>
                        <div style={{width: '96px', height: '89px'}}>
                            <img src={wooComLogo} alt="nothing!" className={'w-full'}/>
                        </div>

                        <p className={'text-black text-sm font-openSans pt-7'}>WooCommerce</p>
                    </div>
                </div>


            </div>


            {/* percent section*/}
            <div className="ml-4 md:ml-7 py-5">
                <div className="grid md:grid-cols-6">
                    <VisibilitySensor onChange={changeFocus}>
                        {
                            <>
                                <div className={'flex col-span-6 md:col-span-1 py-3 md:py-0'}>
                                    <div className={'inline text-5xl font-bold text-black font-openSans'}>
                                        {
                                            focused ? <CountUp start={0} end={10} duration={2} /> : 0
                                        }
                                    </div>
                                    <div className="inline font-openSans font-light text-sm text-gray-500 pt-1 pl-3">
                                        Years
                                        <br/>
                                        Experience
                                    </div>
                                </div>

                                <div className={'flex  col-span-6 md:col-span-1 py-3 md:py-0'}>
                                    <div className={'inline text-5xl font-bold text-black font-openSans'}>
                                        {
                                            focused ? <CountUp start={0} end={102} duration={4} /> : 0
                                        }
                                    </div>
                                    <div className="inline font-openSans font-light text-sm text-gray-500 pt-1 pl-3">
                                        Satisfaction
                                        <br/>
                                        Clients
                                    </div>
                                </div>

                                <div className={'flex col-span-6 md:col-span-2 py-3 md:py-0'}>
                                    <div className={'inline text-5xl font-bold text-black font-openSans'}>
                                        {
                                            focused ? <CountUp start={0} end={245} duration={6} /> : 0
                                        }
                                    </div>
                                    <div className="inline font-openSans font-light text-sm text-gray-500 pt-1 pl-3">
                                        Projects Completed
                                        <br/>
                                        34 Countries
                                    </div>
                                </div>

                            </>
                        }

                    </VisibilitySensor>
                </div>

            </div>
        </section>
    )
}


export default SubBigClientsSection


