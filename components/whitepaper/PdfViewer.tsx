import { Flex } from '@mantine/core';
import { CaretCircleLeft, CaretCircleRight } from '@phosphor-icons/react';
import { Body, Heading } from 'components/typography';
import { PDFDocumentProxy } from 'pdfjs-dist';
import React, { ChangeEvent, useEffect, useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url
).toString();

const PdfViewer = () => {
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pageNumber, setPageNumber] = useState<number>(1);

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
  console.log(width);

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
            <Document file="/sample.pdf" onLoadSuccess={onDocumentLoadSuccess}>
              <Page height={700} pageNumber={pageNumber} />
            </Document>
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
          <Heading
            variant={6}
            fs={'18px'}
            fw={400}
            color="white"
            style={{ textAlign: 'center' }}>
            Page {pageNumber} of {numPages}
          </Heading>
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
            <Document file="/sample.pdf" onLoadSuccess={onDocumentLoadSuccess}>
              <Page height={600} width={250} pageNumber={pageNumber} />
            </Document>
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
          <Heading
            variant={6}
            fs={'10px'}
            fw={400}
            color="white"
            style={{ textAlign: 'center' }}>
            Page {pageNumber} of {numPages}
          </Heading>
        </>
      )}
    </div>
  );
};

export default PdfViewer;
