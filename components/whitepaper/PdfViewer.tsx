import { Flex } from '@mantine/core';
import { useRouter } from 'next/router';
import { CaretCircleLeft, CaretCircleRight } from '@phosphor-icons/react';
import { Body, BodyDmsans } from 'components/typography';
import { PDFDocumentProxy } from 'pdfjs-dist';
import React, { ChangeEvent, useEffect, useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';
import styles from './whitepaper.module.scss';
import { ArrowSquareOut } from '@phosphor-icons/react';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url
).toString();

const AccessToWhitepaper = '打开白皮书';
const AccessToWhitepaperEn = 'Access to link';

const PdfViewer = () => {
  const router = useRouter();
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [onHover, setOnHover] = useState<boolean>(false);
  const [whitepaperUrl, setWhitepaperUrl] = useState<string>('/sample.pdf');

  useEffect(() => {
    setWhitepaperUrl(localStorage.getItem('whitepaperUrl') || '/sample.pdf');
  }, [localStorage.getItem('whitepaperUrl')]);

  function onDocumentLoadSuccess({ numPages }: PDFDocumentProxy) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  function changePage(offSet: number) {
    setPageNumber((prevPageNumber) => prevPageNumber + offSet);
  }

  function changePageBack() {
    changePage(-1);
  }

  function changePageNext() {
    changePage(1);
  }

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
    <div>
      {!isMobile ? (
        <>
          <Flex align="center" justify="center" gap={'20px'}>
            {pageNumber > 1 ? (
              <CaretCircleLeft
                style={{ cursor: 'pointer' }}
                onClick={changePageBack}
                width={'56px'}
                height={'56px'}
                color="#9198B0"
              />
            ) : (
              <CaretCircleLeft
                style={{ cursor: 'not-allowed' }}
                width={'56px'}
                height={'56px'}
                color="#272935"
                weight="fill"
              />
            )}
            <div
              className={styles.documentContainer}
              onMouseEnter={() => setOnHover(true)}
              onMouseLeave={() => setOnHover(false)}>
              <div
                className={`${styles.overlay} ${
                  onHover ? styles.overlayVisible : ''
                }`}></div>
              <Document
                file={whitepaperUrl}
                onLoadSuccess={onDocumentLoadSuccess}>
                <Page height={700} pageNumber={pageNumber} />
              </Document>
              {onHover && (
                <a
                  href={whitepaperUrl}
                  rel="noopener noreferrer"
                  target="_blank"
                  className={styles.openPdfButtonContainer}>
                  <div className={styles.openPdfButton}>
                    {router.locale === 'en' ? (
                      <BodyDmsans
                        variant={1}
                        color="white"
                        fw={700}
                        style={{ width: 110, marginTop: 4 }}>
                        {AccessToWhitepaperEn}
                      </BodyDmsans>
                    ) : (
                      <Body variant={1} color="white" fw={700}>
                        {AccessToWhitepaper}
                      </Body>
                    )}

                    <ArrowSquareOut
                      size={24}
                      style={{ marginTop: 1, marginLeft: 10 }}
                    />
                  </div>
                </a>
              )}
            </div>
            {numPages && pageNumber < numPages ? (
              <CaretCircleRight
                style={{ cursor: 'pointer' }}
                onClick={changePageNext}
                width={'56px'}
                height={'56px'}
                color="#9198B0"
              />
            ) : (
              <CaretCircleRight
                style={{ cursor: 'not-allowed' }}
                width={'56px'}
                height={'56px'}
                color="#272935"
                weight="fill"
              />
            )}
          </Flex>
        </>
      ) : (
        <>
          <Flex align="center" justify="center" gap={'5px'}>
            {pageNumber > 1 ? (
              <CaretCircleLeft
                style={{ cursor: 'pointer' }}
                onClick={changePageBack}
                width={'32px'}
                height={'32px'}
                color="#9198B0"
              />
            ) : (
              <CaretCircleLeft
                style={{ cursor: 'not-allowed' }}
                width={'32px'}
                height={'32px'}
                color="#272935"
                weight="fill"
              />
            )}
            <div
              className={styles.documentContainer}
              onMouseEnter={() => setOnHover(true)}
              onMouseLeave={() => setOnHover(false)}>
              <div
                className={`${styles.overlay} ${
                  onHover ? styles.overlayVisible : ''
                }`}></div>
              <Document
                file="/sample.pdf"
                onLoadSuccess={onDocumentLoadSuccess}>
                <Page height={600} width={250} pageNumber={pageNumber} />
              </Document>
              {onHover && (
                <a
                  // @ts-ignore
                  href={localStorage.getItem('whitepaperUrl')}
                  rel="noopener noreferrer"
                  target="_blank"
                  className={styles.openPdfButtonContainer}>
                  <div className={styles.openPdfButton}>
                    {router.locale === 'en' ? (
                      <BodyDmsans
                        variant={1}
                        color="white"
                        fw={700}
                        style={{ width: 110, marginTop: 4 }}>
                        {AccessToWhitepaperEn}
                      </BodyDmsans>
                    ) : (
                      <Body variant={1} color="white" fw={700}>
                        {AccessToWhitepaper}
                      </Body>
                    )}

                    <ArrowSquareOut
                      size={24}
                      style={{ marginTop: 1, marginLeft: 10 }}
                    />
                  </div>
                </a>
              )}
            </div>
            {numPages && pageNumber < numPages ? (
              <CaretCircleRight
                style={{ cursor: 'pointer' }}
                onClick={changePageNext}
                width={'32px'}
                height={'32px'}
                color="#9198B0"
              />
            ) : (
              <CaretCircleRight
                style={{ cursor: 'not-allowed' }}
                width={'32px'}
                height={'32px'}
                color="#272935"
                weight="fill"
              />
            )}
          </Flex>
        </>
      )}
    </div>
  );
};

export default PdfViewer;
