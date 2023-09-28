import type { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { useRouter } from 'next/router';
import React, { ReactElement, useState, useEffect } from 'react';
import styles from '../styles/Home.module.css';
import { encodePassphrase, generateRoomId, randomString } from '../lib/client-utils';

function CustomConnectionTab() {
  const router = useRouter();

  const [e2ee, setE2ee] = useState(false);
  const [sharedPassphrase, setSharedPassphrase] = useState(randomString(64));
  const [livekitServer, setLivekitServer] = useState<string | undefined>();
  const [token, setToken] = useState<string | undefined>();
  const [e2eePassphrase, sete2eePassphrase] = useState<string | undefined>();

  useEffect(() => {

    const { search, hash } = window.location;
    const queryParams = new URLSearchParams(search);
    const _liveKitUrl : string | undefined = queryParams.get('lkUrl') as string | undefined ?? undefined;
  //  setLivekitServer(_liveKitUrl);
    const _token : string | undefined = queryParams.get('token') as string | undefined ?? undefined;
   // setToken(_token);
    const _e2eePassphrase : string | undefined = queryParams.get('e2eePassphrase') as string | undefined ?? undefined;
    sete2eePassphrase(_e2eePassphrase);
    router.push(`/conf/?lkUrl=${_liveKitUrl}&token=${_token}`);

  }, []);


  return <div/>
}


const Home = () => {

  return (
    <>
      <main className={styles.main} data-lk-theme="default">
            <CustomConnectionTab />
      </main>
      <footer data-lk-theme="default">
        <a href="https://impleotv.com" rel="noopener">
          IMPLEOTV SYSTEMS LTD
        </a>
      </footer>
    </>
  );
};

export default Home;
