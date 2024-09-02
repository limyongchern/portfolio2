import { Flex, Stack } from '@mantine/core';
import { useRouter } from 'next/router';
import styles from './index.module.scss';

import { Body, BodyBold, BodyDmsans, Heading } from 'components/typography';

import { useEffect, useState } from 'react';

const DummyData = {
  headline: '隐私政策',
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
        
        <h2>WOLF PLANET TECHNOLOGY (HK) CO., LIMITED</h2>
        
        
        `,
    };
    const descriptionCn = {
      __html: `
      <p> </p>
      <p>感谢您使用WOLF PLANET!
      
 本系统高度重视保护用户的个人信息及隠私权，此项内容对于我们至关重要。本《隐私政策》说明了我们如何收集、使用、处理和披露您的信息,包括与您访问和使用WOLF PLANET及支付服务相关的个人信息。
该隐私协议只针对我们平台及其子页面，不适用于任何第三方网站。
建议您在使用我们的产品或服务前，仔细阅读并了解本《隐私协议》。 若您使⽤我们的系统即表示您确认已了解本协定内容。如果您通过链接进⼊到第三方网站网页，请重新查看对应网站的隐私协议并了解其处理您资料资料的方式。
如果本《隐私政策》中有未定义的术语（如「服务项目」或「WOLF PLANET」），其定义和我们在服务条款中的定义一致。
在本政策中，「WOLF PLANET」、「我们」或「我们的」指本《隐私政策》下对您的信息负责的WOLF PLANET公司。</p>
        
        <h1>1. 我们收集的信息类型</h1>
        <p>我们主要收集三类信息。

1.1 您向我们提供的信息
使用WOLF PLANET的必要信息 
当您使用WOLF PLANET时，我们要求您提供并收集以下您的个人信息。此等信息对于充分履行您和我们之间的合同很有必要，并使得我们能够遵守我们的法律义务。没有此等信息，我们可能无法向您提供您所要求的全部服务。 

1.1.1 账号信息 在您注册WOLF PLANET账号时，我们要求您提供用户昵称、手机号码、电子邮件地址、密码、头像等信息。 身份验证信息。为帮助创建和维护一个受到信任的环境，我们可能会收集身份验证信息（如适用法律允许的政府颁发的身份证照片、护照、国民身份证或驾照）或其他验证信息。 支付信息。为使用WOLF PLANET的某些功能（例如订阅服务项目），我们可能会要求您提供某些财务信息（如您的银行账号或信用卡信息），以便推进支付流程。 与WOLF PLANET和其他会员的通信。在您与WOLF PLANET交流或通过WOLF PLANET与其他会员交流时，我们会收集您的通信信息以及您选择提供的任何信息。 

1.1.2 您选择向我们提供的信息 您可以选择向我们提供额外的个人信息，以便在使用WOLF PLANET时获得更好的用户体验。此等额外信息将基于您的自愿同意而处理。 额外个人资料信息。您可选择提供额外个人资料信息，作为您个人资料的一部分（例如姓名、性别、首选语言、城市、出生日期、血型及个人描述）。如您在账号设置中所示，部分此等个人信息是您公开个人资料页的一部分，将向其他人公开。 交易风控信息。您可选择提供设置账户交易时使用的风控策略。 其他信息。您还可以选择在填写表格、进行搜索、更新或添加WOLF PLANET账号信息、在社区论坛发布内容、参与优惠活动或使用WOLF PLANET的其他功能时，向我们提供其他信息。 

1.1.3 使用支付服务的必要信息 支付数据控制人需要收集以下信息。此等信息对于充分履行与您的合同以及遵守相关法律（如反洗钱法规）很有必要。没有此等信息，您将无法使用支付服务。 支付信息。在您使用支付服务时，支付数据控制人要求提供某些财务信息（如您的银行账号或信用卡信息）以便处理支付并遵守相关法律。 身份验证和其他信息。如果您是服务提供者，支付数据控制人可能要求提供身份验证信息（如政府颁发的身份证照片、护照、国民身份证或驾照）或其他验证信息、您的出生日期、地址、电子邮件地址、电话及其他信息，以便验证您的身份、向您提供支付服务并遵守相关法律。 

1.2 您使用WOLF PLANET和支付服务时，我们自动收集的信息 在您使用WOLF PLANET和支付服务时，我们会自动收集关于您所使用的服务以及如何使用相关服务的信息，包括个人信息。 基于我们合法的利益理由以提供和改进WOLF PLANET和支付服务的功能，此等信息对于充分履行您和我们之间的合同很有必要，使得我们能够遵守法律义务。 地理位置信息。当您使用WOLF PLANET的某些功能时，我们可能会收集您的精确或大致位置信息，此等信息通过您的IP地址或移动设备的GPS数据来确定，以便为您提供更好的用户体验。多数移动设备允许您在设备的设置菜单中控制或禁用应用对位置服务的使用。即使当您不使用应用时，如果您的设置或设备许可权允许此等连接开启，WOLF PLANET仍可能会收集此等信息。 使用信息。我们会收集您与WOLF PLANET的互动信息，如您查看的页面或其他内容、您搜索的服务项目以及您在WOLF PLANET上的其他活动。 登录数据和设备信息。即使您未创建或登录WOLF PLANET账号，当您访问并使用WOLF PLANET时，我们也会自动收集登录数据和设备信息。此等信息包括但不限于：您使用WOLF PLANET（包括指向第三方应用的链接）的详细信息、IP地址、访问日期和次数、硬体和软体信息、设备信息，设备事件信息、唯一识别符、崩溃数据、cookie数据以及您在使用WOLF PLANET前后查看或接触过的页面。 麦克风/相机信息。为了提供个性化服务及改进服务质量，或者为您推荐更优质或更适合的服务，您可以选择使用麦克风/相机设备来进行语音输入（例如：语音消息、语音搜索）或拍照上传，在使用过程中我们需要收集您的语音/照片内容并进行必要的处理。

Cookies及类似技术。 
为优化我们的应用程式，我们会使用Cookies(小型文本文件)。当您浏览我们的应用程式时，我们会以"Cookies"的形式将某些信息存入您的计算机或者其他终端设备。 Cookies能够以多种方式帮助我们。例如提高应用程式的安全性，确定应用程式使用频率和浏览人数，分析用户如何使用我们的应用程式。 会话Cookies：当您使用您设置的用户名和密码登录应用程式时，我们会使用「会话Cookies」。会话Cookies会让应用程式在您的访问期间识别您，而当您结束浏览我们的应用程式后(浏览器窗口关闭)，这些会话Cookies就会被删除。 持久Cookies: 我们也会使用持久Cookies。持久Cookies的使用可让我们识别重访应用程式的用户，让我们不断地改善产品并为您提供更好的服务体验。这些持久Cookies不包含任何可识别个人身份信息。存储在Cookies的信息在任何时候都不会与您的个人身份信息匹配到一起。 
Log-In Cookies: 当您使用「在此计算机自动登录」的功能时，我们会使用持久Cookies。在这种情况下，Cookies文件将永久的保存在您的计算机硬碟上，除非您使用浏览器或操作系统软体手工将其删除。当您再次使用该网站时，网站就会通过读取这些 Cookies ，得知你的相关信息，就可以做出自动登录的动作。这些Cookies包含一个ID号。您的登录资料和您的密码不会被保存。 
Affiliate Cookies: 当您通过WOLF PLANET合作伙伴的广告位置点击进入访问我们的应用程式时，我们会使用Cookies。这些Cookies出于为WOLF PLANET合作伙伴开具账单的目的而使用，且不包含任何识别您个人身份的信息。在账单明细表上，邀请您注册WOLF PLANET的合作伙伴看到的信息仅以匿名形式展现；合作伙伴无法够根据所给信息追踪到您本人。 异议权：您可通过浏览器禁止保存Cookies，利用Cookies限制某些网站或者设置您的浏览器在接收到Cookies时予以通知的途径，以达到阻止Cookies的使用和拒绝创建使用配置文件的目的。您还可随时从硬碟中清除这些Cookies，但请注意，如果您拒绝了会话Cookies，您将可能无法使用我们的平台。 
支付交易信息。 WOLF PLANET支付实体会收集您在WOLF PLANET上的支付交易信息，包括所使用的支付工具、日期和时间、支付金额、支付工具有效日期和账单邮政编码、PayPal电子邮件地址、IBAN信息、您的地址及其他相关交易详情。此等信息对于充分履行您和我们之间的合同、提供支付服务很有必要。 

1.3 我们通过第三方收集的信息 WOLF PLANET和WOLF PLANET支付实体可能会收集其他方在使用WOLF PLANET和支付服务时提供的关于您的信息（包括个人信息），或从其他渠道获取信息，并与我们通过WOLF PLANET和支付服务收集的信息整合。我们不会控制、监督或回应提供您信息的第三方如何处理您的个人数据，任何发给我们的关于披露您的个人信息的信息请求应直接发送给此类第三方。 第三方服务。如果您将您的WOLF PLANET账号与第三方服务（如Google、Facebook、微信）相关联或使用第三方服务登录您的WOLF PLANET账号，相关第三方服务可能会向我们发送您在该服务中的注册信息和个人资料信息。信息因服务而异，由相关服务控制或由您通过相关服务的隐私设置授权。 
第三方平台的交易账户信息。如果您将第三方交易账户与WOLF PLANET进行绑定，您将授权WOLF PLANET获取您的第三方平台的交易账户相关信息（比如：经纪商信息、账户名、只读密码、交易数据等）。 第三方工具收集的用户行为信息。比如通过第三方数据统计工具收集您在WOLF PLANET的点击行为、浏览行为、页面停留时长等信息。 其他来源。在适用法律允许的情况下，我们可以从第三方服务提供商和/或合作伙伴处获得您的额外信息，如人口统计数据或欺诈侦测信息，并将此类信息与我们所拥有的您的信息整合。例如，我们可以从服务供应商（身份验证服务）处获得背景调查信息结果（在必要时经您同意）或欺诈警告，用于防止欺诈和风险评估。我们可以通过合作伙伴获得您的信息以及您在WOLF PLANET内外的活动信息。</p>
     
        <h1>2.我们如何使用所收集的信息</h1>
        <p>为了提供或者优化我们的服务，当你从我们的系统检索所需内容时，使用数据会被储存在服务器，如您的IP地址（匿名形式储存）、网页浏览器、互联网供应商以及您检索页面时所在国家。
我们使用、存储和处理您的信息（包括个人信息），以提供、了解、改进和发展WOLF PLANET，创建和维护一个受到信任的、更安全的环境，并遵守我们的法律义务。

2.1 提供、改进和发展WOLF PLANET
使您可以访问和使用WOLF PLANET。
使您可以与其他会员交流。
运营、保护、改进和优化WOLF PLANET的体验，如开展分析和研究。
提供客户服务。

向您发送服务或支持信息，如更新、安全警报和账号通知。
运营、保护、改进和优化WOLF PLANET的体验，为您提供个性化与定制化体验（如生成服务项目推荐或搜索结果排名）。根据您与WOLF PLANET的互动、您的搜索与预订记录、您的个人资料信息和偏好，以及您向WOLF PLANET提交的其他内容，我们会进行行为分析。
我们基于合法的改进WOLF PLANET和会员体验的利益理由来处理此等信息，这对充分履行与您之间的合同很有必要。

2.2 创建和维护一个受到信任的以及更安全的环境
检测和预防欺诈、垃圾邮件、滥用、安全事件及其他有害活动。
开展安全调查和风险评估。
验证或认证您提供的信息或身份证明（如验证您的居住设施地址或将您身份证明上的照片与您提供的其他照片进行比对）。
对照资料库与其他信息源进行检查，包括在适用法律允许的限度内以及必要时经您同意进行背景或警方调查。
遵守我们的法律义务。
解决我们与任何会员之间的任何争议，并执行我们与第三方的约定。
执行我们的服务条款及其他政策。
基于您与WOLF PLANET的互动、您的个人资料信息和您向WOLF PLANET提交的其他内容以及从第三方获得的信息，我们可进行与上述活动相关的行为分析。在少数情况下，如果自动流程检测到某会员或活动被我们视为可能会对WOLF PLANET、其他会员或第三方构成安全或其他风险，自动流程可以限制或停止其对WOLF PLANET的访问许可权。
我们基于合法的保护WOLF PLANET的利益理由来处理此等信息，以便衡量我们是否充分履行与您之间的合同，并遵守相关法律。

2.3 提供、个性化定制、评估和改进我们的广告和营销
根据您的偏好，向您发送优惠简讯、营销、广告以及您可能感兴趣的其他信息（包括与WOLF PLANET、合作伙伴活动及服务相关的信息）。
个性化定制、评估和改进我们的广告。
管理推荐计划、奖励、调查、抽奖、竞赛，或由WOLF PLANET或我们的第三方业务伙伴主办或管理的其他优惠活动或事件。
根据您的特点和偏好（基于您提供给我们的信息、您与WOLF PLANET的互动、从第三方获得信息以及您的搜索和预订记录）进行行为分析，以便向您发送优惠简讯、营销、广告以及您可能感兴趣的其他信息。
鉴于我们有合法利益开展营销活动，为您提供您感兴趣的产品或服务，我们将根据本条列出的目的处理您的个人信息。按照我们营销信息中包含的取消订阅说明或在您的WOLF PLANET账号中更改您的通知设置，您可以选择不接收我们的营销信息。

2.4 支付数据控制人如何使用所收集的信息
使您可以访问和使用支付服务。
检测和预防欺诈、垃圾邮件、滥用、安全事件及其他有害活动。
开展安全调查和风险评估。
对照资料库与其他信息源进行检查。
遵守法律义务（如反洗钱法规）。
执行支付条款及其他政策。
经您同意，向您发送优惠简讯、营销、广告以及您可能感兴趣的其他信息。
支付数据控制人基于合法的改进支付服务及其用户体验的利益理由来处理此等信息，这对充分履行与您之间的合同及遵守相关法律很有必要。</p>
        
        <h1>3.分享与披露</h1>
        <p>3.1 征得您的同意
经您同意，我们可以按照您在同意时的指示分享您的信息（包括个人信息），如当您授权第三方应用软体或网站访问您的WOLF PLANET账号时，或当您参与由WOLF PLANET合作伙伴或第三方开展的推广活动时。

3.2 用户之间分享
为方用户之间的互动，我们可能需要按以下方式与其他用户分享某些信息（包括个人信息）：
您与之分享和交流的用户
当您通过我们的产品分享和交流信息时，其他用户会看到您发送的内容。您的人际网路中的其他人也会看到您在我们产品中执行的操作。
公开信息可以被任何人看到 — 无论他们是否使用我们的产品，也无论他们是否有帐号。这些信息包括您的WOLF PLANET帐号；您与大众分享的任何信息；您的 WOLF PLANET 公开资料中的信息；您在个人主页或其他任何公开论坛上分享的内容。使用WOLF PLANET的其他用户以及我们可以在我们产品内外向任何人提供此类公开信息或提供对此类信息的访问权，包括通过其他WOLF PLANET旗下产品、搜索结果或者工具和 API 来提供。公开信息还可以通过搜索引擎、API、应用、网站和集成我们产品的其他服务等第三方服务进行查看、访问、再次分享或下载。
他人分享或再次分享有关您的内容
如果其他人可以看到您在我们产品中的活动，则他们也可以通过我们的产品或其他途径与他人分享这些内容。

其他用户还可以使用我们的产品来创建有关您的内容，并进行分享。如果您对于他人在我们产品中分享的与您相关的信息感到不安，可以了解如何举报该内容

3.3 个人资料及其他公开信息
您可以在WOLF PLANET上发布向一般公众公开的信息（包括个人信息），例如：
向其他人公开您的公开个人资料页面中的内容（例如您的描述和城市）。
向公众开放公开服务项目页面，包括如下信息：居住设施或体验的大致地理位置（所处的街区和城市）或准确位置（经您同意）、公开个人头像及您选择分享的任何其他信息。
如果您在社区、论坛、博客或社交媒体发布内容，或使用WOLF PLANET上的类似功能，相关内容向公众开放。
根据我们推广WOLF PLANET的合法利益，我们可能会在WOLF PLANET商业合作伙伴运营的网站上通过使用小工具或API等技术显示部分WOLF PLANET的内容。
您在WOLF PLANET上公开分享的信息可能通过第三方搜索引擎编入索引。我们不会控制第三方搜索引擎的实际做法，他们可能会使用包含您的过时信息的缓存。

3.4 遵守法律，回应法律要求，防止伤害以及保护我们的权利
在法律要求、允许的相应限度内或有合理必要，WOLF PLANET和WOLF PLANET支付实体可以向法院、执法机关、政府机关或授权第三方披露您的信息（包括个人信息），以：（i）遵守法律义务； （ii）遵守法律程序及回应针对WOLF PLANET提起的索赔；（iii）就可能会使我们、您或任何其他用户面临法律责任的犯罪调查、指称或涉嫌违法活动或任何其他活动，回应已验证的相关请求，（iv）执行或管理我们的服务条款、支付条款或与会员的其他协议，或（v）保护WOLF PLANET及其员工、会员或公众会员的权利、财产或人身安全
为了遵守我们的法律义务、为了保护您或他人的切身利益或者为了我们或第三方在保持WOLF PLANET安全、预防伤害或犯罪、行使或捍卫合法权利或防止损害等方面的正当利益，可能需要进行这些披露。
在恰当的情况下，我们会试图将法律要求告知会员，除非：（i）法律程序、我们收到的法院命令或适用法律禁止通知；或（ii）我们认为发出通知可能会毫无意义、无效，会对个人或团体带来损害或者人身伤害的风险，或对WOLF PLANET的财产、会员和WOLF PLANET产生或增加欺诈的风险（合称为「风险情景」）。在我们因以上原因遵守法律要求未发出通知的情况下，如果我们善意地确认我们采取该行为不再为法律所禁止且不适用风险情景，我们将试图在事后通知会员相关请求。

3.5 服务提供商
WOLF PLANET和WOLF PLANET支付实体使用各类第三方服务提供商帮助我们提供与WOLF PLANET及支付服务有关的服务。服务提供商可能位于欧洲经济区（「EEA」）以内或以外。
例如，服务提供商可以帮助我们：（i）验证或认证您的身份，（ii）对照公共资料库检查信息，（iii）帮助我们进行背景调查、警方调查、欺诈预防和风险评估，（iv）产品开发、维护和调试，（v）允许通过第三方平台和软体工具（例如通过与我们的API整合）提供WOLF PLANET服务，或（vi）提供客户服务、广告或支付服务。为代表我们执行这些任务，此类服务提供商对您的信息拥有有限的访问权，且有合同义务保护此类信息并仅以符合本《隐私政策》的方式使用您的信息。
WOLF PLANET和WOLF PLANET支付实体将需要分享您的信息（包括个人信息），以确保充分履行我们与您之间的协议。

3.6 社交媒体
在适用法律允许的情况下，我们可能会使用您的某些有限的个人信息（例如您的电子邮件地址）对其进行散列并与社交媒体平台（如Facebook或Google）共享，以产生潜在客户，为我们的平台吸引访问流量或推广我们的产品和服务或WOLF PLANET。此等处理活动是基于我们进行营销活动的合法利益，以便为您提供您可能感兴趣的产品或服务。
我们与之分享您的个人数据的社交媒体平台不受WOLF PLANET的控制或监督。因此，有关您的社交媒体平台服务提供商如何处理您的个人数据的任何问题均应直接提给此类提供商。
请注意，您可以随时联系我们，要求WOLF PLANET停止为实现这些直接营销目的而处理您的数据。

3.7 代收代缴占用税
在WOLF PLANET按照服务条款「税费」部分所述促使、要求代收代缴占用税的司法管辖区，在适用法律允许的情况下，服务提供者和服务接受者明确授予我们许可，向相关税务机关披露服务提供者和服务接受者的数据以及与他们或其交易相关的其他信息，包括但不限于服务提供者和服务接受者的姓名、交易日期和金额，税务识别号，服务提供者从服务接受者处收到（或应收）的税款，以及联系信息，无需另行通知。

3.8 在政府部门登记
在WOLF PLANET根据当地法律促使或要求服务提供者通过WOLF PLANET与当地政府部门登记、通知、获得许可或执照申请的司法管辖区域内，我们可能会在申请流程期间和之后定期（如适用）与相关机构共享参与其中的服务提供者的信息，例如服务提供者的全名和联系方式、税务识别号、服务项目详情等。

3.9 业务转移
如果WOLF PLANET从事或涉及任何合并、收购、重组、资产出售、破产或者资不抵债的事件，那么我们可以出售、转让或分享我们的部分或全部资产，包括与此类交易或设想的此类交易(如尽职调查)有关的您的信息。在此情况下，我们会在转移您的个人信息且令其遵守不同隐私政策之前通知您。

3.10汇总信息
出于遵守法规、行业与市场分析、受众统计归类、营销与广告以及其他业务目的，我们也会分享汇总信息（关于我们用户的合并信息，此类信息不再识别或指向某位个人用户）和其他匿名信息。</p>
        
        <h1>4.其他重要信息</h1>
        <p>4.1 分析您的通信
我们可以审核、浏览或者分析您在WOLF PLANET上的通信，用于欺诈防范、风险评估、监管合规、调查、产品开发、研究与客户支持。例如，在欺诈防范中，我们可以审查和分析信息，隐藏联系信息和指向其他网站的信息。有时，我们也会为了调试、改进和扩大产品供应而浏览、审查或分析信息。在合理可行的情况下，我们也会采用自动化的方式审查或分析信息。但是，我们可能不时需要采用手动方式审查一些通信（例如用于欺诈调查和客户支持）或访问和改进这些自动化工具的功能。我们不会为向您发送第三方营销信息而审查、浏览或分析您的通信，也不会出售对这些通信的审查或分析。
这些活动的实施基于WOLF PLANET确保遵守适用法律和我们的条款、防止欺诈、促进安全以及改善和确保我们充分履行服务的合法利益。

4.2 关联第三方账号
您可以将您的WOLF PLANET账号与第三方社交网站账号相关联。您在这些第三方网站上的联系人称为「好友」。您在创建关联时：
您通过关联账号向我们提供的一些信息可能会在您的WOLF PLANET账号个人资料中发布；
您在WOLF PLANET上的活动可能会向您在WOLF PLANET和/或第三方网站上的好友显示；

您的WOLF PLANET公开个人资料中可能包含指向您在第三方社交网站上公开个人资料的链接；
其他WOLF PLANET用户可能能够看到您与他们拥有的共同好友，或者您是他们好友的好友（如适用）；
您通过关联账号向我们提供的一些信息可能会被存储、处理和传输，用于欺诈防范和风险评估；以及
对于您通过此类链接向WOLF PLANET提供的信息，其发布与显示取决于您在WOLF PLANET和第三方网站上的设置与授权。
我们只会在必要的限度内从关联的第三方账号收集您的信息，以确保充分履行我们与您之间的协议，或确保我们遵守适用法律，或经您同意。</p>
        
        <h1>5.第三方合作伙伴与整合</h1>
        <p>WOLF PLANET可能包含指向第三方网站或服务的链接，如第三方整合、合作品牌服务或第三方品牌服务（「第三方合作伙伴」）。 WOLF PLANET并不拥有或控制该等第三方合作伙伴，在您与其互动时，您可能直接向第三方合作伙伴、WOLF PLANET或同时向二者提供信息。关于信息的收集、使用和披露，该等第三方合作伙伴拥有自己的规则。我们希望您查看所访问的其他网站的隐私政策。</p>
        
        <h1>6.您的权利</h1>
        <p>您可以联系我们，在相关WOLF PLANET数据控制人和支付数据控制人适用之前行使本条所述的任何权利。请注意，在对您的请求采取进一步行动之前，我们可能会要求您验证您的身份。

6.1 管理您的信息
您可以通过您的账号设置访问和更新您的一些信息。如果您已选择将您的WOLF PLANET账号连接至第三方应用程序（如Facebook或Google），则可以通过更改账号设置来更改您的设置并删除该应用程序的许可权。您有责任及时更新您的个人信息。

6.2 不准确或不完整的信息
您有权要求我们更正您的不准确或不完整的个人信息（以及您无法在您的WOLF PLANET账号中自行更新的信息）。

6.3 数据访问与转移
在某些司法管辖区，适用法律可使得您有权要求获得我们所持有的您的个人信息的副本。您也可能有权要求以结构化、通用、机器可读的格式获得我们所持有的您的个人信息的副本，并/或要求我们将此等信息传输给其他服务提供商（在技术可行的情况下）。

6.4 数据保留与删除
通常，我们只在履行您与我们之间的合同并遵守我们的法律义务的必要时间段内保留您的个人信息。如果您不再希望我们使用您的信息来为您提供WOLF PLANET，您可以要求我们删除您的个人信息并关闭您的WOLF PLANET账号。请注意，如果您申请删除您的个人信息：
我们可能会保留您的一些个人信息，以符合我们的合法商业利益，如欺诈侦测和预防以及提高安全性。例如，如果我们因欺诈或安全原因停用了WOLF PLANET账号，则我们可能会保留该WOLF PLANET账号的某些信息，以防止该会员将来再次创建新的WOLF PLANET账号。
为了遵守我们的法律义务，我们可能会保留并使用您的个人信息。例如，WOLF PLANET和WOLF PLANET支付实体可能会为税务、法律报告及审计义务之目的保留您的一些信息。
即使您的WOLF PLANET账号被注销，您与他人分享的信息仍可以在WOLF PLANET上公开显示。但您对这些信息的归属信息将被删除。此外，您的信息的某些副本（如登录记录）可能会保留在我们的资料库中，但会与个人标识符区分开来。
由于我们会维护WOLF PLANET以防止意外或恶意的损失和破坏，您的个人信息的残留副本可能不会在有限的时间内从我们的备份系统中删除。

6.5 撤销同意和处理限制
如果您已同意WOLF PLANET处理您的个人信息，您可以随时通过更改您的账号设置或向WOLF PLANET发送信息来撤销您的同意，同时说明您要撤销哪一项同意。请注意，撤销您的同意不会影响任何在此撤销之前依据此类同意的处理活动的合法性。此外，在某些司法管辖区，适用法律可能会赋予您限制我们使用您个人信息的方式的权利，具体来说是（i）您对您的个人信息的准确性提出质疑；（ii）处理是非法的，且您反对删除您的个人信息；（iii）我们不再需要您的个人信息用于处理目的，但您需要该信息用于有关设立、行使或辩护法律索赔的信息；或（iv）您反对根据第6.6条进行的处理，并反对等待验证WOLF PLANET的合法利益是否会凌驾于您自己的利益。

6.6 反对处理
在某些司法管辖区，适用法律可授权您要求WOLF PLANET和WOLF PLANET支付实体不为了某些特定目的（包括行为分析）处理您的个人信息，而这些处理是基于合法利益。如果您反对这样的处理，WOLF PLANET和/或WOLF PLANET支付实体将不再为这些目的处理您的个人信息，除非我们可以证明这种处理有令人信服的合理理由，或这种处理是设立、行使或捍卫法律权利的必要条件。

如果您的个人信息是为了直接营销目的而处理的，您可以随时要求WOLF PLANET停止为实现这些直接营销目的而处理您的数据。

6.7 提出投诉
您有权向有关数据保护机构就WOLF PLANET和WOLF PLANET支付实体的数据处理活动提出投诉。</p>
        
        <h1>7. 全球运营</h1>
        <p>为方便我们的全球运营，WOLF PLANET和WOLF PLANET支付实体可在我们的企业集团公司内部或与服务提供商转移、存储和处理您的信息。这些国家/地区的法律或许与您居住地所适用的法律不同。例如，为本《隐私政策》的目的，在EEA境内收集的信息可以向EEA境外转移，或在EEA境外存储和处理。在我们在EEA境外传输、存储及处理的个人信息的情况下，我们已确保采取了适当的保护措施，以保证充分的数据保护。</p>
        
        <h1>8.安全</h1>
        <p>我们将持续实施和更新管理、技术和物理安全措施，保护您的信息不受未经授权的访问、损失、破坏或变更。我们用来保护您的信息的一些安全措施是防火墙和数据加密以及信息访问控制。如果您知道或有理由相信您的WOLF PLANET账号信息已丢失、被盗用、被挪用或遭到其他方式入侵，或者出现任何实际或怀疑盗用您的WOLF PLANET账号的情况，请按照以下「联系我们」一条的说明联系我们。</p>
        
        <h1>9.本《隐私政策》的变更</h1>
        <p>WOLF PLANET保留随时根据本条规定修改本《隐私政策》的权利。如果我们对本《隐私政策》做出变更，我们将在WOLF PLANET上发布变更后的《隐私政策》，并更新《隐私政策》顶端的「最后更新」日期。我们还会在其生效日期前至少三十（30）天向您发送关于变更的邮件通知。如果您不同意变更后的《隐私政策》，您可以注销您的账号。如果您未在变更后的《隐私政策》生效前注销您的账号，您对WOLF PLANET的继续访问或使用将受变更后的《隐私政策》的约束。</p>
        
        <h1>10.联系我们</h1>
        <p>如果您对本《隐私政策》或WOLF PLANET的信息处理方法有任何问题或意见，您可以通过App的在线客服与我们联系，或通过WOLF PLANET官方提供的各种联系方式与我们联系，WOLF PLANET将给予您帮助。</p>


        <h2>狼财科技（香港）有限公司</h2>
        
        
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
