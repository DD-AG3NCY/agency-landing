import Image from 'next/image';
import Header from '../components/Header';

import LinesBackground from '@/components/Lines';
import SEO from '@/components/SEO';
import AppLayout from '@/components/layout';
import { Page } from '@/types/pages';
import { Body2, Button, Headline4, StarIcon } from '@gordo-d/d-d-ui-components';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ReactElement, useEffect } from 'react';
import styled from 'styled-components';

type IHomeProps = {};

const IHomeDefaultProps = {};

const Home: Page<IHomeProps> = (props) => {
  useEffect(() => {}, []);

  const StyledButton = styled(Button)`
    box-shadow: 0px 2px 40px rgba(228, 134, 134, 0.372) !important;
    transition: box-shadow 0.3s ease-in-out;

    &:hover {
      box-shadow: 0 5px 100px rgba(228, 137, 137, 0.772) !important;
    }
  `;

  return (
    <article className="relative h-auto w-screen overflow-hidden">
      <SEO
        title="AGΞNCY ΞXPERTS"
        description="We are a collective venture builder curated from the best talent within Developer DAO. We aim to collectively build products and services for our clients and the web3 space."
        image="/RRSS.png"
        url="https://agency.developerdao.com"
        twitterHandle="@web3agency"
      />

      <Header />

      {/* PAGE */}

      <div className="absolute right-0 top-0 z-20 h-screen w-screen">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 0.8,
            duration: 0.3,
            ease: 'easeInOut',
          }}
        >
          <Image
            layout="fill"
            objectFit="contain"
            src={'/bgBlackStars.svg'}
            alt={''}
          />
        </motion.div>
      </div>

      <div className="absolute right-0 top-0 z-20 h-screen w-screen">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 0.5,
            duration: 0.5,
            ease: 'easeInOut',
          }}
        >
          <Image layout="fill" objectFit="contain" src={'/rays.svg'} alt={''} />
        </motion.div>
      </div>

      <div className="absolute right-0 top-0 z-20 hidden h-screen w-screen md:block">
        <motion.div
          className="p-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 2,
            duration: 0.3,
            ease: 'easeInOut',
          }}
        >
          <Image
            layout="fill"
            objectFit="contain"
            src={'/frontStars.svg'}
            alt={''}
          />
        </motion.div>
      </div>

      <div className="absolute right-0 top-0 z-50 h-screen w-screen md:hidden">
        <motion.div
          className="mt-14 p-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 2,
            duration: 0.3,
            ease: 'easeInOut',
          }}
        >
          <Image width={330} height={400} src={'/frontStarsXs.svg'} alt={''} />
        </motion.div>
      </div>

      <div className="absolute -top-60 right-0 z-20 flex h-10 w-full justify-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 0.5,
            duration: 0.8,
            ease: 'easeInOut',
          }}
        >
          <Image width={600} height={600} src={'/shineCircle.svg'} alt={''} />
        </motion.div>
      </div>

      <div className="absolute -top-60 right-0 z-20 flex h-10 w-full justify-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 2.1,
            duration: 0.8,
            ease: 'easeInOut',
          }}
        >
          <Image width={5} height={500} src={'/line.svg'} alt={''} />
        </motion.div>
      </div>

      <LinesBackground
        lineWidth={'2px'}
        lineSeparation={'5px'}
        lineColor={'#d6297126'}
        gradientStartColor={'#ec4294'}
        gradientEndColor="#FFAD80"
      />

      <div className="relative left-0 top-0 z-50">
        <main className="z-40 flex h-[100vh] items-center justify-center md:h-[100vh]">
          <div className="flex w-full max-w-6xl flex-col items-center justify-center gap-2">
            <div className="flex px-8 text-sm md:text-lg">
              <Image
                src={'/agency-name.svg'}
                alt="Developer DAO agency logo"
                width={300}
                height={100}
              ></Image>
            </div>
            <Headline4
              style={{
                fontWeight: 300,
                fontSize: 25,
              }}
              color="primary-white"
              className="font-light tracking-widest"
            >
              WEB 3 EXPERTS
            </Headline4>
            <Body2
              color="agency-pink-2"
              className="w-3/4 text-center font-light tracking-widest md:w-1/3"
            >
              We are a curated group of professionals out of D_D focused on
              building web3 product and services.
            </Body2>
            <Link
              href={'https://airtable.com/appNP5rk00cAmDLUm/shrmaoyXneVOkRvw3'}
            >
              <StyledButton
                className="font-paragraph mt-14 font-semibold transition-all"
                icon={<StarIcon />}
                iconPosition="left"
              >
                Work with us
              </StyledButton>
            </Link>
          </div>
        </main>

        {/* <OurProjects /> */}

        {/* <Services /> */}
        {/* <HireUs /> */}
        {/*<div className="p-16">*/}
        {/* <OurPartners /> */}
        {/*</div>*/}

        {/* <Footer /> */}
      </div>
    </article>
  );
};

Home.defaultProps = IHomeDefaultProps;
Home.getLayout = function getLayout(
  page: ReactElement
) {
  return <AppLayout>{page}</AppLayout>;
};

export default Home;
