/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { Card, Typography, Tag, Button, Divider } from 'antd';
import './SnippetNews.css';
import { IData_SnippetNews } from '../types';
import { UpOutlined, DownOutlined, CaretUpOutlined, CaretDownOutlined, GlobalOutlined, BorderOutlined, ExclamationCircleOutlined, UserOutlined, ReadOutlined, EnvironmentOutlined } from '@ant-design/icons';

const { Paragraph, Text } = Typography;

interface Props {
  data: IData_SnippetNews;
  duplicates?: IData_SnippetNews[];
}

const SnippetNews: React.FC<Props> = ({ data, duplicates = [] }) => {
  const {
    TI, AB, URL, DOM, DP,
    LANG, REACH, KW, AU, CNTR,
    TRAFFIC, FAV, HIGHLIGHTS, SENT
  } = data;


  const [showFullAbstract, setShowFullAbstract] = useState(false);
  const [showAllKeywords, setShowAllKeywords] = useState(false);
  const [showDups, setShowDups] = useState(false);
  const [openDupIds, setOpenDupIds] = useState<Set<number>>(new Set());

  const toggleDup = (id: number) => {
        setOpenDupIds(prev => {
          const next = new Set(prev);
          if (next.has(id)) next.delete(id);
          else next.add(id);
          return next;
        });
      };

  const visibleKW = showAllKeywords ? KW : KW.slice(0, 5);

  
  const formattedDate = new Date(DP).toLocaleString('en-GB', {
    year: 'numeric', month: 'short', day: 'numeric',
    // hour: '2-digit', minute: '2-digit'
  });


  const formattedTraffic = TRAFFIC.map(({ value, count }, idx) => (
    <React.Fragment key={value}>
      <span className="color-grey">{value} </span>
      <span className="color-white">{Math.round(count * 100)}% </span>
      {idx < TRAFFIC.length - 1 && ' '}
    </React.Fragment>
  ));

    const formatReach = (value: number): string => {
      if (value >= 1e9) {
        const v = (value / 1e9).toFixed(1).replace(/\.0$/, '');
        return `${v}B `;
      }
      if (value >= 1e6) {
        const v = (value / 1e6).toFixed(1).replace(/\.0$/, '');
        return `${v}M `;
      }
      if (value >= 1e3) {
        const v = (value / 1e3).toFixed(1).replace(/\.0$/, '');
        return `${v}K `;
      }
      return `${value} `;
    };
  
    const reachText = formatReach(REACH);
  
  return (
    <Card className="snippet-news" hoverable>

      <div className="snippet-news__header">
        <div className="snippet-news__meta">
          <div className="snippet-news__data">
            {formattedDate}
            <Text className="color-white">{reachText} <span className="color-grey">Reach</span></Text>
            <Text><span className="color-grey">Top Traffic:</span> {formattedTraffic} </Text>
          </div>

          <div className='snippet-news__sent'>
          <Button className={`sent-button ${SENT}`}>
            {SENT}
          </Button>
            <ExclamationCircleOutlined className='sent-icon' />
            <BorderOutlined className='sent-icon' />
          </div>
        </div>


        <div className="snippet-news__titles">
          <Text className="snippet-news__title">
            <a href={URL} target="_blank" rel="noopener noreferrer">{TI}</a>
          </Text>
        </div>



        <div className='snippet-news_under-the-title'>
          <Text className="color-grey"><GlobalOutlined alt="favicon" className="snippet-news__favicon"/> {DOM}</Text>
          <Text className="color-grey"><EnvironmentOutlined alt="favicon" className="snippet-news__favicon"/> {CNTR}</Text>
          <Text className="color-grey"><ReadOutlined alt="favicon" className="snippet-news__favicon"/> {LANG}</Text>
          <Text className="color-grey"><UserOutlined alt="favicon" className="snippet-news__favicon"/> {AU && AU.length > 0 ? AU.join(', ') : '—'}</Text>
        </div>
      </div>


      <div className="snippet-news__highlights-block">
        {!showFullAbstract ? (
          <>
            {HIGHLIGHTS.map((hl, i) => (
              <Paragraph key={i} className="snippet-news__highlight">
                <span dangerouslySetInnerHTML={{ __html: hl }} />
              </Paragraph>
            ))}
           
            <a className="snippet-news__show-more"
              onClick={() => setShowFullAbstract(true)}>
              Show more <CaretDownOutlined />
            </a>
          </>
        ) : (
          <>
            <Paragraph className="snippet-news__abstract">
              {AB}
            </Paragraph>
            <a className="snippet-news__show-more"
              onClick={() => setShowFullAbstract(false)}>
                Show less <CaretUpOutlined />
            </a>
          </>
        )}
      </div>

   
      <div className="snippet-news__keywords">
      {visibleKW.map(tag => (
        <Tag key={tag.value}>
          <span className="color-grey">{tag.value}</span>
          &nbsp;
          <span className="color-white">{tag.count}</span>
        </Tag>
      ))}
        {!showAllKeywords && KW.length > 5 && (
          <a className="snippet-news__show-all-keywords"
            onClick={() => setShowAllKeywords(true)}>
            Show all +{KW.length - 5}
          </a>
        )}
      </div>


        
        {/* ** здесь добавляем дубликаты ** */}
      {duplicates.length > 0 && (
        <>

          <span className='original-source'>Original Source</span>
         
          <div className="snippet-news__duplicates-toggle">

            <div className='duplicates_relevance'>
              <Text type="secondary">
                <span className='color-grey'>Duplicates: </span><span className='color-white'>{duplicates.length}</span> 
              </Text>
              <Text className='relevance'>
              <span className='color-white'> <span className='color-grey'>By Relevance </span><DownOutlined /></span> 
              </Text>
            </div>

            


            <Button
              type="link"
              className='duplicates-toggle-btn'
              icon={ showDups ? <UpOutlined /> : <DownOutlined /> }
              onClick={()=>setShowDups(!showDups)}
            >
              { showDups ? 'Hide' : 'View' } duplicates
            </Button>


          </div>
          {showDups && (
            <div className="snippet-news__duplicates-list">
              {duplicates.map((dup) => {
                const isOpen = openDupIds.has(dup.ID);
                const {
                  TI: dupTI,
                  URL: dupURL,
                  DP: dupDP,
                  DOM: dupDOM,
                  CNTR: dupCNTR,
                  LANG: dupLANG,
                  REACH: dupREACH,
                  TRAFFIC: dupTRAFFIC,
                  SENT: dupSENT,
                  AU: dupAU,
                } = dup;

                const dupDate = new Date(dupDP).toLocaleString('en-GB', {
                  year: 'numeric',
                  month: 'short',
                  day: 'numeric',
                });
                const dupReachText = formatReach(dupREACH);
                const dupTrafficElems = dupTRAFFIC.map(({ value, count }, idx) => (
                  <React.Fragment key={value}>
                    <span className="color-grey">{value} </span>
                    <span className="color-white">{Math.round(count * 100)}% </span>
                    {idx < dupTRAFFIC.length - 1 && ' '}
                  </React.Fragment>
                ));

                return (
                  <Card
                    key={dup.ID}
                    className="snippet-news"
                    hoverable
                    onClick={() => toggleDup(dup.ID)}
                  >
                    <div className="snippet-news__header">
                      <div className="snippet-news__meta">
                        <div className="snippet-news__data">
                          {dupDate}
                          <Text className="color-white">
                            {dupReachText}
                            <span className="color-grey">Reach</span>
                          </Text>
                          <Text>
                            <span className="color-grey">Top Traffic:</span> {dupTrafficElems}
                          </Text>
                        </div>

                        <div className="snippet-news__sent">
                          <Button className={`sent-button ${dupSENT}`}>
                            {dupSENT}
                          </Button>
                          <ExclamationCircleOutlined className="sent-icon" />
                          <BorderOutlined className="sent-icon" />
                        </div>
                      </div>

                      <div className="snippet-news__titles">
                        <Text className="snippet-news__title">
                          <a href={dupURL} target="_blank" rel="noopener noreferrer">
                            {dupTI}
                          </a>
                        </Text>
                      </div>

                      <div className="snippet-news_under-the-title">
                        <Text className="color-grey">
                          <GlobalOutlined className="snippet-news__favicon" /> {dupDOM}
                        </Text>
                        <Text className="color-grey">
                          <EnvironmentOutlined className="snippet-news__favicon" /> {dupCNTR}
                        </Text>
                        <Text className="color-grey">
                          <ReadOutlined className="snippet-news__favicon" /> {dupLANG}
                        </Text>
                        <Text className="color-grey">
                          <UserOutlined className="snippet-news__favicon" /> {dupAU.length > 0 ? dupAU.join(', ') : '—'}
                        </Text>
                      </div>
                    </div>


                    {isOpen && (
                    <>
                      <div className="snippet-news__highlights-block">
                        {!showFullAbstract ? (
                          <>
                            {dup.HIGHLIGHTS.map((hl,i)=>(
                              <Paragraph key={i} className="snippet-news__highlight">
                                <span dangerouslySetInnerHTML={{__html:hl}}/>
                              </Paragraph>
                            ))}
                            <a className="snippet-news__show-more"
                              onClick={(e) => {
                                e.stopPropagation();         
                                setShowFullAbstract(true);  
                              }}>
                              Show more <CaretDownOutlined/>
                            </a>
                          </>
                        ) : (
                          <>
                            <Paragraph className="snippet-news__abstract">{dup.AB}</Paragraph>
                            <a className="snippet-news__show-more"
                              onClick={(e) => {
                                e.stopPropagation();         
                                setShowFullAbstract(false);
                                }}>
                              Show less <CaretUpOutlined/>
                            </a>
                          </>
                        )}
                      </div>

                      <div className="snippet-news__keywords">
                        {(showAllKeywords ? dup.KW : dup.KW.slice(0,5)).map(tag=>(
                          <Tag key={tag.value}>
                            <span className="color-grey">{tag.value}</span>&nbsp;
                            <span className="color-white">{tag.count}</span>
                          </Tag>
                        ))}
                        {dup.KW.length>5 && !showAllKeywords && (
                          <a onClick={()=>setShowAllKeywords(true)} className="snippet-news__show-all-keywords">
                            Show all +{dup.KW.length-5}
                          </a>
                        )}
                      </div>
                    </>
                  )}

                  </Card>
                );
              })}
            </div>
          )}

        </>
      )}
    </Card>
  );
};

export default SnippetNews;