import { Flex, Stack } from '@mantine/core';
import styles from './index.module.scss';

import { Body, BodyBold, Heading } from 'components/typography';

import { useEffect, useState } from 'react';

const DummyData = {
  headline: '用戶協議',
  date: '28/12/2024',
  content: `感謝您使用WOLF PLANET!
 本系统高度重視保護用戶的個人信息及隠私權，此項內容對於我們至關重要。本《隱私政策》說明了我們如何收集、使用、處理和披露您的信息,包括與您訪問和使用WOLF PLANET及支付服務相關的個人信息。
該隱私協議只針對我們平台及其子頁面，不適用於任何第三方網站。
建議您在使用我們的產品或服務前，仔細閱讀並瞭解本《隱私協議》。 若您使⽤我們的系統即表示您確認已瞭解本協定內容。如果您通過鏈接進⼊到第三方網站網頁，請重新查看對應網站的隱私協議並瞭解其處理您資料資料的方式。
如果本《隱私政策》中有未定義的術語（如「服務項目」或「WOLF PLANET」），其定義和我們在服務條款中的定義一致。
在本政策中，「WOLF PLANET」、「我們」或「我們的」指本《隱私政策》下對您的信息負責的WOLF PLANET公司。`,
};

const TermsOfUse = () => {
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
  return (
    <>
      <div className={styles.container}>
        <Stack className={styles.content}>
          <div
            style={{
              maxWidth: 706.667,
              textAlign: 'start',
              paddingLeft: isMobile ? 8 : 4,
            }}>
            <BodyBold variant={7} color="#F2F3F7" style={{ lineHeight: 1.5 }}>
              {DummyData.headline}
            </BodyBold>
            <BodyBold
              variant={1}
              color="#F2F3F7"
              style={{ lineHeight: 1.5, marginTop: 25 }}>
              更新日期：【202x】年【x】月【x】日
            </BodyBold>
            <BodyBold
              variant={1}
              color="#F2F3F7"
              style={{ lineHeight: 1.5, marginTop: 10 }}>
              生效日期：【202x】年【x】月【x】日
            </BodyBold>
          </div>
          <Body
            variant={1}
            color="#F2F3F7"
            style={{
              paddingLeft: isMobile ? 8 : 4,
              //   paddingRight: 4,
              paddingTop: 20,
              whiteSpace: 'pre-line',
              // lineHeight: 1.5,
              // padding: '20px 150px',
              // textAlign: 'center',
              // margin: '0px auto',
              // maxWidth: '800px',
            }}>
            {DummyData.content}
          </Body>
        </Stack>
      </div>
    </>
  );
};

export default TermsOfUse;
