import { Flex, Stack } from '@mantine/core';
import { useRouter } from 'next/router';
import styles from './index.module.scss';

import { Body, BodyBold, BodyDmsans, Heading } from 'components/typography';

import { useEffect, useState } from 'react';

const DummyData = {
  headline: '隱私政策',
  date: '28/12/2024',
  updateYear: '2024',
  updateMonth: '8',
  updateDay: '28',
  effectiveYear: '2024',
  effectiveMonth: '8',
  effectiveDay: '28',
};

const DummyDataEn = {
  headline: 'Privacy Policy',
  date: '28/12/2024',
  updateYear: '2024',
  updateMonth: '8',
  updateDay: '28',
  effectiveYear: '2024',
  effectiveMonth: '8',
  effectiveDay: '28',
};

const PrivacyPolicy = () => {
  const router = useRouter();
  const [isMobile, setIsMobile] = useState(false);
  const [width, setWidth] = useState<number>(
    typeof window !== 'undefined' ? window.innerWidth : 0
  );
  const handleWindowSizeChange = () => {
    setWidth(typeof window !== 'undefined' ? window.innerWidth : 0);
  };

  useEffect(() => {
    if (width <= 835) {
      setIsMobile(true);
    } else setIsMobile(false);
  }, [width]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleWindowSizeChange);
    }
    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', handleWindowSizeChange);
      }
    };
  }, [width]);

  const DisplayRichText = () => {
    const descriptionEn = {
      __html: `<h1>Introduction</h1>
      <p>The privacy policy is bound to WOLF PLANET TECHNOLOGY (HK) CO., LIMITED ((the company)” and individuals or companies that have registered on the application - WOLF PLANET (the “Partner”) and have explicitly accepted these terms and conditions.</p>
        
      <h1>General Privacy Policy Statement (Overview)</h1>
        <p>WOLF PLANET attaches great importance to the user's information confidentiality, data protection and data security. It is very important for us to permanently protect the security and confidentiality of your personal information (such as name, user name, identification information, email address and phone number). Within the following terms, we will explain to you the type and scope of our collection, processing and use of personal information. This privacy policy only addresses our application and its sub-pages and does not apply to any third-party websites. If you access the website of a third-party website through a link, please review the corresponding website's privacy policy and understand how it handles your data.</p>
        
        <h1>User information collection and processing</h1>
        <p>1. User information collection
In order to provide or optimize our services, when you retrieve content from our application, usage data is stored on the WOLF PLANET server, such as your IP address (in anonymous form), web browsers, internet providers, your search, and the country where this page was located. You can find more instructions in Sections 8, 9 and 10 of this Privacy Policy.

2. Collection of personal information of WOLF PLANET users
In principle, you do not need to tell us any of your personal information (such as your name, identity information, address, telephone number or e-mail address, etc.) unless you voluntarily provide us with this information (for example, by mail or by completing the registration form or contact form). When you either register for the WOLF PLANET account, subscribe to the newsletter service, or wish to use the additional services provided on our application, we will ask you to provide relevant personal information. Unless otherwise specified, we will use the collected information to provide, maintain, protect, and improve our application and services in order to provide you with a better user experience, subject to compliance to relevant laws and regulation. When you register for the WOLF PLANET account, subscribe to the newsletter service or wish to use the additional services provided by our application, we will collect the following information:</p>
<li>Names</li>
<li>Username</li>
<li>Password</li>
<li>Date of birth</li>
<li>Email address</li>
<li>Country</li>
<li>Telephone number</li>

<p>
3. Collecting information on trader strategies
This is, in the main the trade signals received from traders which will be used to formulate strategies.
Following the WOLF PLANET trader review process, we will collect the following information data from users who want to become WOLF PLANET traders:</p>
<li>Company (optional)</li>
<li>Personal I.D</li>
<li>Bank card</li>
<li>Street number</li>
<li>Postal code</li>
<li>City</li>
<li>Telephone number</li>
<li>Cellphone number</li>
        
        <h1>Visibility of personal information for other users</h1>
        <p>1. Trader's Information Visibility
Traders recognized by WOLF PLANET will have a naming strategy and type in the free text. They will have upload avatar options in the corresponding areas of each page. You do not need to disclose any personal information on these options. If the policy provider voluntarily uploads or publishes personal information about themselves on these options, be aware that such information will be visible to all users.

2. Use of micro-blogging service
When you use any of the Weibo services provided on the WOLF PLANET platform and posts/forwards/participates in topics such as Weibo, your user name and your published content will be visible to other users.</p>
        
        <h1>Newsletter</h1>
        <p>When you subscribe to the newsletter service, we will use your email address to send newsletter information and marketing information (providing or promoting our services), until you unsubscribe from the newsletter service. You can cancel the subscription newsletter service at any time by withdrawing WOLF PLANET's permission to send text messages in the future. If you no longer wish to receive any newsletter service, you can find the link at the end of each newsletter and click to cancel.</p>
        
        <h1>User rights</h1>
        <p>As a user, you have the right to request us to store personal information about you. In addition, you have the right to modify, block and delete your personal information in accordance with relevant laws. And, each user can refuse to use his own information for advertising or market/opinion survey purposes.</p>
        
        <h1>Information security</h1>
        <p>Your personal information is transmitted using SSL network data encryption technology. We use technical and organizational measures to protect the security of our application and other systems, prevent the loss, destruction, unauthorized reading, modification or disclosure of user information. Your account is only accessible if you enter your personal password correctly. You should always keep your password confidential, and each time you finish using our application, log out and then close the browser window, especially if you share a computer with others.</p>
        
        <h1>User information usage and transmission</h1>
        <p>1. We will only use the information you provide to us for the legitimate business purposes of this site. We do not provide your information to any third party.

2. In special circumstances, WOLF PLANET is legally obliged to provide your information to third parties. For example, in order to cooperate with government oversight agencies and law enforcement agencies that perform court orders or court requests, WOLF PLANET will provide relevant information as evidence or proof to ensure WOLF PLANET does not breach any relevant laws or regulations.</p>
        
        <h1>Use of cookies</h1>
        <p>1. To optimize our application, we use cookies (small text files). When you visit our application, we will store certain information in the form of "cookies" on your computer or other terminal device. Cookies can help us in many ways. For example, to improve the security of the site, determine the frequency of use of the site and the number of visitors, and analyze how users use our site. The use of cookies helps us to track the effectiveness of our advertising.

2. Session Cookies: When you use the username and password you set to log in to the application, we use Session Cookies. Session cookies will let application identify you during your visit, and when you end browsing our platform (the browser window closes), these session cookies will be deleted.

3. Persistent Cookies: We will also use persistent cookies. The use of persistent cookies allows us to identify users who revisit our site, allowing us to continuously improve our products and provide you with a better service experience. These persistent cookies do not contain any personally identifiable information. The information stored in cookies will not be matched with your personally identifiable information at any time.

4. Log-In Cookies: We use persistent cookies when you use the "Automatic login on this computer" feature. In this case, the Cookies file will be permanently stored on your computer's hard disk unless you manually remove it using your browser or operating system software. When you use the site again, the site will automatically log in by reading these cookies and knowing your relevant information. These cookies contain an ID number. Your login details and your password will not be saved.

5. Affiliate Cookies: We use cookies when you click to access our application through WOLF PLANET Partners’ ad placement. These cookies are used for the purpose of billing WOLF PLANET partners and do not contain any personally identifiable information. On the bill of invoices, the information that the partner who invited you to register on the WOLF PLANET platform is displayed only in an anonymous form; the partner cannot track you on the basis of the information provided.

6. Right of Objection: You can prevent cookies from being saved through your browser, use cookies to restrict certain websites or set a way for your browser to notify you when cookies are received, in order to prevent the use of cookies and to refuse to create usage profiles. You can also remove these cookies from your hard drive at any time, but please be aware that if you decline session cookies, you may not be able to use our platform.</p>
        
        <h1>Log file</h1>
        <p>Every time you log into any page of our application, the access data will be recorded in the server log file. The data set documented in the log file contains the following information:
Date/Time、Status、Request sent from the browser to the server、amount of data transferred, and access source page</p>
        
        <h1>The product and version information of the browser used</h1>
        <p>We use the IIS Web Server standard "composite" log format as the record format. The user's Internet Protocol (IP) address will not be saved after the user ends up visiting our application, but will be deleted or anonymized after use (applicable to any legal retention principle). Anonymization means that the IP address is processed without certainty, that is, it is impossible to search and identify the visitor's personal identity through the data conditions of the relevant person or fact, unless a party invests a lot of time, effort and cost to identify the visitor's personal identity.

We will make anonymous statistical assessments of the log data (logs) and these data used for evaluation will not contain any attributes or signs that indicate your personal identity. The purpose of the assessment data is to understand the performance and effectiveness of our application. In addition, you can identify defects by using log files; for example, defective hyperlinks or program defects. Therefore, we use log files to achieve the sustainable development of our application. We do not associate the page access and usage information stored in the log file with personally identifiable information at any time. In certain exceptional circumstances, we reserve the right to use log file data when users are suspected of using our site and/or our services illegally or non-contractually.</p>
        
        <h1>Accessibility to this privacy policy</h1>
        <p>You can obtain or print this Privacy Policy from the Privacy Policy link at the bottom of any WOLF PLANET platform.</p>
        
        <h1>Applicable law and jurisdiction</h1>
        <p>1. The laws and regulations where the WOLF PLANET is registered shall govern disputes arising between parties to this Privacy Policy and this Privacy Policy, unless there are laws that specify that other jurisdiction laws apply.

2. In any civil or other litigation process where the contracting party seeks to realize the rights under this Privacy Policy or seek to declare any rights or obligations under this Privacy Policy, each contracting party shall bear the costs and expenses of its legal counsel. The contracting party (plaintiff) shall identify the suitable jurisdiction and court venue.

3. The language of interpretation of this Privacy Policy should be Chinese.

4. The company may provide this privacy policy or any other documents, information and messages to its partners in multiple languages. This Privacy Policy stipulates that the partner should recognize and confirm that the company's working language is Chinese. If there is any contradiction or inconsistency between the non-Chinese expression and the Chinese expression in any documents, information and messages, both parties will use Chinese documents, information and messages as the standard.</p>
        
        <h1>WOLF PLANET TECHNOLOGY (HK) CO., LIMITED</h1>
        
        
        `,
    };
    const descriptionCn = {
      __html: `
      <p> </p>
      <p>感謝您使用WOLF PLANET!

本系统高度重視保護用戶的個人信息及隠私權，此項內容對於我們至關重要。本《隱私政策》說明了我們如何收集、使用、處理和披露您的信息,包括與您訪問和使用WOLF PLANET及支付服務相關的個人信息。
該隱私協議只針對我們平台及其子頁面，不適用於任何第三方網站。
建議您在使用我們的產品或服務前，仔細閱讀並瞭解本《隱私協議》。 若您使⽤我們的系統即表示您確認已瞭解本協定內容。如果您通過鏈接進⼊到第三方網站網頁，請重新查看對應網站的隱私協議並瞭解其處理您資料資料的方式。
如果本《隱私政策》中有未定義的術語（如「服務項目」或「WOLF PLANET」），其定義和我們在服務條款中的定義一致。
在本政策中，「WOLF PLANET」、「我們」或「我們的」指本《隱私政策》下對您的信息負責的WOLF PLANET公司。</p>
        
        <h1>1. 我們收集的信息類型</h1>
        <p>我們主要收集三類信息。

1.1 您向我們提供的信息
使用WOLF PLANET的必要信息
當您使用WOLF PLANET時，我們要求您提供並收集以下您的個人信息。此等信息對於充分履行您和我們之間的合同很有必要，並使得我們能夠遵守我們的法律義務。沒有此等信息，我們可能無法向您提供您所要求的全部服務。

1.1.1 賬號信息
在您註冊WOLF PLANET賬號時，我們要求您提供用戶昵稱、手機號碼、電子郵件地址、密碼、頭像等信息。
身份驗證信息。為幫助創建和維護一個受到信任的環境，我們可能會收集身份驗證信息（如適用法律允許的政府頒發的身份證照片、護照、國民身份證或駕照）或其他驗證信息。
支付信息。為使用WOLF PLANET的某些功能（例如訂閱服務項目），我們可能會要求您提供某些財務信息（如您的銀行賬號或信用卡信息），以便推進支付流程。
與WOLF PLANET和其他會員的通信。在您與WOLF PLANET交流或通過WOLF PLANET與其他會員交流時，我們會收集您的通信信息以及您選擇提供的任何信息。
1.1.2 您選擇向我們提供的信息
您可以選擇向我們提供額外的個人信息，以便在使用WOLF PLANET時獲得更好的用戶體驗。此等額外信息將基於您的自願同意而處理。
額外個人資料信息。您可選擇提供額外個人資料信息，作為您個人資料的一部分（例如姓名、性別、首選語言、城市、出生日期、血型及個人描述）。如您在賬號設置中所示，部分此等個人信息是您公開個人資料頁的一部分，將向其他人公開。
交易風控信息。您可選擇提供設置賬戶交易時使用的風控策略。
其他信息。您還可以選擇在填寫表格、進行搜索、更新或添加WOLF PLANET賬號信息、在社區論壇發布內容、參與優惠活動或使用WOLF PLANET的其他功能時，向我們提供其他信息。
1.1.3 使用支付服務的必要信息
支付數據控制人需要收集以下信息。此等信息對於充分履行與您的合同以及遵守相關法律（如反洗錢法規）很有必要。沒有此等信息，您將無法使用支付服務。
支付信息。在您使用支付服務時，支付數據控制人要求提供某些財務信息（如您的銀行賬號或信用卡信息）以便處理支付並遵守相關法律。
身份驗證和其他信息。如果您是服務提供者，支付數據控制人可能要求提供身份驗證信息（如政府頒發的身份證照片、護照、國民身份證或駕照）或其他驗證信息、您的出生日期、地址、電子郵件地址、電話及其他信息，以便驗證您的身份、向您提供支付服務並遵守相關法律。

1.2 您使用WOLF PLANET和支付服務時，我們自動收集的信息
在您使用WOLF PLANET和支付服務時，我們會自動收集關於您所使用的服務以及如何使用相關服務的信息，包括個人信息。 基於我們合法的利益理由以提供和改進WOLF PLANET和支付服務的功能，此等信息對於充分履行您和我們之間的合同很有必要，使得我們能夠遵守法律義務。
地理位置信息。當您使用WOLF PLANET的某些功能時，我們可能會收集您的精確或大致位置信息，此等信息通過您的IP地址或移動設備的GPS數據來確定，以便為您提供更好的用戶體驗。多數移動設備允許您在設備的設置菜單中控制或禁用應用對位置服務的使用。即使當您不使用應用時，如果您的設置或設備許可權允許此等連接開啟，WOLF PLANET仍可能會收集此等信息。
使用信息。我們會收集您與WOLF PLANET的互動信息，如您查看的頁面或其他內容、您搜索的服務項目以及您在WOLF PLANET上的其他活動。
登錄數據和設備信息。即使您未創建或登錄WOLF PLANET賬號，當您訪問並使用WOLF PLANET時，我們也會自動收集登錄數據和設備信息。此等信息包括但不限於：您使用WOLF PLANET（包括指向第三方應用的鏈接）的詳細信息、IP地址、訪問日期和次數、硬體和軟體信息、設備信息，設備事件信息、唯一識別符、崩潰數據、cookie數據以及您在使用WOLF PLANET前後查看或接觸過的頁面。
麥克風/相機信息。為了提供個性化服務及改進服務質量，或者為您推薦更優質或更適合的服務，您可以選擇使用麥克風/相機設備來進行語音輸入（例如：語音消息、語音搜索）或拍照上傳，在使用過程中我們需要收集您的語音/照片內容並進行必要的處理。

Cookies及類似技術。
為優化我們的應用程式，我們會使用Cookies(小型文本文件)。當您瀏覽我們的應用程式時，我們會以"Cookies"的形式將某些信息存入您的計算機或者其他終端設備。Cookies能夠以多種方式幫助我們。例如提高應用程式的安全性，確定應用程式使用頻率和瀏覽人數，分析用戶如何使用我們的應用程式。
會話Cookies：當您使用您設置的用戶名和密碼登錄應用程式時，我們會使用「會話Cookies」。會話Cookies會讓應用程式在您的訪問期間識別您，而當您結束瀏覽我們的應用程式後(瀏覽器窗口關閉)，這些會話Cookies就會被刪除。
持久Cookies: 我們也會使用持久Cookies。持久Cookies的使用可讓我們識別重訪應用程式的用戶，讓我們不斷地改善產品並為您提供更好的服務體驗。這些持久Cookies不包含任何可識別個人身份信息。存儲在Cookies的信息在任何時候都不會與您的個人身份信息匹配到一起。
Log-In Cookies: 當您使用「在此計算機自動登錄」的功能時，我們會使用持久Cookies。在這種情況下，Cookies文件將永久的保存在您的計算機硬碟上，除非您使用瀏覽器或操作系統軟體手工將其刪除。當您再次使用該網站時，網站就會通過讀取這些 Cookies ，得知你的相關信息，就可以做出自動登錄的動作。這些Cookies包含一個ID號。您的登錄資料和您的密碼不會被保存。
Affiliate Cookies: 當您通過WOLF PLANET合作夥伴的廣告位置點擊進入訪問我們的應用程式時，我們會使用Cookies。這些Cookies出於為WOLF PLANET合作夥伴開具賬單的目的而使用，且不包含任何識別您個人身份的信息。在賬單明細表上，邀請您註冊WOLF PLANET的合作夥伴看到的信息僅以匿名形式展現；合作夥伴無法夠根據所給信息追蹤到您本人。
異議權：您可通過瀏覽器禁止保存Cookies，利用Cookies限制某些網站或者設置您的瀏覽器在接收到Cookies時予以通知的途徑，以達到阻止Cookies的使用和拒絕創建使用配置文件的目的。您還可隨時從硬碟中清除這些Cookies，但請注意，如果您拒絕了會話Cookies，您將可能無法使用我們的平台。
支付交易信息。WOLF PLANET支付實體會收集您在WOLF PLANET上的支付交易信息，包括所使用的支付工具、日期和時間、支付金額、支付工具有效日期和賬單郵政編碼、PayPal電子郵件地址、IBAN信息、您的地址及其他相關交易詳情。此等信息對於充分履行您和我們之間的合同、提供支付服務很有必要。

1.3 我們通過第三方收集的信息
WOLF PLANET和WOLF PLANET支付實體可能會收集其他方在使用WOLF PLANET和支付服務時提供的關於您的信息（包括個人信息），或從其他渠道獲取信息，並與我們通過WOLF PLANET和支付服務收集的信息整合。我們不會控制、監督或回應提供您信息的第三方如何處理您的個人數據，任何發給我們的關於披露您的個人信息的信息請求應直接發送給此類第三方。
第三方服務。如果您將您的WOLF PLANET賬號與第三方服務（如Google、Facebook、微信）相關聯或使用第三方服務登錄您的WOLF PLANET賬號，相關第三方服務可能會向我們發送您在該服務中的註冊信息和個人資料信息。信息因服務而異，由相關服務控制或由您通過相關服務的隱私設置授權。 
第三方平台的交易賬戶信息。如果您將第三方交易賬戶與WOLF PLANET進行綁定，您將授權WOLF PLANET獲取您的第三方平台的交易賬戶相關信息（比如：經紀商信息、賬戶名、只讀密碼、交易數據等）。
第三方工具收集的用戶行為信息。比如通過第三方數據統計工具收集您在WOLF PLANET的點擊行為、瀏覽行為、頁面停留時長等信息。
 其他來源。在適用法律允許的情況下，我們可以從第三方服務提供商和/或合作夥伴處獲得您的額外信息，如人口統計數據或欺詐偵測信息，並將此類信息與我們所擁有的您的信息整合。例如，我們可以從服務供應商（身份驗證服務）處獲得背景調查信息結果（在必要時經您同意）或欺詐警告，用於防止欺詐和風險評估。我們可以通過合作夥伴獲得您的信息以及您在WOLF PLANET內外的活動信息。</p>
        
        <h1>2.我們如何使用所收集的信息</h1>
        <p>為了提供或者優化我們的服務，當你從我們的系統檢索所需內容時，使用數據會被儲存在服務器，如您的IP地址（匿名形式儲存）、網頁瀏覽器、互聯網供應商以及您檢索頁面時所在國家。
我們使用、存儲和處理您的信息（包括個人信息），以提供、了解、改進和發展WOLF PLANET，創建和維護一個受到信任的、更安全的環境，並遵守我們的法律義務。

2.1 提供、改進和發展WOLF PLANET
使您可以訪問和使用WOLF PLANET。
使您可以與其他會員交流。
運營、保護、改進和優化WOLF PLANET的體驗，如開展分析和研究。
提供客戶服務。

向您發送服務或支持信息，如更新、安全警報和賬號通知。
運營、保護、改進和優化WOLF PLANET的體驗，為您提供個性化與定製化體驗（如生成服務項目推薦或搜索結果排名）。根據您與WOLF PLANET的互動、您的搜索與預訂記錄、您的個人資料信息和偏好，以及您向WOLF PLANET提交的其他內容，我們會進行行為分析。
我們基於合法的改進WOLF PLANET和會員體驗的利益理由來處理此等信息，這對充分履行與您之間的合同很有必要。

2.2 創建和維護一個受到信任的以及更安全的環境
檢測和預防欺詐、垃圾郵件、濫用、安全事件及其他有害活動。
開展安全調查和風險評估。
驗證或認證您提供的信息或身份證明（如驗證您的居住設施地址或將您身份證明上的照片與您提供的其他照片進行比對）。
對照資料庫與其他信息源進行檢查，包括在適用法律允許的限度內以及必要時經您同意進行背景或警方調查。
遵守我們的法律義務。
解決我們與任何會員之間的任何爭議，並執行我們與第三方的約定。
執行我們的服務條款及其他政策。
基於您與WOLF PLANET的互動、您的個人資料信息和您向WOLF PLANET提交的其他內容以及從第三方獲得的信息，我們可進行與上述活動相關的行為分析。在少數情況下，如果自動流程檢測到某會員或活動被我們視為可能會對WOLF PLANET、其他會員或第三方構成安全或其他風險，自動流程可以限制或停止其對WOLF PLANET的訪問許可權。
我們基於合法的保護WOLF PLANET的利益理由來處理此等信息，以便衡量我們是否充分履行與您之間的合同，並遵守相關法律。

2.3 提供、個性化定製、評估和改進我們的廣告和營銷
根據您的偏好，向您發送優惠簡訊、營銷、廣告以及您可能感興趣的其他信息（包括與WOLF PLANET、合作夥伴活動及服務相關的信息）。
個性化定製、評估和改進我們的廣告。
管理推薦計劃、獎勵、調查、抽獎、競賽，或由WOLF PLANET或我們的第三方業務夥伴主辦或管理的其他優惠活動或事件。
根據您的特點和偏好（基於您提供給我們的信息、您與WOLF PLANET的互動、從第三方獲得信息以及您的搜索和預訂記錄）進行行為分析，以便向您發送優惠簡訊、營銷、廣告以及您可能感興趣的其他信息。
鑒於我們有合法利益開展營銷活動，為您提供您感興趣的產品或服務，我們將根據本條列出的目的處理您的個人信息。按照我們營銷信息中包含的取消訂閱說明或在您的WOLF PLANET賬號中更改您的通知設置，您可以選擇不接收我們的營銷信息。

2.4 支付數據控制人如何使用所收集的信息
使您可以訪問和使用支付服務。 
檢測和預防欺詐、垃圾郵件、濫用、安全事件及其他有害活動。
開展安全調查和風險評估。
對照資料庫與其他信息源進行檢查。
遵守法律義務（如反洗錢法規）。
執行支付條款及其他政策。
經您同意，向您發送優惠簡訊、營銷、廣告以及您可能感興趣的其他信息。
支付數據控制人基於合法的改進支付服務及其用戶體驗的利益理由來處理此等信息，這對充分履行與您之間的合同及遵守相關法律很有必要。</p>
        
        <h1>3.分享與披露</h1>
        <p>3.1 徵得您的同意
經您同意，我們可以按照您在同意時的指示分享您的信息（包括個人信息），如當您授權第三方應用軟體或網站訪問您的WOLF PLANET賬號時，或當您參與由WOLF PLANET合作夥伴或第三方開展的推廣活動時。

3.2 用戶之間分享
為方用戶之間的互動，我們可能需要按以下方式與其他用戶分享某些信息（包括個人信息）：
您與之分享和交流的用戶
當您通過我們的產品分享和交流信息時，其他用戶會看到您發送的內容。您的人際網路中的其他人也會看到您在我們產品中執行的操作。
公開信息可以被任何人看到 — 無論他們是否使用我們的產品，也無論他們是否有帳號。這些信息包括您的WOLF PLANET帳號；您與大眾分享的任何信息；您的 WOLF PLANET 公開資料中的信息；您在個人主頁或其他任何公開論壇上分享的內容。使用WOLF PLANET的其他用戶以及我們可以在我們產品內外向任何人提供此類公開信息或提供對此類信息的訪問權，包括通過其他WOLF PLANET旗下產品、搜索結果或者工具和 API 來提供。公開信息還可以通過搜索引擎、API、應用、網站和集成我們產品的其他服務等第三方服務進行查看、訪問、再次分享或下載。
他人分享或再次分享有關您的內容
如果其他人可以看到您在我們產品中的活動，則他們也可以通過我們的產品或其他途徑與他人分享這些內容。

其他用戶還可以使用我們的產品來創建有關您的內容，並進行分享。如果您對於他人在我們產品中分享的與您相關的信息感到不安，可以了解如何舉報該內容

3.3 個人資料及其他公開信息
您可以在WOLF PLANET上發布向一般公眾公開的信息（包括個人信息），例如：
向其他人公開您的公開個人資料頁面中的內容（例如您的描述和城市）。
向公眾開放公開服務項目頁面，包括如下信息：居住設施或體驗的大致地理位置（所處的街區和城市）或準確位置（經您同意）、公開個人頭像及您選擇分享的任何其他信息。
如果您在社區、論壇、博客或社交媒體發布內容，或使用WOLF PLANET上的類似功能，相關內容向公眾開放。
根據我們推廣WOLF PLANET的合法利益，我們可能會在WOLF PLANET商業合作夥伴運營的網站上通過使用小工具或API等技術顯示部分WOLF PLANET的內容。
您在WOLF PLANET上公開分享的信息可能通過第三方搜索引擎編入索引。我們不會控制第三方搜索引擎的實際做法，他們可能會使用包含您的過時信息的緩存。

3.4 遵守法律，回應法律要求，防止傷害以及保護我們的權利
在法律要求、允許的相應限度內或有合理必要，WOLF PLANET和WOLF PLANET支付實體可以向法院、執法機關、政府機關或授權第三方披露您的信息（包括個人信息），以：（i）遵守法律義務； （ii）遵守法律程序及回應針對WOLF PLANET提起的索賠；（iii）就可能會使我們、您或任何其他用戶面臨法律責任的犯罪調查、指稱或涉嫌違法活動或任何其他活動，回應已驗證的相關請求，（iv）執行或管理我們的服務條款、支付條款或與會員的其他協議，或（v）保護WOLF PLANET及其員工、會員或公眾會員的權利、財產或人身安全 
為了遵守我們的法律義務、為了保護您或他人的切身利益或者為了我們或第三方在保持WOLF PLANET安全、預防傷害或犯罪、行使或捍衛合法權利或防止損害等方面的正當利益，可能需要進行這些披露。
在恰當的情況下，我們會試圖將法律要求告知會員，除非：（i）法律程序、我們收到的法院命令或適用法律禁止通知；或（ii）我們認為發出通知可能會毫無意義、無效，會對個人或團體帶來損害或者人身傷害的風險，或對WOLF PLANET的財產、會員和WOLF PLANET產生或增加欺詐的風險（合稱為「風險情景」）。在我們因以上原因遵守法律要求未發出通知的情況下，如果我們善意地確認我們採取該行為不再為法律所禁止且不適用風險情景，我們將試圖在事後通知會員相關請求。

3.5 服務提供商
WOLF PLANET和WOLF PLANET支付實體使用各類第三方服務提供商幫助我們提供與WOLF PLANET及支付服務有關的服務。服務提供商可能位於歐洲經濟區（「EEA」）以內或以外。
例如，服務提供商可以幫助我們：（i）驗證或認證您的身份，（ii）對照公共資料庫檢查信息，（iii）幫助我們進行背景調查、警方調查、欺詐預防和風險評估，（iv）產品開發、維護和調試，（v）允許通過第三方平台和軟體工具（例如通過與我們的API整合）提供WOLF PLANET服務，或（vi）提供客戶服務、廣告或支付服務。為代表我們執行這些任務，此類服務提供商對您的信息擁有有限的訪問權，且有合同義務保護此類信息並僅以符合本《隱私政策》的方式使用您的信息。
WOLF PLANET和WOLF PLANET支付實體將需要分享您的信息（包括個人信息），以確保充分履行我們與您之間的協議。

3.6 社交媒體
在適用法律允許的情況下，我們可能會使用您的某些有限的個人信息（例如您的電子郵件地址）對其進行散列並與社交媒體平台（如Facebook或Google）共享，以產生潛在客戶，為我們的平台吸引訪問流量或推廣我們的產品和服務或WOLF PLANET。此等處理活動是基於我們進行營銷活動的合法利益，以便為您提供您可能感興趣的產品或服務。 
我們與之分享您的個人數據的社交媒體平台不受WOLF PLANET的控制或監督。因此，有關您的社交媒體平台服務提供商如何處理您的個人數據的任何問題均應直接提給此類提供商。
請注意，您可以隨時聯繫我們，要求WOLF PLANET停止為實現這些直接營銷目的而處理您的數據。

3.7 代收代繳佔用稅
在WOLF PLANET按照服務條款「稅費」部分所述促使、要求代收代繳佔用稅的司法管轄區，在適用法律允許的情況下，服務提供者和服務接受者明確授予我們許可，向相關稅務機關披露服務提供者和服務接受者的數據以及與他們或其交易相關的其他信息，包括 但不限於服務提供者和服務接受者的姓名、交易日期和金額，稅務識別號，服務提供者從服務接受者處收到（或應收）的稅款，以及聯繫信息，無需另行通知。

3.8 在政府部門登記
在WOLF PLANET根據當地法律促使或要求服務提供者通過WOLF PLANET與當地政府部門登記、通知、獲得許可或執照申請的司法管轄區域內，我們可能會在申請流程期間和之後定期（如適用）與相關機構共享參與其中的服務提供者的信息，例如服務提供者的全名和聯繫方式、稅務識別號、服務項目詳情等。

3.9 業務轉移
如果WOLF PLANET從事或涉及任何合併、收購、重組、資產出售、破產或者資不抵債的事件，那麼我們可以出售、轉讓或分享我們的部分或全部資產，包括與此類交易或設想的此類交易(如盡職調查)有關的您的信息。在此情況下，我們會在轉移您的個人信息且令其遵守不同隱私政策之前通知您。

3.10匯總信息
出於遵守法規、行業與市場分析、受眾統計歸類、營銷與廣告以及其他業務目的，我們也會分享匯總信息（關於我們用戶的合併信息，此類信息不再識別或指向某位個人用戶）和其他匿名信息。</p>
        
        <h1>4.其他重要信息</h1>
        <p>4.1 分析您的通信
我們可以審核、瀏覽或者分析您在WOLF PLANET上的通信，用於欺詐防範、風險評估、監管合規、調查、產品開發、研究與客戶支持。例如，在欺詐防範中，我們可以審查和分析信息，隱藏聯繫信息和指向其他網站的信息。有時，我們也會為了調試、改進和擴大產品供應而瀏覽、審查或分析信息。在合理可行的情況下，我們也會採用自動化的方式審查或分析信息。但是，我們可能不時需要採用手動方式審查一些通信（例如用於欺詐調查和客戶支持）或訪問和改進這些自動化工具的功能。我們不會為向您發送第三方營銷信息而審查、瀏覽或分析您的通信，也不會出售對這些通信的審查或分析。
這些活動的實施基於WOLF PLANET確保遵守適用法律和我們的條款、防止欺詐、促進安全以及改善和確保我們充分履行服務的合法利益。

4.2 關聯第三方賬號
您可以將您的WOLF PLANET賬號與第三方社交網站賬號相關聯。您在這些第三方網站上的聯繫人稱為「好友」。您在創建關聯時：
您通過關聯賬號向我們提供的一些信息可能會在您的WOLF PLANET賬號個人資料中發布；
您在WOLF PLANET上的活動可能會向您在WOLF PLANET和/或第三方網站上的好友顯示；

您的WOLF PLANET公開個人資料中可能包含指向您在第三方社交網站上公開個人資料的鏈接；
其他WOLF PLANET用戶可能能夠看到您與他們擁有的共同好友，或者您是他們好友的好友（如適用）；
您通過關聯賬號向我們提供的一些信息可能會被存儲、處理和傳輸，用於欺詐防範和風險評估；以及
對於您通過此類鏈接向WOLF PLANET提供的信息，其發布與顯示取決於您在WOLF PLANET和第三方網站上的設置與授權。
我們只會在必要的限度內從關聯的第三方賬號收集您的信息，以確保充分履行我們與您之間的協議，或確保我們遵守適用法律，或經您同意。</p>
        
        <h1>5.第三方合作夥伴與整合</h1>
        <p>WOLF PLANET可能包含指向第三方網站或服務的鏈接，如第三方整合、合作品牌服務或第三方品牌服務（「第三方合作夥伴」）。WOLF PLANET並不擁有或控制該等第三方合作夥伴，在您與其互動時，您可能直接向第三方合作夥伴、WOLF PLANET或同時向二者提供信息。關於信息的收集、使用和披露，該等第三方合作夥伴擁有自己的規則。我們希望您查看所訪問的其他網站的隱私政策。</p>
        
        <h1>6.您的權利</h1>
        <p>您可以聯繫我們，在相關WOLF PLANET數據控制人和支付數據控制人適用之前行使本條所述的任何權利。請注意，在對您的請求採取進一步行動之前，我們可能會要求您驗證您的身份。
        
6.1 管理您的信息
您可以通過您的賬號設置訪問和更新您的一些信息。如果您已選擇將您的WOLF PLANET賬號連接至第三方應用程序（如Facebook或Google），則可以通過更改賬號設置來更改您的設置並刪除該應用程序的許可權。您有責任及時更新您的個人信息。

6.2 不準確或不完整的信息
您有權要求我們更正您的不準確或不完整的個人信息（以及您無法在您的WOLF PLANET賬號中自行更新的信息）。

6.3 數據訪問與轉移
在某些司法管轄區，適用法律可使得您有權要求獲得我們所持有的您的個人信息的副本。您也可能有權要求以結構化、通用、機器可讀的格式獲得我們所持有的您的個人信息的副本，並/或要求我們將此等信息傳輸給其他服務提供商（在技術可行的情況下）。

6.4 數據保留與刪除
通常，我們只在履行您與我們之間的合同並遵守我們的法律義務的必要時間段內保留您的個人信息。如果您不再希望我們使用您的信息來為您提供WOLF PLANET，您可以要求我們刪除您的個人信息並關閉您的WOLF PLANET賬號。請注意，如果您申請刪除您的個人信息：
我們可能會保留您的一些個人信息，以符合我們的合法商業利益，如欺詐偵測和預防以及提高安全性。例如，如果我們因欺詐或安全原因停用了WOLF PLANET賬號，則我們可能會保留該WOLF PLANET賬號的某些信息，以防止該會員將來再次創建新的WOLF PLANET賬號。
為了遵守我們的法律義務，我們可能會保留並使用您的個人信息。例如，WOLF PLANET和WOLF PLANET支付實體可能會為稅務、法律報告及審計義務之目的保留您的一些信息。
即使您的WOLF PLANET賬號被註銷，您與他人分享的信息仍可以在WOLF PLANET上公開顯示。但您對這些信息的歸屬信息將被刪除。此外，您的信息的某些副本（如登錄記錄）可能會保留在我們的資料庫中，但會與個人標識符區分開來。
由於我們會維護WOLF PLANET以防止意外或惡意的損失和破壞，您的個人信息的殘留副本可能不會在有限的時間內從我們的備份系統中刪除。

6.5 撤銷同意和處理限制
如果您已同意WOLF PLANET處理您的個人信息，您可以隨時通過更改您的賬號設置或向WOLF PLANET發送信息來撤銷您的同意，同時說明您要撤銷哪一項同意。請注意，撤銷您的同意不會影響任何在此撤銷之前依據此類同意的處理活動的合法性。此外，在某些司法管轄區，適用法律可能會賦予您限制我們使用您個人信息的方式的權利，具體來說是（i）您對您的個人信息的準確性提出質疑；（ii）處理是非法的，且您反對刪除您的個人信息；（iii）我們不再需要您的個人信息用於處理目的，但您需要該信息用於有關設立、行使或辯護法律索賠的信息；或（iv）您反對根據第6.6條進行的處理，並反對等待驗證WOLF PLANET的合法利益是否會凌駕於您自己的利益。

6.6 反對處理
在某些司法管轄區，適用法律可授權您要求WOLF PLANET和WOLF PLANET支付實體不為了某些特定目的（包括行為分析）處理您的個人信息，而這些處理是基於合法利益。如果您反對這樣的處理，WOLF PLANET和/或WOLF PLANET支付實體將不再為這些目的處理您的個人信息，除非我們可以證明這種處理有令人信服的合理理由，或這種處理是設立、行使或捍衛法律權利的必要條件。
如果您的個人信息是為了直接營銷目的而處理的，您可以隨時要求WOLF PLANET停止為實現這些直接營銷目的而處理您的數據。

6.7 提出投訴
您有權向有關數據保護機構就WOLF PLANET和WOLF PLANET支付實體的數據處理活動提出投訴。</p>
        
        <h1>7. 全球運營</h1>
        <p>為方便我們的全球運營，WOLF PLANET和WOLF PLANET支付實體可在我們的企業集團公司內部或與服務提供商轉移、存儲和處理您的信息。這些國家/地區的法律或許與您居住地所適用的法律不同。例如，為本《隱私政策》的目的，在EEA境內收集的信息可以向EEA境外轉移，或在EEA境外存儲和處理。在我們在EEA境外傳輸、存儲及處理的個人信息的情況下，我們已確保採取了適當的保護措施，以保證充分的數據保護。</p>
        
        <h1>8.安全</h1>
        <p>我們將持續實施和更新管理、技術和物理安全措施，保護您的信息不受未經授權的訪問、損失、破壞或變更。我們用來保護您的信息的一些安全措施是防火牆和數據加密以及信息訪問控制。如果您知道或有理由相信您的WOLF PLANET賬號信息已丟失、被盜用、被挪用或遭到其他方式入侵，或者出現任何實際或懷疑盜用您的WOLF PLANET賬號的情況，請按照以下「聯繫我們」一條的說明聯繫我們。</p>
        
        <h1>9.本《隱私政策》的變更</h1>
        <p>WOLF PLANET保留隨時根據本條規定修改本《隱私政策》的權利。如果我們對本《隱私政策》做出變更，我們將在WOLF PLANET上發布變更後的《隱私政策》，並更新《隱私政策》頂端的「最後更新」日期。我們還會在其生效日期前至少三十（30）天向您發送關於變更的郵件通知。如果您不同意變更後的《隱私政策》，您可以註銷您的賬號。如果您未在變更後的《隱私政策》生效前註銷您的賬號，您對WOLF PLANET的繼續訪問或使用將受變更後的《隱私政策》的約束。</p>
        
        <h1>10.聯繫我們</h1>
        <p>如果您對本《隱私政策》或WOLF PLANET的信息處理方法有任何問題或意見，您可以通過App的在線客服與我們聯繫，或通過WOLF PLANET官方提供的各種聯繫方式與我們聯繫，WOLF PLANET將給予您幫助。</p>


        <h1>狼財科技（香港）有限公司</h1>
        
        
        `,
    };

    return (
      <div
        dangerouslySetInnerHTML={
          router.locale === 'en' ? descriptionEn : descriptionCn
        }
        className={router.locale === 'en' ? styles.myClassEn : styles.myClassCn}
      />
    );
  };

  return (
    <>
      <div className={styles.container}>
        <Stack className={styles.content}>
          <div
            style={{
              maxWidth: 706.667,
              textAlign: 'start',
              paddingLeft: isMobile ? 0 : 4,
              marginBottom: -30,
            }}>
            {router.locale === 'en' ? (
              <>
                <Heading
                  variant={isMobile ? 1 : 10}
                  color="#F2F3F7"
                  style={{ lineHeight: 1 }}>
                  {DummyDataEn.headline}
                </Heading>
                <Heading
                  variant={3}
                  color="#F2F3F7"
                  style={{ lineHeight: 1.5, marginTop: 25 }}>
                  Update date: {DummyDataEn.updateYear}-
                  {DummyDataEn.updateMonth}-{DummyDataEn.updateDay}
                </Heading>
                <Heading
                  variant={3}
                  color="#F2F3F7"
                  style={{ lineHeight: 1.5, marginTop: 10 }}>
                  Effective date: {DummyDataEn.effectiveYear}-
                  {DummyDataEn.effectiveMonth}-{DummyDataEn.effectiveDay}
                </Heading>
              </>
            ) : (
              <>
                <BodyBold
                  variant={7}
                  color="#F2F3F7"
                  style={{ lineHeight: 1.5 }}>
                  {DummyData.headline}
                </BodyBold>
                <BodyBold
                  variant={1}
                  color="#F2F3F7"
                  style={{ lineHeight: 1.5, marginTop: 25 }}>
                  更新日期：{DummyData.updateYear} 年 {DummyData.updateMonth} 月{' '}
                  {DummyData.updateDay} 日
                </BodyBold>
                <BodyBold
                  variant={1}
                  color="#F2F3F7"
                  style={{ lineHeight: 1.5, marginTop: 10 }}>
                  生效日期：{DummyData.effectiveYear} 年{' '}
                  {DummyData.effectiveMonth} 月 {DummyData.effectiveDay} 日
                </BodyBold>
              </>
            )}
          </div>
          {DisplayRichText()}
        </Stack>
      </div>
    </>
  );
};

export default PrivacyPolicy;
