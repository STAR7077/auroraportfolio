/* eslint-disable react-refresh/only-export-components */
import adobexdicon from "../../assets/icons/adobexdicon.svg";
import canvaicon from "../../assets/icons/canvaicon.svg";
import figmaicon from "../../assets/icons/figmaicon.svg";
import htmlicon from "../../assets/icons/htmlicon.svg";
import cssicon from "../../assets/icons/cssicon.svg";
import javascripticon from "../../assets/icons/javascripticon.svg";
import typescripticon from "../../assets/icons/typescripticon.svg";
import reacticon from "../../assets/icons/reacticon.svg";
import nextjsicon from "../../assets/icons/nextjsicon.svg";
import nodejsicon from "../../assets/icons/nodejsicon.svg";
import tailwindcssicon from "../../assets/icons/tailwindicon.svg";
import vuejsicon from "../../assets/icons/vueicon.svg";
import laravel from "../../assets/icons/laravel.svg"
import jqueryicon from "../../assets/icons/jquery.svg";
import gsapicon from "../../assets/icons/gsapicon.svg";
import cloudflareicon from "../../assets/icons/cloudflareicon.svg";
import googletagicon from "../../assets/icons/googletagicon.svg";
import sassscssicon from "../../assets/icons/sassicon.svg";
import apiicon from "../../assets/icons/apiicon.svg";
import rendericon from "../../assets/icons/rendericon.svg";
import python from "../../assets/icons/python.svg";
import django from "../../assets/icons/django.svg"
import postgresql from "../../assets/icons/postgresql.svg";
import mysql from "../../assets/icons/mysql.svg";
import wordpressicon from "../../assets/icons/wordpressicon.svg";
import shopifyicon from "../../assets/icons/shopifyicon.svg";
import webflowicon from "../../assets/icons/webflowicon.svg";
import caricon from "../../assets/icons/car-icon.svg";
import travelicon from "../../assets/icons/travel-icon.svg";
import hardwareicon from "../../assets/icons/hardware-icon.svg";
import phpicon from "../../assets/icons/phpicon.svg";
import video from "../../assets/icons/video.svg";
import hubspot from "../../assets/icons/hubspot.svg";
import amazonicon from "../../assets/icons/amazonicon.svg";
import litespeedicon from "../../assets/icons/litespeedicon.svg";
import googlefont from "../../assets/icons/googlefont.svg";
import opengraph from "../../assets/icons/opengraph.svg";
import unpkg from "../../assets/icons/unpkg.svg";
import emoticon from "../../assets/icons/emoticon.svg";
import rssicon from "../../assets/icons/rssicon.svg";
import youtube from "../../assets/icons/youtube.svg";
import nginx from "../../assets/icons/nginx.svg";


import toollifelabel from "../../assets/img/tools.lifelabel.png"
import malithaikoshiki from "../../assets/img/malithaikoshiki.png";
import profilepicture from "../img/me2.webp";
import kumamoto from "../img/kumamoto.png";
import takagikaikei from "../img/takagikaikei.png";
import ilovebargavillas from "../img/ilovebargavillas.png";
import komons from "../img/komons.png";
import kikkoman from "../img/kikkoman.png";

import { GoHome, GoPerson, GoMail, GoStack, GoProject } from "react-icons/go";
import { FiGithub, FiLink, FiMail,  } from "react-icons/fi";
import Imprint from "../../components/Imprint";
import Privacy from "../../components/Privacy";

export const headerIntroData = {
  title: {
    jp: "こんにちは、松内翼です",
    en: "Hi, I'm Matsuuchi Tsubasa",
  },
  subtitle: "Fullstack Developer ",
  description: {
    jp: "私は松内翼です。キャリアを向上させ、刺激的なプロジェクトに参加することを目標とするフルスタック開発者です。ここでは、私の仕事とWeb開発への情熱を紹介します。共にデジタルソリューションを創造し、未来を創りましょう！",
    en: "I'm Jirou, a fullstack developer with the goal of advancing my career and participating in inspiring projects. Here I present my work and my passion for web development. Let's shape digital solutions together and shape the future!",
  },
  buttons: [
    {
      name: "Contact",
      label: {
        jp: "お問い合わせ",
        en: "Contact me",
      },
      icon: FiMail,
      color: "main-btn",
    },
    {
      name: "Projects",
      label: {
        jp: "私のプロジェクト",
        en: "My Projects",
      },
      icon: FiGithub,
      color: "secondary-btn",
    },
  ],
  profilepicture: profilepicture,
} as const;

