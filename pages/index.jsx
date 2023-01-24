import Head from 'next/head'
import Image from 'next/image'
import swr from '../lib/swr';
import Tippy from '@tippyjs/react';


export default function Home() {
  

  return (
    <>
      <div className="bg-neutral-800/10 shadow-xl rounded-lg w-full h-auto mt-6">
          <div className="relative">
            <div className="flex flex-col lg:flex-row justify-between w-full p-6 px-8 items-center h-full">
              <div className="flex flex-col lg:justify-start justify-center items-center lg:items-start mt-5 lg:mt-0 w-full">
                <div className="flex items-center">
                <p className="flex items-center text-white text-4xl font-semibold">
                  AhmetYTK
                </p>
                  <Tippy content={`Ofline`} animation="shift-away" arrow={false}>
                    <span className={`ml-2 text-Ofline px-2 py-1 font-normal rounded-md text-sm`}>
                          <i className={`fa fa-circle text-online mr-1`} />Çevrim dışı
                    </span>
                  </Tippy>
     
              
            </div> </div> </div> 
             
            <br></br>
            <span style={{ zIndex: '-1' }} className="text-white/5 absolute bottom-3 left-7 text-xl sm:text-2xl md:text-4xl lg:text-3xl font-semibold"></span>
          </div>
      </div>


        <div className="py-20">
        <p className="text-3xl text-white font-semibold">Hakkımda</p>

        <div className="mt-2">
<p>Merhaba, ben Ahmet. Lise öğrencisi olarak, YouTube ve Instagram gibi platformlarda içerik üretiyorum. Özellikle Nasıl yapılır, oyun ve araba incelemesi konularını işliyorum. İzleyicilerime eğlenceli ve bilgilendirici içerikler sunmaya çalışıyorum. Ayrıca, yaptığımız Instagram içerikleriyle insanların araba özelliklerine ulaşmasını kolaylaştırmak istiyorum. İnstagram hesabımda güncel Araba gelişmelerini paylaşıyorum ve yaptığım oyun videolarını YouTube kanalımda yayınlıyorum. Siz de benimle birlikte eğlenmek ve bilgi sahibi olmak isterseniz, lütfen YouTube kanalıma abone olup, Instagram hesabımızı takip etmeyi unutmayın!</p>
        </div>
      </div>


    </>
  )
}
