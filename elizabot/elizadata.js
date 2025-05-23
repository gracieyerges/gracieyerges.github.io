// data for elizabot.js
// entries prestructured as layed out in Weizenbaum's description
// [cf: Communications of the ACM, Vol. 9, #1 (January 1966): p 36-45.]

var elizaInitials = [
//"How do you do.  Please tell me your problem.",
// additions (not original)
//"Please tell me what's been bothering you.",
//"Is something troubling you ?"
"What's up buttercup?",
"How are you doing hun?",
];

var elizaFinals = [
//"Goodbye.  It was nice talking to you.",
// additions (not original)
//"Goodbye.  This was really a nice talk.",
//"Goodbye.  I'm looking forward to our next session.",
//"This was a good session, wasn't it -- but time is over now.   Goodbye.",
//"Maybe we could discuss this moreover in our next session ?   Goodbye."
"I hope you feel better sweetheart.",
"I'm here whenever you need me pumpkin.",
];

var elizaQuits = [
"bye",
"goodbye",
"done",
"exit",
"quit",
"finished",
];

var elizaPres = [
"dont", "don't",
"cant", "can't",
"wont", "won't",
"recollect", "remember",
"recall", "remember",
"dreamt", "dreamed",
"dreams", "dream",
"maybe", "perhaps",
"certainly", "yes",
"machine", "computer",
"machines", "computer",
"computers", "computer",
"were", "was",
"you're", "you are",
"i'm", "i am",
"same", "alike",
"identical", "alike",
"equivalent", "alike"
];

var elizaPosts = [
"am", "are",
"your", "my",
"me", "you",
"myself", "yourself",
"yourself", "myself",
"i", "you",
"you", "I",
"my", "your",
"i'm", "you are"
];

var elizaSynons = {
"be": ["am", "is", "are", "was"],
"belief": ["feel", "think", "believe", "wish"],
"cannot": ["can't"],
"desire": ["want", "need"],
"everyone": ["everybody", "nobody", "noone"],
"family": ["mother", "mom", "father", "dad", "sister", "brother", "wife", "children", "child"],
"happy": ["elated", "glad", "better"],
"sad": ["unhappy", "depressed", "sick"]
};

