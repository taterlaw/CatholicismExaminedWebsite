/* =====================================================================
   CATHOLICISM EXAMINED — ALL CLAIMS LIVE IN THIS ONE FILE
   =====================================================================

   HOW TO ADD A NEW CLAIM
   1. Copy the TEMPLATE below (from the { through the "},").
   2. Paste it at the bottom of the window.CLAIMS list, where it says
      "Next claim goes here" (just above the final "];").
   3. Fill in the fields. Save. Refresh the page. Done.
   4. Open verify.html in a browser to confirm every source is approved.

   SOURCE RULE — only these three kinds of evidence are allowed:
     type: "scripture"   → NABRE Bible text, linked to bible.usccb.org
     type: "catechism"   → Catechism of the Catholic Church, linked to vatican.va
     type: "magisterium" → Official Church teaching (councils, popes), linked to vatican.va

   ---------------------------------------------------------------------
   TEMPLATE (copy me)
   ---------------------------------------------------------------------
   {
     id: "short-id-with-dashes",          // used in the web address: #short-id-with-dashes
     title: "The question, as a non-Catholic would ask it?",
     category: "Mary",                    // groups claims in the filter bar
     summary: "One or two plain sentences that answer the question.",
     explanation: [
       "Paragraph one, in everyday words.",
       "Paragraph two."
     ],
     points: [                            // OPTIONAL: "The case, step by step"
       {
         heading: "A short step title",
         text: "One plain paragraph for this step.",
         evidenceRefs: ["Luke 1:34"]      // must match refs in the evidence list
       }
     ],
     evidence: [
       {
         type: "scripture",               // scripture | catechism | magisterium
         ref: "Luke 1:34",                // must be unique within this claim
         source: "Gospel of Luke",
         translation: "NABRE",            // required for scripture
         quote: "Exact words from the source.",
         plain: "What this means in plain language.",
         note: "",                        // optional extra context
         url: "https://bible.usccb.org/bible/luke/1"
       }
     ],
     objections: [
       {
         question: "A common question or objection?",
         answer: "A plain answer.",
         evidenceRefs: ["Luke 1:34"]      // must match refs in the evidence list
       }
     ],
     furtherReading: [                    // OPTIONAL: NOT evidence; shown in a separate box
       {
         title: "Article title",
         author: "Author name",
         publisher: "Publisher, year",
         url: "https://www.catholic.com/...",   // host must be in furtherReadingHosts below
         note: "Why it's worth reading."
       }
     ]
   },
   ===================================================================== */

window.ALLOWED_SOURCES = {
  types: {
    scripture:   { label: "Scripture",       hosts: ["bible.usccb.org"] },
    catechism:   { label: "Catechism",       hosts: ["www.vatican.va"] },
    magisterium: { label: "Church Teaching", hosts: ["www.vatican.va"] }
  },
  scriptureTranslation: "NABRE",
  // "Further reading" links are NOT evidence. They appear in a separate, labeled box,
  // and may only point to these Catholic sites.
  furtherReadingHosts: ["www.catholic.com"]
};