export const projectsData = [

  {
    title: "LIFE LABEL Tools",
    description:
      "LIFE LABEL ツールは、住宅のデザインやカスタマイズを支援するWebツールの総合サイトです。間取りシミュレーションや商品設定など、理想の住まいを直感的に可視化・カスタマイズできるツールが揃っています。",
    description_EN:
      "LIFE LABEL Tools is a collection of web-based tools that support home design and customization. From layout simulation to product configuration, these tools help users visualize and personalize their dream homes easily and intuitively.",
    technologies: [
      { name: "Html", icon: htmlicon },
      { name: "CSS", icon: cssicon },
      { name: "JavaScript", icon: javascripticon },
      { name: "GSAP", icon: gsapicon },
      { name: "Jquery", icon: jqueryicon },
      { name: "Cloudflare", icon: cloudflareicon },
      { name: "Googletagicon", icon: googletagicon },
      { name: "Open graph", icon: opengraph },
      { name: "Figma", icon: figmaicon },
    ],
    image: toollifelabel,
    deploymenturl: "https://tools.lifelabel.jp/",
    githuburl: "https://github.com/",
    githubicon: FiGithub,
    deploymenticon: FiLink,
    colors: {
      main: "main-btn",
      second: "secondary-btn",
      icon: "white",
      projectcolor: "#E3964A",
    },
  },
  {
    title: "Hitosara Kumamoto Restaurants",
    description:
      "ヒトサラ熊本版では、シェフがオススメする熊本の人気レストランを紹介。和食から郷土料理まで、豊富な写真とメニュー情報で、理想の一軒が見つかります。グルメな食体験をお探しの方に最適なサイトです。",
    description_EN:
      "Explore top restaurants in Kumamoto with Hitosara, a gourmet site that features chef-recommended dishes. From traditional Japanese cuisine to local Kumamoto specialties, discover the perfect dining experience with detailed menus, photos, and restaurant information.",
    technologies: [
      { name: "Html", icon: htmlicon },
      { name: "CSS", icon: cssicon },
      { name: "JavaScript", icon: javascripticon },
      { name: "Jquery", icon: jqueryicon },
      { name: "REST Api", icon: apiicon },
      { name: "PHP", icon: phpicon },
      { name: "Video", icon: video },
      { name: "Canva", icon: canvaicon },
      { name: "Hubspot", icon: hubspot },
      { name: "Amazon", icon: amazonicon },
      { name: "Open graph", icon: opengraph },
      { name: "Cloudflare", icon: cloudflareicon },
      { name: "Figma", icon: figmaicon },
    ],
    image: kumamoto,
    deploymenturl: "https://hitosara.com/kumamoto/",
    githuburl: "",
    githubicon: FiGithub,
    deploymenticon: FiLink,
    colors: {
      main: "main-btn",
      second: "secondary-btn",
      icon: "white",
      projectcolor: "#70B9BE",
    },
  },
  {
    title: "Mali Thai",
    description:
      "マリタイは、甑島にある本格タイ料理レストランです。タイ人シェフが腕をふるう本場の味を、新鮮な食材と共にリラックスできる島の空間でお楽しみいただけます。地元の方にも観光客にもおすすめの一軒です。",
    description_EN:
      "Mali Thai is a Thai restaurant located on Koshiki Island, offering authentic Thai flavors made with fresh ingredients. Enjoy delicious dishes prepared by a Thai chef in a relaxing island setting. A perfect spot for both locals and travelers seeking a unique dining experience.",
    technologies: [
      { name: "Html", icon: htmlicon },
      { name: "CSS", icon: cssicon },
      { name: "JavaScript", icon: javascripticon },
      { name: "Jquery", icon: jqueryicon },
      { name: "GSAP", icon: gsapicon },
      { name: "Render", icon: rendericon },
      { name: "Google Font", icon: googlefont },
      { name: "Open graph", icon: opengraph },
      { name: "Unpkg", icon: unpkg },
      { name: "Cloudflare", icon: cloudflareicon },
      { name: "Litespeed", icon: litespeedicon },
    ],
    image: malithaikoshiki,
    deploymenturl: "https://malithaikoshiki.com/",
    githuburl:"https://github.com/",
    githubicon: FiGithub,
    deploymenticon: FiLink,
    colors: {
      main: "main-btn",
      second: "secondary-btn",
      icon: "white",
      projectcolor: "#FFD5BD",
    },
  },
  {
    title: "Takagi Accounting Office",
    description:
      "高木会計事務所は、鹿児島を拠点に税務・会計・経営コンサルティングを提供しています。確定申告や記帳代行、経営アドバイスなど、個人から法人まで幅広く対応。信頼と実績のあるサポートで、お客様のビジネスを支えます。",
    description_EN:
      "Takagi Accounting Office offers expert tax, accounting, and business consulting services based in Kagoshima. Supporting individuals and companies with tax returns, bookkeeping, and management advice, the office provides reliable and personalized support to help clients succeed financially.",
    technologies: [
      { name: "Html", icon: htmlicon },
      { name: "CSS", icon: cssicon },
      { name: "JavaScript", icon: javascripticon },
      { name: "Jquery", icon: jqueryicon },
      { name: "PHP", icon: phpicon },
      { name: "Wordpress", icon: wordpressicon },
      { name: "MySQL", icon: mysql },
      { name: "Googletagicon", icon: googletagicon },
      { name: "Open graph", icon: opengraph },
      { name: "Unpkg", icon: unpkg },
      { name: "Cloudflare", icon: cloudflareicon },
    ],
    image: takagikaikei,
    deploymenturl: "https://takagi-kaikei.com/",
    githuburl:"https://github.com/",
    githubicon: FiGithub,
    deploymenticon: FiLink,
    colors: {
      main: "main-btn",
      second: "secondary-btn",
      icon: "white",
      projectcolor: "#FFD5BD",
    },
  },
  {
    title: "Barga Villas",
    description:
      "バルガヴィラは、イタリア・トスカーナ地方の美しい町バルガにある高級バケーションレンタルです。伝統的なイタリア建築と現代的な快適さが融合したヴィラで、自然と文化に囲まれた贅沢な休暇をお楽しみいただけます。",
    description_EN:
      "Barga Villas offers exclusive holiday rentals in the charming town of Barga, Tuscany. Surrounded by breathtaking landscapes and rich culture, each villa blends traditional Italian architecture with modern comforts—perfect for a relaxing and authentic Tuscan escape.",
    technologies: [
      { name: "Html", icon: htmlicon },
      { name: "CSS", icon: cssicon },
      { name: "JavaScript", icon: javascripticon },
      { name: "PHP", icon: phpicon },
      { name: "Wordpress", icon: wordpressicon },
      { name: "Vue", icon: vuejsicon },
      { name: "MySQL", icon: mysql },
      { name: "Emoticon", icon: emoticon },
      { name: "RSS", icon: rssicon },
      { name: "Unpkg", icon: unpkg },
      { name: "Google Font", icon: googlefont },
      { name: "Figma", icon: figmaicon },
    ],
    image: ilovebargavillas,
    deploymenturl: "https://www.ilovebargavillas.com/",
    githuburl:"https://github.com/",
    githubicon: FiGithub,
    deploymenticon: FiLink,
    colors: {
      main: "main-btn",
      second: "secondary-btn",
      icon: "white",
      projectcolor: "#FFD5BD",
    },
  },
  {
    title: "Komons ",
    description:
      "コモンズは、天然素材と上質な香り、そして美しいデザインが融合した日本製ホームケア製品を提供しています。食器用洗剤からルームスプレーまで、日常の掃除やケアを心地よく、特別な時間に変える製品が揃っています。",
    description_EN:
      "Komons offers premium Japanese home care products that combine natural ingredients with elegant design and refined fragrance. From dish soap to room sprays, every item is crafted with care to make daily cleaning a more enjoyable and meaningful experience.",
    technologies: [
      { name: "Html", icon: htmlicon },
      { name: "CSS", icon: cssicon },
      { name: "JavaScript", icon: javascripticon },
      { name: "Jquery", icon: jqueryicon },
      { name: "Shopify", icon: shopifyicon },
      { name: "Cloudflare", icon: cloudflareicon },
      { name: "Googletagicon", icon: googletagicon },
      { name: "Open graph", icon: opengraph },
      { name: "Google Font", icon: googlefont },
      { name: "MySQL", icon: mysql },
      { name: "Unpkg", icon: unpkg },
    ],
    image: komons,
    deploymenturl: "https://komons-japan.com/",
    githuburl:"https://github.com/",
    githubicon: FiGithub,
    deploymenticon: FiLink,
    colors: {
      main: "main-btn",
      second: "secondary-btn",
      icon: "white",
      projectcolor: "#FFD5BD",
    },
  },
  {
    title: "Kikkoman Global ",
    description:
      "キッコーマンは、しょうゆを中心とした日本の食文化を世界に広めるグローバルブランドです。製品情報やレシピ、品質へのこだわり、そして「おいしく、健康に」をテーマとした取り組みをご紹介しています。",
    description_EN:
      "Kikkoman is a global leader in soy sauce and Japanese food culture. Explore a wide range of products, recipes, and the brand’s commitment to quality, innovation, and promoting delicious, healthy living around the world.",
    technologies: [
      { name: "Html", icon: htmlicon },
      { name: "CSS", icon: cssicon },
      { name: "JavaScript", icon: javascripticon },
      { name: "Jquery", icon: jqueryicon },
      { name: "Cloudflare", icon: cloudflareicon },
      { name: "Googletagicon", icon: googletagicon },
      { name: "React", icon: reacticon },
      { name: "Google Font", icon: googlefont },
      { name: "MySQL", icon: mysql },
      { name: "Open graph", icon: opengraph },
      { name: "Unpkg", icon: unpkg },
      { name: "Youtube", icon: youtube },
      { name: "nginx", icon: nginx },
      { name: "Figma", icon: figmaicon },
    ],
    image: kikkoman,
    deploymenturl: "https://www.kikkoman.com/en/",
    githuburl:"https://github.com/",
    githubicon: FiGithub,
    deploymenticon: FiLink,
    colors: {
      main: "main-btn",
      second: "secondary-btn",
      icon: "white",
      projectcolor: "#FFD5BD",
    },
  },
] as const;