var elizaKeywords = [

/*
  Array of
  ["<key>", <rank>, [
    ["<decomp>", [
      "<reasmb>",
      "<reasmb>",
      "<reasmb>"
    ]],
    ["<decomp>", [
      "<reasmb>",
      "<reasmb>",
      "<reasmb>"
    ]]
  ]]
*/

["xnone", 0, [
 ["*", [
     //"I'm not sure I understand you fully.",
     //"Please go on.",
     //"What does that suggest to you ?",
     //"Do you feel strongly about discussing such things ?",
    // "That is interesting.  Please continue.",
     "Tell me more about that.",
     "Does talking about this bother you ?",
     "Could you repeat that sweetie?",
     "I'm not sure I understand you sweetheart",
  ]]
]],
["sorry", 0, [
 ["*", [
     //"Please don't apologise.",
    // "Apologies are not necessary.",
     //"I've told you that apologies are not required.",
     //"It did not bother me.  Please continue.",
     "Don't apologize hun",
     "There's no need to be sorry",
  ]]
]],
["apologise", 0, [
 ["*", [
     "goto sorry"
  ]]
]],
["remember", 5, [
 ["* i remember *", [
    // "Do you often think of (2) ?",
     "Does thinking of (2) bring anything else to mind ?",
    // "What else do you recollect ?",
    // "Why do you remember (2) just now ?",
    // "What in the present situation reminds you of (2) ?",
    // "What is the connection between me and (2) ?",
     //"What else does (2) remind you of ?",
     "What do you remember about (2)?",
     "How does remebering (2) make you feel?",
     "Do you think remembering (2) is actually a good thing?",
  ]],
 ["* do you remember *", [
     "Did you think I would forget (2) ?",
    // "Why do you think I should recall (2) now ?",
     "What about (2) ?",
     //"goto what",
     //"You mentioned (2) ?",
     "Of course I remember (2), sweetheart.",
  ]],
 ["* you remember *", [
     "How could I forget (2) ?",
     "What about (2) should I remember ?",
    // "goto you"
  ]]
]],
["forget", 5, [
 ["* i forget *", [
    // "Can you think of why you might forget (2) ?",
    // "Why can't you remember (2) ?",
     "How often do you think of (2) ?",
     "Does it bother you to forget that ?",
     "Could it be a mental block ?",
    // "Are you generally forgetful ?",
    // "Do you think you are suppressing (2) ?",
    "Aww pumpkin, it's okay to forget (2)",
    "Eh, it'll come back to you eventually.",
  ]],
 ["* did you forget *", [
     "Why do you ask ?",
     "Are you sure you told me ?",
    // "Would it bother you if I forgot (2) ?",
    // "Why should I recall (2) just now ?",
     //"goto what",
     //"Tell me more about (2).",
     "Am I supposed to remember (2)?",
     "Well, if you didn't tell me then I wouldn't know.",
  ]]
]],
["if", 3, [
 ["* if *", [
    // "Do you think it's likely that (2) ?",
    // "Do you wish that (2) ?",
    // "What do you know about (2) ?",
     "Really, if (2) ?",
     "What would you do if (2) ?",
     " Okay, but honey, what are the chances that (2) ?",
    // "What does this speculation lead to ?",
    "What are the chances though, you need to think about this realistically, darling.",
  ]]
]],
["dreamed", 4, [
 ["* i dreamed *", [
     "Really, (2) ?",
    // "Have you ever fantasized (2) while you were awake ?",
    // "Have you ever dreamed (2) before ?",
    // "goto dream",
    "Are you a daydreamer?",
    "It's good to have dreams",
  ]]
]],
["dream", 3, [
 ["*", [
    // "What does that dream suggest to you ?",
     //"Do you dream often ?",
     //"What persons appear in your dreams ?",
    // "Do you believe that dreams have something to do with your problem ?",
    "Do you think your dream is trying to tell you something?",
    "Who do you see in your dreams? Anyone important?",
    "Are your dreams causing you problems?",
  ]]
]],
["perhaps", 0, [
 ["*", [
    // "You don't seem quite certain.",
    // "Why the uncertain tone ?",
    // "Can't you be more positive ?",
    // "You aren't sure ?",
    // "Don't you know ?",
     //"How likely, would you estimate ?"
     "Are you sure, sweetie?",
     "I wish you would be more positive",
     "Is that really realistic?",
  ]]
]],
["name", 15, [
 ["*", [
    // "I am not interested in names.",
    // "I've told you before, I don't care about names -- please continue."
    "I make no promises that I will remember that name",
    "I'll try to remember that name",
  ]]
]],
["deutsch", 0, [
 ["*", [
     "goto xforeign",
    // "I told you before, I don't understand German."
    "I'm sorry darling, I don't speak German",
  ]]
]],
["francais", 0, [
 ["*", [
     "goto xforeign",
    // "I told you before, I don't understand French."
    "I'm sorry pumpkin, I don't speak French",

  ]]
]],
["italiano", 0, [
 ["*", [
     "goto xforeign",
    // "I told you before, I don't understand Italian."
    "I'm sorry sweetheart, I don't speak Italian",
  ]]
]],
["espanol", 0, [
 ["*", [
     "goto xforeign",
    // "I told you before, I don't understand Spanish."
    "I'm sorry buttercup, I don't speak Spanish",
  ]]
]],
["xforeign", 0, [
 ["*", [
     //"I speak only English."
     "I only know English, sorry",
  ]]
]],
["hello", 0, [
 ["*", [
    // "How do you do.  Please state your problem.",
     //"Hi.  What seems to be your problem ?"
     "Hi honey, what's up?",
     "How are you honeybun?",
  ]]
]],
["computer", 50, [
 ["*", [
    // "Do computers worry you ?",
    // "Why do you mention computers ?",
    // "What do you think machines have to do with your problem ?",
     //"Don't you think computers can help people ?",
     //"What about machines worries you ?",
     //"What do you think about machines ?",
     //"You don't think I am a computer program, do you ?",
     "What about computers?",
     "Do you really think computers are your problem?",
     "Do computers scare you?",
  ]]
]],
["am", 0, [
 ["* am i *", [
     //"Do you believe you are (2) ?",
     //"Would you want to be (2) ?",
    // "Do you wish I would tell you you are (2) ?",
    // "What would it mean if you were (2) ?",
    // "goto what",
    "Do you want to be (2)?",
    "Would being (2) make you happy?",
    "But is being (2) really going to be good for you?",
  ]],
 ["* i am *", [
     "goto i"
  ]],
 ["*", [
    // "Why do you say 'am' ?",
    // "I don't understand that.",
    "Could you repeat that darling?",
    "Am? Why not was or will be?",
  ]]
]],
["are", 0, [
 ["* are you *", [
    // "Why are you interested in whether I am (2) or not ?",
    // "Would you prefer if I weren't (2) ?",
    // "Perhaps I am (2) in your fantasies.",
    // "Do you sometimes think I am (2) ?",
    // "goto what",
    // "Would it matter to you ?",
    // "What if I were (2) ?",
    "Do you want me to be (2)?",
    "I can't be (2), sorry sweetheart",
    "Would you be hurt if I was (2)?",
  ]],
 ["* you are *", [
     "goto you"
  ]],
 ["* are *", [
    // "Did you think they might not be (2) ?",
    // "Would you like it if they were not (2) ?",
    // "What if they were not (2) ?",
    // "Are they always (2) ?",
    // "Possibly they are (2).",
     //"Are you positive they are (2) ?",
     "What would happen if they weren't (2)?",
     "Does everyone agree that they're (2)?",
     "Are you hurt that they are (2)?",

  ]]
]],
["your", 0, [
 ["* your *", [
     //"Why are you concerned over my (2) ?",
    // "What about your own (2) ?",
    // "Are you worried about someone else's (2) ?",
    // "Really, my (2) ?",
  //   "What makes you think of my (2) ?",
    // "Do you want my (2) ?",
    "Don't worry about my (2)",
    "Honey we're talking about you, not my (2)",
    "Why don't we focus on your (2)?",
  ]]
]],
["was", 2, [
 ["* was i *", [
     //"What if you were (2) ?",
     //"Do you think you were (2) ?",
     //"Were you (2) ?",
     //"What would it mean if you were (2) ?",
     //"What does ' (2) ' suggest to you ?",
     "goto what",
     "And if you were (2)?",
     "Would being (2) really help you?",
     "I know you want to be (2), but is it really a good idea?",
  ]],
 ["* i was *", [
     "Were you really ?",
    // "Why do you tell me you were (2) now ?",
    // "Perhaps I already know you were (2).",
    "Why are you just now telling me this?",
    "Did you like being (2)?",

  ]],
 ["* was you *", [
     //"Would you like to believe I was (2) ?",
     //"What suggests that I was (2) ?",
     "What do you think ?",
    // "Perhaps I was (2).",
     //"What if I had been (2) ?",
     "And what if I was (2)?",
     "It doesn't matter if I was (2), we're talking about you, not me",
  ]]
]],
["i", 0, [
 ["* i @desire *", [
    // "What would it mean to you if you got (3) ?",
    // "Why do you want (3) ?",
    // "Suppose you got (3) soon.",
    // "What if you never got (3) ?",
    // "What would getting (3) mean to you ?",
    // "What does wanting (3) have to do with this discussion ?",
    "I know you want (3), but try to be realistic here",
    "Why do you want (3) so much pumpkin?",
    "Would it mean the world if you got (3)?",
  ]],
 ["* i am* @sad *", [
    // "I am sorry to hear that you are (3).",
    // "Do you think coming here will help you not to be (3) ?",
     //"I'm sure it's not pleasant to be (3).",
    // "Can you explain what made you (3) ?",
    "Why are you (3) pumpkin?",
    "Anything I can help with?",
    "I'm sorry you're feeling that way",
  ]],
 ["* i am* @happy *", [
    // "How have I helped you to be (3) ?",
    // "Has your treatment made you (3) ?",
     //"What makes you (3) just now ?",
     //"Can you explain why you are suddenly (3) ?",
     "What's making you (3) sweetheart?",
     "I'm glad you're feeling (3)",
  ]],
 ["* i was *", [
     "goto was"
  ]],
 ["* i @belief i *", [
     "Do you really think so darling ?",
    // "But you are not sure you (3).",
    // "Do you really doubt you (3) ?",
    "Don't doubt you (3)",
  ]],
 ["* i* @belief *you *", [
     "goto you"
  ]],
 ["* i am *", [
    // "Is it because you are (2) that you came to me ?",
    // "How long have you been (2) ?",
     //"Do you believe it is normal to be (2) ?",
     //"Do you enjoy being (2) ?",
    // "Do you know anyone else who is (2) ?",
    "Is it normal for you to be (2)?",
    "Are any of your friends (2)?",
    "Do you like being (2)? Your happiness in being (2) is what is important",
  ]],
 ["* i @cannot *", [
     //"How do you know that you can't (3) ?",
     "But have you tried?",
    // "Perhaps you could (3) now.",
     //"Do you really want to be able to (3) ?",
     //"What if you could (3) ?",
     "Don't doubt that you can (3)",
     "You should believe in yourself. You should try to (3)",
  ]],
 ["* i don't *", [
    // "Don't you really (2) ?",
     "Why don't you (2) darling?",
     //"Do you wish to be able to (2) ?",
    // "Does that trouble you ?",
    "Are you sure you don't want to (2)?",
    "Is there a reason you don't want to (2)?",
  ]],
 ["* i feel *", [
     //"Tell me more about such feelings.",
     //"Do you often feel (2) ?",
     //"Do you enjoy feeling (2) ?",
     //"Of what does feeling (2) remind you ?",
     "Why are you feeling (2) sweetheart?",
     "Do you feel (2) a lot?",
     "How do you deal with these feelings?",
  ]],
 ["* i * you *", [
    // "Perhaps in your fantasies we (2) each other.",
    // "Do you wish to (2) me ?",
     "You seem to need to (2) me.",
     "Do you (2) your friends ?",
     "Would it be helpful if we (2)?",
  ]],
 ["*", [
    // "You say (1) ?",
    "Can you elaborate on that please darling?",
    // "Do you say (1) for some special reason ?",
    // "That's quite interesting.",
    "Can you break that down for me?",
    "Oh that's pretty cool",
  ]]
]],
["you", 0, [
 ["* you remind me of *", [
     "goto alike"
  ]],
 ["* you are *", [
    // "What makes you think I am (2) ?",
    // "Does it please you to believe I am (2) ?",
     //"Do you sometimes wish you were (2) ?",
     //"Perhaps you would like to be (2).",
     "Do you really want me to be (2)?",
     "What do you think would happen if I were (2)?",
     "And what if you were (2)?",
  ]],
 ["* you* me *", [
    // "Why do you think I (2) you ?",
     //"You like to think I (2) you -- don't you ?",
     "What makes you think I (2) you ?",
    // "Really, I (2) you ?",
    // "Do you wish to believe I (2) you ?",
    // "Suppose I did (2) you -- what would that mean ?",
    // "Does someone else believe I (2) you ?",
    "And if I did (2) you? How would you feel?",
    "But I would never (2) you",
    "Oh honey, I couldn't possibly (2) you",
  ]],
 ["* you *", [
    // "We were discussing you -- not me.",
    // "Oh, I (2) ?",
    // "You're not really talking about me -- are you ?",
    // "What are your feelings now ?",
    "Honey we're talking about you, enough about me",
    "Let's just focus on you for now buttercup",
  ]]
]],
["yes", 0, [
 ["*", [
     //"You seem to be quite positive.",
    // "You are sure.",
    // "I see.",
    "I understand.",
    "Good to know you're postive",
    "Well, if you're sure",

  ]]
]],
["no", 0, [
 ["* no one *", [
     //"Are you sure, no one (2) ?",
     //"Surely someone (2) .",
     //"Can you think of anyone at all ?",
    // "Are you thinking of a very special person ?",
    // "Who, may I ask ?",
     //"You have a particular person in mind, don't you ?",
     "Who do you think you are talking about ?",
     "I'm sure someone (2)",
     "Who are you thinking (2)?",
     "Does one of your friends (2)?",
  ]],
 ["*", [
     //"Are you saying no just to be negative?",
     //"You are being a bit negative.",
     "Why not ?",
     //"Why 'no' ?",
     "Try to think positively!",
     "It doesn't help if you're negative about it darling",
  ]]
]],
["my", 2, [
 ["$ * my *", [
    // "Does that have anything to do with the fact that your (2) ?",
    // "Lets discuss further why your (2).",
    // "Earlier you said your (2).",
    // "But your (2).",
    "Can we talk about your (2)?",
    "I'm confused, I thought you said your (2)?",
    "Does that have anything to do with your (2)?",
  ]],
 ["* my* @family *", [
     //"Tell me more about your family.",
    // "Who else in your family (4) ?",
    // "Your (3) ?",
     //"What else comes to your mind when you think of your (3) ?",
     "What about your family?",
     "Why don't we talk about if your family (4)?",
     "Are you the only one in your family (4)? It's okay if you are",
  ]],
 ["* my *", [
     "Your (2) ?",
    // "Why do you say your (2) ?",
    // "Does that suggest anything else which belongs to you ?",
    // "Is it important to you that your (2) ?",
    "Is you (2) important to you sweetie?",
    "What about your (2)?",
  ]]
]],
["can", 0, [
 ["* can you *", [
    // "You believe I can (2) don't you ?",
     "goto what",
    // "You want me to be able to (2).",
    // "Perhaps you would like to be able to (2) yourself.",
    "If I can't (2), how would you feel?",
    "Honey this is about you, not if I can (2)",
  ]],
 ["* can i *", [
    // "Whether or not you can (2) depends on you more than on me.",
     "Do you want to be able to (2) ?",
    // "Perhaps you don't want to (2).",
     "goto what",
    "Maybe you don't really want to (2), it's a posibility",
    "It's up to you, peanut",
  ]]
]],
["what", 0, [
 ["*", [
     "Why do you ask ?",
    // "Does that question interest you ?",
     //"What is it you really want to know ?",
     //"Are such questions much on your mind ?",
    // "What answer would please you most ?",
     "What do you think ?",
    // "What comes to mind when you ask that ?",
    // "Have you asked such questions before ?",
     "Have you tried to ask anyone else ?",
     "What if I don't have the answer you want?",
     "Did you ask your family?",
  ]]
]],
["who", 0, [
 ["who *", [
     "goto what"
  ]]
]],
["when", 0, [
 ["when *", [
     "goto what"
  ]]
]],
["where", 0, [
 ["where *", [
     "goto what"
  ]]
]],
["how", 0, [
 ["how *", [
     "goto what"
  ]]
]],
["because", 0, [
 ["*", [
    // "Is that the real reason ?",
    // "Don't any other reasons come to mind ?",
    // "Does that reason seem to explain anything else ?",
    // "What other reasons might there be ?",
    "Is that the only reason you can think of?",
    "I'm sure there has to be another reason",
    "Why don't we look at all of the reasons, peanut",
  ]]
]],
["why", 0, [
 ["* why don't you *", [
    // "Do you believe I don't (2) ?",
    // "Perhaps I will (2) in good time.",
    // "Should you (2) yourself ?",
    // "You want me to (2) ?",
     "goto what",
     "Why don't I (2)?",
     "I'm sorry sweetie, but I can't answer that",
     "Do you really want me to (2)?",
  ]],
 ["* why can't i *", [
    // "Do you think you should be able to (2) ?",
    // "Do you want to be able to (2) ?",
    // "Do you believe this will help you to (2) ?",
     //"Have you any idea why you can't (2) ?",
     "goto what",
     "I think you should be able to (2)",
     "I don't see why you can't (2)",
     "Do you need my help with (2) honey?",
  ]],
 ["*", [
     "goto what"
  ]]
]],
["everyone", 2, [
 ["* @everyone *", [
    // "Really, (2) ?",
    // "Surely not (2).",
     //"Can you think of anyone in particular ?",
    // "Who, for example?",
    // "Are you thinking of a very special person ?",
    // "Who, may I ask ?",
    // "Someone special perhaps ?",
    // "You have a particular person in mind, don't you ?",
    // "Who do you think you're talking about ?",
    "It can't possibly be everyone?",
    "Don't you think you're blowing this out of proportion?",
    "Why don't we narrow it down. Who are we really talking about?",
    "Not everyone (2)",
  ]]
]],
["everybody", 2, [
 ["*", [
     "goto everyone"
  ]]
]],
["nobody", 2, [
 ["*", [
     "goto everyone"
  ]]
]],
["noone", 2, [
 ["*", [
     "goto everyone"
  ]]
]],
["always", 1, [
 ["*", [
     //"Can you think of a specific example ?",
     //"When ?",
     //"What incident are you thinking of ?",
     //"Really, always ?",
     "It can't possibly be always",
     "Is there is reason why?",
     "Are you sure it's always?",
  ]]
]],
["alike", 10, [
 ["*", [
    // "In what way ?",
    // "What resemblence do you see ?",
    // "What does that similarity suggest to you ?",
    // "What other connections do you see ?",
    // "What do you suppose that resemblence means ?",
    // "What is the connection, do you suppose ?",
    // "Could there really be some connection ?",
    // "How ?",
    "How are they alike?",
    "Do you think there's a reason they're similar?",
    "Are you sure they're really that similar?",
  ]]
]],
["like", 10, [
 ["* @be *like *", [
     "goto alike"
  ]]
]],
["different", 0, [
 ["*", [
     "But how is it different ?",
    // "What differences do you see ?",
     //"What does that difference suggest to you ?",
     //"What other distinctions do you see ?",
     //"What do you suppose that disparity means ?",
    // "Could there be some connection, do you suppose ?",
     "How ?",
     "Are you making up these differences?",
     "Are they really that different?",
  ]]
]]

];

// regexp/replacement pairs to be performed as final cleanings
// here: cleanings for multiple bots talking to each other
var elizaPostTransforms = [
	/ old old/g, " old",
	/\bthey were( not)? me\b/g, "it was$1 me",
	/\bthey are( not)? me\b/g, "it is$1 me",
	/Are they( always)? me\b/, "it is$1 me",
	/\bthat your( own)? (\w+)( now)? \?/, "that you have your$1 $2 ?",
	/\bI to have (\w+)/, "I have $1",
	/Earlier you said your( own)? (\w+)( now)?\./, "Earlier you talked about your $2."
];

// eof
