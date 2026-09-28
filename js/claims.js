/* =====================================================================
   CATHOLICISM EXAMINED — ALL CLAIMS LIVE IN THIS ONE FILE
   =====================================================================

   HOW TO ADD A NEW CLAIM
   1. Copy the TEMPLATE below (everything between the { and }).
   2. Paste it as a new entry at the bottom of the window.CLAIMS list,
      after the last claim's closing "}," .
   3. Fill in the fields. Save. Refresh the page. Done.
   4. Run:  node scripts/verify-sources.mjs   to confirm every source is approved.

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
     ]
   },
   ===================================================================== */

window.ALLOWED_SOURCES = {
  types: {
    scripture:   { label: "Scripture",       hosts: ["bible.usccb.org"] },
    catechism:   { label: "Catechism",       hosts: ["www.vatican.va"] },
    magisterium: { label: "Church Teaching", hosts: ["www.vatican.va"] }
  },
  scriptureTranslation: "NABRE"
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
  }

  // ,{ next claim goes here… }
];
