
// bank of questions
const bank = [
    {
        "questions": "Who built the first altar SPECIFICALLY mentioned in the Bible?",
        "answers": "Noah"
    },
    {
        "questions": "How many people were saved on the ark?",
        "answers": "8 - Noah, his wife, Ham, Shem, Japheth and their three wives"
    },
    {
        "questions": "What were the three main promises to Abraham?",
        "answers": "1. Land 2. Nation 3. Seed/Descendants/Family – Gen: 12"
    },
    {
        "questions": "What happened to Lot’s wife when she looked back at Sodom?",
        "answers": "Turned to pillar of salt - Gen: 19"
    },
    {
        "questions": "Which wife’s cost was 14 years of work?",
        "answers": "Rachel"
    },
    {
        "questions": "What was Jacob’s name changed to?",
        "answers": "Israel"
    },
    {
        "questions": "Who are the descendants of Esau?",
        "answers": "Edomites"
    },
    {
        "questions": "Which tribe would Jesus come from?",
        "answers": "Judah"
    },
    {
        "questions": "How long was it from the time Jacob’s family moved to Egypt to when Moses delivered the people out of Egypt?",
        "answers": "About 400 years"
    },
    {
        "questions": "Who gave Moses his name?",
        "answers": "Pharaoh’s daughter"
    },
    {
        "questions": "How did God talk to Moses when he was tending sheep?",
        "answers": "From a burning bush - Exo: 3"
    },
    {
        "questions": "Ten spies said the Israelites were like ___________ compared to the people of Canaan",
        "answers": "Grasshoppers"
    },
    {
        "questions": "Which 2 spies came back with a good report?",
        "answers": "Caleb and Joshua - Num: 14"
    },
    {
        "questions": "Who prayed for the sun to stand still?",
        "answers": "Joshua – Josh: 10"
    },
    {
        "questions": "Joshua 24:15 “But as for me and my house we will _____ the Lord”",
        "answers": "Serve"
    },
    {
        "questions": "killed a lion with his bare hands",
        "answers": "Samson – Judges 14"
    },
    {
        "questions": "How did David help soothe King Saul?",
        "answers": "Played a harp – 1 Sam 16:23"
    },
    {
        "questions": "Who were the first 3 kings of God’s people?",
        "answers": "Saul, David, Solomon"
    },
    {
        "questions": "The idol of Dagon fell and broke in the presence of ",
        "answers": "The Ark of the Covenant"
    },
    {
        "questions": "This king was a “man after God’s own heart ”",
        "answers": "David - 1 Sam 13:14"
    },
    {
        "questions": "David’s best friend who helped him avoid Saul was ",
        "answers": "Nathan"
    },
    {
        "questions": "What did Solomon ask for from God?",
        "answers": "Wisdom"
    },
    {
        "questions": "King Solomon had 40000 stalls for what animals?",
        "answers": "Horses - 1 Kgs 4:26"
    },
    {
        "questions": "What did Elisha tell Naaman to do to be cured of leprosy?",
        "answers": "Dip 7 times in the Jordan River - 2 Kgs 5:10"
    },
    {
        "questions": "What king’s life was extended by 15 years?",
        "answers": "Hezekiah - 2 Kgs: 20"
    },
    {
        "questions": "What empire took over Judah?",
        "answers": "Babylon"
    },
    {
        "questions": "Who came to advise and “comfort” Job after his troubles?",
        "answers": "His friends - Job 2:11"
    },
    {
        "questions": "“The Lord is my shepherd; I shall not want” comes from what Psalm?",
        "answers": "Psalm 23"
    },
    {
        "questions": "Ecclesiastes 12:1 “Remember now your Creator in the days of your ",
        "answers": "Youth"
    },
    {
        "questions": "In which book do we read the story of Hananiah, Mishael and Azariah?",
        "answers": "Daniel"
    },
    {
        "questions": "Who had a dream about a giant statue made up of 4 different parts?",
        "answers": "Nebuchadnezzar - Dan: 2"
    },
    {
        "questions": "What scary sight did King Belshazzar see?",
        "answers": "A hand writing on a wall - Dan: 5:5-6"
    },
    {
        "questions": "Who issued the decree that allowed Israel to return to Jerusalem as prophesied in Isaiah?",
        "answers": "Cyrus"
    },
    {
        "questions": "What did Jonah tell the sailors to do to end the storm?",
        "answers": "Throw him overboard"
    },
    {
        "questions": "An enemy told Nehemiah that even if a ___ went on the wall it would break down",
        "answers": "Fox"
    },
    {
        "questions": "What Jewish woman became queen of Persia?",
        "answers": "Esther - Est : 2:17"
    },
    {
        "questions": "Who was the son of Zacharias and Elizabeth?",
        "answers": "John the Baptist - Lk 1:13-60"
    },
    {
        "questions": "Who prepared the way for Jesus?",
        "answers": "John the Baptist"
    },
    {
        "questions": "What type of clothing did John the baptizer wear?",
        "answers": "Camel’s hair"
    },
    {
        "questions": "Jesus performed His first miracle at a ",
        "answers": "Wedding"
    },
    {
        "questions": "How did Jesus respond to the devil’s temptations?",
        "answers": "Quoted scripture/ “It is written…” – Mt: 4"
    },
    {
        "questions": "Love your neighbor as ",
        "answers": "yourself"
    },
    {
        "questions": "came to Jesus at night to talk with Him",
        "answers": "Nicodemus - Jn: 3:1-2"
    },
    {
        "questions": "Where did Jesus talk to a Samaritan woman about “living waters”?",
        "answers": "At a well - 4:10-11"
    },
    {
        "questions": "To what did Jesus compare a mustard seed in Matthew 13?",
        "answers": "The kingdom"
    },
    {
        "questions": "With what did Jesus feed more than 5000 people?",
        "answers": "5 Loaves of Bread and 2 Fish – Mt: 14:17"
    },
    {
        "questions": "Who was the brother of Mary and Martha?",
        "answers": "Lazarus - Jn: 11:1-3"
    },
    {
        "questions": "What did the risen Jesus ask Peter 3 times?",
        "answers": "Do you love Me? - Jn: 21:15-17"
    },
    {
        "questions": "Who did Pilate release instead of Jesus?",
        "answers": "Barabbas - Mt: 27"
    },
    {
        "questions": "What garment did Pilate put on Jesus before the crucifixion?",
        "answers": "A purple robe – Jn: 19:2"
    },
    {
        "questions": "Paul’s traveling companion whose name meant “son of encouragement” was?",
        "answers": "Barnabas - Acts 4:36"
    },
    {
        "questions": "Acts 5:29 “we must obey God rather than___",
        "answers": "Men"
    },
    {
        "questions": "Who was the first recorded Christian who was murdered for his faith?",
        "answers": "Stephen – Acts 7"
    },
    {
        "questions": "For what was Tabitha known?",
        "answers": "Making clothes for the poor/widows – Acts 9:37"
    },
    {
        "questions": "Paul said even if who preached another gospel it should not be believed?",
        "answers": "The apostles or an angel from Heaven – Galatians 1:8"
    },
    {
        "questions": "What did Peter command Cornelius and his family to do?",
        "answers": "Be Baptized - Acts 10:48"
    },
    {
        "questions": "Who were husband and wife tentmakers who helped Paul?",
        "answers": "Aquila and Priscilla - Acts 18"
    },
    {
        "questions": "Paul said he was not ashamed of what?",
        "answers": "the gospel - Rom: 1:16"
    },
    {
        "questions": "What “suffers long and is kind”?",
        "answers": "love - 1 Cor: 13:4"
    },
    {
        "questions": "We walk by_____ and not by _____.",
        "answers": "faith sight - 2 Cor: 5:7"
    },
    {
        "questions": "How many “faiths did Paul say there really are?",
        "answers": "One - Eph: 4:5"
    },
    {
        "questions": "What is the one command in the New Testament that is specifically addressed to children?",
        "answers": "Children obey your parents - Eph: 6:1"
    },
    {
        "questions": "In the armor of God what is the “sword of the Spirit”?",
        "answers": "Word of God - Eph: 6:17"
    },
    {
        "questions": "Who wrote the most New Testament books?",
        "answers": "Paul"
    },
    {
        "questions": "A Christian who is not growing spiritually is compared to a____?",
        "answers": "baby - Heb: 5:13"
    },
    {
        "questions": "James 1:22 “But be _____ of the word and not hearers only",
        "answers": "doers"
    },
    {
        "questions": "If we ______ our sins He will forgive us our sins",
        "answers": "confess"
    },
    {
        "questions": "According to 1 John 2:3 how do we know that we know Jesus?",
        "answers": "We keep His commandments"
    },
    {
        "questions": "The Book of Revelation is addressed to how many churches?",
        "answers": "Seven – Rev 1:4"
    },
    {
        "questions": "Because the Laodiceans were lukewarm what would Jesus do to them?",
        "answers": "Spit/spew them out of his mouth - Rev 3:16"
    }
]


