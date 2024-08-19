import { Flex } from '@mantine/core';
import { CaretCircleLeft, CaretCircleRight } from '@phosphor-icons/react';
import { Body, Heading } from 'components/typography';
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

const PdfViewer = () => {
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [onHover, setOnHover] = useState<boolean>(false);

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
                file="/sample.pdf"
                onLoadSuccess={onDocumentLoadSuccess}>
                <Page height={700} pageNumber={pageNumber} />
              </Document>
              {onHover && (
                <a
                  href="/sample.pdf"
                  rel="noopener noreferrer"
                  target="_blank"
                  className={styles.openPdfButtonContainer}>
                  <div className={styles.openPdfButton}>
                    <Body variant={1} color="white" fw={700}>
                      打开白皮书
                    </Body>
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
                  href="/sample.pdf"
                  rel="noopener noreferrer"
                  target="_blank"
                  className={styles.openPdfButtonContainer}>
                  <div className={styles.openPdfButton}>
                    <Body variant={1} color="white" fw={700}>
                      打开白皮书
                    </Body>
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
