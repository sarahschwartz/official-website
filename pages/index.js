import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar";
import TikTok from "../components/TikTok";
import Link from "next/link";
import { SparklesIcon } from "@heroicons/react/outline";
import { SocialIcon } from "react-social-icons";
import ReactPlayer from "react-player";

export default function Home() {
  return (
    <div className={styles.container}>
      <Navbar />
      {/* <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head> */}

      <main className="mt-11">
        <div className="flex flex-col justify-center items-start max-w-5xl border-gray-200 dark:border-gray-700 mx-auto pb-16">
          <div className="flex flex-col-reverse sm:flex-row items-start">
            <div className="flex flex-col pr-8">
              <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-1 text-white">
                Camila Ramos Garzon
              </h1>
              {/* <p className="text-white text-xs">@camiinthisthang</p> */}
              <h2 className="text-gray-200 dark:text-gray-200 mb-4">
                Developer Advocate // Founder
                {/* <span className="font-semibold">PlanetScale.</span>
              <br></br>Founder at <span className="font-semibold">STEMTank + Calibaba.</span> */}
              </h2>
              <p className="text-gray-200 mb-2">
                I&apos;m a software engineer who loves to teach. I break down
                technical concepts ranging from the basics of programming to the
                latest technologies into easy-to-understand videos and blog
                posts.
              </p>
              <div className="flex flex-row">
                {/* <p className='text-teal-400 font-bold pr-2'>
                                    l
                                </p> */}
                <SparklesIcon className="h-5 w-5 text-indigo-400 mt-1"></SparklesIcon>
                <Link href="/about">
                  <p className="text-white mb-16 hover:text-black hover:bg-indigo-400 rounded-lg p-1">
                    About Me
                  </p>
                </Link>
              </div>
            </div>
          </div>
          <div className="flex flex-row flex-wrap space-x-4">
            <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-6 bg-gradient-to-r from-indigo-500  via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Featured Content
            </h3>
            <div className=" mt-1">
              <SocialIcon
                target="_blank"
                rel="noreferrer"
                url="https://www.tiktok.com/@camiinthisthang?"
                bgColor="#7f7f7f"
                fgColor="#fff"
                style={{ height: 35, width: 35 }}
              />
            </div>
            <div className="mt-1">
              <SocialIcon
                target="_blank"
                rel="noreferrer"
                url="https://www.youtube.com/channel/UCyEnr-lcCUavJzh0uodvG3w"
                bgColor="#7f7f7f"
                fgColor="#fff"
                style={{ height: 35, width: 35 }}
              />
            </div>
          </div>

          {/* <div className='flex flex-row flex-wrap justify-between w-full'> */}
          <div className="flex flex-row w-full overflow-auto pb-4">
            <div className="">
              <TikTok videoID="6999680054053637382"> </TikTok>
              {/* <TikTok
                                vidLink='https://www.tiktok.com/@camiinthisthang/video/6999680054053637382'
                                videoID='6999680054053637382'
                            ></TikTok> */}
            </div>
            <div className="">
              <TikTok
                vidLink="https://www.tiktok.com/@camiinthisthang/video/7000052712595279109"
                videoID="7000052712595279109"
              ></TikTok>
            </div>
            <div className="">
              <TikTok
                vidLink="https://www.tiktok.com/@camiinthisthang/video/7042774240483052846"
                videoID="7042774240483052846"
              ></TikTok>
            </div>
            <div className="">
              <TikTok
                vidLink="https://www.tiktok.com/@camiinthisthang/video/7042711433603419439"
                videoID="7042711433603419439"
              ></TikTok>
            </div>
            <div className="">
              <TikTok
                vidLink="https://www.tiktok.com/@camiinthisthang/video/7031254881944030470"
                videoID="7031254881944030470"
              ></TikTok>
            </div>
          </div>
          {/* <div className="mt-8 flex flex-row w-full overflow-auto space-x-2">
            <div className="">
              <ReactPlayer width="480px" height="260px" url="https://www.youtube.com/watch?v=tq5fJmoYod4" />
            </div>
            <div className="">
              <ReactPlayer width="480px" height="260px"  url="https://www.youtube.com/watch?v=ZE32RZJGSXU" />
            </div>
            <div className="">
              <ReactPlayer width="480px" height="260px"  url="https://www.youtube.com/watch?v=DYsJUEjpK_I" />
            </div>
          </div> */}
        </div>

        {/* <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div> */}
      </main>

      {/* <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer> */}
    </div>
  );
}


// export async function getStaticProps() {
//   // Call an external API endpoint to get posts.
//   // You can use any data fetching library

//   const res = await fetch('https://www.tiktok.com/oembed?url=https://www.tiktok.com/@camiinthisthang/video/6999680054053637382')
//   const video = await res.json()
//   console.log("this is video!!!", video);

//   // By returning { props: { posts } }, the Blog component
//   // will receive `posts` as a prop at build time
//   return {
//     props: {
//       video,
//     },
//   }
// }