import { Flex, Stack } from '@mantine/core';
import { useRouter } from 'next/router';
import styles from './index.module.scss';

import { Body, BodyDmsans, BodyBold, Heading } from 'components/typography';

import { useEffect, useState } from 'react';

const DummyData = {
  headline: '用戶協議',
  date: '28/12/2024',
};

const DummyDataEn = {
  headline: 'WOLF PLANET USER AGREEMENT',
  date: '28/12/2024',
};

const TermsOfUse = () => {
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
      __html: `<h1>1. Basic community rules</h1>
      <p>WOLF PLANET increases returns on investment in the trading market and increases the proportion of profitable investors through the real-time follow-up transaction model. The WOLF PLANET community is oriented towards establishing investment strategies and sharing investment strategies and investment knowledge. Therefore, WOLF PLANET has formulated a set of basic community rules for users to be aware of.

Community information is only to provide reference information for investment, so that investment users can learn, share and interact with each other here. It does not constitute any investment advice or recommendation. Investment depends entirely on your personal independent thinking and decision-making. WOLF PLANET will not have any influence on the investment. assumes no responsibility for investment profits or losses.

1. The community provides a platform for traders and investors to communicate, so that investors can understand and choose traders they trust to follow.

2. Community information may be information provided by WOLF PLANET partners, financial institutions and users. WOLF PLANET does not guarantee the reliability and authenticity of the information. Therefore, the information publisher is only responsible for the legality of the content it publishes and does not We will not be held responsible for any profits or losses arising from investments made in this manner.</p>
        

        <h1>2. Community speech content regulations</h1>
        <p>The WOLF PLANET community mainly shares investment experience, investment strategies, research and market analysis and other related financial investment information. We hope that community users will actively speak and share, and participate in discussions on related content.</p>
        

        <h1>3. Community Weibo Management</h1>
        <p>In order to safeguard the legitimate rights and interests of the majority of WOLF PLANET users, provide a healthy and civilized community environment, and create a harmonious social atmosphere, in accordance with the "Decision of the Standing Committee of the National People's Congress on Maintaining Internet Security", "Internet Information Service Management Measures", "Internet User Account Name" Management Regulations" and other current laws and regulations, WOLF PLANET has clearly formulated various community violations and corresponding punishment guidelines.

1. Use uncivilized and unhealthy terms (insults, discrimination, obscene words, etc.) to carry out personal attacks, geographical attacks, ethnic discrimination, etc. Once discovered, the display will be restricted or deleted, and the user who posted the content will be given a warning depending on the severity of the case. Ban or deactivate account processing.

2. Publish information that violates current laws and regulations and endangers the security and legitimate rights and interests of users and WOLF PLANET. Once discovered, the display will be stopped or deleted, and the user who posted the information will be warned, banned or deactivated depending on the severity of the situation.

3. Those who publish spam information to damage the network environment, such as repeatedly posting irrelevant comments, spam advertisements, etc., causing interference to other users and being complained about, will be warned, banned, or have their accounts deactivated depending on the severity of the case.

4. Indiscriminate posting of advertising information, such as sales advertisements, consultation advertisements, stock websites, etc., will be immediately deleted, banned or account deactivated upon discovery.

5. Anyone who publishes obscene, pornographic, violent, superstitious and criminal information indiscriminately will be removed upon discovery, and the user who publishes the information will be banned or his account will be deactivated depending on the severity of the case.

6. Infringement of other people's legitimate rights and interests (rights of reputation, portrait rights, intellectual property rights, etc.), as well as dissemination of virus codes, hacking programs and other files and information that harm the rights and interests of third parties, and complaints are made against the user, once discovered, the user will be punished Ban and deactivate account processing.

7. User avatars, nicknames and personal profiles involving sensitive current affairs, reactionary and other content must be modified within a time limit; if they are not changed within the time limit, they will be banned or their accounts will be deactivated depending on the severity of the circumstances.

8. If a user’s account avatar, nickname, profile and speech infringe upon the reputation, portrait, privacy, intellectual property, business secrets and other legitimate rights and interests of others (including natural persons and legal persons), and are reported and complained by the parties concerned, the case will be determined based on the severity of the case. Restrict display, delete, warn, ban or deactivate account processing.

9. Repeated posting of the same comment content will be deleted immediately upon discovery, and the user who posted the content will be banned or have their account deactivated depending on the severity of the case.

10. Publish QQ accounts, QQ groups, WeChat public accounts, WeChat group accounts, WeChat QR codes, and marketing information such as third-party activity information, promotion information, sales information, etc. without the permission of WOLF PLANET. Once discovered, the user will be punished Ban and deactivate account processing.

This Code shall come into effect from the date of revision. Accounts that violate the WOLF PLANET community rules will be warned, banned, and deactivated as required. Banning is the main punishment mechanism in the WOLF PLANET community. Banned users cannot comment, forward, like, or modify personal information. They can only browse the web. After the ban period, they can return to normal. Depending on the severity of the case, banning punishment can be divided into banning time of 1 day, banning time of 7 days, banning time of 15 days or permanent banning.

If you have any questions or objections to the WOLF PLANET community penalty mechanism, you can contact WOLF PLANET to lodge a complaint.</p>
        

        <h1>4. Credibility of speech</h1>
        <p>All WOLF PLANET community users have the right to speak, and they only represent their personal positions. Investments are subject to your own independent judgment and decision-making. In the WOLF PLANET community, the comments made by the official account set by WOLF PLANET on issues related to WOLF PLANET's own products and technologies represent the official position of WOLF PLANET.</p>
        

        <h1>5. Copyright statement</h1>
        <p>If any attempt is made to reprint or quote the content of the WOLF PLANET community to other places for non-commercial, non-profit, and non-advertising purposes, the original source of the content must be indicated. If infringement is involved, the copyright owner can file a complaint to WOLF PLANET and provide relevant information proving copyright, and WOLF PLANET will handle it after verification.</p>


        <h1>Langcai Technology (Hong Kong) Co., Ltd.</h1>
        
        
        `,
    };
    const descriptionCn = {
      __html: `
      <h1>一、社區基本守則 </h1>
      <p>WOLF PLANET通過即時跟隨交易的模式，為交易市場上的投資增加回報，提升盈利投資人數比例。 WOLF PLANET社區是以建立投資策略為導向，分享投資策略和投資知識。因此，WOLF PLANET制定了一套社區基本守則，請廣大用戶知悉。

社區資訊只是為了給投資提供參考資訊，讓投資用戶在此可以相互學習、分享、互動，並不構成任何投資建議和推薦，投資完全取決於您的個人獨立思考和決策，WOLF PLANET並不會對投資的盈利虧損承擔任何責任。


1. 社區是給交易員和投資人提供交流的平台，以便投資人通過交流、瞭解選擇信任的交易員跟隨。

2. 社區資訊可能為WOLF PLANET合作夥伴、金融機構及用戶所提供的資訊，WOLF PLANET不保證資訊的可靠性和真實性，因此，資訊發布者只對其發佈內容的合法性承擔責任，並不會對據此操作的投資所產生的盈利虧損承擔任何責任。</p>
        

        <h1>二、社區言論內容規範</h1>
        <p>WOLF PLANET社區主要分享投資經驗、投資策略、研究及分析行情等相關的金融投資資訊，希望社區用戶積極發言及分享，並參與討論相關範圍內容。</p>
        

        <h1>三、社區管理</h1>
        <p>為了維護廣大WOLF PLANET用戶的合法權益，提供健康文明的社區環境，創造和諧的社交氛圍，根據《全國人大常委會關於維護互聯網安全的決定》、《互聯網資訊服務管理辦法》、《互聯網用戶賬號名稱管理規定》等現行法律法規，WOLF PLANET明確制定社區各類違規現象及相應處罰準則。

 
1. 使用不文明不健康用語（侮辱、歧視、猥褻類等詞句）進行人身攻擊、地域攻擊、民族歧視等，經發現即限制展示或刪除，並視情節嚴重程度對發布該內容的用戶予以警告、禁言或停用賬號處理。

2. 發布觸及現行法律法規，危害用戶和WOLF PLANET安全及合法權益的資訊，一旦發現即停止展示或刪除，並視情節嚴重程度對發布該資訊的用戶予以警告、禁言或停用賬號處理。

3. 發布垃圾信息破壞網絡環境的，如反復發布與主題無關的評論、垃圾廣告等，對其他用戶造成乾擾且被投訴的，並視情節嚴重程度予以警告、禁言或停用賬號處理。

4. 亂發廣告資訊，如銷售廣告、諮詢廣告、股票網站等，一經發現立即刪除，禁言或停用賬號處理。

5. 胡亂發布淫穢、色情、暴力、迷信和犯罪等資訊的，經發現加以清除，並視情節嚴重程度對該資訊發布用戶予以禁言、或停用賬號處理。

6. 侵犯他人合法權益（名譽權、肖像權、知識產權等）的行為，以及傳播病毒代碼、駭客程式等妨害協力廠商權益的檔和資訊，並被投訴的，一經發現將對該用戶予以禁言、停用賬戶處理。

7. 用戶頭像、暱稱以及個人簡介涉及敏感時政、反動等內容，限期修改；逾期未改，將視情節嚴重程度予以禁言或停用賬戶處理。

8. 用戶賬號頭像、暱稱、簡介及言論侵犯他人（包括自然人和法人）名譽權、肖像權、隱私權、知識產權、商業機密等合法權益，且被當事方舉報投訴的，視情節嚴重程度予以限制展示、刪除、警告、禁言或者停用賬戶處理。

9. 反復發表相同評論內容，經發現立即刪除，並視情節嚴重程度對發布該內容用戶予以禁言、停用賬戶處理。

10. 發布QQ號、QQ群、微信公眾號、微信群號、微信二維碼，以及未經WOLF PLANET允許的協力廠商活動資訊、推廣資訊、銷售資訊等營銷資訊，一經發現將對該用戶予以禁言、停用賬戶處理。

本守則自修訂之日起施行。對違反WOLF PLANET社區規則的賬戶予以規定的警告、禁言、停用賬戶處理。禁言是WOLF PLANET社區的主要處罰機制，被禁言的用戶無法評論、轉發、評贊、修改個人資訊，只能瀏覽網頁，禁言期後可恢復正常。禁言處罰視情節嚴重程度可分為禁言時間為1天、禁言時間為7天、禁言時間為15天或永久性禁言。 

如對WOLF PLANET社區處罰機制有任何疑問或異議，可向聯繫WOLF PLANET進行申訴。
</p>
        

        <h1>四、言論可信度</h1>
        <p>WOLF PLANET社區用戶均有發言權，僅代表其個人立場，投資需根據您個人獨立思考作出判斷和決策。在WOLF PLANET社區中，WOLF PLANET設定的官方賬號對WOLF PLANET自身產品、技術相關問題作出的言論代表WOLF PLANET官方立場。</p>
        

        <h1>五、版權說明</h1>
        <p>若出於非商業、非盈利、非廣告性目的，任何試圖將WOLF PLANET社區的內容轉載、引用到其他地方，需註明內容原出處。如涉及侵權事宜，版權方可向WOLF PLANET進行投訴，並提供相關證明版權的資料，WOLF PLANET在核實後將會進行處理。
</p>
        

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
              <Heading
                variant={isMobile ? 1 : 10}
                color="#F2F3F7"
                style={{ lineHeight: 1 }}>
                {DummyDataEn.headline}
              </Heading>
            ) : (
              <BodyBold variant={7} color="#F2F3F7" style={{ lineHeight: 1.5 }}>
                {DummyData.headline}
              </BodyBold>
            )}
          </div>
          {DisplayRichText()}
        </Stack>
      </div>
    </>
  );
};

export default TermsOfUse;