export const liveTickerData = {
  content: {
    jp: "私のポートフォリオをご覧いただきありがとうございます。",
    en: "Thank you for viewing my portfolio.",
  },
} as const;

export const skillsDataWeb = [
  {
    skillsTitle: "WebDevelopment",
    skills: [
      {
        title: "HTML",
        hash: "#html",
        icon: htmlicon,
        color: "#F1662A",
      },
      {
        title: "CSS",
        hash: "#CSS",
        icon: cssicon,
        color: "#1572B6",
      },
      {
        title: "SASS/SCSS",
        hash: "#SASS/SCSS",
        icon: sassscssicon,
        color: "#CC6699",
      },
      {
        title: "Tailwind",
        hash: "#Tailwind",
        icon: tailwindcssicon,
        color: "#38B2AC",
      },
      {
        title: "JavaScript",
        hash: "#JavaScript",
        icon: javascripticon,
        color: "#F7DF1E",
      },
      {
        title: "TypeScript",
        hash: "#TypeScript",
        icon: typescripticon,
        color: "#007ACC",
      },
      {
        title: "PHP",
        hash: "#PHP",
        icon: phpicon,
        color: "#00AA55",
      },
      {
        title: "Python",
        hash: "#Python",
        icon: python,
        color: "#F1662A",
      },
      {
        title: "Node.js",
        hash: "#Node.js",
        icon: nodejsicon,
        color: "#00FF00",
      },      
      {
        title: "Laravel",
        hash: "#Laravel",
        icon: laravel,
        color: "#FF6666",
      },
      {
        title: "React",
        hash: "#React",
        icon: reacticon,
        color: "#61DAFB",
      },
      {
        title: "Next.js",
        hash: "#Next.js",
        icon: nextjsicon,
        color: "#007ACC",
      },
      {
        title: "Vue.js",
        hash: "#Vue.js",
        icon: vuejsicon,
        color: "#4FC08D",
      },
      {
        title: "Django.js",
        hash: "#Django.js",
        icon: django,
        color: "#30FF30",
      },
      {
        title: "Mysql",
        hash: "#Mysql",
        icon: mysql,
        color: "#770066",
      },
      {
        title: "Postgresql",
        hash: "#Postgresql",
        icon: postgresql,
        color: "#770066",
      },
    ],
  },
] as const;

