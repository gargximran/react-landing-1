import ilastrationCard from '../../../Assets/Images/ilastrationCard.webp'
import comunicationLogo from '../../../Assets/Images/comunicationLogo.png'

const SubIllustrationSection = () => {
    return (
        <section className={'container ml-auto mr-auto md:mr-7 m py-5'}>
            <div className={'grid grid-cols-1 md:grid-cols-12'}>
                <div style={{backgroundColor: 'rgb(243 245 249)'}} className={'col-span-4 rounded-tl-2xl rounded-tr-2xl md:rounded-tl-none md:rounded-tr-none  md:rounded-tl-2xl md:rounded-bl-2xl ml-4 mr-4 pb-7 md:pb-0 md:mr-0 md:ml-7 md:pl-10 flex items-center'}>
                    <div>
                        <p className={'block'}>
                            <img src={comunicationLogo} alt="Nothing!" className={'w-16'}/>
                        </p>
                        <h2 className={'font-bold text-2xl text-black pt-3 pl-3 font-openSans'}>Illustration</h2>
                        <p className="text-gray-500 font-light pl-3 pt-2 text-sm">
                            Describe things abstract become<br/> visible with a look impressive
                        </p>
                        <p className="text-gray-700 font-bold pl-3 pt-7 text-sm cursor-pointer font-openSans">SEE PROJECTS</p>
                    </div>
                </div>
                <div style={{backgroundColor: 'rgb(245 247 251)'}} className="col-span-8 bg-secondary rounded-bl-2xl rounded-br-2xl md:rounded-bl-none  overflow-hidden md:rounded-br-2xl md:rounded-tr-2xl md:mr-3 ml-4 mr-4 md:ml-0">
                    <img src={ilastrationCard} alt="Nothing!"/>
                </div>

            </div>
        </section>
    )
}

export default SubIllustrationSection