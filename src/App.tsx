import SnippetNews from './components/SnippetNews';
import { IData_SnippetNews } from './types';

const sampleData1: IData_SnippetNews = {
  ID: 1,
  TI: "Mobile bankers left vulnerable: 47% of UK consumers manage finances on insecure smartphones",
  AB: "Mobile bankers left vulnerable: 47% of UK consumers manage finances on insecure smartphones\nAugust 2020 by Kaspersky\nNew research has revealed that UK consumers carry out online banking on smartphones and devices that are potentially vulnerable to a security breach, despite making sure they keep their desktop or laptop computers safe. In a study commissioned by Kaspersky, nearly half (47%) of smartphone owners who use a banking app don’t protect their mobile device with antivirus or security sof...",
  URL: "https://www.globalsecuritymag.com/Mobile-bankers-left-vulnerable-47,20200819,101944.html",
  DOM: "globalsecuritymag.com",
  DP: "2025-03-06T21:00:00",
  LANG: "en",
  REACH: 2392,
  KW: [
    {
        "value": "antivirus",
        "count": 10
    },
    {
        "value": "kaspersky",
        "count": 5
    },
    {
        "value": "new",
        "count": 1
    }
  ],
  AU: [],
  CNTR: "France",
  CNTR_CODE: "fr",
  SENT: "negative",
  TRAFFIC: [
    {
        "value": "India",
        "count": 0.779
    },
    {
        "value": "United States of America",
        "count": 0.101
    },
    {
        "value": "Mexico",
        "count": 0.036
    }
  ],
  FAV: "/favicons/icons8-global-news-32.png",
  HIGHLIGHTS: [
    "…20 by <kw>Kaspersky</kw> <kw>New</kw> research has revealed that UK consumers carry out online banking on smartphones and devices that are potentially vulnerable to a security breach, despite making sure they keep their desktop or laptop computers safe. In a study commissioned by <kw>Kaspersky</kw>…",
    "…with <kw>antivirus</kw> or security software. More than half (52%) of UK smartphone owners who access bank accounts with their mobile device are worried about their banking app being hacked if their phone was lost or stolen. Despite that fear, 47%[2] are banking on devices without <kw>antivirus</kw>…",
    "…hone with <kw>antivirus</kw> protection. Surprisingly, one fifth (21%) of adults overall, and one third (33%) of Generation Z, believe their phone can’t be hacked, despite the level of mobile malware attacks rising over the past 12 months. Around two-in-five of those without <kw>antivirus</kw> and s…"
  ]
};

const sampleData2: IData_SnippetNews = {
  ID: 2,
  TI: "Mobile bankers left vulnerable: 47% of UK consumers manage finances on insecure smartphones",
  AB: "Mobile bankers left vulnerable: 47% of UK consumers manage finances on insecure smartphones\nAugust 2020 by Kaspersky\nNew research has revealed that UK consumers carry out online banking on smartphones and devices that are potentially vulnerable to a security breach, despite making sure they keep their desktop or laptop computers safe. In a study commissioned by Kaspersky, nearly half (47%) of smartphone owners who use a banking app don’t protect their mobile device with antivirus or security sof...",
  URL: "https://www.globalsecuritymag.com/Mobile-bankers-left-vulnerable-47,20200819,101944.html",
  DOM: "globalsecuritymag.com",
  DP: "2025-03-06T21:00:00",
  LANG: "en",
  REACH: 2392,
  KW: [
    {
        "value": "antivirus",
        "count": 10
    },
    {
        "value": "kaspersky",
        "count": 5
    },
    {
        "value": "new",
        "count": 1
    }
  ],
  AU: [],
  CNTR: "France",
  CNTR_CODE: "fr",
  SENT: "negative",
  TRAFFIC: [
    {
        "value": "India",
        "count": 0.779
    },
    {
        "value": "United States of America",
        "count": 0.101
    },
    {
        "value": "Mexico",
        "count": 0.036
    }
  ],
  FAV: "/favicons/icons8-global-news-32.png",
  HIGHLIGHTS: [
    "…20 by <kw>Kaspersky</kw> <kw>New</kw> research has revealed that UK consumers carry out online banking on smartphones and devices that are potentially vulnerable to a security breach, despite making sure they keep their desktop or laptop computers safe. In a study commissioned by <kw>Kaspersky</kw>…",
    "…with <kw>antivirus</kw> or security software. More than half (52%) of UK smartphone owners who access bank accounts with their mobile device are worried about their banking app being hacked if their phone was lost or stolen. Despite that fear, 47%[2] are banking on devices without <kw>antivirus</kw>…",
    "…hone with <kw>antivirus</kw> protection. Surprisingly, one fifth (21%) of adults overall, and one third (33%) of Generation Z, believe their phone can’t be hacked, despite the level of mobile malware attacks rising over the past 12 months. Around two-in-five of those without <kw>antivirus</kw> and s…"
  ]
};