export const skillsDataDesign = [
  {
    skillsTitle: "Design",
    skills: [
      { title: "Figma", hash: "#Figma", icon: figmaicon, color: "#F24E1E" },
      {
        title: "Adobe XD",
        hash: "#Adobe XD",
        icon: adobexdicon,
        color: "#FF61F6",
      },
      { title: "Canva", hash: "#Canva", icon: canvaicon, color: "#00C4CC" },
    ],
  },
] as const;

export const skillsDataCMS = [
  {
    skillsTitle: "CMS",
    skills: [
      {
        title: "WordPress",
        hash: "#WordPress",
        icon: wordpressicon,
        color: "#21759B",
      },
      {
        title: "Shopify",
        hash: "#Shopify",
        icon: shopifyicon,
        color: "#7AB55C",
      },
      {
        title: "Webflow",
        hash: "#Webflow",
        icon: webflowicon,
        color: "#4353FF",
      },
    ],
  },
] as const;

export const navLinks = [
  { jp: "ホーム", en: "Home", hash: "#home", icon: GoHome },
  { jp: "スキル", en: "Skills", hash: "#skills", icon: GoStack },
  { jp: "プロジェクト", en: "Projects", hash: "#projects", icon: GoProject },
  { jp: "自己紹介", en: "About me", hash: "#about-me", icon: GoPerson },
  { jp: "お問い合わせ", en: "Contact", hash: "#contact", icon: GoMail },
] as const;

