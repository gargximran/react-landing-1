import socialIcons from '../../../Assets/Images/SocialIcons.webp'

const SubStayConnectedSection = () => {
    return (
        <section className={'container mx-auto pt-10 md:pt-16 text-center'}>
            <h2 className={'font-bold font-openSans text-black tracking-wide py-4 md:py-8'}>Stay Connected</h2>
            <p className={'font-normal text-gray-400 text-xs font-openSans tracking-wider py-1'}>San Francisco, CA</p>
            <p className={'font-medium text-black text-2xl font-openSans tracking-wide py-1'}>hello@crisdesign.co</p>
            <p className={'font-normal text-gray-600 text-sm font-openSans py-1'}>(+03) 456 - 8957 - 386</p>
            <p className={'py-4 pb-10 md:pb-16 flex justify-center'}>
                <img src={socialIcons} alt="nothing!"/>
            </p>
            <p className={'pb-3  font-light text-gray-600 text-sm font-openSans '}>Copyright © 2021 All Rights Reserved.</p>
        </section>
    )
}

export default SubStayConnectedSection