const sampleData3: IData_SnippetNews = {
  ID: 3,
  TI: "Mobile bankers left vulnerable: 47% of UK consumers manage finances on insecure smartphones",
  AB: "Mobile bankers left vulnerable: 47% of UK consumers manage finances on insecure smartphones\nAugust 2020 by Kaspersky\nNew research has revealed that UK consumers carry out online banking on smartphones and devices that are potentially vulnerable to a security breach, despite making sure they keep their desktop or laptop computers safe. In a study commissioned by Kaspersky, nearly half (47%) of smartphone owners who use a banking app don’t protect their mobile device with antivirus or security sof...",
  URL: "https://www.globalsecuritymag.com/Mobile-bankers-left-vulnerable-47,20200819,101944.html",
  DOM: "globalsecuritymag.com",
  DP: "2025-03-06T21:00:00",
  LANG: "en",
  REACH: 2392,
  KW: [
    {
        "value": "antivirus",
        "count": 10
    },
    {
        "value": "kaspersky",
        "count": 5
    },
    {
        "value": "new",
        "count": 1
    }
  ],
  AU: [],
  CNTR: "France",
  CNTR_CODE: "fr",
  SENT: "negative",
  TRAFFIC: [
    {
        "value": "India",
        "count": 0.779
    },
    {
        "value": "United States of America",
        "count": 0.101
    },
    {
        "value": "Mexico",
        "count": 0.036
    }
  ],
  FAV: "/favicons/icons8-global-news-32.png",
  HIGHLIGHTS: [
    "…20 by <kw>Kaspersky</kw> <kw>New</kw> research has revealed that UK consumers carry out online banking on smartphones and devices that are potentially vulnerable to a security breach, despite making sure they keep their desktop or laptop computers safe. In a study commissioned by <kw>Kaspersky</kw>…",
    "…with <kw>antivirus</kw> or security software. More than half (52%) of UK smartphone owners who access bank accounts with their mobile device are worried about their banking app being hacked if their phone was lost or stolen. Despite that fear, 47%[2] are banking on devices without <kw>antivirus</kw>…",
    "…hone with <kw>antivirus</kw> protection. Surprisingly, one fifth (21%) of adults overall, and one third (33%) of Generation Z, believe their phone can’t be hacked, despite the level of mobile malware attacks rising over the past 12 months. Around two-in-five of those without <kw>antivirus</kw> and s…"
  ]
};

const allData: IData_SnippetNews[] = [sampleData1, sampleData2, sampleData3];

type Group = { title: string; items: IData_SnippetNews[] };
const groups: Record<string, IData_SnippetNews[]> = {};
allData.forEach(item => {
  groups[item.TI] = groups[item.TI] || [];
  groups[item.TI].push(item);
});

interface WithDups {
  original: IData_SnippetNews;
  duplicates: IData_SnippetNews[];
}

const grouped: WithDups[] = Object.values(groups).map(items => {
  const sorted = items.slice().sort((a, b) => a.ID - b.ID);
  const [original, ...dups] = sorted;
  return { original, duplicates: dups };
});



function App() {
  return (
    <div style={{ padding: 24, display: 'grid', gap: 24 }}>
      {grouped.map(({ original, duplicates }) => (
        <SnippetNews
          key={original.ID}
          data={original}
          duplicates={duplicates}
        />
      ))}
    </div>
  );
}

export default App;