export const FooterLinks = [
  { jp: "インプリント", en: "Imprint", hash: "#imprint", data: <Imprint /> },
  { jp: "プライバシー", en: "Privacy", hash: "#privacy", data: <Privacy /> },
] as const;

export const sideBarRightMail = {
  link: "mailto:myemail@com",
  text: "myemail@com",
} as const;

export const sideBarLeftSocials = [
  // {
  //   link: "https://www.linkedin.com/in/alpay/",
  //   icon: FiLinkedin,
  //   altimgname: "linkedin",
  // },
  // https://github.com/AlpayC
  // {
  //   link: "",
  //   icon: FiGithub,
  //   altimgname: "github",
  // },
  // {
  //   link: "https://discord/",
  //   icon: FiDisc ,
  //   altimgname: "discord",
  // },
  // {
  //   link: "https://skype/",
  //   icon: FiCloud,
  //   altimgname: "skype",
  // },
  // {
  //   link: "https://web.telegram.org/k/",
  //   icon: FiSend ,
  //   altimgname: "telegram",
  // },
  // {
  //   link: "https://www.chatwork.com/auroradev000",
  //   icon: FiHexagon ,
  //   altimgname: "chatwork",
  // },
  // {
  //   link: "mailto:myemail@com",
  //   icon: FiMail,
  //   altimgname: "Chatwork",
  // },
] as const;

