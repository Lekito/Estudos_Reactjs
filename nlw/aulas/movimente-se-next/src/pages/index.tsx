import Head from 'next/head';
import {GetServerSideProps} from 'next';
import { CompletedChallenges } from '../components/CompletedChallenges';
import { Countdown } from '../components/Countdown';
import { ExperienceBar} from '../components/ExperienceBar';
import { Profile } from '../components/Profile';
import styles from '../styles/pages/Home.module.css';
import { ChallengeBox } from '../components/ChallengeBox';
import { CountdownProvider } from '../contexts/CountdownContext';

export default function Home(props) {
  console.log(props);

  return (
    <div className={styles.container}>
      <Head>
        <title>Movimente-se</title>
      </Head>

      <ExperienceBar />
      
      <CountdownProvider>
        <section>
          <div>
            <Profile />
            <CompletedChallenges />
            <Countdown />
          </div>
          <div>
            <ChallengeBox />
          </div>
        </section>
      </CountdownProvider>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  // chamada api
  
  const {level, currentExperience, challengesCompleted} = ctx.req.cookies;

  

  return {
    props: {
      level, 
      currentExperience,
      challengesCompleted
    }
  }
}