// setting increment to zero for counting.

let increment = 0;
let counter = 1;
let total = bank.length;


// intializing the first question and first answer;
let firstQuestion = document.getElementById("questions").innerHTML = bank[0].questions;
let firstAnswer = document.getElementById("answers").innerHTML = bank[0].answers;

document.getElementById("total").innerHTML = total;
document.getElementById("current").innerHTML = counter;



// this is back button to go back through the array
let back = document.getElementById("back").addEventListener("click", function(){

    const classCheck = document.getElementById("thecard");

    if (classCheck.matches(".flipCard")){
        cardFlip.classList.remove("flipCard");
        
      } 

  if (increment == 0){
    !increment;
    !counter;
  }else {
    increment--;
    counter--;
    console.log(increment)
    document.getElementById("current").innerHTML = counter;
    document.getElementById("questions").innerHTML = bank[increment].questions;
    setTimeout(() => {
        document.getElementById("answers").innerHTML = bank[increment].answers;
    }, 1000);
  }
})

// This flips the card
let cardFlip = document.getElementById("thecard");
cardFlip.addEventListener("click", function(){
  cardFlip.classList.toggle("flipCard");
});




// function to increment through bank object. if increment is
let next = document.getElementById("next").addEventListener("click", function() {
 
   const classCheck = document.getElementById("thecard");

   if (classCheck.matches(".flipCard")){
        cardFlip.classList.remove("flipCard");
        
      } 


  if (increment < bank.length - 1){
    
    increment++;
    counter++;
    console.log(increment);
    document.getElementById("current").innerHTML = counter;
    document.getElementById("questions").innerHTML = bank[increment].questions;

    setTimeout(() => {
        document.getElementById("answers").innerHTML = bank[increment].answers;
    }, 1000);
    
  } else if (increment == bank.length){
    !increment;
    !counter;
    return;
  }


})


// function flipBack() {
//   let i = document.getElementById("thecard").style.transform;
//
//   if (i == "rotateX(-180deg)") {
//     document.getElementById("thecard").style.transform = "rotateX(180deg)";
//   } else if (i == "rotateX(180deg)") {
//     document.getElementById("thecard").style.transform = "rotateX(0deg)";
//   } else {
//     cardFlip.classList.toggle("flipCard");
//   }
// }