export const quotesData = [
  {
    jp: '"最初から正しく行うことは全く重要ではありません。最後に正しく行うことが極めて重要です。"',
    en: `"It's not at all important to get it right the first time. It's vitally important to get it right the last time."`,
    author: "",
  },
  {
    jp: '"ウェブはキャンバス、コードは絵の具です。あなただけの傑作を創りましょう。"',
    en: `"The web is like a canvas, and code is the paint. Create your masterpiece."`,
  },
] as const;

export const aboutMeData = {
  title: "自己紹介",
  title_EN: "About me",
  description: "自己紹介のコードスニペット",
  description_EN: "A few code snippets about me",
  paragraphs_DE: [
    {
      title: "私の心の回路",
      description:
        "デジタルの世界を探検していないときは、テクノロジーとハードウェアの魅力的な世界を探求しています。回路やはんだ付け部分は、私にとってエキサイティングな冒険におけるパズルのピースのようなものです。",
      icon: hardwareicon,
    },
    {
      title: "人生の高速道路",
      description:
        "コーディング以外にも、私は文字通り高速道路を走るのが好きです。車は私の情熱であり、パワフルなマシンで未知の道を走るのが大好きです。",
      icon: caricon,
    },
    {
      title: "人生のモットーとしての発見の喜び",
      description:
        "Web開発者としての私の旅は、人生の道のりの一部に過ぎません。私は、「冒険は慣れ親しんだ場所を離れたときに初めて始まる」というモットーを掲げています。新しい場所や文化を発見することが、私にとって創造的なインスピレーションの源です。",
      icon: travelicon,
    },
  ],
  paragraphs_EN: [
    {
      title: "The Circuits of My Heart",
      description:
        "When I'm not navigating the digital world, I explore the fascinating realm of technology and hardware. Circuits and solder joints are like puzzle pieces to me in an exciting adventure.",
      icon: hardwareicon,
    },
    {
      title: "On the Fast Lane of Life",
      description:
        "Besides coding, I like to be on the fast lane - in the truest sense of the word. Cars are my passion, and I enjoy being on unknown roads with powerful machines.",
      icon: caricon,
    },
    {
      title: "The Joy of Discovery as a Life Motto",
      description:
        "My journey as a web developer is only a part of my life path. I live by the motto that the adventure only begins when you leave the familiar behind. Discovering new places and cultures is my form of creative inspiration.",
      icon: travelicon,
    },
  ],
};

export const contactData = {
  title: {
    jp: "お問い合わせ",
    en: "Contact",
  },
  description: {
    jp: "メッセージをお送りいただければ、折り返しご連絡いたします。",
    en: "Write me a message and I will get back to you.",
  },
  inputfields: [
    {
      name: "name",
      placeholder: {
        jp: "お名前",
        en: "Your Name",
      },
      type: "text",
      validation: {
        jp: "お名前を入力してください",
        en: "Please fill in your name",
      },
      pattern: "{2}",
    },
    {
      name: "email",
      placeholder: {
        jp: "メールアドレス",
        en: "Your E-Mail",
      },
      type: "email",
      validation: {
        jp: "メールアドレスを入力してください",
        en: "Please fill in your email",
      },
      pattern: "[@]{4}",
    },
    {
      name: "subject",
      placeholder: {
        jp: "件名",
        en: "Your Subject",
      },
      type: "text",
      validation: {
        jp: "件名を入力してください",
        en: "Please fill in your subject",
      },
      pattern: "{10}",
    },
  ],
  textarea: {
    placeholder: {
      jp: "メッセージ",
      en: "Your Message",
    },
    name: "message",
    rows: 10,
    validation: {
      jp: "メッセージを入力してください",
      en: "Please fill in your message",
    },
    pattern: "{10}",
  },
  button: {
    value: {
      jp: "送信",
      en: "send",
    },
  },
  icon: FiMail,
  iconcolor: "#FFFFFF",
  colors: {
    main: "main-btn",
    second: "secondary-btn",
    icon: "white",
  },
  privacyOptIn: {
    checkbox: {
      jp: "Auroraが私の個人情報（名前とメールアドレス）を使用して連絡を取ることに同意します。",
      en: "I agree that Aurora  may use my personal data (name and e-mail address) to contact me.",
    },
    description: {
      jp: "このリクエストを送信することにより、プライバシーポリシーを読んだことを認めます。",
      en: "By submitting this request, you acknowledge that you have read the Private Policy",
    },
  },
} as const;

