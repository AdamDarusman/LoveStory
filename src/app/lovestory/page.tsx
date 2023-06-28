

export default function Section() {
    return (
        <div>
            <img className="w-full h-[200px] md:h-[400px] top-[-300px] md:top-[-250px] relative rounded-bl-[2000px] rounded-br-[2000px]"
                src="Rectangle 9.png" />
            <div className="mt-[-350px] md:mt-[-390px] ">
                <div className="w-full h-[490px] md:h-[850px] lg:h-[1409px] bg-cyan-800" />
                <img className="w-full mt-[-360px] md:mt-[-740px] lg:mt-[-1180px] h-[370px] md:h-[750px] lg:h-[1176px] "
                    src="bunga.png" />
            </div>
            <div>
                <div className="text-center mt-[-355px] md:mt-[-650px] lg:mt-[-1000px] text-white text-[20px] md:text-[35px] lg:text-[64px] leading-loose"
                    style={{ fontFamily: 'DM Serif Text' }}>Love Story</div>
                <img className="w-[210px] md:w-[450px] lg:w-[918px] h-[120.22px] md:h-[250px] lg:h-[474px] m-auto object-cover"
                    src="Rectangle 11.png" />
                <div className="w-full mt-[10px] md:mt-[15px] lg:mt-[40px] text-center text-white text-[14px] md:text-[20px] lg:text-[48px] leading-3"
                    style={{ fontFamily: 'DM Serif Text' }}>Title</div>
                <div className="w-full pl-6 pr-6 md:pr-32 md:pl-32 text-center md:mt-[10px] text-white text-[10px] md:text-[15px] lg:text-[32px] leading-3 md:leading-5 lg:leading-9"
                    style={{ fontFamily: 'Antic Didone' }}>Lorem ipsum dolor sit amet. Et laborum iure aut cupiditate
                    nisi ut amet optio in molestiae debitis ut officia cumque qui rerum obcaecati. Sit tenetur
                    necessitatibus est autem molestiae cum dolor ipsa ut dignissimos deserunt ut rerum tempora. Sit
                    dolor repellat ut earum Quis est dignissimos quae est quod autem qui quibusdam nihil! Est ipsa vero
                    in reprehenderit saepe et temporibus iste cum repellendus dicta.</div>
            </div>
            <div className="w-full h-full bottom-[-25px]">
                <div
                    className="mt-[55px] absolute md:mt-[130px] lg:mt-[110px] rotate-[-8.50deg] w-[179.02px] h-[179.02px]">
                    <img className="w-[60px] md:w-[100px] lg:w-[200px] ml-[30px] md:ml-[80px] lg:ml-[120px] "
                        src="Vector.png" alt="" />
                    <div className=" mt-[-41px] md:mt-[-75px] lg:mt-[-120px] ml-[-58px] md:ml-[80px] lg:ml-[145px] rotate-[-8.502deg] md:-rotate-[15deg] lg:-rotate-3 text-center text-white text-[15px] md:text-[30px] lg:text-[50px]"
                        style={{ fontFamily: 'DM Serif Display' }}>
                        RSVP</div>
                </div>
            </div>
            <div className="w-full h-[63.45px] mt-6 justify-center items-start gap-8 inline-flex">
                <button
                    className="w-[64.78px] h-[63.45px] p-[14.23px]  -rotate-180 rounded-[37.13px] border border border border border-white flex-col justify-center items-center inline-flex">
                    <img className="w-[30.32px] h-[29.21px] relative" src="Group 3.png">
                    </img>
                </button>
                <button
                    className="w-[64.78px] h-[63.45px] p-[14.23px] rounded-[37.13px] border border border border border-white flex-col justify-center items-center inline-flex">
                    <img className="w-[30.32px] h-[29.21px] relative" src="Group 3.png">
                    </img>
                </button>
            </div>
        </div>
    );
}