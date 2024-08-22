import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import styles from './index.module.scss';
import { Stack } from '@mantine/core';
import { Body, BodyBold, BodyDmsans, Heading } from 'components/typography';
import Image from 'next/image';
import BlueEar from 'public/NFT/BlueEar.png';
import BlueEyebrow from 'public/NFT/BlueEyebrow.png';
import BlueEye from 'public/NFT/BlueEye.png';
import BlueNose from 'public/NFT/BlueNose.png';
import BlueBody from 'public/NFT/BlueBody.png';
import BlueFull from 'public/NFT/BlueFull.png';
import Mobile1 from 'public/NFT/Mobile1.png';
import Mobile2 from 'public/NFT/Mobile2.png';
import Mobile3 from 'public/NFT/Mobile3.png';

const SecondSectionData = {
  headline: '个人形象NFT',
  subheader:
    '萌狼，是每一位冒险家在Wolf Planet探索过程当中个人形象的代表，更是社区身份的体现。用户在收集到包括眼睛、眉毛、耳朵、嘴巴和身体在内的五个碎片NFT后，便可以一步步打造出一只属于自己的萌狼。',
  title: '积极参与社区互动，收集稀有度更高的萌狼NFT，组合出独一无二的萌狼吧！',
  cards: [BlueEar, BlueEyebrow, BlueEye, BlueNose, BlueBody],
};

const SecondSectionDataEn = {
  headline: 'Personal Identity NFT',
  subheader: `The cute Wolf is the representative of each adventurer's personal identity as they explore WolfPlanet, and also a reflection of their community identity. Users can gradually build their own cute Wolf by collecting five fragment NFTs representing the eyes, eyebrows, ears, mouth, and body.`,
  title:
    'Actively participate in community interactions and collect rarer Wolf NFTs to build your one-of-a-kind cute Wolf!',
  cards: [BlueEar, BlueEyebrow, BlueEye, BlueNose, BlueBody],
};

const ThirdSectionData = {
  headline: '角色成就NFT',
  subheader:
    '不断在社区中做出贡献，参与Wolf Planet不定期举办的活动即有机会获得社区发放的专属NFT勋章，可能是“最佳创作者”，或是“金牌评论家”，甚至是“社区管理员”。收集不同的NFT勋章，合成为你专属的SBT（Soulbound Token）吧！',
};

const ThirdSectionDataEn = {
  headline: 'Character Achievement NFT',
  subheader: `Contribute to the community and participate in activities to earn exclusive NFT badges, such as "Best Creator" or "Premier Commentator“ or “Community Moderator”. Collect these badges and combine them into your own unique SBT (Soulbound Token).`,
};

const FourthSectionData = {
  headline: '内容NFT',
  subheader1: `Wolf Planet希望更好地保护创作者的版权，每一位创作者都具有将自己原创的帖子铸造成为NFT的权利。`,
  list1:
    '每位用户都可以将自己认为有价值的文字或是一段宝贵的投资经验铸造为具有价值的NFT，从而将其分享给其他人，并从中获得收益；',
  list2:
    '对于课程的创作者们来说，平台提供了将课程以NFT形式存放在区块链上的功能，鼓励创作者们以更加安全高效的方式通过创作获利；',
  subheader2:
    '在Wolf Planet，我们鼓励“创作获利”（Create to Earn），你的每一次付出都应该有回报。',
};

const FourthSectionDataEn = {
  headline: 'Content NFT',
  subheader1: `WolfPlanet aims to better protect creators' copyrights, and every creator has the right to mint their original posts as NFTs.`,
  list1:
    'Each user can mint valuable text or investment insights they have as NFTs, and share them with others to generate earnings;',
  list2: `or course creators, the platform provides the function to store courses as NFTs on the blockchain, encouraging creators to earn through their creations in a more secure and efficient way.`,
  subheader2:
    'In WolfPlanet, we encourage "Create to Earn" - your every contribution should be rewarded.',
};

