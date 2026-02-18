import SkillIcon from "./components/SkillIcon";
import AppLink from "./components/AppLink";

const AppLinkProps = [
  {
    name: 'Niporica ニポリカ',
    link: null,
    // link: 'https://niporica.com/',
    githubLink: 'https://github.com/ShunyaNagahori/niporica',
    images: ['images/appLinkImage/niporica1.webp'],
    description: 'プロジェクトの稼働時間を可視化する業務日報管理ツール'
  },
  {
    name: 'advrial',
    link: null,
    githubLink: 'https://github.com/ShunyaNagahori/advrial',
    images: ['images/appLinkImage/advrial1.png', 'images/appLinkImage/advrial2.png', 'images/appLinkImage/advrial3.png'],
    description: 'お出かけした場所を地図上に登録して、写真やコメントなどで思い出が残せるSNSアプリです。'
  },
  {
    name: 'Voice Gpt',
    link: 'https://voice-gpt-self.vercel.app/',
    githubLink: 'https://github.com/ShunyaNagahori/voice-gpt',
    images: ['images/appLinkImage/voice-app1.png', 'images/appLinkImage/voice-app2.png', 'images/appLinkImage/voice-app3.png'],
    description: 'AIと会話が出来るアプリです。AIからの回答も音声で返ってきます。'
  },
  {
    name: 'Chart App',
    link: 'https://chart-app-iota.vercel.app/',
    githubLink: 'https://github.com/ShunyaNagahori/chart-app',
    images: ['images/appLinkImage/chart-app1.png', 'images/appLinkImage/chart-app2.png', 'images/appLinkImage/chart-app3.png'],
    description: 'グラフを簡単に作成、PDFに保存できるアプリです。'
  },
  {
    name: 'Room',
    link: null,
    // link: 'https://room-client.onrender.com/',
    githubLink: 'https://github.com/ShunyaNagahori/Room',
    images: ['images/appLinkImage/room1.png', 'images/appLinkImage/room2.png'],
    description: '匿名性のある自由なチャットアプリです。'
  }
]

export default function Home() {
  return (
    <main className="mt-5 mb-16">
      <div className='max-w-4xl mx-auto px-4'>
        <div className='my-5'>
          <h2 className='text-3xl my-2'>Shunya Nagahori</h2>
          <div className="flex justify-between">
            <div>
              <p className='text-sm'>
                Webエンジニア
              </p>
              <a href="https://twitter.com/shunperorin" className='text-sm pr-1 border-b text-blue-500 hover:opacity-30'>X(Twitter)</a>
              /
              <a href="https://github.com/ShunyaNagahori" className='text-sm px-1 border-b text-blue-500 hover:opacity-30'>GitHub</a>
              <p className='text-sm'>
                フリーランスのシステムエンジニアとして日々生きています。<br/>
                フロントエンドとバックエンドともに実務経験があり、コミュニケーションは得意な方です。<br />
              </p>
            </div>
            <div>
              <img className='rounded-full' src='images/prof.jpg' width={150} />
            </div>
          </div>
        </div>
        <div className='my-5'>
          <h2 className='text-2xl my-2'>Skills</h2>
          <div className='flex flex-wrap'>
            <SkillIcon skill={"HTML"} />
            <SkillIcon skill={"CSS"} />
            <SkillIcon skill={"JavaScript"} />
            <SkillIcon skill={"TypeScript"} />
            <SkillIcon skill={"Ruby"} />
            <SkillIcon skill={"Ruby on Rails"} />
            <SkillIcon skill={"SQL"} />
            <SkillIcon skill={"React"} />
            <SkillIcon skill={"Next.js"} />
            <SkillIcon skill={"Node.js"} />
            <SkillIcon skill={"Express"} />
            <SkillIcon skill={"Nest.js"} />
            <SkillIcon skill={"Docker"} />
            <SkillIcon skill={"Prisma"} />
          </div>
        </div>
        <div className='my-5'>
          <h2 className='text-2xl my-2'>Works</h2>
          <ul className='list-disc'>
            <li className='m-5'>
              株式会社TOKI（2022年11月〜2026年1月）
              <p className='text-sm'>
                旅程作成ツール『TRAVESENS』の開発（バックエンド、フロントエンド）
              </p>
            </li>
            <li className='m-5'>
              合同会社pico（2023年8月〜2024年4月）
              <p className='text-sm'>
                英語単語例文検索ツール『dict』の開発（フロントエンド）
              </p>
              <p className='text-sm'>
                企業と働き手のマッチングサービス『ai-agent』の開発（バックエンド、フロントエンド）
              </p>
            </li>
            <li className='m-5'>
              ユナイトアンドグロウ株式会社（2024年5月〜 2024年10月）
              <p className='text-sm'>
                会員制ナレッジシェアサービス『kikzo』のSlackアプリ制作（バックエンド）
              </p>
            </li>
            <li className='m-5'>
              株式会社LeaP Up（2024年9月〜2024年11月）
              <p className='text-sm'>
                学生起業家のSNSサービス『Bloom Up』の開発（バックエンド、フロントエンド）
              </p>
            </li>
            <li className='m-5'>
              株式会社Groovement（2025年4月〜2025年9月）
              <p className='text-sm'>
                フリーランスコンサルタント向けの案件紹介マッチングサービス『Strategy Consultant Bank』の開発（バックエンド、フロントエンド）
              </p>
            </li>
            <li className='m-5'>
              株式会社Timelab（2026年1月〜現在）
              <p className='text-sm'>
                デジタル証明書発行Webアプリ『Shomia』の開発（バックエンド、フロントエンド）
              </p>
            </li>
          </ul>
          <a href="https://docs.google.com/spreadsheets/d/17fB41diNJoClQM7gy3jkCzZxGn7cDj-hHLYeGyrp_kM/edit?usp=sharing" className='pr-1 border-b text-blue-500 hover:opacity-30'>
            <p>スキルシートはこちらになります</p>
          </a>
        </div>
        <div className='my-5'>
          <h2 className='text-2xl my-2'>My Personal App</h2>
            <p className="text-sm">勉強がてら個人でアプリを作成しています。</p>
            <div className='grid sm:grid-cols-2 gap-x-8 grid-cols-1'>
              {AppLinkProps.map((prop) => (
                <AppLink
                  key={prop.name}
                  name={prop.name}
                  link={prop.link}
                  githubLink={prop.githubLink}
                  images={prop.images}
                  description={prop.description}
                />
              ))}
            </div>
        </div>
        <div className='my-5'>
          <h2 className='text-2xl my-2'>Conntact</h2>
          <p>nagahori.shunya@gmail.com</p>
        </div>
      </div>
    </main>
  )
}
