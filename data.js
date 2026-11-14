// Generated from research notes; edit freely. Amounts are nominal USD at the time.
// est: press estimate or confidential terms. award: court-ordered rather than negotiated.
// payer: gender of the spouse who paid ("m"/"f"). married/ended: only where well documented.

// Publicly reported divorce settlements and court awards.
window.DIVORCES = [
  { a: "Jeff Bezos", b: "MacKenzie Scott", payer: "m", year: 2019, amount: 38000000000, married: 1993, ended: 2019, cat: "tech", emoji: "📦", fact: "She got about 4% of Amazon (≈19.7M shares) and has since given away more than $26 billion of it.", source: "https://www.seattletimes.com/business/bezos-divorce-finalizes-sets-stage-for-38-billion-amazon-stake-transfer/ ; https://www.cnbc.com/make-it/2025/12/13/mackenzie-scott-revealed-her-total-charitable-donations-for-2025.html" },
  { a: "Bill Gates", b: "Melinda French Gates", payer: "m", year: 2021, amount: 25000000000, est: true, married: 1994, ended: 2021, cat: "tech", emoji: "🪟", fact: "No prenup and the terms were never filed. Filings showed about $6B in stock moving in 2021; Forbes now pegs the whole settlement at $25B. Leaving the Gates Foundation in 2024 came with $12.5B more for her own charity work.", source: "https://www.forbes.com/profile/melinda-french-gates/ ; https://www.forbes.com/sites/kerryadolan/2024/10/01/bill-gates-falls-to-lowest-rank-on-the-forbes-400-in-nearly-25-years/" },
  { a: "Dmitry Rybolovlev", b: "Elena Rybolovleva", payer: "m", year: 2014, amount: 4500000000, award: true, married: 1987, ended: 2014, cat: "biz", emoji: "⚽", fact: "A Geneva court awarded $4.5B, which was slashed on appeal before they settled privately in 2015.", source: "https://money.cnn.com/2015/06/12/news/russian-oligarch-divorce-appeal" },
  { a: "Alec Wildenstein", b: "Jocelyn Wildenstein", payer: "m", year: 1999, amount: 3800000000, est: true, married: 1978, ended: 1999, cat: "biz", emoji: "🎨", fact: "$2.5B up front, plus $100M a year for 13 years. The art-dealing family could afford it.", source: "https://www.cnbc.com/2014/12/29/The-worlds-most-expensive-divorce-settlements.html" },
  { a: "Du Weimin", b: "Yuan Liping", payer: "m", year: 2020, amount: 3200000000, orig: "161.3M Kangtai shares", ended: 2020, cat: "biz", emoji: "💉", fact: "She signed her voting rights back to him, so he kept control of the vaccine maker.", source: "https://www.bloomberg.com/news/articles/2020-06-01/china-s-latest-costly-divorce-is-making-this-woman-a-billionaire" },
  { a: "Wu Yajun", b: "Cai Kui", payer: "f", year: 2012, amount: 2800000000, orig: "~29% Longfor stake (Forbes valuation, Nov 2012)", est: true, ended: 2012, cat: "biz", emoji: "🏗️", fact: "The split cost her the title of China's richest woman and made her ex-husband a billionaire.", source: "https://www.bloomberg.com/news/articles/2012-11-20/china-s-richest-woman-divorces-husband-fortune-declines" },
  { a: "Rupert Murdoch", b: "Anna Murdoch Mann", payer: "m", year: 1999, amount: 1700000000, married: 1967, ended: 1999, cat: "biz", emoji: "📰", fact: "Rupert married Wendi Deng just 17 days after the divorce was final.", source: "https://www.huffpost.com/entry/rupert-murdoch-wendi-deng_n_3461169" },
  { a: "Bill Gross", b: "Sue Gross", payer: "m", year: 2017, amount: 1300000000, est: true, ended: 2017, cat: "finance", emoji: "🖼️", fact: "She won their Picasso in a coin flip, but had already swapped it for a copy she'd painted herself.", source: "https://www.forbes.com/profile/sue-gross/" },
  { a: "Zhou Hongyi", b: "Hu Huan", payer: "m", year: 2023, amount: 1300000000, orig: "~¥9B in 360 shares", ended: 2023, cat: "tech", emoji: "🤖", fact: "The stake had nearly tripled that year on hype over 360's ChatGPT-style chatbot.", source: "https://www.caixinglobal.com/2023-04-05/360-founders-divorce-to-hand-ex-wife-13-billion-stake-102015922.html" },
  { a: "Bernie Ecclestone", b: "Slavica Ecclestone", payer: "m", year: 2009, amount: 1100000000, orig: "£700M+", est: true, married: 1985, ended: 2009, cat: "sports", emoji: "🏎️", fact: "Plot twist: she has reportedly been paying him about $100M a year ever since.", source: "https://spearswms.com/wealth/bernie-ecclestone-ex-wife-establishes-family-office/" },
  { a: "Zhou Yahui", b: "Li Qiong", payer: "m", year: 2016, amount: 1100000000, orig: "¥7.35B in Kunlun shares", cat: "tech", emoji: "🎮", fact: "Months earlier, Zhou's Kunlun had bought a majority stake in dating app Grindr.", source: "https://money.cnn.com/2016/09/15/technology/china-billion-dollar-divorce-settlement-kunlun-tech-grindr/index.html" },
  { a: "Sergey Brin", b: "Nicole Shanahan", payer: "m", year: 2023, amount: 1000000000, est: true, married: 2018, ended: 2023, cat: "tech", emoji: "🔍", fact: "The NYT reported she walked away with more than $1 billion.", source: "https://sfist.com/2024/05/22/ny-times-profile-of-rfk-jr-running-mate-nicole-shanahan-details-giant-divorce-fortune-cocaine-elon-musk-affair/" },
  { a: "Harold Hamm", b: "Sue Ann Arnall", payer: "m", year: 2014, amount: 995500000, award: true, married: 1988, ended: 2014, cat: "biz", emoji: "🛢️", fact: "She turned down his $975M check so she could keep appealing, then cashed it, and Oklahoma's Supreme Court ruled that ended her appeal.", source: "https://www.nbcnews.com/business/energy/oil-mogul-harold-hamm-pay-wife-995-million-divorce-n245381" },
  { a: "Zhou Ming", b: "Jiang Chunlan", payer: "m", year: 2026, amount: 881000000, orig: "~¥5.95B in Maxone shares", ended: 2026, cat: "tech", emoji: "💾", fact: "His chip-testing firm had listed in Shanghai only seven months earlier.", source: "https://www.scmp.com/business/china-business/article/3361656/why-divorces-chinas-share-firm-owners-provoke-market-nerves" },
  { a: "Adnan Khashoggi", b: "Soraya Khashoggi", payer: "m", year: 1982, amount: 874000000, est: true, cat: "biz", emoji: "✈️", fact: "The arms dealer's ex reportedly sued for billions. $874M is the figure everyone quotes.", source: "https://abcnews.com/Business/story?id=8166053&page=1" },
  { a: "Steve Wynn", b: "Elaine Wynn", payer: "m", year: 2010, amount: 741000000, est: true, cat: "biz", emoji: "🎰", fact: "They married each other twice: 1963 to 1986, then 1991 to 2010.", source: "https://www.reviewjournal.com/business/in-divorce-settlement-wynn-to-give-half-his-stock-to-wife/" },
  { a: "Sheikh Mohammed bin Rashid", b: "Princess Haya", payer: "m", year: 2021, amount: 734000000, orig: "£554M", award: true, cat: "royal", emoji: "🐎", fact: "Thought to be the biggest award ever made by an English family court, much of it for lifelong security for her and the kids.", source: "https://www.nbcnews.com/news/world/dubai-ruler-must-provide-733-million-settle-uk-custody-case-rcna9463" },
  { a: "Chey Tae-won", b: "Roh Soh-yeong", payer: "m", year: 2026, amount: 644000000, orig: "₩944B (+₩2B alimony)", award: true, married: 1988, ended: 2025, cat: "biz", emoji: "📶", fact: "A ₩1.38T ($973M) award was voided in 2025; the ₩944B retrial ruling is back at the Supreme Court.", source: "https://en.wikipedia.org/wiki/Chey_Tae-won" },
  { a: "Farkhad Akhmedov", b: "Tatiana Akhmedova", payer: "m", year: 2016, amount: 570000000, orig: "£453M", award: true, cat: "biz", emoji: "🛥️", fact: "She chased his superyacht 'Luna' through courts around the world to collect.", source: "https://megayachtnews.com/2019/04/farkhad-akhmedov-owns-luna-dubai-court-rules-rejecting-prior-ruling/" },
  { a: "Ernesto Bertarelli", b: "Kirsty Bertarelli", payer: "m", year: 2021, amount: 547000000, orig: "£350M + £52M home (reported)", est: true, married: 2000, ended: 2021, cat: "biz", emoji: "⛵", fact: "The ex-Miss UK co-wrote All Saints' chart-topping hit 'Black Coffee.'", source: "https://www.scmp.com/magazines/style/celebrity/article/3152036/meet-britains-richest-divorcee-kirsty-bertarelli-former" },
  { a: "Chris Hohn", b: "Jamie Cooper", payer: "m", year: 2014, amount: 530000000, orig: "£337M", award: true, cat: "finance", emoji: "🌍", fact: "She asked for half of the hedge-fund fortune and got about a third, a UK record at the time.", source: "https://www.timesofisrael.com/judge-grants-wife-530-million-in-uks-biggest-divorce-payout/" },
  { a: "Craig McCaw", b: "Wendy McCaw", payer: "m", year: 1997, amount: 460000000, est: true, cat: "tech", emoji: "📱", fact: "Cell-phone pioneer money. Wendy later bought the Santa Barbara News-Press.", source: "https://www.spokesman.com/stories/1997/oct/12/mccaws-divorce-settled-with-2-billion-at-stake/" },
  { a: "Mel Gibson", b: "Robyn Moore", payer: "m", year: 2011, amount: 425000000, est: true, married: 1980, ended: 2011, cat: "screen", emoji: "🎬", fact: "No prenup plus California community property meant she got half of everything.", source: "https://abcnews.com/blogs/entertainment/2011/12/mel-gibsons-loses-half-of-his-850-million-fortune-to-ex-wife-in-divorce" },
  { a: "Robert Johnson", b: "Sheila Johnson", payer: "m", year: 2002, amount: 400000000, est: true, married: 1969, ended: 2002, cat: "biz", emoji: "📺", fact: "BET's co-founders. Sheila went on to own stakes in three pro sports teams.", source: "https://www.cnbc.com/2014/12/29/The-worlds-most-expensive-divorce-settlements.html" },
  { a: "Roman Abramovich", b: "Irina Malandina", payer: "m", year: 2007, amount: 300000000, est: true, married: 1991, ended: 2007, cat: "biz", emoji: "🏟️", fact: "Chelsea's then-owner settled fast and quietly. $300M is the widely reported estimate.", source: "https://www.rferl.org/a/1075255.html" },
  { a: "Sid Bass", b: "Anne Bass", payer: "m", year: 1988, amount: 200000000, est: true, married: 1965, ended: 1988, cat: "biz", emoji: "🐂", fact: "Called the largest divorce settlement in Texas history at the time.", source: "https://www.kera.org/artandseek/fort-worth-arts-patron-anne-bass-has-died/" },
  { a: "Jack Welch", b: "Jane Beasley", payer: "m", year: 2003, amount: 180000000, est: true, married: 1989, ended: 2003, cat: "biz", emoji: "💡", fact: "The filings exposed his lavish GE retirement perks, which he then gave up.", source: "https://archive.seattletimes.com/archive/20030704/welch04/welch-wife-settle-divorce-out-of-court" },
  { a: "Michael Jordan", b: "Juanita Vanoy", payer: "m", year: 2006, amount: 168000000, est: true, married: 1989, ended: 2006, cat: "sports", emoji: "🏀", fact: "No prenup. Still one of the biggest payouts in sports history.", source: "https://www.cnbc.com/2007/11/15/michael-jordans-divorce-numbers-game-being-played.html" },
  { a: "Boris Berezovsky", b: "Galina Besharova", payer: "m", year: 2011, amount: 163000000, orig: "£100M (reported)", est: true, married: 1991, cat: "biz", emoji: "🪆", fact: "Her lawyer said it beat the UK record set by the Charmans' £48M award.", source: "https://www.themoscowtimes.com/archive/berezovsky-agrees-to-britains-biggest-divorce" },
  { a: "Neil Diamond", b: "Marcia Murphey", payer: "m", year: 1995, amount: 150000000, est: true, married: 1969, ended: 1995, cat: "music", emoji: "🎤", fact: "Roughly half his fortune at the time. Sweet Caroline? Sweet settlement.", source: "https://en.wikipedia.org/wiki/List_of_most_expensive_divorces" },
  { a: "Frank McCourt", b: "Jamie McCourt", payer: "m", year: 2011, amount: 130000000, married: 1979, ended: 2011, cat: "sports", emoji: "⚾", fact: "Their fight helped push the LA Dodgers into bankruptcy.", source: "https://www.cbsnews.com/news/mccourts-ok-divorce-settlement-he-gets-dodgers/" },
  { a: "Garth Brooks", b: "Sandy Mahl", payer: "m", year: 2001, amount: 125000000, est: true, married: 1986, ended: 2001, cat: "music", emoji: "🪕", fact: "Sandy co-wrote his 1993 hit 'That Summer.'", source: "https://www.hellomagazine.com/celebrities/514994/what-happened-to-garth-brooks-ex-wife-their-relationship-today/" },
  { a: "Jim Clark", b: "Nancy Rutter", payer: "m", year: 2006, amount: 125000000, est: true, cat: "tech", emoji: "🌐", fact: "Clark vowed that if he ever remarried, 'it'll be with a pre-nup.'", source: "https://dealbreaker.com/2006/11/netscape-founder-jim-clarks-125m-divorce" },
  { a: "Greg Norman", b: "Laura Andrassy", payer: "m", year: 2007, amount: 103000000, married: 1981, ended: 2007, cat: "sports", emoji: "⛳", fact: "The Great White Shark paid about $103M after 25 years.", source: "https://www.espn.com/golf/news/story?id=3482412" },
  { a: "Tiger Woods", b: "Elin Nordegren", payer: "m", year: 2010, amount: 100000000, est: true, married: 2004, ended: 2010, cat: "sports", emoji: "🏌️", fact: "The reported figure. Tabloid rumors ran much, much higher.", source: "https://heavy.com/sports/golf/tiger-woods-ex-wife-elin-nordegren/" },
  { a: "Steven Spielberg", b: "Amy Irving", payer: "m", year: 1989, amount: 100000000, est: true, married: 1985, ended: 1989, cat: "screen", emoji: "🦖", fact: "Hollywood legend says their prenup was scribbled on a napkin, and a judge tossed it.", source: "https://www.foxnews.com/entertainment/10-mega-celebrity-divorce-settlements" },
  { a: "Dr. Dre", b: "Nicole Young", payer: "m", year: 2021, amount: 100000000, married: 1996, ended: 2021, cat: "music", emoji: "🎧", fact: "Dre had a prenup. The payout was still $100M.", source: "https://www.nbcnews.com/news/us-news/dr-dre-finalizes-divorce-100-million-settlement-n1286739" },
  { a: "Ted Waitt", b: "Joan Waitt", payer: "m", year: 2008, amount: 100000000, est: true, ended: 2008, cat: "tech", emoji: "🐄", fact: "Forbes partly blamed it for a $400M drop in his net worth that year.", source: "https://www.forbes.com/2008/11/26/billionaires-divorce-ecclestone-biz-billies-cx_ts_1126billiedivorce.html" },
  { a: "John Charman", b: "Beverley Charman", payer: "m", year: 2007, amount: 95000000, orig: "£48M", award: true, cat: "finance", emoji: "☂️", fact: "He offered £20M because she'd been 'a housewife' and called the bigger award 'grotesque.'", source: "https://caselaw.nationalarchives.gov.uk/ewca/civ/2007/503" },
  { a: "James Packer", b: "Erica Packer", payer: "m", year: 2013, amount: 90000000, orig: "A$100M (reported)", est: true, cat: "biz", emoji: "🎲", fact: "She soon bought a $13.5M Bel Air mansion.", source: "https://www.sbs.com.au/news/article/erica-packer-buys-family-home-in-la/71c1ob4sc" },
  { a: "Bruce Willis", b: "Demi Moore", payer: "m", year: 2000, amount: 90000000, est: true, married: 1987, ended: 2000, cat: "screen", emoji: "💥", fact: "Moore wrote that they felt more connected after the divorce than before it.", source: "https://www.yahoo.com/entertainment/demi-moores-net-worth-huge-213700725.html" },
  { a: "Harrison Ford", b: "Melissa Mathison", payer: "m", year: 2004, amount: 85000000, est: true, married: 1983, ended: 2004, cat: "screen", emoji: "🤠", fact: "Plus a cut of future earnings from films he made while they were married.", source: "https://www.forbes.com/2008/12/16/celebrity-divorce-madonna-biz-media-cz_ls_1216celebdivorces_slide.html" },
  { a: "Prince Karim Aga Khan IV", b: "Princess Gabriele zu Leiningen (ex-Begum Inaara Aga Khan)", payer: "m", year: 2011, amount: 83000000, orig: "€60M (later superseded)", est: true, award: true, ended: 2014, cat: "royal", emoji: "🏇", fact: "A French court blamed him for the breakup; the final 2014 deal stayed confidential.", source: "https://www.dawn.com/news/1093281/aga-khan-divorces-german-princess" },
  { a: "Kevin Costner", b: "Cindy Silva", payer: "m", year: 1994, amount: 80000000, est: true, married: 1978, ended: 1994, cat: "screen", emoji: "🌽", fact: "If you build it, she gets half.", source: "https://www.foxbusiness.com/entertainment/kevin-costners-previous-divorce-wife-most-expensive-hollywood-history" },
  { a: "Ronald Perelman", b: "Claudia Cohen", payer: "m", year: 1994, amount: 80000000, est: true, married: 1985, ended: 1994, cat: "finance", emoji: "💄", fact: "They stayed close; Perelman was later named executor of her estate.", source: "https://variety.com/2007/scene/people-news/claudia-cohen-gossip-columnist-56-1117967267/" },
  { a: "Khoo Kay Peng", b: "Pauline Chai", payer: "m", year: 2017, amount: 80000000, orig: "£64M", award: true, married: 1970, ended: 2017, cat: "biz", emoji: "👗", fact: "The former Miss Malaysia won the fight to have the case heard in London rather than Malaysia.", source: "https://www.malaysiakini.com/news/378390" },
  { a: "Madonna", b: "Guy Ritchie", payer: "f", year: 2008, amount: 76000000, orig: "£50–60M", est: true, married: 2000, ended: 2008, cat: "music", emoji: "💃", fact: "Reported at £50–60M, homes included. She was the one paying.", source: "https://www.today.com/popculture/madonna-settles-ritchie-76-million-1C9408761" },
  { a: "Walid Juffali", b: "Christina Estrada", payer: "m", year: 2016, amount: 69000000, orig: "£53M", award: true, ended: 2014, cat: "biz", emoji: "💎", fact: "He tried to claim diplomatic immunity; his opening offer was £17M.", source: "https://www.malaymail.com/news/life/2016/07/09/ex-model-christina-estrada-wins-53m-in-divorce-from-saudi-billionaire/1158399" },
  { a: "Veronica Lario", b: "Silvio Berlusconi", payer: "f", year: 2019, amount: 67000000, orig: "~€60M (alimony ordered repaid)", est: true, award: true, ended: 2014, cat: "biz", emoji: "🏛️", fact: "Courts first set her alimony at €3M a month, then ordered her to hand back about €60M.", source: "https://en.wikipedia.org/wiki/Veronica_Lario" },
  { a: "Kenny Rogers", b: "Marianne Gordon", payer: "m", year: 1993, amount: 60000000, married: 1977, ended: 1993, cat: "music", emoji: "🃏", fact: "The Gambler, indeed.", source: "https://www.yahoo.com/entertainment/celebrity/articles/kenny-rogers-marriage-ended-40-190000594.html" },
  { a: "James Cameron", b: "Linda Hamilton", payer: "m", year: 1999, amount: 50000000, est: true, married: 1997, ended: 1999, cat: "screen", emoji: "🚢", fact: "The marriage fell apart about 18 months in. Terminated.", source: "https://www.forbes.com/2008/12/16/celebrity-divorce-madonna-biz-media-cz_ls_1216celebdivorces_slide.html" },
  { a: "George Lucas", b: "Marcia Lucas", payer: "m", year: 1983, amount: 50000000, est: true, married: 1969, ended: 1983, cat: "screen", emoji: "🌌", fact: "Marcia won an Oscar for editing the original Star Wars.", source: "https://www.rogerebert.com/tributes/the-woman-who-saved-star-wars-marcia-lucas-1945-2026" },
  { a: "Paul McCartney", b: "Heather Mills", payer: "m", year: 2008, amount: 48600000, orig: "£24.3M", award: true, married: 2002, ended: 2008, cat: "music", emoji: "🎸", fact: "She asked for £125M, got £24.3M, and tipped a jug of water over his lawyer.", source: "https://edition.cnn.com/2008/SHOWBIZ/Music/03/18/mccartney.mills/" },
  { a: "Phil Collins", b: "Orianne Cevey", payer: "m", year: 2008, amount: 46700000, orig: "£25M", est: true, married: 1999, ended: 2008, cat: "music", emoji: "🥁", fact: "Billed as Britain's priciest celebrity divorce at the time. You can't hurry love, but you can pay for it.", source: "https://www.irishtimes.com/news/singer-pays-25m-divorce-settlement-1.932027" },
  { a: "Michael Douglas", b: "Diandra Luker", payer: "m", year: 2000, amount: 45000000, est: true, married: 1977, ended: 2000, cat: "screen", emoji: "🎭", fact: "She later sued for a slice of his Wall Street sequel money.", source: "https://www.hollywoodreporter.com/movies/movie-news/michael-douglas-wife-diandra-loses-203073/" },
  { a: "Vladimir Potanin", b: "Natalia Potanina", payer: "m", year: 2014, amount: 41500000, est: true, award: true, ended: 2014, cat: "biz", emoji: "🔩", fact: "She's now pursuing a London claim reportedly worth up to $5B; he's under UK sanctions.", source: "https://www.birketts.co.uk/legal-update/potanina-v-potanin-a-landmark-case-in-international-divorce-proceedings/" },
  { a: "Ant McPartlin", b: "Lisa Armstrong", payer: "m", year: 2020, amount: 40000000, orig: "£31M (reported)", est: true, married: 2006, cat: "screen", emoji: "🐕", fact: "Reports said the deal included shared custody of their chocolate labrador, Hurley.", source: "https://www.heart.co.uk/showbiz/celebrities/ant-and-dec/ant-mcpartlin-ex-wife-lisa-armstrong-divorce/" },
  { a: "Chris Rock", b: "Malaak Compton-Rock", payer: "m", year: 2016, amount: 40000000, est: true, ended: 2016, cat: "screen", emoji: "😂", fact: "Rock dubbed his 2017 Total Blackout Tour 'the alimony tour.'", source: "https://www.hellomagazine.com/us/922402/chris-rock-reveals-unexpected-financial-state-after-40-million-divorce/" },
  { a: "Bob Dylan", b: "Sara Dylan", payer: "m", year: 1977, amount: 36000000, est: true, married: 1965, ended: 1977, cat: "music", emoji: "🎶", fact: "Reportedly about half his worth; her lawyer was 'palimony' pioneer Marvin Mitchelson.", source: "https://www.uncut.co.uk/features/shelter-from-the-storm-the-inside-story-of-bob-dylan-s-blood-on-the-tracks-15656/" },
  { a: "Scot Young", b: "Michelle Young", payer: "m", year: 2013, amount: 32000000, orig: "£20M", award: true, cat: "biz", emoji: "🕵️", fact: "He swore he was broke; the judge found £40M, yet she said she never received a penny.", source: "https://www.nbcnews.com/news/other/penniless-man-worth-65-million-judge-rules-british-divorce-case-f2D11641340" },
  { a: "Prince Karim Aga Khan IV", b: "Princess Salimah Aga Khan (Sally Croker-Poole)", payer: "m", year: 1995, amount: 31000000, orig: "£20M (reported)", est: true, married: 1969, ended: 1995, cat: "royal", emoji: "💍", fact: "Her jewels then sold at Christie's in Geneva for $27.7M.", source: "https://www.cbc.ca/news/world/the-aga-khan-6-things-to-know-about-the-wealthy-spiritual-leader-1.2435214" },
  { a: "Ted Danson", b: "Casey Coates", payer: "m", year: 1993, amount: 30000000, est: true, married: 1977, ended: 1993, cat: "screen", emoji: "🍺", fact: "Where everybody knows your net worth.", source: "https://www.marieclaire.com/culture/most-expensive-celebrity-divorces/" },
  { a: "Kelsey Grammer", b: "Camille Grammer Meyer", payer: "m", year: 2012, amount: 30000000, est: true, married: 1997, ended: 2011, cat: "screen", emoji: "📻", fact: "Camille later said: 'Thank God I didn't have a prenup.'", source: "https://foxnews.com/entertainment/camille-grammer-to-get-30m-in-divorce-settlement-with-kelsey-grammer-report-says" },
  { a: "Prince Charles", b: "Princess Diana", payer: "m", year: 1996, amount: 27000000, orig: "£17M", est: true, married: 1981, ended: 1996, cat: "royal", emoji: "👑", fact: "Lump sum of about £17M, plus roughly £400K a year to run her office.", source: "https://www.upi.com/Archives/1996/07/12/British-royals-reach-divorce-terms/5542837144000/" },
  { a: "Clint Eastwood", b: "Maggie Johnson", payer: "m", year: 1984, amount: 25000000, est: true, married: 1953, ended: 1984, cat: "screen", emoji: "🌵", fact: "After 31 years. Go ahead, make her day.", source: "https://finance.yahoo.com/news/clint-eastwood-incredible-net-worth-090000999.html" },
  { a: "Donald Trump", b: "Ivana Trump", payer: "m", year: 1990, amount: 25000000, est: true, married: 1977, ended: 1990, cat: "biz", emoji: "🏙️", fact: "The prenup held: about $14M cash, a Connecticut mansion and alimony.", source: "https://www.baltimoresun.com/1991/03/25/at-last-donald-and-ivana-trump-officially-settle-their-divorce-deal/" },
  { a: "John Kluge", b: "Patricia Kluge", payer: "m", year: 1990, amount: 25000000, est: true, ended: 1990, cat: "biz", emoji: "🏰", fact: "Tabloids claimed $160M a year; she later lost the estate and filed for bankruptcy.", source: "https://www.seattletimes.com/life/lifestyle/patricia-kluge-loses-fortune-but-not-her-resolve/" },
  { a: "Noel Gallagher", b: "Sara MacDonald", payer: "m", year: 2023, amount: 24000000, orig: "£20M (reported)", est: true, married: 2011, cat: "music", emoji: "🍾", fact: "A family-law firm reckoned the Oasis reunion tour would almost exactly refill the gap.", source: "https://www.scotsman.com/arts-and-culture/music/who-is-sara-macdonald-the-scottish-ex-wife-of-oasis-star-noel-gallagher-4757652" },
  { a: "John Cleese", b: "Alyce Faye Eichelberger", payer: "m", year: 2008, amount: 20000000, married: 1992, ended: 2008, cat: "screen", emoji: "🦜", fact: "He went on an actual 'Alimony Tour' to pay for it.", source: "https://news24.com/channel/john-cleese-has-finally-finished-paying-off-his-wife-20151127" },
  { a: "Lionel Richie", b: "Diane Alexander", payer: "m", year: 2004, amount: 20000000, est: true, married: 1996, ended: 2004, cat: "music", emoji: "🎹", fact: "All night long, the lawyers billed.", source: "https://www.buzzfeed.com/kristenharris1/expensive-celebrity-divorces" },
  { a: "Robin Williams", b: "Marsha Garces", payer: "m", year: 2010, amount: 20000000, est: true, married: 1989, ended: 2010, cat: "screen", emoji: "🧞", fact: "Reports range from $20M to over $30M. He joked divorce rips your heart out through your wallet.", source: "https://www.huffpost.com/entry/robin-williams_n_3923027" },
  { a: "Elon Musk", b: "Justine Musk", payer: "m", year: 2008, amount: 20000000, est: true, married: 2000, ended: 2008, cat: "tech", emoji: "🚗", fact: "By Elon's account she got about $20M after taxes, half of it their Bel Air house. Her asks for Tesla and SpaceX stock and a Roadster went nowhere.", source: "https://www.forbes.com/sites/kerryadolan/2025/04/18/what-elon-musks-first-wife-isnt-even-close-to-being-a-billionaire/" },
  { a: "Johnny Carson", b: "Joanna Carson (Joanna Holland)", payer: "m", year: 1985, amount: 20000000, est: true, married: 1972, ended: 1985, cat: "screen", emoji: "🌃", fact: "She asked for $220,000 a month in support and got $35,000.", source: "https://www.hellomagazine.com/brides/848557/johnny-carson-whirlwind-third-marriage-divorce-20million/" },
  { a: "Seema Boesky", b: "Ivan Boesky", payer: "f", year: 1993, amount: 20000000, ended: 1993, cat: "finance", emoji: "📉", fact: "The disgraced arbitrageur had asked for $20,000 a week in 'interim financial support.'", source: "https://www.tampabay.com/archive/1993/06/10/boesky-settles-for-20-million-from-ex-wife/" },
  { a: "Matt Lauer", b: "Annette Roque", payer: "m", year: 2019, amount: 20000000, est: true, married: 1998, ended: 2019, cat: "screen", emoji: "🐴", fact: "She also kept their Hamptons horse farm in Water Mill.", source: "https://www.etonline.com/matt-lauer-has-agreed-to-pay-annette-roque-20-million-in-divorce-settlement-source-says-108035" },
  { a: "Eike Batista", b: "Luma de Oliveira", payer: "m", year: 2004, amount: 20000000, est: true, married: 1991, ended: 2004, cat: "biz", emoji: "⛏️", fact: "She later sued, claiming he'd left a gold mine out of the asset split.", source: "https://www.purepeople.com.br/noticia/luma-de-oliveira-recebeu-apos-separacao-de-eike-batista-casas-e-us-20-milhoes_a33030/1" },
  { a: "Elon Musk", b: "Talulah Riley", payer: "m", year: 2016, amount: 16000000, est: true, cat: "tech", emoji: "🚀", fact: "They married each other twice, in 2010 and again in 2013.", source: "https://www.upi.com/Business_News/2015/01/01/Actress-Talulah-Riley-gets-16M-in-second-divorce-from-Elon-Musk-in-three-years/8771420128423" },
  { a: "Michael Strahan", b: "Jean Muggli", payer: "m", year: 2007, amount: 15300000, award: true, married: 1999, cat: "sports", emoji: "🏈", fact: "The judge also set child support at $18,000 a month for their daughters.", source: "https://www.tmz.com/2019/09/16/michael-strahan-ex-wife-jean-muggli-child-support/" },
  { a: "Jeff Gordon", b: "Brooke Sealey", payer: "m", year: 2003, amount: 15300000, ended: 2003, cat: "sports", emoji: "🏁", fact: "Settled after a 12-hour court-ordered mediation, averting a six-day trial.", source: "https://www.espn.com/rpm/wc/2003/0822/1601175.html" },
  { a: "Eddie Murphy", b: "Nicole Mitchell", payer: "m", year: 2006, amount: 15000000, est: true, married: 1993, ended: 2006, cat: "screen", emoji: "🫏", fact: "Thirteen years and five kids.", source: "https://www.huffpost.com/entry/eddie-murphy-ex-in-debt_n_801989" },
  { a: "Mick Jagger", b: "Jerry Hall", payer: "m", year: 1999, amount: 15000000, est: true, cat: "music", emoji: "💋", fact: "A London court ruled their 1990 Bali wedding was never legally valid.", source: "https://www.irishtimes.com/news/jagger-and-hall-finally-split-1.205031" },
  { a: "Henry Ford II", b: "Cristina Ford", payer: "m", year: 1980, amount: 15000000, est: true, married: 1965, ended: 1980, cat: "biz", emoji: "🚙", fact: "Ford had divorced his wife of 24 years in 1964 to marry the Italian jet-setter.", source: "https://time.com/archive/6710528/henry-ford-ii-1917-1987-my-name-is-on-the-building/" },
  { a: "Harvey Weinstein", b: "Georgina Chapman", payer: "m", year: 2018, amount: 15000000, est: true, married: 2007, ended: 2021, cat: "screen", emoji: "🎞️", fact: "Their reported prenup set spousal support at $300K a year, rising to $400K after 10 years of marriage.", source: "https://www.eonline.com/news/905856/georgina-chapman-set-to-receive-15-20-million-in-harvey-weinstein-divorce-settlement" },
  { a: "Boris Becker", b: "Barbara Becker", payer: "m", year: 2001, amount: 14400000, est: true, ended: 2001, cat: "sports", emoji: "🎾", fact: "She filed in Miami claiming abandonment; he countered by filing in Germany.", source: "https://edition.cnn.com/2001/WORLD/europe/germany/01/14/beckers.divorce/index.html" },
  { a: "Jennifer Lopez", b: "Cris Judd", payer: "f", year: 2003, amount: 14000000, est: true, married: 2001, ended: 2003, cat: "music", emoji: "👠", fact: "They split after just eight months; confidentiality deals kept the official terms secret.", source: "https://www.mtv.com/news/iucpkp/jennifer-lopez-files-for-divorce" },
  { a: "Lee Boo-jin", b: "Lim Woo-jae", payer: "f", year: 2019, amount: 11800000, orig: "₩14.1B", award: true, married: 1999, ended: 2020, cat: "biz", emoji: "🏨", fact: "He'd sought about ₩1.2 trillion, half her claimed fortune; he got ₩14.1 billion.", source: "https://www.koreaherald.com/article/2112675" },
  { a: "Ronnie Wood", b: "Jo Wood", payer: "m", year: 2009, amount: 10700000, orig: "£6.5M", est: true, married: 1985, cat: "music", emoji: "🎼", fact: "Julien's said its 2012 sale of the pair's rock memorabilia, incl. a $60,800 Strat, was part of the settlement.", source: "https://www.nbcnews.com/pop-culture/pop-culture-news/rolling-stones-guitarist-ronnie-wood-auctions-memorabilia-artwork-flna1B6737499" },
  { a: "Christina Onassis", b: "Thierry Roussel", payer: "f", year: 1987, amount: 10300000, est: true, married: 1984, ended: 1987, cat: "biz", emoji: "⚓", fact: "On top of $10.3M, she reportedly pledged him $1.2M a year for 18 years.", source: "https://www.irishtimes.com/news/greek-tragedy-for-athina-1.1257595" },
  { a: "Janet Jackson", b: "René Elizondo Jr.", payer: "f", year: 2003, amount: 10000000, est: true, married: 1991, cat: "music", emoji: "🤫", fact: "They married secretly in 1991; the public learned of it only when he filed in 2000.", source: "https://www.cheatsheet.com/news/janet-jackson-rene-elizondo-jr-divorce-payment.html/" },
  { a: "Alan Miller", b: "Melissa Miller", payer: "m", year: 2006, amount: 9400000, orig: "£5M", award: true, cat: "finance", emoji: "💷", fact: "The marriage lasted under three years; he had offered £1.7M.", source: "https://www.csmonitor.com/2006/0525/p04s02-woeu.html" },
  { a: "Michael Jackson", b: "Debbie Rowe", payer: "m", year: 1999, amount: 8500000, married: 1996, ended: 1999, cat: "music", emoji: "🧤", fact: "Reported at $8.5M after three years.", source: "https://www.today.com/popculture/details-rowe-jackson-custody-revealed-wbna31854805" },
  { a: "Liam Gallagher", b: "Nicole Appleton", payer: "m", year: 2015, amount: 8000000, orig: "£5.4M", award: true, married: 2008, ended: 2014, cat: "music", emoji: "🧥", fact: "The judge called their £800K-plus legal bill 'manifestly excessive.'", source: "https://www.nme.com/news/music/liam-gallagher-27-1201041" },
  { a: "Hulk Hogan (Terry Bollea)", b: "Linda Hogan", payer: "m", year: 2009, amount: 7440000, ended: 2009, cat: "sports", emoji: "🤼", fact: "She also kept a Rolls-Royce, a Corvette and an Escalade, plus 40% of his businesses.", source: "https://www.eonline.com/news/276772/hulk-and-linda-hogan-s-divorce-settlement-revealed" },
  { a: "Johnny Depp", b: "Amber Heard", payer: "m", year: 2016, amount: 7000000, months: 15, cat: "screen", emoji: "🏴‍☠️", fact: "Married just 15 months.", source: "https://www.cbsnews.com/news/johnny-depp-and-amber-heard-finalize-divorce/" },
  { a: "Chris Evert", b: "Andy Mill", payer: "f", year: 2006, amount: 7000000, married: 1988, ended: 2006, cat: "sports", emoji: "🏔️", fact: "Evert later wed Mill's onetime best friend, golfer Greg Norman; that marriage lasted about 15 months.", source: "https://www.upi.com/Sports_News/2006/12/05/Chris-Evert-to-pay-7-million-in-divorce/89831165362695/" },
  { a: "Mike Tyson", b: "Monica Turner", payer: "m", year: 2003, amount: 6500000, ended: 2003, cat: "sports", emoji: "🥊", fact: "Tyson called an earlier deal invalid because her brother, Lt. Gov.-elect Michael Steele, helped draft it.", source: "https://www.espn.com/boxing/news/2003/0113/1491959.html" },
  { a: "Winthrop Rockefeller", b: "Barbara 'Bobo' Rockefeller", payer: "m", year: 1954, amount: 5500000, married: 1948, ended: 1954, cat: "biz", emoji: "🧹", fact: "Mid-split, she told Time a 'cruel' merchant was trying to repossess her $100 vacuum cleaner.", source: "https://www.seattletimes.com/nation-world/miners-daughter-wound-up-a-rockefeller-got-big-divorce-settlement/" },
  { a: "Tom Cruise", b: "Katie Holmes", payer: "m", year: 2012, amount: 4800000, married: 2006, ended: 2012, cat: "screen", emoji: "🛋️", fact: "Reported as $400K a year in child support until their daughter turns 18.", source: "https://www.hollywoodreporter.com/news/general-news/tom-cruise-katie-holmes-child-support-365344/" },
  { a: "Andrew Mountbatten-Windsor", b: "Sarah Ferguson", payer: "m", year: 1996, amount: 3000000, orig: "£2M (reported)", est: true, ended: 1996, cat: "royal", emoji: "🫖", fact: "About $2.1M of the reported $3M went into trust for Princesses Beatrice and Eugenie.", source: "https://www.foxbusiness.com/lifestyle/who-is-prince-andrews-ex-wife-duchess-of-york-sarah-ferguson" },
  { a: "Barbara Hutton", b: "Porfirio Rubirosa", payer: "f", year: 1954, amount: 2500000, est: true, married: 1953, ended: 1954, cat: "biz", emoji: "🛩️", fact: "The marriage lasted 53 days; he also left with a plane and polo ponies.", source: "https://www.yahoo.com/lifestyle/articles/1billion-0-tragic-downfall-woolworth-133000150.html", marriedDays: 53 },
  { a: "Christie Brinkley", b: "Peter Cook", payer: "f", year: 2008, amount: 2100000, ended: 2008, cat: "screen", emoji: "🏖️", fact: "She kept all 18 disputed Hamptons properties; he got none of the boats.", source: "https://www.cbsnews.com/news/christie-brinkley-divorce-case-settled/" },
  { a: "Sunjay Kapur", b: "Karisma Kapoor", payer: "m", year: 2016, amount: 2100000, orig: "₹14 crore in bonds + a house", est: true, married: 2003, ended: 2016, cat: "screen", emoji: "🎥", fact: "Settled in India's Supreme Court, which also quashed her harassment FIR against him and his mother.", source: "https://www.indiatvnews.com/entertainment/bollywood-karisma-kapoor-sunjay-kapur-divorce-settlement-323040" },
  { a: "Donald Trump", b: "Marla Maples", payer: "m", year: 1999, amount: 2000000, married: 1993, ended: 1999, cat: "biz", emoji: "📜", fact: "An ironclad prenup kept it to about $2M.", source: "https://www.yahoo.com/entertainment/donald-trumps-ironclad-prenup-marla-182758844.html" },
  { a: "Steve Harvey", b: "Mary Shackelford", payer: "m", year: 2005, amount: 1500000, married: 1996, ended: 2005, cat: "screen", emoji: "👔", fact: "She later sued him for $60M alleging 'soul murder'; a judge threw it out.", source: "https://www.huffpost.com/entry/steve-harveys-court-docum_n_820370" },
  { a: "Kevin Costner", b: "Christine Baumgartner", payer: "m", year: 2023, amount: 1500000, est: true, married: 2004, ended: 2024, cat: "screen", emoji: "🧾", fact: "A judge ruled any child support over $63,209 a month was 'disguised spousal support.'", source: "https://www.foxnews.com/entertainment/kevin-costners-divorce-judge-slams-christines-bid-more-child-support-disguised-spousal-support" },
  { a: "Kelly Clarkson", b: "Brandon Blackstock", payer: "f", year: 2022, amount: 1300000, married: 2013, ended: 2022, cat: "music", emoji: "🎙️", fact: "She paid him a $1.3M lump sum, plus $115K a month in spousal support through January 2024 and about $45.6K a month in child support.", source: "https://www.cnn.com/2022/03/09/entertainment/kelly-clarkson-divorce-settlement/index.html" },
  { a: "Ariana Grande", b: "Dalton Gomez", payer: "f", year: 2024, amount: 1250000, married: 2021, ended: 2024, cat: "music", emoji: "🎀", fact: "She also gave him half the proceeds from selling their Los Angeles home.", source: "https://gulfnews.com/entertainment/music/ariana-grande-and-dalton-gomez-are-now-divorced-1.1710828765822" },
  { a: "Saif Ali Khan", b: "Amrita Singh", payer: "m", year: 2004, amount: 1100000, orig: "₹5 crore", married: 1991, ended: 2004, cat: "screen", emoji: "🍿", fact: "Saif: 'I'm not Shah Rukh Khan. I don't have that kind of money.'", source: "https://www.india.com/entertainment/saif-ali-khan-on-alimony-post-his-divorce-with-amrita-singh-im-not-shah-rukh-khan-i-dont-have-that-kind-of-money-2160735/" },
  { a: "Britney Spears", b: "Kevin Federline", payer: "f", year: 2007, amount: 1000000, est: true, ended: 2007, cat: "music", emoji: "🐍", fact: "Tabloids claimed he wanted $50M; reports put his lump sum nearer $1M.", source: "https://www.today.com/news/k-fed-reportedly-gets-1-million-divorce-wbna17863807" },
  { a: "David Bowie", b: "Angie Bowie", payer: "m", year: 1980, amount: 750000, est: true, ended: 1980, cat: "music", emoji: "⚡", fact: "A gag clause barred her from writing about him for 10 years; her memoir came in 1993.", source: "http://articles.baltimoresun.com/1993-03-17/features/1993076150_1_angela-bowie-star-david-bowie-divorce" },
  { a: "Elvis Presley", b: "Priscilla Presley", payer: "m", year: 1973, amount: 725000, married: 1967, ended: 1973, cat: "music", emoji: "🕺", fact: "She also got 5% of the stock in two of Elvis's music publishing companies.", source: "https://parade.com/celebrities/elvis-presley-priscilla-divorce-settlement" },
  { a: "Marvin Gaye", b: "Anna Gordy Gaye", payer: "m", year: 1977, amount: 600000, cat: "music", emoji: "💿", fact: "He paid her from his next album's advance and royalties, then titled it 'Here, My Dear.'", source: "https://www.snopes.com/fact-check/here-my-dear/" },
  { a: "Yuzvendra Chahal", b: "Dhanashree Verma", payer: "m", year: 2025, amount: 550000, orig: "₹4.75 crore", married: 2020, ended: 2025, cat: "sports", emoji: "🏏", fact: "The Bombay HC waived the cooling-off period and ordered a decision before his IPL 2025 season.", source: "https://theprint.in/sport/yuzvendra-chahal-dhanashree-verma-granted-divorce-cricketer-to-pay-ex-wife-rs-4-75-crore-alimony/2557171/" },
  { a: "Melanie Brown (Mel B)", b: "Stephen Belafonte", payer: "f", year: 2017, amount: 500000, est: true, married: 2007, ended: 2017, cat: "music", emoji: "🌶️", fact: "She paid $15,000 a month in spousal support through 2020, plus his legal fees.", source: "https://newsone.com/3764838/americas-got-talent-judge-mel-b-to-pay-ex-husband-stephen-belafonte-500000-spousal-support/" },
  { a: "John Lennon", b: "Cynthia Lennon", payer: "m", year: 1968, amount: 240000, orig: "£100,000", ended: 1968, cat: "music", emoji: "🕶️", fact: "John's first offer was £75,000; he raised it to £100,000.", source: "https://www.beatlesbible.com/1968/11/08/john-and-cynthia-lennon-are-divorced/" },
];