const SecondMobileSection = () => {
  const router = useRouter();
  //MOBILE AND DESKTOP
  const [isMobile, setIsMobile] = useState(false);
  const [width, setWidth] = useState<number>(
    typeof window !== 'undefined' ? window.innerWidth : 0
  );
  const [scrollPosition, setScrollPosition] = useState(0);
  const [displayFull, setDisplayFull] = useState(false);

  const handleWindowSizeChange = () => {
    setWidth(typeof window !== 'undefined' ? window.innerWidth : 0);
  };

  useEffect(() => {
    if (width <= 835) {
      setIsMobile(true);
    } else setIsMobile(false);
  }, [width]);

  return (
    <>
      <div className={` ${styles.secondContainer}`}>
        <div className={styles.secondContainerWidth}>
          <Stack justify="center" align="center" spacing={'24px'}>
            {router.locale === 'en' ? (
              <>
                <Heading
                  color="#F2F3F7"
                  variant={isMobile ? 2 : 1}
                  style={{ textAlign: 'center' }}>
                  {SecondSectionDataEn.headline}
                </Heading>
                <BodyDmsans
                  color="#9198B0"
                  variant={isMobile ? 1 : 2}
                  style={{ textAlign: 'justify' }}>
                  {SecondSectionDataEn.subheader}
                </BodyDmsans>
              </>
            ) : (
              <>
                <BodyBold
                  color="#F2F3F7"
                  variant={7}
                  style={{ textAlign: 'center' }}>
                  {SecondSectionData.headline}
                </BodyBold>
                <Body
                  color="#9198B0"
                  variant={1}
                  style={{ textAlign: 'center' }}>
                  {SecondSectionData.subheader}
                </Body>
              </>
            )}
            {!isMobile ? (
              <>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    position: 'relative',
                    gap: 24,
                    marginTop: 20,
                    marginBottom: 20,
                  }}>
                  {SecondSectionData.cards.map((item, index) => (
                    <div
                      className={`box${index + 1} ${styles.imageContainer} ${
                        styles[`wolfImageIndex${index + 1}`]
                      }`}
                      key={index}>
                      <Image
                        src={item}
                        alt=""
                        className={`${styles[`wolfImage${index + 1}`]}`}
                      />
                    </div>
                  ))}
                </div>
                {displayFull && (
                  <div className={` ${styles.imageContainerFull}`} key={'12'}>
                    <Image
                      src={BlueFull}
                      alt=""
                      className={styles.wolfImageFull}
                    />
                  </div>
                )}
              </>
            ) : (
              <>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 24,
                    marginTop: 20,
                    marginBottom: 20,
                  }}>
                  {SecondSectionData.cards.map((item, index) => (
                    <div
                      className={` ${styles.imageContainer}`}
                      key={index + 100}>
                      <Image
                        src={item}
                        alt=""
                        className={`${styles[`wolfImage${index + 1}`]}`}
                      />
                    </div>
                  ))}
                </div>
                <div className={` ${styles.imageContainerFull}`} key={'12'}>
                  <Image
                    src={BlueFull}
                    alt=""
                    className={styles.wolfImageFull}
                  />
                </div>
              </>
            )}

            {router.locale === 'en' ? (
              <BodyDmsans
                color="#9198B0"
                variant={isMobile ? 1 : 2}
                style={{ textAlign: 'justify' }}>
                {SecondSectionDataEn.title}
              </BodyDmsans>
            ) : (
              <Body color="#9198B0" variant={1} style={{ textAlign: 'center' }}>
                {SecondSectionData.title}
              </Body>
            )}
          </Stack>
        </div>
      </div>

      {/* Third Section */}
      <div
        id="third-section"
        className={styles.thirdContainer}
        style={{ padding: '70px 0px' }}>
        <div className={styles.thirdWidthContainer}>
          <Image src={Mobile1} className={styles.mobile1} alt="wolfavatar" />

          <div className={styles.firstTextContainer}>
            {router.locale === 'en' ? (
              <>
                <Heading
                  color="#F2F3F7"
                  variant={isMobile ? 2 : 1}
                  style={{ marginTop: 15 }}>
                  {ThirdSectionDataEn.headline}
                </Heading>
                <BodyDmsans
                  color="#9198B0"
                  variant={isMobile ? 1 : 2}
                  style={{
                    marginTop: 15,
                    lineHeight: 1.4,
                    textAlign: 'justify',
                  }}>
                  {ThirdSectionDataEn.subheader}
                </BodyDmsans>
              </>
            ) : (
              <>
                <BodyBold
                  color="#F2F3F7"
                  variant={isMobile ? 1 : 7}
                  style={{ marginTop: 15 }}>
                  {ThirdSectionData.headline}
                </BodyBold>
                <Body
                  color="#9198B0"
                  variant={isMobile ? 2 : 1}
                  style={{ marginTop: 15, lineHeight: 1.4 }}>
                  {ThirdSectionData.subheader}
                </Body>
              </>
            )}
          </div>
        </div>
      </div>
      <div
        id="fourth-section"
        className={styles.fourthContainer}
        style={{
          padding: isMobile ? '90px 0px 50px 0px' : '100px 0px 100px 0px',
        }}>
        <div className={styles.thirdWidthContainer}>
          {isMobile ? (
            <div className={styles.secondPartContainer}>
              <Image
                src={Mobile2}
                className={styles.mobile1}
                alt="wolfavatar"
              />
              <Image
                src={Mobile3}
                className={styles.mobile1}
                alt="wolfavatar"
              />
            </div>
          ) : (
            <>
              <Image
                src={Mobile2}
                className={styles.mobile1}
                alt="wolfavatar"
              />
              <Image
                src={Mobile3}
                className={styles.mobile1}
                alt="wolfavatar"
              />
            </>
          )}

          <div
            style={{
              textAlign: isMobile ? 'center' : 'start',
              marginBottom: 100,
              width: isMobile ? '100%' : 444,
              marginLeft: isMobile ? 0 : 10,
            }}>
            {router.locale === 'en' ? (
              <>
                <Heading
                  color="#F2F3F7"
                  variant={isMobile ? 2 : 1}
                  style={{ marginTop: 15 }}>
                  {FourthSectionDataEn.headline}
                </Heading>
                <BodyDmsans
                  color="#9198B0"
                  variant={isMobile ? 1 : 2}
                  style={{
                    marginTop: 15,
                    lineHeight: 1.4,
                    textAlign: 'justify',
                  }}>
                  {FourthSectionDataEn.subheader1}
                  <li style={{ marginLeft: 10 }}>
                    {FourthSectionDataEn.list1}
                  </li>
                  <li style={{ marginLeft: 10 }}>
                    {FourthSectionDataEn.list2}
                  </li>
                  {FourthSectionDataEn.subheader2}
                </BodyDmsans>
              </>
            ) : (
              <>
                <BodyBold
                  color="#F2F3F7"
                  variant={isMobile ? 1 : 7}
                  style={{ marginTop: 15 }}>
                  {FourthSectionData.headline}
                </BodyBold>
                <Body
                  color="#9198B0"
                  variant={isMobile ? 2 : 1}
                  style={{ marginTop: 15, lineHeight: 1.4 }}>
                  {FourthSectionData.subheader1}
                  <li style={{ marginLeft: 10 }}>{FourthSectionData.list1}</li>
                  <li style={{ marginLeft: 10 }}>{FourthSectionData.list2}</li>
                  {FourthSectionData.subheader2}
                </Body>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default SecondMobileSection;
