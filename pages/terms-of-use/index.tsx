import { Flex, Stack } from '@mantine/core';
import { useRouter } from 'next/router';
import styles from './index.module.scss';

import { Body, BodyDmsans, BodyBold, Heading } from 'components/typography';

import { useEffect, useState } from 'react';

const DummyData = {
  headline: '用户协议',
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


        <h2>Langcai Technology (Hong Kong) Co., Ltd.</h2>
        
        
        `,
    };
    const descriptionCn = {
      __html: `
      <h1>一、社区基本守则 </h1>
      <p>WOLF PLANET透过即时跟随交易的模式，为交易市场上的投资增加回报，提升获利投资人数比例。 WOLF PLANET社区是以建立投资策略为导向，分享投资策略和投资知识。因此，WOLF PLANET制定了一套社区基本守则，请广大用户知悉。

社区信息只是为了给投资提供参考信息，让投资用户在此可以相互学习、分享、互动，并不构成任何投资建议和推荐，投资完全取决于您的个人独立思考和决策，WOLF PLANET不会对投资的获利亏损承担任何责任。


1. 社区是给交易员和投资者提供交流的平台，以便投资者透过交流、理解选择信任的交易员跟随。

2. 社区资讯可能为WOLF PLANET合作伙伴、金融机构及用户所提供的信息，WOLF PLANET不保证信息的可靠性和真实性，因此，信息发布者只对其发布内容的合法性承担责任，并不会对据此操作的投资所产生的获利亏损承担任何责任。</p>
        

        <h1>二、社区言论内容规范</h1>
        <p>WOLF PLANET社群主要分享投资经验、投资策略、研究及分析行情等相关的金融投资资讯，希望社区用户积极发言及分享，并参与讨论相关范围内容。</p>
        

        <h1>三、社区管理</h1>
        <p>为了维护广大WOLF PLANET用户的合法权益，提供健康文明的社区环境，创造和谐的社交氛围，根据《全国人大常委会关于维护互联网安全的决定》、《互联网信息服务管理办法》、《互联网用户账号名称管理规定》等现行法律法规，WOLF PLANET明确制定社区各类违规现象及相应处罚准则。


1. 使用不文明不健康用语（侮辱、歧视、猥亵类等词句）进行人身攻击、地域攻击、民族歧视等，经发现即限制展示或删除，并视情节严重程度对发布该内容的用户予以警告、禁言或停用帐号处理。

2. 发布触及现行法律法规，危害用户及WOLF PLANET安全及合法权益的信息，一旦发现即停止展示或删除，并视情节严重程度对发布该信息的用户予以警告、禁言或停用账号处理。

3. 发布垃圾讯息破坏网络环境的，如反复发布与主题无关的评论、垃圾广告等，对其他用户造成干扰且被投诉的，并视情节严重程度予以警告、禁言或停用账号处理。

4. 乱发广告资讯，如销售广告、咨询广告、股票网站等，一经发现立即删除，禁言或停用帐号处理。

5. 胡乱发布淫秽、色情、暴力、迷信和犯罪等信息的，经发现加以清除，并视情节严重程度对该信息发布用户予以禁言、或停用账号处理。

6. 侵害他人合法权益（名誉权、肖像权、知识产权等）的行为，以及传播病毒代码、黑客程序等妨害协力厂商权益的档和信息，并被投诉的，一经发现将对该用户予以禁言、停用账户处理。

7. 用户头像、昵称以及个人简介涉及敏感时政、反动等内容，限期修改；逾期未改，将视情节严重程度予以禁言或停用账户处理。

8. 用户帐号头像、昵称、简介及言论侵犯他人（包括自然人和法人）名誉权、肖像权、隐私权、知识产权、商业机密等合法权益，且被当事方举报投诉的，视情节严重程度予以限制展示、删除、警告、禁言或停用账户处理。

9. 反复发表相同评论内容，经发现立即删除，并视情节严重程度对发布该内容用户予以禁言、停用账户处理。

10. 发布QQ号、QQ群、微信公众号、微信群号、微信二维码，以及未经WOLF PLANET允许的协力厂商活动资讯、推广资讯、销售资讯等行销资讯，一经发现将对该用户予以禁言、停用账户处理。

本守则自修订日起施行。违反WOLF PLANET社区规则的帐户予以规定的警告、禁言、停用帐户处理。禁言是WOLF PLANET社区的主要处罚机制，被禁言的用户无法评论、转发、评论、修改个人信息，只能浏览网页，禁言期后可恢复正常。禁言处罚视情节严重程度可分为禁言时间为1天、禁言时间为7天、禁言时间为15天或永久性禁言。

如对WOLF PLANET社区处罚机制有任何疑问或异议，可向联络WOLF PLANET进行申诉。
</p>
        

        <h1>四、言论可信度</h1>
        <p>WOLF PLANET社区用户均有发言权，仅代表其个人立场，投资需根据您个人独立思考作出判断和决策。在WOLF PLANET社群中，WOLF PLANET设定的官方帐号对WOLF PLANET自身产品、技术相关问题所作的言论代表WOLF PLANET官方立场。</p>
        

        <h1>五、版权说明</h1>
        <p>若出于非商业、非营利、非广告目的，任何试图将WOLF PLANET社区的内容转载、引用到其他地方，需注明内容原出处。如涉及侵权事宜，版权方可向WOLF PLANET进行投诉，并提供相关证明版权的资料，WOLF PLANET在核实后将进行处理。
</p>
        

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
