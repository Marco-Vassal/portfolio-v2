import React from 'react'
import { TypeAnimation } from 'react-type-animation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faSuitcase } from '@fortawesome/free-solid-svg-icons';

function Hero() {
  return (
    <>
        <div className='bg-fullscreenhome h-[100vh] bg-cover bg-center'>
            <div className='ml-[50vw] max-w-[550px] text-white h-full'>
                <div className='flex flex-col justify-center h-full'>
                    <h3 className='font-open text-[19px] uppercase'>Bienvenue !</h3>
                    <h1 className='text-[30px] min-[1400px]:text-[42px] uppercase w-[550px] min-[1400px]:w-[700px]'>Je suis
                        <TypeAnimation
                            className='uppercase text-ffb font-bold'
                            sequence={[
                                ' Marco Vassal',
                                1000,
                                ' Développeur Front End',
                                1000,
                                ' En Freelance',
                                1000,
                            ]}
                            wrapper='span'
                            speed={200}
                            repeat={Infinity}
                        />
                    </h1>
                    <p className='font-open leading-[32px] mb-[23px]'>Je suis un développeur frontend freelance français. Je crée des sites internet sur mesure qui répondent aux besoins du client, tout en conservant une interface claire et intuitive.</p>
                    <div className='flex flex-wrap'>
                        <a className='py-2 mr-5 px-6 uppercase border rounded-3xl bg-ffb font-medium border-ffb' href=""><FontAwesomeIcon className='mr-[11px]' icon={faUser} />Plus à propos de moi</a>
                        <a className='py-2 mr-5 px-6 uppercase border rounded-3xl text-ffb font-medium border-ffb' href=""><FontAwesomeIcon className='mr-[11px]' icon={faSuitcase} />Portfolio</a>
                        <a className='py-2 mt-4 px-6 uppercase border rounded-3xl text-ffb font-medium border-ffb' href=""><FontAwesomeIcon className='mr-[11px]' icon={faPhone} />Réserver un appel 100% gratuit</a>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Hero