// Famous splits whose price tags stayed sealed.
window.VAULT = [
  { a: "Arnold Schwarzenegger", b: "Maria Shriver", year: 2021, emoji: "💪", note: "No prenup in California, and a ten-year path to final." },
  { a: "Brad Pitt", b: "Angelina Jolie", year: 2024, emoji: "🍷", note: "Eight years of litigation, with a French winery fight on the side." },
  { a: "Rupert Murdoch", b: "Jerry Hall", year: 2022, emoji: "📺", note: "She reportedly agreed not to pitch storylines to the Succession writers." },
  { a: "Rupert Murdoch", b: "Wendi Deng", year: 2013, emoji: "🥧", note: "Settled in one brief hearing. Terms private." },
  { a: "Ken Griffin", b: "Anne Dias", year: 2015, emoji: "📈", note: "A hedge-fund prenup fight that settled a day into the trial." },
  { a: "Ted Turner", b: "Jane Fonda", year: 2001, emoji: "🦬", note: "Media mogul meets movie star. Amount never made public." },
];

// Real-world stats about the money in divorce and alimony.
window.FACTS = [
  { year: "2019", emoji: "💸", source: "Martindale-Nolo Research survey (via The Motley Fool)", big: "$11,300", label: "Average attorney fees per spouse in a US divorce", note: "Self-reported by survey respondents with full-scope representation; the median was $7,000.", group: "money", url: "https://www.fool.com/money/research/average-cost-of-divorce/" },
  { year: "2019", emoji: "🕊️", source: "Martindale-Nolo Research survey (via The Motley Fool)", big: "$4,100", label: "Average total cost when nothing is contested", note: "Divorces with no major contested issues; cases settled out of court before trial averaged $10,600.", group: "money", url: "https://www.fool.com/money/research/average-cost-of-divorce/" },
  { year: "2019", emoji: "⚖️", source: "Martindale-Nolo Research survey (via The Motley Fool)", big: "$20,379", label: "Average cost when at least one issue goes to trial", note: "Going to trial on two or more issues pushed the average to $23,300.", group: "money", url: "https://www.fool.com/money/research/average-cost-of-divorce/" },
  { year: "2019", emoji: "⏱️", source: "Martindale-Nolo Research survey (via The Motley Fool)", big: "$270/hr", label: "Average divorce lawyer rate (2019 survey)", note: "11% paid about $100/hr, 35% about $300/hr, and 20% paid $400/hr or more.", group: "money", url: "https://www.fool.com/money/research/average-cost-of-divorce/" },
  { year: "2026", emoji: "📈", source: "Clio, Compare Lawyer Rates (Legal Trends)", big: "$357/hr", label: "Average US family-law lawyer hourly rate", note: "From Clio's billing data across firms; the average across all practice areas is $362/hr.", group: "money", url: "https://www.clio.com/resources/legal-trends/compare-lawyer-rates/" },
  { year: "2025", emoji: "🏢", source: "IBISWorld, Family Law & Divorce Lawyers in the US", big: "$13.1B", label: "Annual revenue of US family law & divorce lawyers", note: "IBISWorld estimate, down 2.7% in 2025 as divorce rates fall; roughly 56,800 businesses in the industry.", group: "money", url: "https://www.ibisworld.com/united-states/market-size/family-law-divorce-lawyers-attorneys/4814/" },
  { year: "2024", emoji: "🏛️", source: "FindLaw (via The Motley Fool)", big: "$435", label: "Priciest state divorce filing fee (California)", note: "The cheapest is North Dakota at $80; several states set the fee county by county.", group: "money", url: "https://www.fool.com/money/research/average-cost-of-divorce/" },
  { year: "2023", emoji: "🏚️", source: "Pew Research Center, 8 facts about divorce (Oct 2025)", big: "$98,700", label: "Median wealth of divorced working-age adults", note: "vs. $326,900 for adults in a first marriage. Median household income: $84,900 vs. $118,600.", group: "money", url: "https://www.pewresearch.org/short-reads/2025/10/16/8-facts-about-divorce-in-the-united-states/" },
  { year: "2017", emoji: "🏦", source: "IRS Statistics of Income, Individual Income Tax Returns 2017", big: "$13.4B", label: "Alimony deducted on US federal tax returns", note: "586,323 returns claimed the deduction in tax year 2017, just before the TCJA ended it for new divorces.", group: "alimony", url: "https://www.irs.gov/pub/irs-soi/17inintaxreturns.pdf" },
  { year: "2017", emoji: "🧮", source: "IRS Statistics of Income, Individual Income Tax Returns 2017", big: "~$22,900", label: "Average alimony deduction per paying tax return", note: "Derived from IRS SOI: $13.436B in alimony deductions divided by 586,323 returns.", group: "alimony", url: "https://www.irs.gov/pub/irs-soi/17inintaxreturns.pdf" },
  { year: "2016", emoji: "🔍", source: "Treasury Inspector General for Tax Administration, Report 2019-40-048", big: "$3.2B", label: "Alimony deducted by payers but never reported as income", note: "TIGTA audit: the payer-vs-recipient reporting gap grew 38% from $2.3B in 2010.", group: "alimony", url: "https://www.tigta.gov/sites/default/files/reports/2022-02/201940048fr.pdf" },
  { year: "2025", emoji: "👥", source: "US Census Bureau, CPS ASEC 2026, PINC-08 (alimony income)", big: "155,000", label: "Americans who reported receiving alimony income", note: "Census survey estimate (small sample, so treat it as approximate).", group: "alimony", url: "https://www.census.gov/data/tables/time-series/demo/income-poverty/cps-pinc/pinc-08.html" },
  { year: "2025", emoji: "💰", source: "US Census Bureau, CPS ASEC 2026, PINC-08 (alimony income)", big: "$19,090", label: "Median alimony received per year", note: "The mean was $54,670, a sign that a handful of very large awards skew the average.", group: "alimony", url: "https://www.census.gov/data/tables/time-series/demo/income-poverty/cps-pinc/pinc-08.html" },
  { year: "2025", emoji: "👩", source: "US Census Bureau, CPS ASEC 2026, PINC-08 (alimony income)", big: "95%", label: "Share of US alimony recipients who are women", note: "Derived: 148,000 of 155,000 recipients were women; about 7,000 were men.", group: "gender", url: "https://www.census.gov/data/tables/time-series/demo/income-poverty/cps-pinc/pinc-08.html" },
  { year: "2015", emoji: "🙋‍♀️", source: "American Sociological Association press release (Rosenfeld)", big: "69%", label: "US divorces initiated by women", note: "Stanford's Michael Rosenfeld (2009-15 survey data). For non-marital breakups there was no gender gap.", group: "gender", url: "https://www.asanet.org/wp-content/uploads/savvy/documents/press/pdfs/AM_2015_Rosenfeld_News_Release_FINAL.pdf" },
  { year: "2025", emoji: "🇬🇧", source: "ONS, Divorces and dissolutions in England and Wales: 2024 and 2025", big: "61%", label: "Sole divorce applications in England & Wales by women", note: "Opposite-sex sole applications: 61.2% from women, 35.6% from men, 3.2% sex not recorded.", group: "gender", url: "https://www.ons.gov.uk/peoplepopulationandcommunity/birthsdeathsandmarriages/divorce/bulletins/divorcesinenglandandwales/2024and2025" },
  { year: "2012", emoji: "📉", source: "US GAO, Retirement Security: Women Still Face Challenges (GAO-12-699)", big: "41%", label: "Drop in older women's household income after divorce", note: "GAO: almost twice the decline men saw, among people approaching or in retirement.", group: "gender", url: "https://www.gao.gov/products/gao-12-699" },
  { year: "2010", emoji: "👵", source: "Brown & Lin, The Gray Divorce Revolution, J. Gerontology B (2012)", big: "2x", label: "Rise in the 50+ divorce rate, 1990 to 2010", note: "4.9 to 10.1 divorces per 1,000 married persons aged 50+; for 65+ it nearly tripled (1.8 to 4.8).", group: "gender", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC3478728/" },
  { year: "2022", emoji: "🧓", source: "Bowling Green NCFMR, Family Profile FP-24-12", big: "~40%", label: "Share of divorcing Americans aged 50 or older", note: "Up from 8% in 1990. Median marriage length at a first gray divorce: 29 years.", group: "gender", url: "https://www.bgsu.edu/ncfmr/resources/data/family-profiles/FP-24-12.html" },
  { year: "2023", emoji: "📊", source: "Pew Research Center, 8 facts about divorce (Oct 2025)", big: "10.3", label: "Divorces per 1,000 married women aged 50+", note: "Up from 3.9 in 1990, peaking at 11.0 in 2008 and roughly flat since. (NCFMR puts 1990 at 4.9.)", group: "gender", url: "https://www.pewresearch.org/short-reads/2025/10/16/8-facts-about-divorce-in-the-united-states/" },
  { year: "2024", emoji: "⚖️", source: "IRS Publication 555", big: "9", label: "US community property states", note: "AZ, CA, ID, LA, NV, NM, TX, WA and WI treat most property earned during the marriage as owned 50/50.", group: "law", url: "https://www.irs.gov/publications/p555" },
  { year: "2018", emoji: "🧾", source: "IRS Publication 504", big: "2019", label: "New US alimony stopped being tax-deductible", note: "TCJA: for agreements signed after Dec 31, 2018, payers can't deduct it and recipients don't report it as income.", group: "law", url: "https://www.irs.gov/publications/p504" },
  { year: "2025", emoji: "🤠", source: "Texas Family Code §8.055 and §8.054", big: "$5,000", label: "Texas cap on court-ordered monthly maintenance", note: "Or 20% of the payer's average monthly gross income, whichever is less; terms are limited to 5-10 years.", group: "law", url: "https://statutes.capitol.texas.gov/Docs/FA/htm/FA.8.htm" },
  { year: "2023", emoji: "🌴", source: "Florida Statutes §61.08", big: "75%", label: "Florida's max alimony term, as a share of a long marriage", note: "2023's SB 1416 ended permanent alimony. Awards are also capped at 35% of the gap between the spouses' net incomes.", group: "law", url: "https://www.flsenate.gov/Laws/Statutes/2024/61.08" },
  { year: "2011", emoji: "🦞", source: "Mass. General Laws ch. 208 §49", big: "80%", label: "Massachusetts max alimony term, 15-20 yr marriage", note: "2011 reform: 50% of the marriage's months for 5 yrs or less, up to 80%; it ends at the payer's full retirement age.", group: "law", url: "https://malegislature.gov/Laws/GeneralLaws/PartII/TitleIII/Chapter208/Section49" },
  { year: "2025", emoji: "🌾", source: "Kansas Statutes §23-2904", big: "121 months", label: "Kansas: longest maintenance a court can order", note: "About 10 years; K.S.A. 23-2904 caps each award or reinstatement period at 121 months.", group: "law", url: "https://ksrevisor.gov/statutes/chapters/ch23/023_029_0004.html" },
  { year: "2024", emoji: "🏔️", source: "Utah Code §30-3-5(11)(e)", big: "1:1", label: "Utah: alimony can't outlast the marriage", note: "Courts may not order alimony longer than the marriage lasted, absent extenuating circumstances or good cause.", group: "law", url: "https://le.utah.gov/xcode/Title30/Chapter3/C30-3-S5_2024050120240501.html" },
  { year: "2024", emoji: "🎩", source: "Law Commission, Financial remedies on divorce (scoping report)", big: "No formula", label: "How England & Wales sets spousal support", note: "Judges use wide discretion under the 1973 Act; the Law Commission said in 2024 the law lacks certainty.", group: "law", url: "https://lawcom.gov.uk/project/financial-remedies-on-divorce/" },
  { year: "2025", emoji: "🤝", source: "ONS, Divorces and dissolutions in England and Wales: 2024 and 2025", big: "~26%", label: "No-fault divorces in England & Wales filed jointly", note: "Blame-free divorce began April 2022. In 2025, 94.2% of cases used the new law; 74.3% of those divorces had a sole applicant.", group: "law", url: "https://www.ons.gov.uk/peoplepopulationandcommunity/birthsdeathsandmarriages/divorce/bulletins/divorcesinenglandandwales/2024and2025" },
  { year: "2022", emoji: "📝", source: "The Harris Poll", big: "15%", label: "Married or engaged Americans who signed a prenup", note: "Up from just 3% in 2010, per The Harris Poll for The New Yorker (1,073 US adults).", group: "prenup", url: "https://theharrispoll.com/articles/popularity-of-prenups-rising-2022/" },
  { year: "2022", emoji: "💍", source: "Marketplace (reporting The Harris Poll)", big: "~40%", label: "Married or engaged 18-34-year-olds with a prenup", note: "vs. just 13% of those aged 45-54, in the same 2022 Harris Poll.", group: "prenup", url: "https://www.marketplace.org/story/2023/04/10/with-wedding-season-looming-prenup-season-is-upon-us" },
  { year: "2026", emoji: "🚀", source: "The Daily Upside (reporting Harris Poll for Bloomberg)", big: "53%", label: "Engaged or married Americans under 45 with a prenup", note: "Harris Poll for Bloomberg News, July 2026; up from 34% of millennials and 41% of Gen Z four years earlier.", group: "prenup", url: "https://www.thedailyupside.com/advisor/financial-planning/prenups-are-on-the-rise-heres-how-to-talk-about-them-with-clients/" },
  { year: "2021", emoji: "🏝️", source: "Maldives Bureau of Statistics, Vital Statistics Report 2024", big: "8.4", label: "Divorces per 1,000 people in the Maldives", note: "The national statistics office calls it the world's highest crude divorce rate (it was 9.5 in 2019).", group: "world", url: "https://statisticsmaldives.gov.mv/mbs/wp-content/uploads/2024/11/Vital-Statistics-Report-of-Maldives-2024.pdf" },
  { year: "2024", emoji: "🇵🇭", source: "Al Jazeera", big: "₱500,000", label: "Typical cost of an annulment in the Philippines", note: "About US$8,900 and ~2 years. Apart from the Vatican, it's the only place that doesn't recognize divorce.", group: "world", url: "https://www.aljazeera.com/economy/2024/9/30/in-the-philippines-costly-marriage-annulments-spur-calls-to-allow-divorce" },
  { year: "2023", emoji: "🇷🇺", source: "TASS (Rosstat data)", big: "723", label: "Divorces per 1,000 marriages in Russia", note: "Derived from Rosstat: 683,600 divorces vs. 946,000 marriages in 2023.", group: "world", url: "https://tass.com/society/1747759" },
  { year: "2024", emoji: "🇨🇳", source: "China Daily HK (Ministry of Civil Affairs bulletin)", big: "3.5M", label: "Couples who divorced in China", note: "Down from about 3.61 million in 2023; 2.5 divorces per 1,000 people (Ministry of Civil Affairs).", group: "world", url: "https://www.chinadailyhk.com/hk/article/617071" },
  { year: "2025", emoji: "⏳", source: "ONS, Divorces and dissolutions in England and Wales: 2024 and 2025", big: "13.0 yrs", label: "Median marriage length at divorce, England & Wales", note: "Opposite-sex couples; the longest since the series began in 1963. 105,002 divorces in 2025.", group: "world", url: "https://www.ons.gov.uk/peoplepopulationandcommunity/birthsdeathsandmarriages/divorce/bulletins/divorcesinenglandandwales/2024and2025" },
  { year: "2016", emoji: "📅", source: "University of Washington News", big: "March & Aug", label: "When US divorce filings peak each year", note: "UW sociologists found filings spike after winter and summer holidays (Washington state, 2001-2015).", group: "fun", url: "https://www.washington.edu/news/2016/08/21/is-divorce-seasonal-uw-research-shows-biannual-spike-in-divorce-filings/" },
  { year: "2023", emoji: "👫", source: "Pew Research Center, 8 facts about divorce (Oct 2025)", big: "1.8M", label: "Americans who got divorced in 2023", note: "Pew counts people. CDC counts 672,502 divorces (2 people each) in only 45 reporting states + DC.", group: "fun", url: "https://www.pewresearch.org/short-reads/2025/10/16/8-facts-about-divorce-in-the-united-states/" },
  { year: "2023", emoji: "💔", source: "Pew Research Center, 8 facts about divorce (Oct 2025)", big: "1 in 3", label: "Ever-married Americans whose first marriage ended in divorce", note: "Pew stresses this is not the same as saying 33% of marriages end in divorce.", group: "fun", url: "https://www.pewresearch.org/short-reads/2025/10/16/8-facts-about-divorce-in-the-united-states/" },
];


window.US_SERIES = [
  { year: 2000, divorces: 944000, rate: 4 },
  { year: 2001, divorces: 940000, rate: 4 },
  { year: 2002, divorces: 955000, rate: 3.9 },
  { year: 2003, divorces: 927000, rate: 3.8 },
  { year: 2004, divorces: 879000, rate: 3.7 },
  { year: 2005, divorces: 847000, rate: 3.6 },
  { year: 2006, divorces: 872000, rate: 3.7 },
  { year: 2007, divorces: 856000, rate: 3.6 },
  { year: 2008, divorces: 844000, rate: 3.5 },
  { year: 2009, divorces: 840000, rate: 3.5 },
  { year: 2010, divorces: 872000, rate: 3.6 },
  { year: 2011, divorces: 877000, rate: 3.6 },
  { year: 2012, divorces: 851000, rate: 3.4 },
  { year: 2013, divorces: 832157, rate: 3.3 },
  { year: 2014, divorces: 813862, rate: 3.2 },
  { year: 2015, divorces: 800909, rate: 3.1 },
  { year: 2016, divorces: 776288, rate: 3 },
  { year: 2017, divorces: 787251, rate: 2.9 },
  { year: 2018, divorces: 782038, rate: 2.9 },
  { year: 2019, divorces: 746971, rate: 2.7 },
  { year: 2020, divorces: 630505, rate: 2.3 },
  { year: 2021, divorces: 695509, rate: 2.5 },
  { year: 2022, divorces: 673989, rate: 2.4 },
  { year: 2023, divorces: 672502, rate: 2.4 },
  { year: 2024, divorces: 662950, rate: 2.3 },
];


window.US_SERIES_SOURCE = {
  "name": "CDC/NCHS National Vital Statistics System",
  "url": "https://www.cdc.gov/nchs/data/dvs/marriage-divorce/national-marriage-divorce-rates-00-24.pdf",
  "note": "Some states (recently CA, HI, IN, MN, NM) don't report, so counts run low."
};


window.COUNTRY_RATES = [
  { year: 2021, country: "Maldives", flag: "🇲🇻", rate: 8.4 },
  { year: 2023, country: "Russia", flag: "🇷🇺", rate: 4.7 },
  { year: 2024, country: "Moldova", flag: "🇲🇩", rate: 3.9 },
  { year: 2024, country: "Belarus", flag: "🇧🇾", rate: 3.8 },
  { year: 2024, country: "Georgia", flag: "🇬🇪", rate: 3.7 },
  { year: 2024, country: "Latvia", flag: "🇱🇻", rate: 2.8 },
  { year: 2024, country: "China", flag: "🇨🇳", rate: 2.5 },
  { year: 2022, country: "Egypt", flag: "🇪🇬", rate: 2.5 },
  { year: 2022, country: "Iran", flag: "🇮🇷", rate: 2.4 },
  { year: 2024, country: "United States", flag: "🇺🇸", rate: 2.3 },
  { year: 2024, country: "Türkiye", flag: "🇹🇷", rate: 2.2 },
  { year: 2024, country: "Denmark", flag: "🇩🇰", rate: 2.2 },
  { year: 2024, country: "Sweden", flag: "🇸🇪", rate: 2.1 },
  { year: 2023, country: "Australia", flag: "🇦🇺", rate: 1.8 },
  { year: 2024, country: "South Korea", flag: "🇰🇷", rate: 1.8 },
  { year: 2023, country: "Spain", flag: "🇪🇸", rate: 1.6 },
  { year: 2024, country: "Germany", flag: "🇩🇪", rate: 1.5 },
  { year: 2023, country: "Japan", flag: "🇯🇵", rate: 1.5 },
  { year: 2023, country: "Italy", flag: "🇮🇹", rate: 1.4 },
  { year: 2022, country: "United Kingdom", flag: "🇬🇧", rate: 1.3 },
  { year: 2023, country: "Mexico", flag: "🇲🇽", rate: 1.2 },
  { year: 2020, country: "Canada", flag: "🇨🇦", rate: 1.1 },
  { year: 2020, country: "Ireland", flag: "🇮🇪", rate: 0.6 },
  { year: 2023, country: "Guatemala", flag: "🇬🇹", rate: 0.6 },
  { year: 2023, country: "Peru", flag: "🇵🇪", rate: 0.5 },
  { year: 2023, country: "Viet Nam", flag: "🇻🇳", rate: 0.3 },
];


window.COUNTRY_RATES_SOURCE = {
  "name": "UN Demographic Yearbook 2024 (Maldives, Russia, China and US from national statistics)",
  "url": "https://unstats.un.org/unsd/demographic-social/products/dyb/documents/DYB2024/table24.xls"
};


window.CHILD_SUPPORT = {
  "received_split": {
    "year": 2022,
    "full": 49.5,
    "partial": 26,
    "none": 24.5,
    "note": "Census publishes 75.5% got any payment and 49.5% got all of it; \"some\" is the difference.",
    "source": "U.S. Census Bureau, Custodial Parents and Their Child Support: 2022 (P60-285)",
    "url": "https://www.census.gov/library/publications/2025/demo/p60-285.html",
    "prior": {
      "year": 2017,
      "full": 45.9,
      "partial": 24,
      "none": 30.2,
      "source": "U.S. Census Bureau, P60-269",
      "url": "https://www.census.gov/content/dam/Census/library/publications/2020/demo/p60-269.pdf"
    }
  },
  "due_vs_received": [
    {
      "year": 1993,
      "due": 40100000000,
      "received": 26200000000,
      "dollars": "2017"
    },
    {
      "year": 1995,
      "due": 45300000000,
      "received": 29900000000,
      "dollars": "2017"
    },
    {
      "year": 1997,
      "due": 44500000000,
      "received": 29600000000,
      "dollars": "2017"
    },
    {
      "year": 1999,
      "due": 47700000000,
      "received": 28000000000,
      "dollars": "2017"
    },
    {
      "year": 2001,
      "due": 48500000000,
      "received": 30400000000,
      "dollars": "2017"
    },
    {
      "year": 2003,
      "due": 49500000000,
      "received": 33900000000,
      "dollars": "2017"
    },
    {
      "year": 2005,
      "due": 47800000000,
      "received": 31200000000,
      "dollars": "2017"
    },
    {
      "year": 2007,
      "due": 40400000000,
      "received": 25300000000,
      "dollars": "2017"
    },
    {
      "year": 2009,
      "due": 40200000000,
      "received": 24500000000,
      "dollars": "2017"
    },
    {
      "year": 2011,
      "due": 41400000000,
      "received": 25800000000,
      "dollars": "2017"
    },
    {
      "year": 2013,
      "due": 34700000000,
      "received": 23700000000,
      "dollars": "2017"
    },
    {
      "year": 2015,
      "due": 34800000000,
      "received": 20800000000,
      "dollars": "2017"
    },
    {
      "year": 2017,
      "due": 30000000000,
      "received": 18600000000,
      "dollars": "2017"
    },
    {
      "year": 2022,
      "due": 25000000000,
      "received": 16100000000,
      "dollars": "2017",
      "est": true,
      "nominal": {
        "due": 29900000000,
        "received": 19200000000,
        "dollars": "2022"
      }
    }
  ],
  "due_vs_received_source": {
    "name": "U.S. Census Bureau, Current Population Survey child support supplement (P60-269, P60-285)",
    "url": "https://www.census.gov/library/publications/2025/demo/p60-285.html",
    "note": "All in 2017 dollars; 2022 is deflated by CPI-U (approximate), and Census changed its processing in 2020, so it isn't strictly comparable. \"Unpaid\" here is due minus received; Census's own shortfall measure ($12.5B in 2022) is higher because overpayments don't offset it."
  },
  "program_series": [
    {
      "year": 2008,
      "collections": 26560705860,
      "cases": 15675989,
      "collected_per_dollar": 4.8,
      "arrears": 105548155058
    },
    {
      "year": 2009,
      "collections": 26385592827,
      "cases": 15797768,
      "collected_per_dollar": 4.78,
      "arrears": 107638651677
    },
    {
      "year": 2010,
      "collections": 26555741023,
      "cases": 15858602,
      "collected_per_dollar": 4.88,
      "arrears": 110261308005
    },
    {
      "year": 2011,
      "collections": 27296685029,
      "cases": 15831904,
      "collected_per_dollar": 5.12,
      "arrears": 111343376518
    },
    {
      "year": 2012,
      "collections": 27719045787,
      "cases": 15747140,
      "collected_per_dollar": 5.19,
      "arrears": 114558969584
    },
    {
      "year": 2013,
      "collections": 28006600190,
      "cases": 15588775,
      "collected_per_dollar": 5.31,
      "arrears": 116149340011
    },
    {
      "year": 2014,
      "collections": 28199056113,
      "cases": 15123628,
      "collected_per_dollar": 5.25,
      "arrears": 114789695290
    },
    {
      "year": 2015,
      "collections": 28559134175,
      "cases": 14744538,
      "collected_per_dollar": 5.26,
      "arrears": 115544338886
    },
    {
      "year": 2016,
      "collections": 28834212099,
      "cases": 14522408,
      "collected_per_dollar": 5.33,
      "arrears": 116360701209
    },
    {
      "year": 2017,
      "collections": 28625294083,
      "cases": 14228533,
      "collected_per_dollar": 5.15,
      "arrears": 117356312693
    },
    {
      "year": 2018,
      "collections": 28584372594,
      "cases": 13923541,
      "collected_per_dollar": 5.14,
      "arrears": 118058611558
    },
    {
      "year": 2019,
      "collections": 28767185944,
      "cases": 13604791,
      "collected_per_dollar": 5.06,
      "arrears": 117728564962
    },
    {
      "year": 2020,
      "collections": 31422753145,
      "cases": 13203628,
      "collected_per_dollar": 5.51,
      "arrears": 115130048828
    },
    {
      "year": 2021,
      "collections": 29521877168,
      "cases": 12665871,
      "collected_per_dollar": 5.27,
      "arrears": 113471723919
    },
    {
      "year": 2022,
      "collections": 27404108381,
      "cases": 12300110,
      "collected_per_dollar": 4.73,
      "arrears": 114117117525
    },
    {
      "year": 2023,
      "collections": 26677003008,
      "cases": 12054010,
      "collected_per_dollar": 4.37,
      "arrears": 115136974885
    },
    {
      "year": 2024,
      "collections": 26653789725,
      "cases": 11646025,
      "collected_per_dollar": 4.24,
      "arrears": 115729967634
    }
  ],
  "arrears_source": {
    "name": "HHS Office of Child Support Services annual and preliminary data reports",
    "url": "https://acf.gov/sites/default/files/documents/ocse/fy_2024_preliminary_report.pdf",
    "note": "Covers cases in the government (Title IV-D) program only; private orders aren't counted."
  },
  "highest": [
    {
      "payer": "Kirk Kerkorian",
      "recipient": "Lisa Bonder",
      "monthly": 565000,
      "year": 2014,
      "kind": "request",
      "payer_gender": "m",
      "cat": "biz",
      "fact": "Bonder asked to lift $100K/mo to $565K, partly for Kira's horses; the judge said no.",
      "source": "https://www.tmz.com/2014/08/06/kirk-kerkorian-mgm-lisa-bonder-child-support-kira-equestrian-horse-order/"
    },
    {
      "payer": "Kirk Kerkorian",
      "recipient": "Lisa Bonder",
      "monthly": 320000,
      "year": 2002,
      "kind": "request",
      "payer_gender": "m",
      "cat": "biz",
      "fact": "Her budget for a 4-year-old included $150K/mo in private jets and $6K/mo for flowers.",
      "source": "https://www.forbes.com/2002/09/27/0927divorce.html"
    },
    {
      "payer": "Kirk Kerkorian",
      "recipient": "Lisa Bonder",
      "monthly": 50316,
      "year": 2002,
      "kind": "order",
      "payer_gender": "m",
      "cat": "biz",
      "fact": "Judge granted $316 more than the $50K he'd already agreed to; party and flower budgets tossed.",
      "source": "https://www.forbes.com/2002/09/27/0927divorce.html"
    },
    {
      "payer": "Kirk Kerkorian",
      "recipient": "Lisa Bonder",
      "monthly": 100000,
      "year": 2010,
      "kind": "agreement",
      "payer_gender": "m",
      "cat": "biz",
      "fact": "Oct 2010 deal for Kira: $100K/mo (later $50K) plus over $10M in back support, per AP.",
      "source": "https://foxnews.com/entertainment/kevin-federlines-child-support-request-sparks-look-back-at-other-payment-cases.amp"
    },
    {
      "payer": "Ken Griffin",
      "recipient": "Anne Dias",
      "monthly": 1000000,
      "year": 2015,
      "kind": "request",
      "est": true,
      "payer_gender": "m",
      "cat": "biz",
      "fact": "Griffin's filings said she sought ~$1M/mo for 3 kids; her side called it an expense accounting.",
      "source": "https://www.cnbc.com/2015/01/30/1-million-a-month-to-raise-the-kids.html"
    },
    {
      "payer": "Kanye West",
      "recipient": "Kim Kardashian",
      "monthly": 200000,
      "year": 2022,
      "kind": "agreement",
      "payer_gender": "m",
      "cat": "music",
      "fact": "Settled Nov 2022 for four kids; they also split private school and security costs 50/50.",
      "source": "https://www.cbsnews.com/news/kim-kardashian-kanye-west-divorce-settlement-ye/"
    },
    {
      "payer": "Kevin Costner",
      "recipient": "Christine Baumgartner",
      "monthly": 248000,
      "year": 2023,
      "kind": "request",
      "payer_gender": "m",
      "cat": "screen",
      "fact": "Her initial ask for their three kids, per TMZ; she later asked for $161,592.",
      "source": "https://www.tmz.com/2023/09/01/kevin-costner-ordered-to-pay-estranged-wife-63k-in-child-support/"
    },
    {
      "payer": "Kevin Costner",
      "recipient": "Christine Baumgartner",
      "monthly": 129755,
      "year": 2023,
      "kind": "order",
      "payer_gender": "m",
      "cat": "screen",
      "fact": "Temporary support set in summer 2023, before the final ruling more than halved it.",
      "source": "https://www.foxnews.com/entertainment/kevin-costners-estranged-wife-christine-spotted-court-judge-upholds-tentative-ruling",
      "tag": "(temp)"
    },
    {
      "payer": "Kevin Costner",
      "recipient": "Christine Baumgartner",
      "monthly": 63209,
      "year": 2023,
      "kind": "order",
      "payer_gender": "m",
      "cat": "screen",
      "fact": "Judge: anything above $63,209 a month would be \"disguised spousal support.\"",
      "source": "https://www.foxnews.com/entertainment/kevin-costners-divorce-judge-slams-christines-bid-more-child-support-disguised-spousal-support"
    },
    {
      "payer": "Ronald Perelman",
      "recipient": "Patricia Duff",
      "monthly": 132000,
      "year": 1999,
      "kind": "request",
      "payer_gender": "m",
      "cat": "biz",
      "fact": "Duff asked $1.6M/yr for a 4-year-old, including $3,175/mo for clothes.",
      "source": "https://www.newsweek.com/living-12825-month-162936"
    },
    {
      "payer": "Ronald Perelman",
      "recipient": "Patricia Duff",
      "monthly": 12825,
      "year": 1999,
      "kind": "order",
      "payer_gender": "m",
      "cat": "biz",
      "fact": "Judge called the idea that a denied luxury would harm the child \"rubbish.\"",
      "source": "https://www.newsweek.com/living-12825-month-162936"
    },
    {
      "payer": "Kelly Clarkson",
      "recipient": "Brandon Blackstock",
      "monthly": 135000,
      "year": 2020,
      "kind": "request",
      "payer_gender": "f",
      "cat": "music",
      "fact": "Blackstock also sought $301K/mo in spousal support, $436K/mo in all; the court gave him less than half.",
      "source": "https://www.foxnews.com/entertainment/kelly-clarkson-ex-brandon-blackstock-436g-spousal-child-support-divorce-reports"
    },
    {
      "payer": "Kelly Clarkson",
      "recipient": "Brandon Blackstock",
      "monthly": 45601,
      "year": 2022,
      "kind": "agreement",
      "payer_gender": "f",
      "cat": "music",
      "fact": "Same figure as the 2021 temporary order; plus $115K/mo spousal support until Jan 2024.",
      "source": "https://www.cnn.com/2022/03/09/entertainment/kelly-clarkson-divorce-settlement"
    },
    {
      "payer": "Charlie Sheen",
      "recipient": "Brooke Mueller",
      "monthly": 55000,
      "year": 2011,
      "kind": "agreement",
      "payer_gender": "m",
      "cat": "screen",
      "fact": "Divorce settlement for their twin sons, per AP.",
      "source": "https://ktar.com/national-news/a-look-at-celebrity-child-support-payments"
    },
    {
      "payer": "Charlie Sheen",
      "recipient": "Denise Richards",
      "monthly": 55000,
      "year": 2009,
      "kind": "agreement",
      "est": true,
      "payer_gender": "m",
      "cat": "screen",
      "fact": "Per Sheen's 2016 filing seeking a cut, Richards had received $55K/mo since 2009.",
      "source": "https://globalnews.ca/news/2581147/charlie-sheen-cant-afford-child-support-payments-to-denise-richards"
    },
    {
      "payer": "Dennis Rodman",
      "recipient": "Michelle Moyer",
      "monthly": 50000,
      "year": 2009,
      "kind": "order",
      "payer_gender": "m",
      "cat": "sports",
      "fact": "Later cut to $4,500 for child + spousal combined; he was found in contempt over arrears.",
      "source": "https://www.deseret.com/2012/5/29/20415551/dennis-rodman-sentenced-in-family-court/"
    },
    {
      "payer": "François-Henri Pinault",
      "recipient": "Linda Evangelista",
      "monthly": 46000,
      "year": 2012,
      "kind": "request",
      "est": true,
      "payer_gender": "m",
      "cat": "biz",
      "fact": "Her filings listed $46K/mo in costs for their son; her lawyer said that wasn't the ask. Settled.",
      "source": "https://www.cbsnews.com/news/linda-evangelista-francois-henri-pinault-settle-child-support-battle/"
    },
    {
      "payer": "Russell Simmons",
      "recipient": "Kimora Lee Simmons",
      "monthly": 40000,
      "year": 2009,
      "kind": "agreement",
      "payer_gender": "m",
      "cat": "music",
      "fact": "Two daughters; deal also promised a new car worth $60K+ every three years.",
      "source": "https://www.upi.com/Entertainment_News/2009/03/02/Simmons-to-pay-40K-a-month-in-support/67661236014105/"
    },
    {
      "payer": "Britney Spears",
      "recipient": "Kevin Federline",
      "monthly": 60000,
      "year": 2018,
      "kind": "request",
      "payer_gender": "f",
      "cat": "music",
      "fact": "In 2018 Federline's lawyer sought at least $60K/mo, up from the $20K she was paying.",
      "source": "https://foxnews.com/entertainment/kevin-federlines-child-support-request-sparks-look-back-at-other-payment-cases.amp"
    },
    {
      "payer": "Britney Spears",
      "recipient": "Kevin Federline",
      "monthly": 20000,
      "year": 2008,
      "kind": "agreement",
      "payer_gender": "f",
      "cat": "music",
      "fact": "Set in a July 2008 settlement, per AP; Federline had primary custody of their two sons.",
      "source": "https://ktar.com/national-news/a-look-at-celebrity-child-support-payments"
    },
    {
      "payer": "Mick Jagger",
      "recipient": "Luciana Morad",
      "monthly": 35000,
      "year": 2000,
      "kind": "request",
      "payer_gender": "m",
      "cat": "music",
      "fact": "Morad sought $35K/mo for son Lucas; a temporary order set $10K. Settled confidentially in 2001.",
      "source": "https://www.salon.com/2000/08/04/jagger/"
    },
    {
      "payer": "Mick Jagger",
      "recipient": "Luciana Morad",
      "monthly": 25000,
      "year": 2000,
      "kind": "agreement",
      "est": true,
      "payer_gender": "m",
      "cat": "music",
      "fact": "NY Post-reported 2000 deal: $25K/mo plus $5M; never confirmed, and the 2001 court settlement was sealed.",
      "source": "https://www.cbsnews.com/news/whos-under-whose-thumb-now/"
    },
    {
      "payer": "Eddie Murphy",
      "recipient": "Melanie Brown (Mel B)",
      "monthly": 35000,
      "year": 2022,
      "kind": "agreement",
      "payer_gender": "m",
      "cat": "screen",
      "fact": "Raised from $25K (paid since 2009) after Mel B said her income dropped; effective Oct 2021.",
      "source": "https://eurweb.com/2022/eddie-murphy-agrees-to-35k-child-support-payments-to-ex-partner-melanie-mel-b-brown/"
    },
    {
      "payer": "Eddie Murphy",
      "recipient": "Melanie Brown (Mel B)",
      "monthly": 25000,
      "year": 2009,
      "kind": "agreement",
      "payer_gender": "m",
      "cat": "screen",
      "fact": "Settled in 2009 for daughter Angel, after Murphy publicly questioned whether he was the father.",
      "source": "https://www.yahoo.com/lifestyle/eddie-murphy-pay-35-000-221144479.html"
    },
    {
      "payer": "Tom Cruise",
      "recipient": "Katie Holmes",
      "monthly": 33333,
      "total": 4800000,
      "year": 2012,
      "kind": "agreement",
      "est": true,
      "payer_gender": "m",
      "cat": "screen",
      "fact": "Reported $400K/yr until Suri turns 18, plus school and extracurricular costs; no alimony.",
      "source": "https://www.foxnews.com/entertainment/katie-holmes-to-receive-400g-annually-in-divorce-settlement-from-tom-cruise-reports-say"
    },
    {
      "payer": "Rob Kardashian",
      "recipient": "Blac Chyna",
      "monthly": 20000,
      "year": 2017,
      "kind": "agreement",
      "payer_gender": "m",
      "cat": "tv",
      "fact": "Agreed in their 2017 custody deal; a 2019 deal with 50/50 custody cut it to zero.",
      "source": "https://www.tmz.com/2019/03/25/rob-kardashian-blac-chyna-dream-child-custody-support-agreement/"
    },
    {
      "payer": "Sean \"Diddy\" Combs",
      "recipient": "Misa Hylton",
      "monthly": 19000,
      "year": 2005,
      "kind": "order",
      "payer_gender": "m",
      "cat": "music",
      "fact": "About $19K a month for their son Justin, per AP.",
      "source": "https://ktar.com/national-news/a-look-at-celebrity-child-support-payments"
    },
    {
      "payer": "Michael Strahan",
      "recipient": "Jean Muggli",
      "monthly": 18000,
      "year": 2007,
      "kind": "order",
      "payer_gender": "m",
      "cat": "sports",
      "fact": "Set by a judge alongside a $15.3M award to his ex; she went back to court over support in 2019.",
      "source": "https://www.tmz.com/2019/09/16/michael-strahan-ex-wife-jean-muggli-child-support/"
    },
    {
      "payer": "Halle Berry",
      "recipient": "Gabriel Aubry",
      "monthly": 16000,
      "year": 2014,
      "kind": "agreement",
      "payer_gender": "f",
      "cat": "screen",
      "fact": "Judge-approved deal; plus $115K retroactive support and $300K toward his legal fees.",
      "source": "https://time.com/2853415/halle-berry-ordered-to-pay-almost-200k-per-year-in-child-support/"
    },
    {
      "payer": "Halle Berry",
      "recipient": "Gabriel Aubry",
      "monthly": 8000,
      "year": 2021,
      "kind": "agreement",
      "est": true,
      "payer_gender": "f",
      "cat": "screen",
      "fact": "Renegotiated to half, plus $85K retroactive and more if her income tops $1.95M.",
      "source": "https://theblast.com/62085/halle-berrys-child-support-payments-slashed-in-half-ordered-to-p/"
    },
    {
      "payer": "Martin Brodeur",
      "recipient": "Melanie Dubois",
      "monthly": 11009,
      "year": 2005,
      "kind": "order",
      "payer_gender": "m",
      "cat": "sports",
      "fact": "$132,112/yr plus 87% of private school and camp costs, on top of $500K/yr alimony.",
      "source": "https://law.justia.com/cases/new-jersey/appellate-division-unpublished/2007/a1665-05-opn.html"
    },
    {
      "payer": "Tristan Thompson",
      "recipient": "Maralee Nichols",
      "monthly": 9500,
      "year": 2022,
      "kind": "agreement",
      "payer_gender": "m",
      "cat": "sports",
      "fact": "Paternity settlement for son Theo; Nichols got sole custody.",
      "source": "https://www.etonline.com/tristan-thompson-ordered-to-pay-9500-a-month-in-child-support-to-maralee-nichols-196140"
    },
    {
      "payer": "Paul McCartney",
      "recipient": "Heather Mills",
      "monthly": 2917,
      "year": 2008,
      "kind": "order",
      "payer_gender": "m",
      "cat": "music",
      "fact": "£35K/yr for Beatrice plus nanny and school fees; Mills left with £24.3M, incl. a £16.5M lump sum.",
      "source": "https://caselaw.nationalarchives.gov.uk/ewhc/fam/2008/401",
      "currency": "GBP",
      "usd": 5396
    },
    {
      "payer": "Sheikh Mohammed bin Rashid",
      "recipient": "Princess Haya",
      "monthly": 933333,
      "year": 2021,
      "kind": "order",
      "payer_gender": "m",
      "cat": "royal",
      "fact": "UK judge set £5.6M a year per child for their two kids, on top of a £251.5M lump sum for Haya.",
      "source": "https://caselaw.nationalarchives.gov.uk/ewfc/2021/94",
      "currency": "GBP",
      "usd": 1288000
    },
    {
      "payer": "Britney Spears",
      "recipient": "Kevin Federline",
      "monthly": 40000,
      "year": 2018,
      "kind": "agreement",
      "est": true,
      "payer_gender": "f",
      "cat": "music",
      "fact": "Reported 2018 deal roughly doubled her $20K/mo to about $40K after his custody time grew.",
      "source": "https://www.etonline.com/why-kevin-federline-is-seeking-more-child-support-from-britney-spears-211174"
    }
  ],
  "stats": [
    {
      "emoji": "💸",
      "big": "$12.5B",
      "label": "Child support owed but never paid, 2022",
      "note": "Due $29.9B, received $19.2B in 2022. Census sums each parent's shortfall to $12.5B; overpayments don't offset it.",
      "group": "unpaid",
      "year": "2022",
      "source": "U.S. Census Bureau, P60-285 (CPS Child Support Supplement)",
      "url": "https://www.census.gov/library/publications/2025/demo/p60-285.html"
    },
    {
      "emoji": "✅",
      "big": "49.5%",
      "label": "Parents owed support who got the full amount",
      "note": "Of 4.7M custodial parents due support in 2022, 49.5% got everything owed; 24.5% (1.1M) got nothing at all.",
      "group": "unpaid",
      "year": "2022",
      "source": "U.S. Census Bureau, P60-285",
      "url": "https://www.census.gov/library/publications/2025/demo/p60-285.html"
    },
    {
      "emoji": "🧾",
      "big": "$533/mo",
      "label": "Average child support due per parent",
      "note": "Mean due was $6,390/yr in 2022 (median $4,816). Mean actually received: $4,106/yr; median received: $2,768.",
      "group": "unpaid",
      "year": "2022",
      "source": "U.S. Census Bureau, P60-285",
      "url": "https://www.census.gov/library/publications/2025/demo/p60-285.html"
    },
    {
      "emoji": "📉",
      "big": "62.2%",
      "label": "Share of support due that was paid, 2017",
      "note": "$18.6B of $30.0B due in 2017 was received, averaging $3,431 per parent ($286/month).",
      "group": "unpaid",
      "year": "2017",
      "source": "U.S. Census Bureau, P60-269",
      "url": "https://www.census.gov/content/dam/Census/library/publications/2020/demo/p60-269.pdf"
    },
    {
      "emoji": "🏚️",
      "big": "-$19.5B",
      "label": "Drop in support due, 2003 to 2017 (2017 $)",
      "note": "$49.5B was due in 2003 vs $30.0B in 2017, largely because parents due support fell from 7.3M to 5.4M.",
      "group": "unpaid",
      "year": "2017",
      "source": "U.S. Census Bureau, P60-269",
      "url": "https://www.census.gov/content/dam/Census/library/publications/2020/demo/p60-269.pdf"
    },
    {
      "emoji": "📝",
      "big": "37.3%",
      "label": "Custodial parents with a legal support agreement",
      "note": "Down from 55.1% in 2003. Over the same period, informal-only or noncash arrangements rose from 26.7% to 34.3%.",
      "group": "unpaid",
      "year": "2022",
      "source": "U.S. Census Bureau, P60-285",
      "url": "https://www.census.gov/library/publications/2025/demo/p60-285.html"
    },
    {
      "emoji": "👧",
      "big": "22.2M",
      "label": "Kids with a parent living outside the home",
      "note": "27.1% of all children under 21 living in families in 2022; 46.4% of Black children.",
      "group": "unpaid",
      "year": "2022",
      "source": "U.S. Census Bureau, P60-285",
      "url": "https://www.census.gov/library/publications/2025/demo/p60-285.html"
    },
    {
      "emoji": "🕳️",
      "big": "$115.7B",
      "label": "Unpaid back support (arrears) owed, FY2024",
      "note": "Cumulative arrears in the government IV-D program; it has hovered between $105B and $118B since FY2008.",
      "group": "unpaid",
      "year": "2024",
      "source": "HHS Office of Child Support Services, FY2024 Preliminary Report, Table P-85",
      "url": "https://acf.gov/sites/default/files/documents/ocse/fy_2024_preliminary_report.pdf"
    },
    {
      "emoji": "📊",
      "big": "70%",
      "label": "Share of arrears owed by parents reporting ≤$10K income",
      "note": "Nine-state study: obligors with no or ≤$10K reported income were half of obligors but owed 70% of arrears.",
      "group": "unpaid",
      "year": "2004",
      "source": "Urban Institute for HHS/ASPE (Sorensen, Sousa, Schaner, 2007)",
      "url": "https://aspe.hhs.gov/execsum/assessing-child-support-arrears-nine-large-states-and-nation"
    },
    {
      "emoji": "🔁",
      "big": "$3,329",
      "label": "Gap between what payers say they paid and moms/dads got",
      "note": "Census ASEC: 2.1M payers averaged $6,760 paid in 2017 vs $3,431 received (avg incl. $0s); states may keep some.",
      "group": "unpaid",
      "year": "2017",
      "source": "U.S. Census Bureau, P60-269 (CPS ASEC box)",
      "url": "https://www.census.gov/content/dam/Census/library/publications/2020/demo/p60-269.pdf"
    },
    {
      "emoji": "🏛️",
      "big": "$26.7B",
      "label": "Child support collected by the government program",
      "note": "Distributed collections in FY2024, down from a $31.4B peak in FY2020; $25.0B went straight to families or foster care.",
      "group": "program",
      "year": "2024",
      "source": "HHS OCSS, FY2024 Preliminary Report, Table P-1",
      "url": "https://acf.gov/sites/default/files/documents/ocse/fy_2024_preliminary_report.pdf"
    },
    {
      "emoji": "💵",
      "big": "$4.24",
      "label": "Collected per $1 spent running the program",
      "note": "FY2024 cost-effectiveness ($6.6B admin spend); down from $5.51 in FY2020 and $5.33 in FY2016.",
      "group": "program",
      "year": "2024",
      "source": "HHS OCSS, FY2024 Preliminary Report, Tables P-1/P-36 (FY2016 figure: FY2020 Preliminary Report, Table P-1)",
      "url": "https://acf.gov/sites/default/files/documents/ocse/fy_2024_preliminary_report.pdf"
    },
    {
      "emoji": "📁",
      "big": "11.6M",
      "label": "Child support cases in the IV-D program",
      "note": "FY2024 caseload, serving 12.2M children; down from 15.9M cases in FY2010.",
      "group": "program",
      "year": "2024",
      "source": "HHS OCSS, FY2024 Preliminary Report, Tables P-2/P-52/P-93 (FY2010: FY2012 Annual Report, Table 52)",
      "url": "https://acf.gov/sites/default/files/documents/ocse/fy_2024_preliminary_report.pdf"
    },
    {
      "emoji": "🎯",
      "big": "65.3%",
      "label": "Share of current support due that was collected",
      "note": "$20.2B collected of $30.9B in current support due in FY2024 IV-D cases.",
      "group": "program",
      "year": "2024",
      "source": "HHS OCSS, FY2024 Preliminary Report, Tables P-83/P-84/P-39",
      "url": "https://acf.gov/sites/default/files/documents/ocse/fy_2024_preliminary_report.pdf"
    },
    {
      "emoji": "🐌",
      "big": "$7.5B",
      "label": "Back support actually collected in FY2024",
      "note": "About 6% of the $115.7B in arrears; 63% of the 8.75M cases with arrears paid something toward them.",
      "group": "program",
      "year": "2024",
      "source": "HHS OCSS, FY2024 Preliminary Report, Tables P-85 to P-88",
      "url": "https://acf.gov/sites/default/files/documents/ocse/fy_2024_preliminary_report.pdf"
    },
    {
      "emoji": "🏭",
      "big": "71%",
      "label": "Share of collections from paycheck withholding",
      "note": "$21.9B of $30.9B received in FY2024 came via income withholding; federal tax refund offsets added $1.3B.",
      "group": "program",
      "year": "2024",
      "source": "HHS OCSS, FY2024 Preliminary Report, Tables P-28/P-29",
      "url": "https://acf.gov/sites/default/files/documents/ocse/fy_2024_preliminary_report.pdf"
    },
    {
      "emoji": "🤠",
      "big": "$20.5B",
      "label": "Texas arrears, the largest of any state",
      "note": "Texas IV-D arrears at end of FY2024, ahead of California ($17.2B) and New York ($7.1B).",
      "group": "program",
      "year": "2024",
      "source": "HHS OCSS, FY2024 Preliminary Report, Table P-85",
      "url": "https://acf.gov/sites/default/files/documents/ocse/fy_2024_preliminary_report.pdf"
    },
    {
      "emoji": "📈",
      "big": "$786.6B",
      "label": "Total collected by the program since 1976",
      "note": "Cumulative distributed collections FY1976-FY2024. Year one (FY1976) collected $692.5M.",
      "group": "program",
      "year": "2024",
      "source": "HHS OCSS, FY2024 Preliminary Report, Table P-5",
      "url": "https://acf.gov/sites/default/files/documents/ocse/fy_2024_preliminary_report.pdf"
    },
    {
      "emoji": "👩",
      "big": "78.2%",
      "label": "Custodial parents who are mothers",
      "note": "21.8% are fathers (3.0M of 13.9M custodial parents) in the 2023 survey, up from 16.0% in the 1994 survey.",
      "group": "gender",
      "year": "2022",
      "source": "U.S. Census Bureau, P60-285; P60-269",
      "url": "https://www.census.gov/library/publications/2025/demo/p60-285.html"
    },
    {
      "emoji": "👨",
      "big": "$3.0B",
      "label": "Received by custodial dads of $4.8B due",
      "note": "Custodial mothers got $16.2B of $25.2B due in 2022. Fathers were 24.5% of those owed who got nothing.",
      "group": "gender",
      "year": "2022",
      "source": "U.S. Census Bureau, P60-285",
      "url": "https://www.census.gov/library/publications/2025/demo/p60-285.html"
    },
    {
      "emoji": "⚖️",
      "big": "33.4%",
      "label": "Custodial fathers with a support agreement",
      "note": "vs 43.2% of custodial mothers in 2022 (court order or informal agreement).",
      "group": "gender",
      "year": "2022",
      "source": "U.S. Census Bureau, P60-285",
      "url": "https://www.census.gov/library/publications/2025/demo/p60-285.html"
    },
    {
      "emoji": "🛂",
      "big": "$2,500",
      "label": "Arrears that trigger U.S. passport denial",
      "note": "Set by the Deficit Reduction Act of 2005 (originally $5,000 under the 1996 welfare law).",
      "group": "enforcement",
      "year": "2026",
      "source": "Congressional Research Service, IN12660",
      "url": "https://www.congress.gov/crs-product/IN12660"
    },
    {
      "emoji": "✈️",
      "big": "~$621M",
      "label": "Collected via passport denial since 1998",
      "note": "Including $30M in 2024. Parents must generally pay all arrears to be released from passport denial.",
      "group": "enforcement",
      "year": "2024",
      "source": "Congressional Research Service, IN12660 (May 2026)",
      "url": "https://www.congress.gov/crs-product/IN12660"
    },
    {
      "emoji": "🧾",
      "big": "$1.42B",
      "label": "Federal tax refunds intercepted for child support",
      "note": "899,674 offsets in calendar 2024; refunds are certified for offset at $150+ (TANF) or $500+ (non-TANF) owed.",
      "group": "enforcement",
      "year": "2024",
      "source": "HHS OCSS, FY2024 Preliminary Report, Tables P-96/P-98",
      "url": "https://acf.gov/sites/default/files/documents/ocse/fy_2024_preliminary_report.pdf"
    },
    {
      "emoji": "💥",
      "big": "$5.2B",
      "label": "Record tax-offset haul, 2020",
      "note": "Up 201% from $1.7B in 2019; nearly $3.5B came from seizing CARES Act stimulus checks.",
      "group": "enforcement",
      "year": "2020",
      "source": "HHS OCSE, Child Support Report, January 2022",
      "url": "https://acf.gov/archive/css/newsletter/ocsenewsletter/january-2022-child-support-report"
    },
    {
      "emoji": "⛓️",
      "big": "2 years",
      "label": "Max federal prison for interstate nonpayment",
      "note": "Deadbeat Parents Punishment Act of 1998: felony if over $10,000 or 2+ years unpaid for a child in another state.",
      "group": "enforcement",
      "year": "1998",
      "source": "Public Law 105-187 / 18 U.S.C. 228",
      "url": "https://www.congress.gov/bill/105th-congress/house-bill/3811/text/enr"
    },
    {
      "emoji": "🚔",
      "big": "1 in 8",
      "label": "S.C. county jail inmates held over child support",
      "note": "2009 survey of 33 South Carolina jails: 13.2% of inmates were jailed for civil contempt over unpaid support.",
      "group": "enforcement",
      "year": "2009",
      "source": "Elizabeth Patterson (Univ. of South Carolina) via HuffPost",
      "url": "https://www.huffpost.com/entry/walter-scott-child-support_n_7036174"
    },
    {
      "emoji": "🚗",
      "big": "1996",
      "label": "Year Congress required every state to be able to yank licenses",
      "note": "The 1996 welfare law made states adopt procedures to suspend driver's, professional and recreational licenses; some already did.",
      "group": "enforcement",
      "year": "1996",
      "source": "Congressional Research Service, R41762",
      "url": "https://www.everycrsreport.com/reports/R41762.html"
    },
    {
      "emoji": "🇬🇧",
      "big": "£812.9M",
      "label": "UK Child Maintenance Service arrears since 2012",
      "note": "Unpaid Collect & Pay maintenance, about 7% of all due since 2012; 23% of payers paid nothing that quarter.",
      "group": "world",
      "year": "2026",
      "source": "DWP, Child Maintenance Service statistics: data to June 2026",
      "url": "https://www.gov.uk/government/statistics/child-maintenance-service-statistics-data-to-june-2026/child-maintenance-service-statistics-data-to-june-2026"
    },
    {
      "emoji": "🧽",
      "big": "£2.6B",
      "label": "Old UK child maintenance debt cleared",
      "note": "DWP cut CSA-era maintenance debt by £2.6B, Dec 2018 to Mar 2021: about £2B written off, £0.5B of bad balances fixed.",
      "group": "world",
      "year": "2021",
      "source": "UK National Audit Office, Child Maintenance (March 2022)",
      "url": "https://www.nao.org.uk/wp-content/uploads/2022/03/Child-Maintenance.pdf"
    },
    {
      "emoji": "🇦🇺",
      "big": "A$1.9B",
      "label": "Australian child support debt (Child Support Collect)",
      "note": "Owed by 153,694 paying parents at 31 Dec 2024, average A$7,261; debt grew 5% in 2023/24, fastest in about a decade.",
      "group": "world",
      "year": "2024",
      "source": "Commonwealth Ombudsman, Weaponising Child Support (June 2025)",
      "url": "https://www.ombudsman.gov.au/__data/assets/pdf_file/0022/318460/Weaponising-Child-Support-when-the-system-fails-families.pdf"
    },
    {
      "emoji": "🇨🇦",
      "big": "80%",
      "label": "Canada: share of child support owed that got collected",
      "note": "Child-only support cases in 7 provinces and territories, 2019/2020 (81% incl. spousal); 65% of cases began in arrears.",
      "group": "world",
      "year": "2020",
      "source": "Statistics Canada, Survey of Maintenance Enforcement Programs",
      "url": "https://www150.statcan.gc.ca/n1/daily-quotidien/210528/dq210528f-eng.htm"
    },
    {
      "emoji": "🍼",
      "big": "$233,610",
      "label": "USDA cost to raise a child born in 2015 to age 17",
      "note": "Middle-income married couple, 2015 dollars; $284,570 with projected inflation, and college not included.",
      "group": "fun",
      "year": "2015",
      "source": "USDA Center for Nutrition Policy and Promotion",
      "url": "https://www.usda.gov/about-usda/news/press-releases/2017/01/09/families-projected-spend-average-233610-raising-child-born-2015"
    },
    {
      "emoji": "🏈",
      "big": "$170K/yr",
      "label": "Travis Henry's support bill: 9 kids, 9 moms",
      "note": "2009 estimate by his Atlanta lawyer for the ex-Broncos running back's nine kids, each with a different mother.",
      "group": "fun",
      "year": "2009",
      "source": "National Fatherhood Initiative (citing NYT, March 2009)",
      "url": "https://www.fatherhood.org/championing-fatherhood/bid/135654/Travis-Henry-9-kids-9-kids-moms-1-paycheck"
    },
    {
      "emoji": "🍼",
      "big": "~$336K/yr",
      "label": "Antonio Cromartie's reported child support",
      "note": "NY Post figure (Jan 2016) cited by UPI; by May 2016 the ex-Jets CB had 12 kids, some born after a vasectomy.",
      "group": "fun",
      "year": "2016",
      "source": "UPI (citing New York Post)",
      "url": "https://www.upi.com/Sports_News/NFL/2016/05/10/Antonio-Cromartie-now-fathers-a-dozen-children-despite-vasectomy/8281462930031"
    },
    {
      "emoji": "🎤",
      "big": "~$3M/yr",
      "label": "Lawyer's guess at Nick Cannon's yearly child support",
      "note": "A family lawyer's 2022 estimate to The U.S. Sun; Cannon said he spends 'a lot more' outside the government system.",
      "group": "fun",
      "year": "2022",
      "source": "Fox News (citing The U.S. Sun)",
      "url": "https://www.foxnews.com/entertainment/nick-cannon-soon-father-12-talks-yearly-multi-million-child-support-bill"
    },
    {
      "emoji": "🎁",
      "big": "55.8%",
      "label": "Custodial parents who got noncash support",
      "note": "Most common in 2022: birthday/holiday gifts (49.2%), clothes or diapers (39.8%), food (32.6%), medical costs (20.9%).",
      "group": "fun",
      "year": "2022",
      "source": "U.S. Census Bureau, P60-285",
      "url": "https://www.census.gov/library/publications/2025/demo/p60-285.html"
    }
  ],
  "ticker": [
    "🍼 <b>$12.5B</b> in US child support owed in 2022 never arrived",
    "👻 <b>24.5%</b> of parents owed child support got nothing",
    "🕳️ <b>$115.7B</b> in back child support is still owed"
  ]
};


window.RICHEST_WOMEN = {
  "list": {
    "name": "Forbes' 2026 World's Billionaires list",
    "as_of": "March 2026",
    "url": "https://www.forbes.com/billionaires/",
    "note": "Women ranked among women only; ties share a spot."
  },
  "women": [
    {
      "rank": 1,
      "name": "Alice Walton",
      "nw": 134000000000,
      "country": "United States",
      "path": "inherited",
      "detail": "Only daughter of Walmart founder Sam Walton; holds a family stake in Walmart."
    },
    {
      "rank": 2,
      "name": "Francoise Bettencourt Meyers & family",
      "nw": 100000000000,
      "country": "France",
      "path": "inherited",
      "detail": "Granddaughter of L'Oreal's founder; became heiress when her mother Liliane Bettencourt died in 2017."
    },
    {
      "rank": 3,
      "name": "Julia Koch & family",
      "nw": 81200000000,
      "country": "United States",
      "path": "widowed",
      "detail": "She and her children inherited a 42% Koch stake from husband David Koch, who died in 2019."
    },
    {
      "rank": 4,
      "name": "Iris Fontbona & family",
      "nw": 52600000000,
      "country": "Chile",
      "path": "widowed",
      "detail": "Husband Andronico Luksic left his mining and beverage businesses to her and his sons in 2005."
    },
    {
      "rank": 5,
      "name": "Jacqueline Mars",
      "nw": 49100000000,
      "country": "United States",
      "path": "inherited",
      "detail": "Owns about one-third of Mars, the company her grandfather Frank Mars founded in 1911."
    },
    {
      "rank": 6,
      "name": "Rafaela Aponte-Diamant",
      "nw": 44500000000,
      "country": "Switzerland",
      "path": "built",
      "detail": "Started MSC with husband Gianluigi Aponte in 1970 on a loan-bought ship; each owns 50%."
    },
    {
      "rank": 7,
      "name": "Savitri Jindal & family",
      "nw": 39100000000,
      "country": "India",
      "path": "widowed",
      "detail": "Chairs the O.P. Jindal Group founded by her late husband Om Prakash Jindal."
    },
    {
      "rank": 8,
      "name": "Miriam Adelson & family",
      "nw": 37500000000,
      "country": "United States",
      "path": "widowed",
      "detail": "Widow of Las Vegas Sands founder Sheldon Adelson (d. 2021); family owns over half of Sands."
    },
    {
      "rank": 9,
      "name": "Abigail Johnson",
      "nw": 33200000000,
      "country": "United States",
      "path": "inherited",
      "detail": "Owns about 29% of Fidelity, founded by her grandfather; succeeded her father as CEO in 2014."
    },
    {
      "rank": 10,
      "name": "Zheng Shuliang & family",
      "nw": 33200000000,
      "country": "China",
      "path": "widowed",
      "detail": "Family holds China Hongqiao, the aluminum maker founded by her late husband Zhang Shiping (d. 2019)."
    },
    {
      "rank": 11,
      "name": "Marilyn Simons & family",
      "nw": 32500000000,
      "country": "United States",
      "path": "widowed",
      "detail": "Widow of Renaissance Technologies founder Jim Simons, who died in 2024."
    },
    {
      "rank": 12,
      "name": "Elaine Marshall & family",
      "nw": 30900000000,
      "country": "United States",
      "path": "widowed",
      "detail": "Inherited a Koch stake (about 16% with sons) from husband E. Pierce Marshall, who died in 2006."
    },
    {
      "rank": 13,
      "name": "Melinda French Gates",
      "nw": 30300000000,
      "country": "United States",
      "path": "divorce",
      "detail": "Forbes estimates her 2021 divorce settlement from Bill Gates at $25 billion.",
      "divorce_note": "Forbes estimates her 2021 divorce settlement from Bill Gates at $25 billion, most of her current fortune.",
      "match": "Melinda French Gates"
    },
    {
      "rank": 14,
      "name": "Lyndal Stephens Greth & family",
      "nw": 30000000000,
      "country": "United States",
      "path": "inherited",
      "detail": "Father Autry Stephens founded Endeavor Energy, sold to Diamondback for about $26B; he died in 2024."
    },
    {
      "rank": 15,
      "name": "Susanne Klatten",
      "nw": 29700000000,
      "country": "Germany",
      "path": "inherited",
      "detail": "Inherited a 50.1% Altana stake and 12.5% of BMW from her father Herbert Quandt."
    },
    {
      "rank": 16,
      "name": "MacKenzie Scott",
      "nw": 28600000000,
      "country": "United States",
      "path": "divorce",
      "detail": "Received a 4% stake in Amazon as part of her 2019 divorce from Jeff Bezos.",
      "divorce_note": "Got a 4% Amazon stake in her 2019 divorce from Jeff Bezos, the source of her fortune.",
      "match": "MacKenzie Scott"
    },
    {
      "rank": 17,
      "name": "Vicky Safra & family",
      "nw": 27100000000,
      "country": "Greece",
      "path": "widowed",
      "detail": "She and her four children inherited the fortune of banker Joseph Safra, who died in 2020."
    },
    {
      "rank": 18,
      "name": "Gina Rinehart",
      "nw": 25500000000,
      "country": "Australia",
      "path": "inherited",
      "detail": "Took over and rebuilt her late father Lang Hancock's financially distressed iron ore company, Hancock Prospecting."
    },
    {
      "rank": 19,
      "name": "Christy Walton",
      "nw": 24300000000,
      "country": "United States",
      "path": "widowed",
      "detail": "Inherited a Walmart stake from husband John Walton, son of Sam Walton, after his 2005 death."
    },
    {
      "rank": 20,
      "name": "Diane Hendricks",
      "nw": 22300000000,
      "country": "United States",
      "path": "built",
      "detail": "Co-founded ABC Supply with her late husband Ken in 1982 and has chaired it since 2007."
    },
    {
      "rank": 21,
      "name": "Kwong Siu-hing",
      "nw": 20700000000,
      "country": "Hong Kong",
      "path": "widowed",
      "detail": "Widow of Sun Hung Kai Properties co-founder Kwok Tak-seng (d. 1990); still its largest shareholder."
    },
    {
      "rank": 22,
      "name": "Renata Kellnerova & family",
      "nw": 20200000000,
      "country": "Czech Republic",
      "path": "widowed",
      "detail": "Widow of Petr Kellner (d. 2021); she and her daughters control PPF Group."
    },
    {
      "rank": 23,
      "name": "Nancy Walton Laurie",
      "nw": 20000000000,
      "country": "United States",
      "path": "inherited",
      "detail": "Inherited Walmart stock from her father Bud Walton, Sam Walton's brother, when he died in 1995."
    },
    {
      "rank": 24,
      "name": "Beate Heister",
      "nw": 19100000000,
      "country": "Germany",
      "path": "inherited",
      "detail": "Daughter of Aldi Sud co-founder Karl Albrecht Sr.; shares the Aldi Sud fortune with her brother."
    },
    {
      "rank": 25,
      "name": "Zhong Huijuan",
      "nw": 18700000000,
      "country": "China",
      "path": "built",
      "detail": "Left teaching to run Hansoh, which her husband and a Hong Kong investor started in 1995; now chair and CEO."
    },
    {
      "rank": 26,
      "name": "Charlene de Carvalho-Heineken & family",
      "nw": 17900000000,
      "country": "Netherlands",
      "path": "inherited",
      "detail": "Inherited a Heineken stake (now nearly 24%) from her father Freddy Heineken in 2002."
    },
    {
      "rank": 27,
      "name": "Zhou Qunfei & family",
      "nw": 17100000000,
      "country": "Hong Kong",
      "path": "built",
      "detail": "Co-founded a watch-parts firm with relatives in a Shenzhen apartment in 1993, the forerunner of Lens Technology; listed 2015."
    },
    {
      "rank": 28,
      "name": "Antonia Ax:son Johnson & family",
      "nw": 14800000000,
      "country": "Sweden",
      "path": "inherited",
      "detail": "Fourth-generation owner of Axel Johnson, founded by her great-grandfather; succeeded her father in 1982."
    },
    {
      "rank": 29,
      "name": "Ann Walton Kroenke",
      "nw": 14600000000,
      "country": "United States",
      "path": "inherited",
      "detail": "Inherited part of her father Bud Walton's Walmart stake when he died in 1995."
    },
    {
      "rank": 30,
      "name": "Trudy Cathy White",
      "nw": 13700000000,
      "country": "United States",
      "path": "inherited",
      "detail": "Only daughter of Chick-fil-A founder Truett Cathy (d. 2014); Forbes calls her a Chick-fil-A heir."
    },
    {
      "rank": 31,
      "name": "Laurene Powell Jobs",
      "nw": 13700000000,
      "country": "United States",
      "path": "widowed",
      "detail": "Inherited mostly Apple and Disney shares from her husband Steve Jobs, who died in 2011."
    },
    {
      "rank": 32,
      "name": "Sandra Ortega Mera",
      "nw": 13200000000,
      "country": "Spain",
      "path": "inherited",
      "detail": "Inherited about 4.5% of Inditex from her mother, co-founder Rosalia Mera, who died in 2013."
    },
    {
      "rank": 33,
      "name": "Marijke Mars",
      "nw": 12300000000,
      "country": "United States",
      "path": "inherited",
      "detail": "Inherited about 8% of Mars when her father Forrest Mars Jr. died in 2016."
    },
    {
      "rank": 34,
      "name": "Pamela Mars",
      "nw": 12300000000,
      "country": "United States",
      "path": "inherited",
      "detail": "Inherited about 8% of Mars when her father Forrest Mars Jr. died in 2016."
    },
    {
      "rank": 35,
      "name": "Valerie Mars",
      "nw": 12300000000,
      "country": "United States",
      "path": "inherited",
      "detail": "Inherited an estimated 8% stake in Mars from her father Forrest Mars Jr. after he died in 2016."
    },
    {
      "rank": 36,
      "name": "Victoria Mars",
      "nw": 12300000000,
      "country": "United States",
      "path": "inherited",
      "detail": "Inherited an estimated 8% stake in Mars from her father Forrest Mars Jr. after he died in 2016."
    },
    {
      "rank": 37,
      "name": "Francine von Finck & family",
      "nw": 12300000000,
      "country": "Germany",
      "path": "widowed",
      "detail": "She and her four children inherited the fortune from her late husband August von Finck, who died in 2021."
    },
    {
      "rank": 38,
      "name": "Zhou Chaonan",
      "nw": 12200000000,
      "country": "China",
      "path": "built",
      "detail": "Launched her own business in 2000, then set up Range Intelligent Computing in 2009; Forbes rates her self-made."
    },
    {
      "rank": 39,
      "name": "Nadia Thiele & family",
      "nw": 11900000000,
      "country": "Germany",
      "path": "widowed",
      "detail": "Inherited her fortune from late husband Heinz Hermann Thiele (Knorr-Bremse), who died in February 2021."
    },
    {
      "rank": 40,
      "name": "Kirsten Rausing",
      "nw": 11800000000,
      "country": "Sweden",
      "path": "inherited",
      "detail": "Owns a third of Tetra Laval; grandfather founded Tetra Pak and her late father Gad bought out his brother."
    },
    {
      "rank": 41,
      "name": "Elizabeth Johnson",
      "nw": 11600000000,
      "country": "United States",
      "path": "inherited",
      "detail": "Granddaughter of Edward Johnson II, who founded Fidelity Investments in 1946; family stake passed down."
    },
    {
      "rank": 42,
      "name": "Sherry Brydson",
      "nw": 11500000000,
      "country": "Canada",
      "path": "inherited",
      "detail": "One of six heirs to the media empire founded by her grandfather Roy Thomson."
    },
    {
      "rank": 43,
      "name": "Wang Laichun",
      "nw": 11300000000,
      "country": "Hong Kong",
      "path": "built",
      "detail": "Ex-Foxconn worker who co-founded Apple supplier Luxshare Precision in 2004 with her brother."
    },
    {
      "rank": 44,
      "name": "Magdalena Martullo-Blocher",
      "nw": 10300000000,
      "country": "Switzerland",
      "path": "inherited",
      "detail": "Stake in EMS-Chemie came when her father Christoph Blocher sold his shares to her and siblings in 2004."
    },
    {
      "rank": 45,
      "name": "Blair Parry-Okeden",
      "nw": 10300000000,
      "country": "United States",
      "path": "inherited",
      "detail": "Inherited a 25% stake in Cox Enterprises when her mother Barbara Cox Anthony died in 2007."
    },
    {
      "rank": 46,
      "name": "Carrie Perrodo & family",
      "nw": 10200000000,
      "country": "France",
      "path": "widowed",
      "detail": "Inherited oil company Perenco when her husband Hubert Perrodo died in 2006."
    },
    {
      "rank": 47,
      "name": "Randa Duncan Williams",
      "nw": 10200000000,
      "country": "United States",
      "path": "inherited",
      "detail": "Inherited a stake in Enterprise Products, the pipeline firm her father Dan Duncan founded in 1968."
    },
    {
      "rank": 48,
      "name": "Dannine Avara",
      "nw": 10100000000,
      "country": "United States",
      "path": "inherited",
      "detail": "Inherited a stake in Enterprise Products Partners, founded by her late father Dan Duncan."
    },
    {
      "rank": 49,
      "name": "Milane Frantz",
      "nw": 10100000000,
      "country": "United States",
      "path": "inherited",
      "detail": "Inherited a stake in Enterprise Products Partners after her father Dan Duncan died in 2010."
    },
    {
      "rank": 50,
      "name": "Marie Besnier Beauvalot",
      "nw": 9900000000,
      "country": "France",
      "path": "inherited",
      "detail": "Dairy heiress with an estimated 21% of Lactalis, which her grandfather founded in 1933."
    },
    {
      "rank": 51,
      "name": "Lee Boo-jin",
      "nw": 9800000000,
      "country": "South Korea",
      "path": "inherited",
      "detail": "Daughter of Samsung patriarch Lee Kun-hee; split his Samsung stakes with her mother and siblings."
    },
    {
      "rank": 52,
      "name": "Zeng Fangqin",
      "nw": 9800000000,
      "country": "Hong Kong",
      "path": "built",
      "detail": "Founded Apple parts supplier Lingyi iTech in 2006, per Reuters; Forbes rates her self-made."
    },
    {
      "rank": 53,
      "name": "Pauline MacMillan Keinath",
      "nw": 9500000000,
      "country": "United States",
      "path": "inherited",
      "detail": "Descendant of Cargill founder W.W. Cargill; holds an estimated 13% family stake in the company."
    },
    {
      "rank": 54,
      "name": "Lee Seo-hyun",
      "nw": 9500000000,
      "country": "South Korea",
      "path": "inherited",
      "detail": "Inherited about 22% of father Lee Kun-hee's Samsung Electronics and C&T stakes in 2021."
    },
    {
      "rank": 55,
      "name": "Maria Asuncion Aramburuzabala & family",
      "nw": 9300000000,
      "country": "Mexico",
      "path": "inherited",
      "detail": "Inherited her father's stake in Grupo Modelo at 32; her grandfather co-founded it in 1925."
    },
    {
      "rank": 56,
      "name": "Massimiliana Landini Aleotti & family",
      "nw": 9200000000,
      "country": "Italy",
      "path": "widowed",
      "detail": "She and her children inherited Menarini from her late husband Alberto Aleotti in 2014."
    },
    {
      "rank": 57,
      "name": "Alexandra Schoerghuber & family",
      "nw": 9100000000,
      "country": "Germany",
      "path": "widowed",
      "detail": "Widow of Stefan Schoerghuber, who inherited his father's fortune; she now chairs the family group's board."
    },
    {
      "rank": 58,
      "name": "Elisabeth DeLuca & family",
      "nw": 9000000000,
      "country": "United States",
      "path": "widowed",
      "detail": "Inherited Subway co-founder Fred DeLuca's half of the chain after he died in 2015."
    },
    {
      "rank": 59,
      "name": "Marie-Hélène Habert-Dassault",
      "nw": 9000000000,
      "country": "France",
      "path": "inherited",
      "detail": "Heir to the Dassault fortune with her siblings after her father Serge Dassault died in 2018."
    },
    {
      "rank": 60,
      "name": "Hong Ra-hee",
      "nw": 8800000000,
      "country": "South Korea",
      "path": "widowed",
      "detail": "Widow of Samsung chairman Lee Kun-hee; inherited about a third of his Samsung Electronics and C&T stakes in 2021."
    },
    {
      "rank": 61,
      "name": "Lynsi Snyder",
      "nw": 8700000000,
      "country": "United States",
      "path": "inherited",
      "detail": "Last family heir to In-N-Out, founded by her grandparents; received her final stake via trust at 35."
    },
    {
      "rank": 62,
      "name": "Tamara Gustavson",
      "nw": 8600000000,
      "country": "United States",
      "path": "inherited",
      "detail": "Largest shareholder of Public Storage, which her late father B. Wayne Hughes co-founded in 1972."
    },
    {
      "rank": 63,
      "name": "Ronda Stryker",
      "nw": 8500000000,
      "country": "United States",
      "path": "inherited",
      "detail": "Inherited about 4% of Stryker Corp. from her parents; her grandfather Homer Stryker founded it."
    },
    {
      "rank": 64,
      "name": "Denise York & family",
      "nw": 8500000000,
      "country": "United States",
      "path": "inherited",
      "detail": "Father Edward DeBartolo Sr. bought the 49ers in 1977; she took control from her brother in 2000."
    },
    {
      "rank": 65,
      "name": "Rekha Jhunjhunwala",
      "nw": 8300000000,
      "country": "India",
      "path": "widowed",
      "detail": "Inherited a stock portfolio from her late husband, investor Rakesh Jhunjhunwala, who died in 2022."
    },
    {
      "rank": 66,
      "name": "Sofie Kirk Kristiansen",
      "nw": 8300000000,
      "country": "Denmark",
      "path": "inherited",
      "detail": "Fourth-generation Lego owner; shares the family's 75% stake with her father and siblings."
    },
    {
      "rank": 67,
      "name": "Agnete Kirk Thinggaard",
      "nw": 8300000000,
      "country": "Denmark",
      "path": "inherited",
      "detail": "Fourth-generation Lego owner; splits the family's 75% stake with her father, sister and brother."
    },
    {
      "rank": 68,
      "name": "Denise Coates",
      "nw": 8100000000,
      "country": "United Kingdom",
      "path": "built",
      "detail": "Ran family betting shops, then registered Bet365 in 2000 and launched it in 2001; self-made per Forbes."
    },
    {
      "rank": 69,
      "name": "Tatyana Kim",
      "nw": 8100000000,
      "country": "Russia",
      "path": "built",
      "detail": "Founded e-commerce retailer Wildberries in 2004 from her Moscow apartment; her then-husband joined later."
    },
    {
      "rank": 70,
      "name": "Gayle Benson",
      "nw": 7900000000,
      "country": "United States",
      "path": "widowed",
      "detail": "Inherited the New Orleans Saints and Pelicans from husband Tom Benson after his 2018 death."
    },
    {
      "rank": 71,
      "name": "Tanya Saadé Zeenny",
      "nw": 7900000000,
      "country": "France",
      "path": "inherited",
      "detail": "Daughter of CMA CGM founder Jacques Saadé (d. 2018); jointly controls the shipping company with family."
    },
    {
      "rank": 72,
      "name": "Ling Tang",
      "nw": 7900000000,
      "country": "Canada",
      "path": "built",
      "detail": "Pre-IPO investor in AppLovin; owns about 5% through an entity called Angel Pride Holdings Ltd."
    },
    {
      "rank": 73,
      "name": "Judy Faulkner",
      "nw": 7800000000,
      "country": "United States",
      "path": "built",
      "detail": "Founded medical-records software maker Epic Systems in 1979; CEO with an estimated 43% stake."
    },
    {
      "rank": 74,
      "name": "Rahel Blocher",
      "nw": 7700000000,
      "country": "Switzerland",
      "path": "inherited",
      "detail": "Got her EMS-Chemie stake in 2004 when father Christoph Blocher sold his shares to his children."
    },
    {
      "rank": 75,
      "name": "Peggy Cherng",
      "nw": 7700000000,
      "country": "United States",
      "path": "built",
      "detail": "Co-founded Panda Express with husband Andrew Cherng in 1983; now co-CEO."
    },
    {
      "rank": 76,
      "name": "Zong Fuli",
      "nw": 7700000000,
      "country": "China",
      "path": "inherited",
      "detail": "Inherited a Wahaha stake in 2024 after her father, founder Zong Qinghou, died."
    },
    {
      "rank": 77,
      "name": "Maria Fernanda Amorim & family",
      "nw": 7600000000,
      "country": "Portugal",
      "path": "widowed",
      "detail": "Widow of Américo Amorim (d. 2017); she and her daughters inherited his fortune, mainly a Galp stake."
    },
    {
      "rank": 78,
      "name": "Melanie Perkins",
      "nw": 7600000000,
      "country": "Australia",
      "path": "built",
      "detail": "Co-founded design software maker Canva in 2013; CEO with an estimated 18% stake."
    },
    {
      "rank": 79,
      "name": "Maria Angelicoussis",
      "nw": 7500000000,
      "country": "Greece",
      "path": "inherited",
      "detail": "Took over the shipping group her grandfather founded after her father John's death in 2021."
    },
    {
      "rank": 80,
      "name": "Dona Bertarelli",
      "nw": 7500000000,
      "country": "Switzerland",
      "path": "inherited",
      "detail": "Most of her wealth comes from the 2007 sale of family biotech firm Serono for over $13 billion."
    },
    {
      "rank": 81,
      "name": "Fan Hongwei",
      "nw": 7500000000,
      "country": "China",
      "path": "built",
      "detail": "Started a textile business with husband Chen Jianhua that grew into Hengli; she chairs Hengli Petrochemical."
    },
    {
      "rank": 82,
      "name": "Thai Lee",
      "nw": 7500000000,
      "country": "United States",
      "path": "built",
      "detail": "Bought SHI's predecessor in 1989 with then-husband for under $1 million; now CEO, owns 60%."
    },
    {
      "rank": 83,
      "name": "Janice McNair & family",
      "nw": 7300000000,
      "country": "United States",
      "path": "widowed",
      "detail": "Inherited 80% of the NFL's Houston Texans when husband Bob McNair died in 2018; she died July 2026."
    },
    {
      "rank": 84,
      "name": "Karen Pritzker",
      "nw": 7200000000,
      "country": "United States",
      "path": "inherited",
      "detail": "One of 13 billionaire Pritzker heirs; grandfather A.N. Pritzker built Marmon and Hyatt hotels."
    },
    {
      "rank": 85,
      "name": "Daniela Amodei",
      "nw": 7000000000,
      "country": "United States",
      "path": "built",
      "detail": "Co-founded AI company Anthropic in 2021 with brother Dario and other ex-OpenAI staff; president."
    },
    {
      "rank": 86,
      "name": "Edythe Broad & family",
      "nw": 7000000000,
      "country": "United States",
      "path": "widowed",
      "detail": "Widow of billionaire Eli Broad (d. 2021); Forbes classes her fortune as inherited."
    },
    {
      "rank": 87,
      "name": "Taylor Thomson",
      "nw": 7000000000,
      "country": "Canada",
      "path": "inherited",
      "detail": "Heir to grandfather Roy Thomson's media empire; owns about 14% of Thomson Reuters via Woodbridge."
    },
    {
      "rank": 88,
      "name": "Marian Ilitch & family",
      "nw": 6900000000,
      "country": "United States",
      "path": "built",
      "detail": "Co-founded Little Caesars Pizza with husband Mike in 1959; owns the chain after his 2017 death."
    },
    {
      "rank": 89,
      "name": "Marisa Del Vecchio",
      "nw": 6800000000,
      "country": "Italy",
      "path": "inherited",
      "detail": "Inherited 12.5% of holding company Delfin when her father Leonardo Del Vecchio died in 2022."
    },
    {
      "rank": 90,
      "name": "Paola Del Vecchio",
      "nw": 6800000000,
      "country": "Italy",
      "path": "inherited",
      "detail": "Inherited 12.5% of holding company Delfin when her father Leonardo Del Vecchio died in 2022."
    },
    {
      "rank": 91,
      "name": "Katharine Rayner",
      "nw": 6800000000,
      "country": "United States",
      "path": "inherited",
      "detail": "Inherited about 17% of Cox Enterprises from her mother Anne Cox Chambers; her grandfather founded it."
    },
    {
      "rank": 92,
      "name": "Margaretta Taylor",
      "nw": 6800000000,
      "country": "United States",
      "path": "inherited",
      "detail": "Inherited about 17% of Cox Enterprises from her mother Anne Cox Chambers; her grandfather founded it."
    },
    {
      "rank": 93,
      "name": "Nicoletta Zampillo",
      "nw": 6800000000,
      "country": "Italy",
      "path": "widowed",
      "detail": "Widow of Leonardo Del Vecchio (d. 2022); inherited 12.5% of his holding company Delfin."
    },
    {
      "rank": 94,
      "name": "Marina Budiman",
      "nw": 6700000000,
      "country": "Indonesia",
      "path": "built",
      "detail": "Co-founded data center company DCI Indonesia in 2011; earlier co-founded internet provider Indonet."
    },
    {
      "rank": 95,
      "name": "Elizabeth Uihlein",
      "nw": 6700000000,
      "country": "United States",
      "path": "built",
      "detail": "Started packaging distributor Uline with husband Richard in their basement in 1980; she is president."
    },
    {
      "rank": 96,
      "name": "Barbara Boehringer",
      "nw": 6600000000,
      "country": "Germany",
      "path": "inherited",
      "detail": "Heir to Boehringer Ingelheim, the family drugmaker Albert Boehringer founded in 1885."
    },
    {
      "rank": 97,
      "name": "Isabel Boehringer",
      "nw": 6600000000,
      "country": "Germany",
      "path": "inherited",
      "detail": "She and 14 family members, all later generations, own equal parts of Boehringer Ingelheim."
    },
    {
      "rank": 98,
      "name": "Katharina von Baumbach",
      "nw": 6600000000,
      "country": "Germany",
      "path": "inherited",
      "detail": "Heir to the Boehringer Ingelheim pharmaceutical fortune, a family company founded in 1885."
    },
    {
      "rank": 99,
      "name": "Ulrike von Baumbach",
      "nw": 6600000000,
      "country": "Germany",
      "path": "inherited",
      "detail": "She and 14 family members own equal parts of Boehringer Ingelheim, founded 1885."
    },
    {
      "rank": 100,
      "name": "Wu Yajun",
      "nw": 6600000000,
      "country": "China",
      "path": "built",
      "detail": "Co-founded property developer Longfor in 1993; her wealth is mainly her Longfor stake."
    }
  ],
  "board": [
    {
      "name": "MacKenzie Scott",
      "ever": true,
      "list": "Forbes 400 (Sept 2026)",
      "nw": 27900000000,
      "nw_year": 2026,
      "gone": false,
      "via": "divorce",
      "where_now": "Forbes says she has given $26.4 billion to more than 2,700 nonprofits, citing her Yield Giving site.",
      "url": "https://www.forbes.com/profile/mackenzie-scott/"
    },
    {
      "name": "Melinda French Gates",
      "ever": true,
      "list": "Forbes 400 (Sept 2026)",
      "nw": 34600000000,
      "nw_year": 2026,
      "gone": false,
      "via": "divorce",
      "where_now": "Forbes says she announced a $1 billion donation in 2024 for women's and girls' rights, to be given through 2026, and invests through Pivotal Ventures.",
      "url": "https://www.forbes.com/profile/melinda-french-gates/"
    },
    {
      "name": "Elena Rybolovleva",
      "ever": false,
      "where_now": "A Geneva appeals court cut her 4 billion Swiss franc award to 564 million francs (about $600 million) in 2015. That October they settled privately.",
      "url": "https://www.cnbc.com/2015/06/22/russian-billionaires-divorce-slashed-by-nearly-4-billion.html"
    },
    {
      "name": "Yuan Liping",
      "ever": true,
      "list": "Forbes World's Billionaires 2023",
      "nw": 1400000000,
      "nw_year": 2023,
      "gone": true,
      "via": "divorce",
      "where_now": "A rally in Kangtai shares lifted her to $5.5 billion by August 2020. Forbes had her at $1.4 billion on its 2023 list, her last.",
      "url": "https://www.caixinglobal.com/2020-08-06/chinese-pharma-tycoon-has-worlds-fastest-growing-fortune-101589424.html"
    },
    {
      "name": "Sue Gross",
      "ever": true,
      "list": "Forbes World's Billionaires 2026",
      "nw": 1900000000,
      "nw_year": 2026,
      "gone": false,
      "via": "divorce",
      "where_now": "Forbes puts her at $1.9B (Nov 2026), up from the roughly $1.3 billion she received in the 2017 divorce from PIMCO cofounder Bill Gross.",
      "url": "https://www.forbes.com/profile/sue-gross/"
    },
    {
      "name": "Li Qiong",
      "ever": true,
      "list": "Forbes World's Billionaires 2026",
      "nw": 2100000000,
      "nw_year": 2026,
      "gone": false,
      "via": "divorce",
      "where_now": "Ten years after her 7 billion yuan share settlement, Forbes still counts her a billionaire: $1.5 billion in November 2026.",
      "url": "https://www.forbes.com/profile/li-qiong/"
    },
    {
      "name": "Nicole Shanahan",
      "ever": true,
      "list": "Forbes World's Billionaires 2026",
      "nw": 1400000000,
      "nw_year": 2026,
      "gone": false,
      "via": "divorce",
      "where_now": "Forbes says she has donated a chunk of her Google stock to the Bia-Echo Foundation, which she heads.",
      "url": "https://www.forbes.com/profile/nicole-shanahan/"
    },
    {
      "name": "Elaine Wynn",
      "ever": true,
      "list": "Forbes World's Billionaires 2025",
      "nw": 2000000000,
      "nw_year": 2025,
      "gone": true,
      "via": "cofounder",
      "where_now": "She pledged $50 million to LACMA, won a 2018 proxy fight at Wynn Resorts, and still owned about 8% of it when she died in 2025.",
      "url": "https://www.forbes.com/profile/elaine-wynn/"
    },
    {
      "name": "Tatiana Akhmedova",
      "ever": false,
      "where_now": "He refused to pay the 2016 London award. In 2021 she took cash and art in a deal Bloomberg valued at about $186 million.",
      "url": "https://en.wikipedia.org/wiki/Farkhad_Akhmedov"
    },
    {
      "name": "Jamie Cooper",
      "ever": false,
      "where_now": "In 2020 the UK Supreme Court backed a $360 million grant from the charity she co-founded with Chris Hohn to her own, Big Win Philanthropy.",
      "url": "https://caselaw.nationalarchives.gov.uk/uksc/2020/33"
    },
    {
      "name": "Wendy McCaw",
      "ever": true,
      "list": "Forbes 400 (1999)",
      "nw": 1500000000,
      "nw_year": 1999,
      "gone": true,
      "via": "divorce"
    },
    {
      "name": "Sheila Johnson",
      "ever": true,
      "list": "Forbes World's Billionaires 2026",
      "nw": 1200000000,
      "nw_year": 2026,
      "gone": false,
      "via": "cofounder",
      "where_now": "After her 2002 divorce she sold her BET shares and invested in the Salamander Collection hotels. She also holds stakes in three Washington sports teams through Monumental Sports (Forbes).",
      "url": "https://www.forbes.com/profile/sheila-johnson/"
    },
    {
      "name": "Heather Mills",
      "ever": false,
      "where_now": "Her vegan food manufacturer VBites went into administration on 11 December 2023 (BBC News, cited by Wikipedia).",
      "url": "https://en.wikipedia.org/wiki/Heather_Mills"
    },
    {
      "name": "Natalia Potanina",
      "ever": false,
      "where_now": "In April 2026 a London judge refused to delay her roughly $5 billion claim against Vladimir Potanin and set a final hearing for November 2026.",
      "url": "https://caselaw.nationalarchives.gov.uk/ewfc/2026/80"
    },
    {
      "name": "Patricia Kluge",
      "ever": false,
      "where_now": "She borrowed $65 million to expand her Virginia winery and build luxury homes, then defaulted. Lenders took the winery and her estate, which Donald Trump later bought.",
      "url": "https://www.forbes.com/2011/03/10/patricia-kluge-lifestyle-billionaire-bankruptcy-estate.html"
    }
  ],
  "extra": [
    {
      "name": "Jian Yao",
      "ex": "Xu Hang",
      "year": 2020,
      "nw": 2800000000,
      "list": "Forbes World's Billionaires 2026",
      "via": "divorce",
      "note": "Got a minority stake in Mindray, the medical-device maker her ex co-founded.",
      "url": "https://www.forbes.com/profile/jian-yao/"
    },
    {
      "name": "Gloria Joseph",
      "ex": "George Joseph",
      "year": 1985,
      "nw": 1600000000,
      "list": "Forbes World's Billionaires 2026",
      "via": "divorce",
      "note": "Got 17% of insurer Mercury General in the divorce and still owns it.",
      "url": "https://www.forbes.com/profile/gloria-joseph/"
    },
    {
      "name": "Denise Prenosil",
      "ex": "Ed Stack",
      "year": 2006,
      "nw": 1100000000,
      "list": "Forbes World's Billionaires 2026",
      "via": "divorce",
      "note": "Got nearly 5% of Dick's Sporting Goods in the divorce and still owns it.",
      "url": "https://www.forbes.com/profile/denise-prenosil/"
    }
  ],
  "ticker": [
    "👑 Only <b>2</b> of the 100 richest women got there by divorce",
    "🧬 <b>53</b> of the 100 richest women inherited it",
    "💔 <b>9</b> women on our leaderboard ever made a billionaire list"
  ]
};
