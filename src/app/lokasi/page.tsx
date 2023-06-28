export default function Section() {
    return (
        <div className="text-center relative mt-[50px] md:mb-[50px] 2xl:mb-[300px] mx-auto w-full items-center">
            <div className="Frame28 h-[754.51px] p-[0px] flex-col justify-start items-center gap-7 flex">
            <div className="Frame57 p-[0px] justify-center items-center px-auto sm:px-auto gap-4 inline-flex max-[499px]:px-0 w-full mb-3">
      <img className="w-[42px] sm:w-auto h-auto" src="/bl.png" />
      <div className="header-1" style={{ fontFamily: 'DM Serif Text' }}>Lokasi Pernikahan</div>
      <img className="w-[42px] sm:w-auto h-auto" src="/br.png" />
    </div>
            <div className="Frame27 z-50 p-[0px] flex-col justify-start items-center gap-8 flex">
                <div className="Frame26 p-[10px] bg-zinc-200 flex-col justify-start items-start gap-[10px] flex">
                    {/* <img className="BasemapImage w-[647px] h-[405px]" /> */}
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.422369069539!2d106.8313938!3d-6.4680533!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69c1e4749cdd9b%3A0x6199f7825ad98508!2sPT%20MATRA%20HILLINDO%20TEKNOLOGI!5e0!3m2!1sid!2sid!4v1687503075658!5m2!1sid!2sid" className=" w-[340px] sm:w-[500px] sm:h-[300px] md:w-[600px] h-[220px] md:h-[400px] "></iframe>
                </div>
                <div className="Frame20 p-[0px] flex-col justify-start items-center gap-[4px] flex">
                    <div className="Frame14 p-[0px] flex-col justify-start items-center gap-4 flex">
                        <div
                            className=" text-center text-black text-[25px] sm:text-[30px] md:text-[36px] font-bold leading-tight" style={{ fontFamily: 'DM Serif Text' }}>
                            Swasana Grand Ballroom</div>
                        <div
                            className="text-center text-black text-[16px] sm:text-[20px] md:text-[22px] lg:text-[24px] min-[2000px]:text-[48px] min-[2560px]:text-[56px] font-normal leading-loose px-2 tracking-wide pb-10" style={{ fontFamily: 'Antic Didone' }}>
                            Jl. Gatot Subroto No.10 Rt 06/01, Kec. Mampang Prpt., Kota Jakarta Selatan, DKI
                            Jakarta<br /></div>
                        <div
                            className="Frame6 z-50 px-[22.34px] py-4 rounded-full shadow border-2 border-[#0E5E6F] justify-center items-center gap-[11.17px] inline-flex active:bg-[#3A8891]">
                            <div
                                className="BukaGoogleMap text-center text-cyan-800 text-[20px] md:text-[22px] font-normal leading-none active:text-white" style={{ fontFamily: 'Antic Didone' }}>
                                Buka Google Map</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
}