import { IconButton } from '@material-tailwind/react';
import React from 'react';
import HeroCard from './HeroCard';
import { heroData } from '../../Data/hero-data';

const OurHero = () => {
    return (
        <section className="px-4 pt-20 pb-48">
            <div className="container mx-auto">
               {/*  <PageTitle heading="Here are our heroes">
                    According to the National Oceanic and Atmospheric Administration,
                    Ted, Scambos, NSIDClead scentist, puts the potentially record
                    maximum.
                </PageTitle> */}
                <div className="mt-24 grid grid-cols-1 gap-12 gap-x-24 md:grid-cols-2 xl:grid-cols-4">
                    {heroData.map(({ img, name, position, socials ,icon}) => (
                        <HeroCard
                            key={name}
                            img={img}
                            name={name}
                            position={position}
                            socials={
                                <div className="flex items-center gap-2">
                                    {socials.map(({ color, name }) => (
                                        <IconButton key={name} color={color} variant="text">
                      {name}
                                        </IconButton>
                                    ))}
                                </div>
                            }
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OurHero;