export const toastMessages = {
  loadingProject: {
    jp: "🦄 ライブデモはまもなく開始されます。サーバーを起動しています...",
    en: "🦄 The live demo will open shortly. Starting servers...",
  },
  successEmailSent: {
    jp: "🦄 メールをありがとうございます。できるだけ早くご返信いたします。",
    en: "🦄 Thank you for your email. I will get back to you as soon as possible",
  },
  failedEmailSent: {
    jp: "🦄 申し訳ございませんが、メールの送信に失敗しました。後ほどもう一度お試しください。",
    en: "🦄 Unfortunately the sending of your email did not work. Please try again later",
  },
  failedValidationName: {
    jp: "お名前を入力してください。",
    en: "Please fill in your name",
  },
} as const;

export const buttonLabels = {
  language: {
    jp: "JP",
    en: "EN",
  },
} as const;

export const directionStyles: Record<string, React.CSSProperties> = {
  "outer-right-to-inner-left": {
    marginRight: "4rem",
  },
  "outer-left-to-inner-right": {
    marginLeft: "4rem",
    transform: "scaleX(-1)",
  },
  "inner-right-to-middle": {
    width: "100%",
    transform: "scaleY(1)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  "inner-left-to-middle": {
    width: "100%",
    transform: "scaleX(-1)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  "middle-to-inner-right": {
    width: "100%",
    transform: "scale(1,-1)",
  },
  "middle-to-inner-left": {
    width: "100%",
    transform: "scale(-1,-1)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  middle: {
    width: "100%",
    transform: "scaleX(-1)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
};

export const heightStyles: Record<string, { heights: [string, string] }> = {
  small: {
    heights: ["25rem", "15rem"],
  },
  middle: {
    heights: ["35rem", "25rem"],
  },
  large: {
    heights: ["45rem", "35rem"],
  },
  extraLarge: {
    heights: ["55rem", "45rem"],
  },
};

export const spaceStyles: Record<string, React.CSSProperties> = {
  "outer-right-to-inner-left": {
    marginTop: "-6rem",
    width: "100%",
  },
  "outer-left-to-inner-right": {
    marginTop: "-6rem",
    width: "100%",
  },
  "inner-right-to-middle": {
    marginTop: "-20rem",
    width: "50%",
    zIndex: "-10",
  },
  "inner-left-to-middle": {
    marginTop: "-10rem",
    width: "50%",
    zIndex: "-10",
  },
  "middle-to-inner-right": {
    width: "75%",
  },
  "middle-to-inner-left": {
    marginTop: "-2.5rem",
    width: "50%",
  },
  middle: {
    marginTop: "-2.5rem",
    width: "0%",
    display: "none",
  },
};

export const widthStyles: Record<string, { widths: [string, string] }> = {
  "outer-right-to-inner-left": {
    widths: ["74.45%", "74.45%"],
  },
  "outer-left-to-inner-right": {
    widths: ["75%", "75%"],
  },
  "inner-right-to-middle": {
    widths: ["50.1%", "49%"],
  },
  "inner-left-to-middle": {
    widths: ["50.1%", "49%"],
  },
  "middle-to-inner-right": {
    widths: ["33.4%", "50.03%"],
  },
  "middle-to-inner-left": {
    widths: ["50.1%", "49%"],
  },
  middle: {
    widths: ["0%", "0%"],
  },
};