window.CLAIMS = [

  /* -------------------------------------------------------------------
     CLAIM 1 — Mary's perpetual virginity
     ------------------------------------------------------------------- */
  {
    id: "perpetual-virginity",
    title: "Why do Catholics believe Mary remained a virgin her whole life?",
    category: "Mary",
    summary:
      "The Catholic Church teaches that Mary was a virgin before, during, and after the birth of Jesus, and that Jesus was her only child. She is called “ever-virgin.”",
    explanation: [
      "Most Christians agree that Mary was a virgin when she conceived Jesus. The Gospels of Matthew and Luke say so directly. The Catholic Church goes further. It teaches that Mary stayed a virgin for the rest of her life and never had other children (Catechism 499–501).",
      "This belief is very old. The Catechism says that as the Church’s understanding of Mary’s role deepened, it came to confess her “real and perpetual virginity.” The Church’s liturgy calls her Aeiparthenos, a Greek word meaning “Ever-virgin” (Catechism 499). The Second Vatican Council repeats this, honoring “the glorious ever Virgin Mary” (Lumen Gentium 52).",
      "Why does it matter? Catholics see Mary’s virginity as a sign that Jesus came from God, not from a human father (Catechism 503). They also see it as a sign of Mary’s complete, undivided faith and gift of herself to God (Catechism 506).",
      "The most common objection is that the Bible mentions “brothers” and “sisters” of Jesus. The Catechism answers this directly, and so do the official notes in the Catholic Bible. See “Common questions” below."
    ],
    evidence: [
      /* ---------- SCRIPTURE (NABRE) ---------- */
      {
        type: "scripture",
        ref: "Luke 1:26–27",
        source: "Gospel of Luke",
        translation: "NABRE",
        quote:
          "In the sixth month, the angel Gabriel was sent from God to a town of Galilee called Nazareth, to a virgin betrothed to a man named Joseph, of the house of David, and the virgin’s name was Mary.",
        plain: "When God sent the angel, Luke describes Mary as a virgin twice in one sentence.",
        url: "https://bible.usccb.org/bible/luke/1"
      },
      {
        type: "scripture",
        ref: "Luke 1:34",
        source: "Gospel of Luke",
        translation: "NABRE",
        quote: "But Mary said to the angel, “How can this be, since I have no relations with a man?”",
        plain: "Mary herself says she has not been with a man, so she is puzzled about how she will have a child.",
        note: "The Catechism quotes Mary’s words, “How can this be?”, when it explains the meaning of her virginity (Catechism 505).",
        url: "https://bible.usccb.org/bible/luke/1"
      },
      {
        type: "scripture",
        ref: "Matthew 1:20",
        source: "Gospel of Matthew",
        translation: "NABRE",
        quote: "For it is through the holy Spirit that this child has been conceived in her.",
        plain: "The angel tells Joseph that the child came from God, not from any man.",
        url: "https://bible.usccb.org/bible/matthew/1"
      },
      {
        type: "scripture",
        ref: "Matthew 1:23",
        source: "Gospel of Matthew",
        translation: "NABRE",
        quote:
          "Behold, the virgin shall be with child and bear a son, and they shall name him Emmanuel, which means “God is with us.”",
        plain: "Matthew presents Jesus’ birth from a virgin as a fulfillment of God’s promise.",
        note: "Matthew is quoting the prophet Isaiah (Isaiah 7:14). The Catechism sees in this “the fulfilment of the divine promise given through the prophet Isaiah” (Catechism 497). Matthew quotes the Greek version, which says “virgin”; the NABRE translates the Hebrew of Isaiah 7:14 as “young woman.”",
        url: "https://bible.usccb.org/bible/matthew/1"
      },
      {
        type: "scripture",
        ref: "Matthew 1:25",
        source: "Gospel of Matthew",
        translation: "NABRE",
        quote: "He had no relations with her until she bore a son, and he named him Jesus.",
        plain: "Joseph was not the father of Jesus. Matthew makes clear the conception was not his doing.",
        note: "The official NABRE footnote on this verse says: “the evangelist is concerned to emphasize that Joseph was not responsible for the conception of Jesus. The Greek word translated ‘until’ does not imply normal marital conduct after Jesus’ birth, nor does it exclude it.”",
        url: "https://bible.usccb.org/bible/matthew/1"
      },
      {
        type: "scripture",
        ref: "Luke 2:7",
        source: "Gospel of Luke",
        translation: "NABRE",
        quote: "she gave birth to her firstborn son.",
        plain: "Jesus is called Mary’s “firstborn.” This does not by itself mean other children came later.",
        note: "In summary, the official NABRE footnote on this verse explains that “firstborn son” is a legal term about the rights and privileges of the firstborn son under the Law (it cites Exodus 13:2 among others). It refers readers to the notes on Matthew 1:25 and Mark 6:3. Open the source link to read the full note.",
        url: "https://bible.usccb.org/bible/luke/2"
      },
      {
        type: "scripture",
        ref: "Mark 6:3",
        source: "Gospel of Mark",
        translation: "NABRE",
        quote:
          "Is he not the carpenter, the son of Mary, and the brother of James and Joses and Judas and Simon? And are not his sisters here with us?",
        plain: "The people of Nazareth mention Jesus’ “brothers” and “sisters.” This is the passage most often raised against the teaching.",
        note: "The official NABRE footnote on this verse says: “in Semitic usage, the terms ‘brother,’ ‘sister’ are applied not only to children of the same parents, but to nephews, nieces, cousins, half-brothers, and half-sisters.” The note is honest that “Mark may have understood the terms literally,” and adds: “The question of meaning here would not have arisen but for the faith of the church in Mary’s perpetual virginity.”",
        url: "https://bible.usccb.org/bible/mark/6"
      },
      {
        type: "scripture",
        ref: "Matthew 13:55",
        source: "Gospel of Matthew",
        translation: "NABRE",
        quote:
          "Is he not the carpenter’s son? Is not his mother named Mary and his brothers James, Joseph, Simon, and Judas?",
        plain: "Matthew names two of these “brothers” as James and Joseph. Keep those two names in mind.",
        url: "https://bible.usccb.org/bible/matthew/13"
      },
      {
        type: "scripture",
        ref: "Matthew 27:56",
        source: "Gospel of Matthew",
        translation: "NABRE",
        quote: "Among them were Mary Magdalene and Mary the mother of James and Joseph, and the mother of the sons of Zebedee.",
        plain: "At the cross, Matthew says James and Joseph’s mother is a different Mary, not the mother of Jesus.",
        url: "https://bible.usccb.org/bible/matthew/27"
      },
      {
        type: "scripture",
        ref: "Matthew 28:1",
        source: "Gospel of Matthew",
        translation: "NABRE",
        quote:
          "After the sabbath, as the first day of the week was dawning, Mary Magdalene and the other Mary came to see the tomb.",
        plain: "Matthew calls this mother of James and Joseph “the other Mary.” The Catechism points to this detail (Catechism 500).",
        url: "https://bible.usccb.org/bible/matthew/28"
      },
      {
        type: "scripture",
        ref: "Galatians 1:19",
        source: "Letter to the Galatians",
        translation: "NABRE",
        quote: "But I did not see any other of the apostles, only James the brother of the Lord.",
        plain: "Paul calls James “the brother of the Lord.” The Catechism lists this verse among the “brothers” passages it explains (Catechism 500).",
        url: "https://bible.usccb.org/bible/galatians/1"
      },
      {
        type: "scripture",
        ref: "John 19:26–27",
        source: "Gospel of John",
        translation: "NABRE",
        quote:
          "When Jesus saw his mother and the disciple there whom he loved, he said to his mother, “Woman, behold, your son.” Then he said to the disciple, “Behold, your mother.” And from that hour the disciple took her into his home.",
        plain: "As he dies, Jesus places his mother in the care of his disciple. The Catechism cites this scene in the paragraph that says “Jesus is Mary’s only son” and calls her the spiritual mother of all believers (Catechism 501).",
        url: "https://bible.usccb.org/bible/john/19"
      },

      /* ---------- CATECHISM ---------- */
      {
        type: "catechism",
        ref: "CCC 496",
        source: "Catechism of the Catholic Church",
        quote:
          "From the first formulations of her faith, the Church has confessed that Jesus was conceived solely by the power of the Holy Spirit in the womb of the Virgin Mary, affirming also the corporeal aspect of this event: Jesus was conceived “by the Holy Spirit without human seed”.",
        plain: "From the very beginning, Christians believed Jesus had no human father. This was a real, physical event, not just a symbol.",
        url: "https://www.vatican.va/archive/ENG0015/__P1K.HTM"
      },
      {
        type: "catechism",
        ref: "CCC 497",
        source: "Catechism of the Catholic Church",
        quote:
          "The Gospel accounts understand the virginal conception of Jesus as a divine work that surpasses all human understanding and possibility: “That which is conceived in her is of the Holy Spirit”, said the angel to Joseph about Mary his fiancee. The Church sees here the fulfilment of the divine promise given through the prophet Isaiah: “Behold, a virgin shall conceive and bear a son.”",
        plain: "The virgin birth is a miracle of God. The Church sees it as the fulfillment of Isaiah’s prophecy.",
        url: "https://www.vatican.va/archive/ENG0015/__P1K.HTM"
      },
      {
        type: "catechism",
        ref: "CCC 499",
        source: "Catechism of the Catholic Church",
        quote:
          "The deepening of faith in the virginal motherhood led the Church to confess Mary’s real and perpetual virginity even in the act of giving birth to the Son of God made man. In fact, Christ’s birth “did not diminish his mother’s virginal integrity but sanctified it.” [A]nd so the liturgy of the Church celebrates Mary as Aeiparthenos, the “Ever-virgin”.",
        plain: "This is the core teaching: Mary stayed a virgin, even in giving birth, and for all her life. The Church calls her “Ever-virgin.”",
        note: "In its footnotes, the Catechism supports this paragraph with Vatican II (Lumen Gentium 57) and earlier Church councils.",
        url: "https://www.vatican.va/archive/ENG0015/__P1K.HTM"
      },
      {
        type: "catechism",
        ref: "CCC 500",
        source: "Catechism of the Catholic Church",
        quote:
          "Against this doctrine the objection is sometimes raised that the Bible mentions brothers and sisters of Jesus. The Church has always understood these passages as not referring to other children of the Virgin Mary. In fact James and Joseph, “brothers of Jesus”, are the sons of another Mary, a disciple of Christ, whom St. Matthew significantly calls “the other Mary”. They are close relations of Jesus, according to an Old Testament expression.",
        plain: "The “brothers” of Jesus were close relatives, not Mary’s own children. Two of them, James and Joseph, had a different mother.",
        url: "https://www.vatican.va/archive/ENG0015/__P1K.HTM"
      },
      {
        type: "catechism",
        ref: "CCC 501",
        source: "Catechism of the Catholic Church",
        quote:
          "Jesus is Mary’s only son, but her spiritual motherhood extends to all men whom indeed he came to save: “The Son whom she brought forth is he whom God placed as the first-born among many brethren, that is, the faithful in whose generation and formation she co-operates with a mother’s love.”",
        plain: "Jesus was Mary’s only child. But Catholics see her as a spiritual mother to all believers.",
        url: "https://www.vatican.va/archive/ENG0015/__P1K.HTM"
      },
      {
        type: "catechism",
        ref: "CCC 503",
        source: "Catechism of the Catholic Church",
        quote: "Mary’s virginity manifests God’s absolute initiative in the Incarnation. Jesus has only God as Father.",
        plain: "Mary’s virginity shows that Jesus came entirely from God’s action. God alone is his Father.",
        url: "https://www.vatican.va/archive/ENG0015/__P1K.HTM"
      },
      {
        type: "catechism",
        ref: "CCC 506",
        source: "Catechism of the Catholic Church",
        quote:
          "Mary is a virgin because her virginity is the sign of her faith “unadulterated by any doubt”, and of her undivided gift of herself to God’s will.",
        plain: "Mary’s lifelong virginity is a sign that she gave herself completely and only to God.",
        url: "https://www.vatican.va/archive/ENG0015/__P1K.HTM"
      },
      {
        type: "catechism",
        ref: "CCC 507",
        source: "Catechism of the Catholic Church",
        quote: "At once virgin and mother, Mary is the symbol and the most perfect realization of the Church.",
        plain: "Catholics see Mary as a model of what the whole Church is called to be.",
        url: "https://www.vatican.va/archive/ENG0015/__P1K.HTM"
      },
      {
        type: "catechism",
        ref: "CCC 510",
        source: "Catechism of the Catholic Church",
        quote:
          "Mary “remained a virgin in conceiving her Son, a virgin in giving birth to him, a virgin in carrying him, a virgin in nursing him at her breast, always a virgin”: with her whole being she is “the handmaid of the Lord”.",
        plain: "The Catechism’s summary: Mary was a virgin at every stage, and always.",
        note: "Here the Catechism is quoting St. Augustine. The quotation is cited as part of the Catechism’s own official text.",
        url: "https://www.vatican.va/archive/ENG0015/__P1K.HTM"
      },

      /* ---------- CHURCH TEACHING (MAGISTERIUM) ---------- */
      {
        type: "magisterium",
        ref: "Lumen Gentium 52",
        source: "Second Vatican Council, Lumen Gentium (1964)",
        quote:
          "Joined to Christ the Head and in the unity of fellowship with all His saints, the faithful must in the first place reverence the memory “of the glorious ever Virgin Mary, Mother of our God and Lord Jesus Christ”.",
        plain: "The Second Vatican Council, the Church’s most recent worldwide council, calls Mary “ever Virgin.”",
        url: "https://www.vatican.va/archive/hist_councils/ii_vatican_council/documents/vat-ii_const_19641121_lumen-gentium_en.html"
      },
      {
        type: "magisterium",
        ref: "Lumen Gentium 57",
        source: "Second Vatican Council, Lumen Gentium (1964)",
        quote:
          "This union is manifest also at the birth of Our Lord, who did not diminish His mother’s virginal integrity but sanctified it.",
        plain: "Jesus’ birth did not end Mary’s virginity. It made it holy.",
        url: "https://www.vatican.va/archive/hist_councils/ii_vatican_council/documents/vat-ii_const_19641121_lumen-gentium_en.html"
      },
      {
        type: "magisterium",
        ref: "Lumen Gentium 63",
        source: "Second Vatican Council, Lumen Gentium (1964)",
        quote:
          "By her belief and obedience, not knowing man but overshadowed by the Holy Spirit, as the new Eve she brought forth on earth the very Son of the Father, showing an undefiled faith, not in the word of the ancient serpent, but in that of God’s messenger.",
        plain: "Mary conceived Jesus without knowing a man, by the power of the Holy Spirit. Her faith was pure and complete.",
        url: "https://www.vatican.va/archive/hist_councils/ii_vatican_council/documents/vat-ii_const_19641121_lumen-gentium_en.html"
      },
      {
        type: "magisterium",
        ref: "Credo of the People of God 14",
        source: "Pope St. Paul VI, Solemni Hac Liturgia (1968)",
        quote:
          "We believe that Mary is the Mother, who remained ever a Virgin, of the Incarnate Word, our God and Savior Jesus Christ.",
        plain: "Pope Paul VI included Mary’s perpetual virginity in his solemn profession of the Catholic faith.",
        url: "https://www.vatican.va/content/paul-vi/en/motu_proprio/documents/hf_p-vi_motu-proprio_19680630_credo.html"
      }
    ],
    objections: [
      {
        question: "Doesn’t the Bible say Jesus had brothers and sisters?",
        answer:
          "Yes, the Gospels mention Jesus’ “brothers” and “sisters.” The Catechism teaches that these were close relatives, not other children of Mary. It points out that two of these “brothers,” James and Joseph, are the sons of a different Mary, whom Matthew calls “the other Mary.” The official notes in the Catholic Bible add that in the language and culture of the Bible, “brother” and “sister” could also mean cousins and other relatives.",
        evidenceRefs: ["CCC 500", "Mark 6:3", "Matthew 13:55", "Matthew 27:56", "Matthew 28:1", "Galatians 1:19"]
      },
      {
        question: "Matthew 1:25 says Joseph had no relations with Mary “until” Jesus was born. Doesn’t that mean they did afterward?",
        answer:
          "Not necessarily. The official footnote in the Catholic Bible explains that Matthew’s point is that Joseph was not the father of Jesus. The Greek word translated “until” does not say what happened afterward, either way. For what happened afterward, the Church relies on its constant teaching that Mary remained “ever-virgin.”",
        evidenceRefs: ["Matthew 1:25", "CCC 499", "Lumen Gentium 52"]
      },
      {
        question: "Luke calls Jesus Mary’s “firstborn.” Doesn’t that imply a second-born?",
        answer:
          "No. According to the official footnote in the Catholic Bible, “firstborn son” was a legal title. It meant the child had the rights and privileges of the firstborn under the Law of Moses. The Catechism states plainly that “Jesus is Mary’s only son.”",
        evidenceRefs: ["Luke 2:7", "CCC 501"]
      },
      {
        question: "If Mary had other sons, why would Jesus entrust her to a disciple at the cross?",
        answer:
          "At the cross, Jesus gives his mother into the care of “the disciple whom he loved,” who takes her into his home. This fits naturally with the Catholic teaching that Jesus was Mary’s only son. The Catechism cites this scene when it teaches that Mary’s motherhood extends spiritually to all believers.",
        evidenceRefs: ["John 19:26–27", "CCC 501"]
      },
      {
        question: "Why does this matter at all?",
        answer:
          "For Catholics it is about Jesus first. Mary’s virginity shows that Jesus came entirely from God, who is his only Father. It also shows Mary’s complete and undivided faith, and it makes her a model for the whole Church.",
        evidenceRefs: ["CCC 503", "CCC 506", "CCC 507"]
      },
      {
        question: "Is this an official teaching or just a tradition?",
        answer:
          "It is official teaching. The Catechism teaches it, the Second Vatican Council affirmed it, and Pope Paul VI included it in his solemn Creed of 1968.",
        evidenceRefs: ["CCC 499", "Lumen Gentium 57", "Credo of the People of God 14"]
      }
    ]
  },

  /* -------------------------------------------------------------------
     CLAIM 2 — Peter as the first Pope
     Outline follows Trent Horn's argument (see furtherReading); every
     piece of evidence is Scripture (NABRE), the Catechism, or the Holy See.
     ------------------------------------------------------------------- */
  {
    id: "peter-first-pope",
    title: "Why do Catholics believe Peter was the first Pope?",
    category: "The Pope & the Church",
    summary:
      "Catholics believe Jesus made Peter the “rock” of his Church and gave him the “keys of the kingdom,” a lasting office of leadership. Peter’s successors as Bishop of Rome inherit that office, which is why the Pope is called Peter’s successor.",
    explanation: [
      "The word “pope” does not appear in the Bible, and Catholics do not claim it does. The claim is about a role. Catholics believe Jesus gave Peter a unique role of leadership among the apostles, and that this role was meant to continue after Peter died.",
      "The Catechism sums it up this way: “The Lord made Simon alone, whom he named Peter, the ‘rock’ of his Church. He gave him the keys of his Church and instituted him shepherd of the whole flock” (Catechism 881). It also teaches that this office was “destined to be transmitted to his successors” (Catechism 862), and that the Bishop of Rome is Peter’s successor (Catechism 882, 936).",
      "Catholics also stress that this authority is a form of service, not domination. The Church teaches that the Pope, “like all the faithful,” is “subject to the Word of God,” and calls him the “servant of the servants of God.”",
      "The steps below lay out the case in order, following the outline used by Catholic apologist Trent Horn. Every piece of evidence comes only from Scripture, the Catechism, or official documents of the Holy See."
    ],
    points: [
      {
        heading: "Jesus gave Simon a new name: “Rock”",
        text: "When Jesus first met Simon, he renamed him Cephas, an Aramaic word meaning “rock.” In Greek the name is Peter. The Catholic Bible’s notes point out that, with one rare exception, neither name was used as a personal name before Christian times. The name was new, and so was the role it pointed to.",
        evidenceRefs: ["John 1:42", "Matthew 16:18", "CCC 552"]
      },
      {
        heading: "Jesus said he would build his Church on Peter",
        text: "After Peter confessed that Jesus is “the Christ, the Son of the living God,” Jesus answered: “you are Peter, and upon this rock I will build my church.” The official note in the Catholic Bible says the Church will have “Peter as its solid foundation.” The Catechism and the Second Vatican Council teach the same.",
        evidenceRefs: ["Matthew 16:18", "CCC 552", "CCC 881", "Lumen Gentium 22", "CCC 424"]
      },
      {
        heading: "Peter alone received the keys, which means an office",
        text: "Jesus gave Peter “the keys to the kingdom of heaven.” The Catholic Bible’s notes link this to Isaiah 22, where the key of the king’s house passes from one palace master to the next. A key is held by whoever holds the office. The Catechism explains that the keys mean “authority to govern the house of God, which is the Church,” and that Peter is “the only one to whom he specifically entrusted the keys.”",
        evidenceRefs: ["Matthew 16:19", "Isaiah 22:22", "CCC 553", "CCC 936"]
      },
      {
        heading: "Jesus made Peter the shepherd who strengthens the others",
        text: "After the Resurrection, Jesus told Peter three times to feed and tend his sheep. Before the Passion, he told Peter that Satan wanted to sift “all of you,” but that he had prayed for Peter’s faith in particular, so that Peter could “strengthen your brothers.”",
        evidenceRefs: ["John 21:15–17", "Luke 22:31–32", "CCC 553", "CCC 552"]
      },
      {
        heading: "Peter is always first",
        text: "Matthew’s list of the Twelve begins “first, Simon called Peter.” The risen Jesus appeared to Peter before the rest of the Twelve. The Catechism says Peter “holds the first place in the college of the Twelve” and sees the Risen One before the other apostles because he was “called to strengthen the faith of his brothers.”",
        evidenceRefs: ["Matthew 10:2", "Luke 24:34", "1 Corinthians 15:5", "CCC 641", "CCC 552"]
      },
      {
        heading: "Peter led the early Church",
        text: "In the Acts of the Apostles, Peter leads the group that replaces Judas, preaches the first sermon at Pentecost, and speaks decisively at the Council of Jerusalem. The Catechism notes that the Easter events involve all the apostles, “and Peter in particular.”",
        evidenceRefs: ["Acts 1:15", "Acts 2:14", "Acts 15:7", "CCC 642"]
      },
      {
        heading: "The apostles’ offices were meant to continue",
        text: "When Judas died, the apostles filled his place in “this apostolic ministry,” which shows an office outlasting the man who held it. The Church teaches that the apostles left bishops as their successors, and that the office given to Peter was “a permanent one, destined to be transmitted to his successors.”",
        evidenceRefs: ["Acts 1:24–25", "CCC 77", "CCC 861", "CCC 862", "Lumen Gentium 18"]
      },
      {
        heading: "Peter’s successor is the Bishop of Rome",
        text: "Peter sends greetings from “Babylon,” which the Catholic Bible’s notes explain was a code name for Rome. The Church teaches that Peter’s presence and death in Rome are attested by the most ancient tradition, and that the Bishop of Rome succeeds Peter. The Catechism also quotes two early Christian writers on the Church of Rome’s leading role.",
        evidenceRefs: ["1 Peter 5:13", "Primacy of the Successor of Peter 3", "Primacy of the Successor of Peter 4", "CCC 834", "CCC 882"]
      },
      {
        heading: "What the Pope’s authority is, and what it isn’t",
        text: "Jesus told his apostles that the leader must be “as the servant.” The Church teaches that the Pope is subject to God’s Word and is the “servant of the servants of God.” His gift of infallibility is narrow. It applies only when he “by a definitive act” proclaims a teaching of faith or morals.",
        evidenceRefs: ["Luke 22:26", "CCC 876", "Primacy of the Successor of Peter 7", "Lumen Gentium 25", "CCC 889", "CCC 890"]
      }
    ],
    evidence: [
      /* ---------- SCRIPTURE (NABRE) ---------- */
      {
        type: "scripture",
        ref: "John 1:42",
        source: "Gospel of John",
        translation: "NABRE",
        quote: "Jesus looked at him and said, “You are Simon the son of John; you will be called Cephas” (which is translated Peter).",
        plain: "At their very first meeting, Jesus gives Simon a new name that means “Rock.”",
        note: "In summary, the official NABRE footnote explains that Cephas is Aramaic for “the Rock,” and that neither Cephas nor its Greek form Petros (with one isolated exception) was used as a personal name before Christian times.",
        url: "https://bible.usccb.org/bible/john/1"
      },
      {
        type: "scripture",
        ref: "Matthew 16:18",
        source: "Gospel of Matthew",
        translation: "NABRE",
        quote: "And so I say to you, you are Peter, and upon this rock I will build my church, and the gates of the netherworld shall not prevail against it.",
        plain: "Jesus names Peter as the rock he will build his Church on, and promises that death itself will not overcome it.",
        note: "The official NABRE footnote on this verse says: “Jesus’ church means the community that he will gather and that, like a building, will have Peter as its solid foundation.”",
        url: "https://bible.usccb.org/bible/matthew/16"
      },
      {
        type: "scripture",
        ref: "Matthew 16:19",
        source: "Gospel of Matthew",
        translation: "NABRE",
        quote: "I will give you the keys to the kingdom of heaven. Whatever you bind on earth shall be bound in heaven; and whatever you loose on earth shall be loosed in heaven.",
        plain: "Jesus gives Peter the keys, a symbol of authority, along with the power to “bind and loose.”",
        note: "In summary, the official NABRE footnote says the image of the keys is probably drawn from Isaiah 22:15–25, where Eliakim succeeds Shebna as master of the palace and is given “the key of the House of David.” It names two especially important meanings of binding and loosing: giving authoritative teaching, and lifting or imposing excommunication.",
        url: "https://bible.usccb.org/bible/matthew/16"
      },
      {
        type: "scripture",
        ref: "Isaiah 22:22",
        source: "Book of Isaiah",
        translation: "NABRE",
        quote: "I will place the key of the House of David on his shoulder; what he opens, no one will shut, what he shuts, no one will open.",
        plain: "In Israel’s kingdom, the master of the palace held the king’s key. When Shebna was removed, the key and the office passed to Eliakim.",
        url: "https://bible.usccb.org/bible/isaiah/22"
      },
      {
        type: "scripture",
        ref: "John 21:15–17",
        source: "Gospel of John",
        translation: "NABRE",
        quote: "Jesus said to Simon Peter, “Simon, son of John, do you love me more than these?” … He said to him, “Feed my lambs.” … He said to him, “Tend my sheep.” … [Jesus] said to him, “Feed my sheep.”",
        plain: "After the Resurrection, Jesus hands Peter the care of his whole flock.",
        note: "In summary, the official NABRE footnote says Peter’s threefold profession of love is meant to counteract his earlier threefold denial.",
        url: "https://bible.usccb.org/bible/john/21"
      },
      {
        type: "scripture",
        ref: "Luke 22:31–32",
        source: "Gospel of Luke",
        translation: "NABRE",
        quote: "Simon, Simon, behold Satan has demanded to sift all of you like wheat, but I have prayed that your own faith may not fail; and once you have turned back, you must strengthen your brothers.",
        plain: "Satan wants to test all the apostles, but Jesus prays for Peter in particular and gives him the job of strengthening the rest.",
        url: "https://bible.usccb.org/bible/luke/22"
      },
      {
        type: "scripture",
        ref: "Matthew 10:2",
        source: "Gospel of Matthew",
        translation: "NABRE",
        quote: "The names of the twelve apostles are these: first, Simon called Peter, and his brother Andrew …",
        plain: "Matthew does not just list Peter first. He calls him “first.”",
        url: "https://bible.usccb.org/bible/matthew/10"
      },
      {
        type: "scripture",
        ref: "Luke 24:34",
        source: "Gospel of Luke",
        translation: "NABRE",
        quote: "The Lord has truly been raised and has appeared to Simon!",
        plain: "The disciples’ Easter announcement singles out Jesus’ appearance to Peter.",
        url: "https://bible.usccb.org/bible/luke/24"
      },
      {
        type: "scripture",
        ref: "1 Corinthians 15:5",
        source: "First Letter to the Corinthians",
        translation: "NABRE",
        quote: "that he appeared to Cephas, then to the Twelve.",
        plain: "Paul’s list of Resurrection witnesses begins with Peter (Cephas).",
        url: "https://bible.usccb.org/bible/1corinthians/15"
      },
      {
        type: "scripture",
        ref: "Acts 1:15",
        source: "Acts of the Apostles",
        translation: "NABRE",
        quote: "During those days Peter stood up in the midst of the brothers (there was a group of about one hundred and twenty persons in the one place).",
        plain: "Right after the Ascension, Peter takes the lead in replacing Judas.",
        url: "https://bible.usccb.org/bible/acts/1"
      },
      {
        type: "scripture",
        ref: "Acts 1:24–25",
        source: "Acts of the Apostles",
        translation: "NABRE",
        quote: "You, Lord, who know the hearts of all, show which one of these two you have chosen to take the place in this apostolic ministry from which Judas turned away to go to his own place.",
        plain: "Judas’s “place in this apostolic ministry” is filled by someone new. The office continues after the man is gone.",
        url: "https://bible.usccb.org/bible/acts/1"
      },
      {
        type: "scripture",
        ref: "Acts 2:14",
        source: "Acts of the Apostles",
        translation: "NABRE",
        quote: "Then Peter stood up with the Eleven, raised his voice, and proclaimed to them …",
        plain: "At Pentecost, Peter speaks for all the apostles in the Church’s first public preaching.",
        url: "https://bible.usccb.org/bible/acts/2"
      },
      {
        type: "scripture",
        ref: "Acts 15:7",
        source: "Acts of the Apostles",
        translation: "NABRE",
        quote: "After much debate had taken place, Peter got up and said to them, “My brothers, you are well aware that from early days God made his choice among you that through my mouth the Gentiles would hear the word of the gospel and believe.”",
        plain: "At the Council of Jerusalem, after long debate, Peter stands up and speaks to settle the question.",
        url: "https://bible.usccb.org/bible/acts/15"
      },
      {
        type: "scripture",
        ref: "1 Peter 5:13",
        source: "First Letter of Peter",
        translation: "NABRE",
        quote: "The chosen one at Babylon sends you greeting …",
        plain: "Peter writes from “Babylon,” which the early Christians used as a code name for Rome.",
        note: "The official NABRE footnote explains that “the chosen one” refers to the Christian community at Babylon, “the code name for Rome” (as in Revelation 14:8; 17:5; 18:2).",
        url: "https://bible.usccb.org/bible/1peter/5"
      },
      {
        type: "scripture",
        ref: "1 Peter 5:1",
        source: "First Letter of Peter",
        translation: "NABRE",
        quote: "So I exhort the presbyters among you, as a fellow presbyter and witness to the sufferings of Christ and one who has a share in the glory to be revealed.",
        plain: "Peter speaks humbly to the Church’s elders as one of them. See “Common questions” below.",
        url: "https://bible.usccb.org/bible/1peter/5"
      },
      {
        type: "scripture",
        ref: "Luke 22:26",
        source: "Gospel of Luke",
        translation: "NABRE",
        quote: "Rather, let the greatest among you be as the youngest, and the leader as the servant.",
        plain: "Jesus does not abolish leadership. He redefines it as service.",
        url: "https://bible.usccb.org/bible/luke/22"
      },
      {
        type: "scripture",
        ref: "Galatians 2:11",
        source: "Letter to the Galatians",
        translation: "NABRE",
        quote: "And when Cephas came to Antioch, I opposed him to his face because he clearly was wrong.",
        plain: "Paul corrects Peter for his behavior at Antioch. The next verses explain that Peter had stopped eating with Gentile Christians. See “Common questions.”",
        url: "https://bible.usccb.org/bible/galatians/2"
      },
      {
        type: "scripture",
        ref: "1 Corinthians 10:4",
        source: "First Letter to the Corinthians",
        translation: "NABRE",
        quote: "and all drank the same spiritual drink, for they drank from a spiritual rock that followed them, and the rock was the Christ.",
        plain: "Paul is describing Israel in the desert, drinking from the rock that gave water. He reads that rock as a sign of Christ.",
        note: "In summary, the official NABRE footnote explains that Paul is using the story of the rock that gave water to Israel as a “type” (a symbol pointing ahead to Christ) and giving it a spiritual sense.",
        url: "https://bible.usccb.org/bible/1corinthians/10"
      },
      {
        type: "scripture",
        ref: "1 Peter 2:4–5",
        source: "First Letter of Peter",
        translation: "NABRE",
        quote: "Come to him, a living stone, rejected by human beings but chosen and precious in the sight of God, and, like living stones, let yourselves be built into a spiritual house to be a holy priesthood to offer spiritual sacrifices acceptable to God through Jesus Christ.",
        plain: "Peter himself uses stone imagery in more than one way: Christ is the “living stone,” and believers are “living stones” too.",
        url: "https://bible.usccb.org/bible/1peter/2"
      },

      /* ---------- CATECHISM ---------- */
      {
        type: "catechism",
        ref: "CCC 424",
        source: "Catechism of the Catholic Church",
        quote: "Moved by the grace of the Holy Spirit and drawn by the Father, we believe in Jesus and confess: “You are the Christ, the Son of the living God.” On the rock of this faith confessed by St. Peter, Christ built his Church.",
        plain: "The Church is built on the faith Peter confessed. The Catechism holds this together with Peter himself being the rock (see CCC 552 and 881).",
        url: "https://www.vatican.va/archive/ENG0015/__P1D.HTM"
      },
      {
        type: "catechism",
        ref: "CCC 552",
        source: "Catechism of the Catholic Church",
        quote: "Simon Peter holds the first place in the college of the Twelve; Jesus entrusted a unique mission to him. Through a revelation from the Father, Peter had confessed: “You are the Christ, the Son of the living God.” Our Lord then declared to him: “You are Peter, and on this rock I will build my Church, and the gates of Hades will not prevail against it.” Christ, the “living Stone”, thus assures his Church, built on Peter, of victory over the powers of death. Because of the faith he confessed Peter will remain the unshakeable rock of the Church. His mission will be to keep this faith from every lapse and to strengthen his brothers in it.",
        plain: "Peter is first among the Twelve. Christ builds his Church on Peter, and Peter’s mission is to guard the faith and strengthen the others.",
        url: "https://www.vatican.va/archive/ENG0015/__P1L.HTM"
      },
      {
        type: "catechism",
        ref: "CCC 553",
        source: "Catechism of the Catholic Church",
        quote: "Jesus entrusted a specific authority to Peter: “I will give you the keys of the kingdom of heaven, and whatever you bind on earth shall be bound in heaven, and whatever you loose on earth shall be loosed in heaven.” The “power of the keys” designates authority to govern the house of God, which is the Church. Jesus, the Good Shepherd, confirmed this mandate after his Resurrection: “Feed my sheep.” The power to “bind and loose” connotes the authority to absolve sins, to pronounce doctrinal judgements, and to make disciplinary decisions in the Church. Jesus entrusted this authority to the Church through the ministry of the apostles and in particular through the ministry of Peter, the only one to whom he specifically entrusted the keys of the kingdom.",
        plain: "The keys mean real authority to govern the Church, and only Peter received them.",
        url: "https://www.vatican.va/archive/ENG0015/__P1L.HTM"
      },
      {
        type: "catechism",
        ref: "CCC 641",
        source: "Catechism of the Catholic Church",
        quote: "They were the next to whom Jesus appears: first Peter, then the Twelve. Peter had been called to strengthen the faith of his brothers, and so sees the Risen One before them; it is on the basis of his testimony that the community exclaims: “The Lord has risen indeed, and has appeared to Simon!”",
        plain: "The risen Jesus appears to Peter before the other apostles because of Peter’s role.",
        url: "https://www.vatican.va/archive/ENG0015/__P1S.HTM"
      },
      {
        type: "catechism",
        ref: "CCC 642",
        source: "Catechism of the Catholic Church",
        quote: "Everything that happened during those Paschal days involves each of the apostles - and Peter in particular - in the building of the new era begun on Easter morning.",
        plain: "All the apostles build the early Church, and Peter has a special part in it.",
        url: "https://www.vatican.va/archive/ENG0015/__P1S.HTM"
      },
      {
        type: "catechism",
        ref: "CCC 77",
        source: "Catechism of the Catholic Church",
        quote: "“In order that the full and living Gospel might always be preserved in the Church the apostles left bishops as their successors. They gave them their own position of teaching authority.” Indeed, “the apostolic preaching, which is expressed in a special way in the inspired books, was to be preserved in a continuous line of succession until the end of time.”",
        plain: "The apostles handed their authority on to bishops, in an unbroken line.",
        url: "https://www.vatican.va/archive/ENG0015/__PK.HTM"
      },
      {
        type: "catechism",
        ref: "CCC 861",
        source: "Catechism of the Catholic Church",
        quote: "They accordingly designated such men and then made the ruling that likewise on their death other proven men should take over their ministry.",
        plain: "The apostles planned for their own successors, who would then have successors of their own.",
        url: "https://www.vatican.va/archive/ENG0015/__P29.HTM"
      },
      {
        type: "catechism",
        ref: "CCC 862",
        source: "Catechism of the Catholic Church",
        quote: "“Just as the office which the Lord confided to Peter alone, as first of the apostles, destined to be transmitted to his successors, is a permanent one, so also endures the office, which the apostles received, of shepherding the Church, a charge destined to be exercised without interruption by the sacred order of bishops.”",
        plain: "Peter’s office was meant to be permanent and passed on to his successors.",
        url: "https://www.vatican.va/archive/ENG0015/__P29.HTM"
      },
      {
        type: "catechism",
        ref: "CCC 834",
        source: "Catechism of the Catholic Church",
        quote: "Particular Churches are fully catholic through their communion with one of them, the Church of Rome “which presides in charity.” “For with this church, by reason of its pre-eminence, the whole Church, that is the faithful everywhere, must necessarily be in accord.”",
        plain: "Local churches are united through their communion with the Church of Rome.",
        note: "Here the Catechism quotes two early Christian writers: St. Ignatius of Antioch (“presides in charity”) and St. Irenaeus (“by reason of its pre-eminence”). They are cited as part of the Catechism’s own text.",
        url: "https://www.vatican.va/archive/ENG0015/__P29.HTM"
      },
      {
        type: "catechism",
        ref: "CCC 876",
        source: "Catechism of the Catholic Church",
        quote: "Intrinsically linked to the sacramental nature of ecclesial ministry is its character as service. Entirely dependent on Christ who gives mission and authority, ministers are truly “slaves of Christ,” in the image of him who freely took “the form of a slave” for us.",
        plain: "Authority in the Church exists to serve, following the example of Christ.",
        url: "https://www.vatican.va/archive/ENG0015/__P2A.HTM"
      },
      {
        type: "catechism",
        ref: "CCC 881",
        source: "Catechism of the Catholic Church",
        quote: "The Lord made Simon alone, whom he named Peter, the “rock” of his Church. He gave him the keys of his Church and instituted him shepherd of the whole flock. “The office of binding and loosing which was given to Peter was also assigned to the college of apostles united to its head.” This pastoral office of Peter and the other apostles belongs to the Church’s very foundation and is continued by the bishops under the primacy of the Pope.",
        plain: "Peter alone is the rock, holds the keys and shepherds the flock. The bishops continue this work under the Pope.",
        url: "https://www.vatican.va/archive/ENG0015/__P2A.HTM"
      },
      {
        type: "catechism",
        ref: "CCC 882",
        source: "Catechism of the Catholic Church",
        quote: "The Pope, Bishop of Rome and Peter’s successor, “is the perpetual and visible source and foundation of the unity both of the bishops and of the whole company of the faithful.”",
        plain: "The Pope is Peter’s successor and a visible source of unity for the whole Church.",
        url: "https://www.vatican.va/archive/ENG0015/__P2A.HTM"
      },
      {
        type: "catechism",
        ref: "CCC 889",
        source: "Catechism of the Catholic Church",
        quote: "In order to preserve the Church in the purity of the faith handed on by the apostles, Christ who is the Truth willed to confer on her a share in his own infallibility.",
        plain: "Infallibility is a gift Christ gives the Church to keep the apostles’ faith intact.",
        url: "https://www.vatican.va/archive/ENG0015/__P2A.HTM"
      },
      {
        type: "catechism",
        ref: "CCC 890",
        source: "Catechism of the Catholic Church",
        quote: "The mission of the Magisterium is linked to the definitive nature of the covenant established by God with his people in Christ. It is this Magisterium’s task to preserve God’s people from deviations and defections and to guarantee them the objective possibility of professing the true faith without error.",
        plain: "The Church’s teaching office exists to protect believers from being led away from the true faith.",
        url: "https://www.vatican.va/archive/ENG0015/__P2A.HTM"
      },
      {
        type: "catechism",
        ref: "CCC 936",
        source: "Catechism of the Catholic Church",
        quote: "The Lord made St. Peter the visible foundation of his Church. He entrusted the keys of the Church to him. [T]he bishop of the Church of Rome, successor to St. Peter, is “head of the college of bishops, the Vicar of Christ and Pastor of the universal Church on earth” (CIC, can. 331).",
        plain: "The Catechism’s summary: Peter is the visible foundation and key-holder, and the Bishop of Rome is his successor.",
        url: "https://www.vatican.va/archive/ENG0015/__P2A.HTM"
      },

      /* ---------- CHURCH TEACHING (MAGISTERIUM) ---------- */
      {
        type: "magisterium",
        ref: "Lumen Gentium 18",
        source: "Second Vatican Council, Lumen Gentium (1964)",
        quote: "… in order that the episcopate itself might be one and undivided, He placed Blessed Peter over the other apostles, and instituted in him a permanent and visible source and foundation of unity of faith and communion. And all this teaching about the institution, the perpetuity, the meaning and reason for the sacred primacy of the Roman Pontiff and of his infallible magisterium, this Sacred Council again proposes to be firmly believed by all the faithful.",
        plain: "Vatican II teaches that Christ put Peter over the other apostles, and it reaffirms the earlier teaching on the Pope’s primacy.",
        note: "“Again proposes” refers to the First Vatican Council (1870), which defined the Pope’s primacy and infallibility in Pastor Aeternus. The Holy See’s website has that document only in Latin and Italian, so this site cites its teaching through Vatican II and the Catechism.",
        url: "https://www.vatican.va/archive/hist_councils/ii_vatican_council/documents/vat-ii_const_19641121_lumen-gentium_en.html"
      },
      {
        type: "magisterium",
        ref: "Lumen Gentium 22",
        source: "Second Vatican Council, Lumen Gentium (1964)",
        quote: "For our Lord placed Simon alone as the rock and the bearer of the keys of the Church, and made him shepherd of the whole flock.",
        plain: "Vatican II: Peter alone is the rock, the key-bearer and the shepherd.",
        url: "https://www.vatican.va/archive/hist_councils/ii_vatican_council/documents/vat-ii_const_19641121_lumen-gentium_en.html"
      },
      {
        type: "magisterium",
        ref: "Lumen Gentium 25",
        source: "Second Vatican Council, Lumen Gentium (1964)",
        quote: "And this is the infallibility which the Roman Pontiff, the head of the college of bishops, enjoys in virtue of his office, when, as the supreme shepherd and teacher of all the faithful, who confirms his brethren in their faith, by a definitive act he proclaims a doctrine of faith or morals.",
        plain: "Infallibility applies only when the Pope, as teacher of the whole Church, makes a definitive statement on faith or morals.",
        url: "https://www.vatican.va/archive/hist_councils/ii_vatican_council/documents/vat-ii_const_19641121_lumen-gentium_en.html"
      },
      {
        type: "magisterium",
        ref: "Primacy of the Successor of Peter 3",
        source: "Congregation for the Doctrine of the Faith, The Primacy of the Successor of Peter in the Mystery of the Church (1998)",
        quote: "… in his presence and death in Rome attested by the most ancient literary and archaeological tradition …",
        plain: "The Holy See affirms that Peter was in Rome and died there, based on the oldest writings and archaeology.",
        url: "https://www.vatican.va/roman_curia/congregations/cfaith/documents/rc_con_cfaith_doc_19981031_primato-successore-pietro_en.html"
      },
      {
        type: "magisterium",
        ref: "Primacy of the Successor of Peter 4",
        source: "Congregation for the Doctrine of the Faith, The Primacy of the Successor of Peter in the Mystery of the Church (1998)",
        quote: "On the basis of the New Testament witness, the Catholic Church teaches, as a doctrine of faith, that the Bishop of Rome is the Successor of Peter in his primatial service in the universal Church; this succession explains the preeminence of the Church of Rome, enriched also by the preaching and martyrdom of St Paul.",
        plain: "It is Catholic doctrine that the Bishop of Rome is Peter’s successor.",
        url: "https://www.vatican.va/roman_curia/congregations/cfaith/documents/rc_con_cfaith_doc_19981031_primato-successore-pietro_en.html"
      },
      {
        type: "magisterium",
        ref: "Primacy of the Successor of Peter 7",
        source: "Congregation for the Doctrine of the Faith, The Primacy of the Successor of Peter in the Mystery of the Church (1998)",
        quote: "He does not make arbitrary decisions, but is spokesman for the will of the Lord, who speaks to man in the Scriptures lived and interpreted by Tradition; in other words, the episkope of the primacy has limits set by divine law and by the Church’s divine, inviolable constitution found in Revelation. The Roman Pontiff - like all the faithful - is subject to the Word of God, to the Catholic faith, and is the guarantor of the Church’s obedience; in this sense he is servus servorum Dei.",
        plain: "The Pope can’t make up doctrine. He is bound by God’s Word like everyone else, and is the “servant of the servants of God” (servus servorum Dei).",
        url: "https://www.vatican.va/roman_curia/congregations/cfaith/documents/rc_con_cfaith_doc_19981031_primato-successore-pietro_en.html"
      }
    ],
    objections: [
      {
        question: "The word “pope” isn’t in the Bible. Doesn’t that settle it?",
        answer:
          "No. Catholics don’t claim the word is in the Bible. The claim is about an office. Scripture shows an apostle’s office continuing after its holder was gone, when Judas’s “place in this apostolic ministry” was filled. The Church teaches that Peter’s office in particular was “a permanent one, destined to be transmitted to his successors.”",
        evidenceRefs: ["Acts 1:24–25", "CCC 77", "CCC 862"]
      },
      {
        question: "Doesn’t the Bible say Christ is the rock, not Peter?",
        answer:
          "Scripture uses rock and stone imagery in more than one way. In 1 Corinthians 10:4, Paul is talking about the rock that gave Israel water in the desert, which he reads as a sign of Christ. Peter himself calls Christ the “living stone” and calls every believer a “living stone.” The Catechism puts these together: Christ, the “living Stone,” builds his Church on Peter, and on the faith Peter confessed. Catholics do not see Christ and Peter as rivals. Peter is a foundation only because Christ made him one.",
        evidenceRefs: ["1 Corinthians 10:4", "1 Peter 2:4–5", "CCC 552", "CCC 424", "Matthew 16:18"]
      },
      {
        question: "Peter called himself a “fellow presbyter.” Doesn’t that make him just one elder among many?",
        answer:
          "Humility does not cancel authority. Jesus told the apostles that the leader among them must be “as the servant,” and the Church teaches that all authority in the Church is service. That is why one of the Pope’s titles is “servant of the servants of God.” Speaking humbly as a “fellow presbyter” is exactly what Jesus asked of the leader.",
        evidenceRefs: ["1 Peter 5:1", "Luke 22:26", "CCC 876", "Primacy of the Successor of Peter 7"]
      },
      {
        question: "Paul publicly opposed Peter at Antioch. How can Peter be the head?",
        answer:
          "Paul’s complaint was about Peter’s behavior, not a teaching. Peter had pulled back from eating with Gentile Christians under pressure from others. Catholic teaching does not claim that popes are sinless or always act rightly. Infallibility, as Vatican II defines it, applies only when the Pope “by a definitive act … proclaims a doctrine of faith or morals.”",
        evidenceRefs: ["Galatians 2:11", "Lumen Gentium 25"]
      },
      {
        question: "Does infallibility mean the Pope is never wrong?",
        answer:
          "No. The Church’s definition is narrow. It covers only a definitive act in which the Pope, as teacher of the whole Church, proclaims a doctrine of faith or morals. Its purpose is to keep God’s people in the true faith, not to make the Pope sinless or right about everything. The Pope himself is “subject to the Word of God” and cannot make arbitrary decisions.",
        evidenceRefs: ["Lumen Gentium 25", "CCC 889", "CCC 890", "Primacy of the Successor of Peter 7", "Luke 22:31–32"]
      },
      {
        question: "How do we know Peter was ever in Rome?",
        answer:
          "Peter’s first letter sends greetings from “Babylon,” which the Catholic Bible’s own notes explain was a code name for Rome. The Holy See teaches that Peter’s presence and death in Rome are “attested by the most ancient literary and archaeological tradition,” and that the Bishop of Rome is his successor.",
        evidenceRefs: ["1 Peter 5:13", "Primacy of the Successor of Peter 3", "Primacy of the Successor of Peter 4"]
      }
    ],
    furtherReading: [
      {
        title: "Defending the Papacy",
        author: "Trent Horn",
        publisher: "Catholic Answers Magazine, 2015",
        url: "https://www.catholic.com/magazine/print-edition/defending-the-papacy",
        note: "A Catholic apologist’s fuller case, which this page’s outline follows. It also draws on Church Fathers and non-Catholic scholars. That is why it is listed here and not used as evidence."
      }
    ]
  },

  // Next claim goes here: paste the TEMPLATE, ending with "},"
];
