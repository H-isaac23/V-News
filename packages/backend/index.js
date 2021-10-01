require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const Account = require("./models/accounts");
const axios = require("axios");
const token = process.env.BEARER_TOKEN;
let accounts = null;
let Tweet = null;
Tweet = require("./models/tweets");

const BEARER = `Bearer ${token}`;

const getNewTweets = (acc_id) => {
  let start_time = new Date();

  const API_URL = `https://api.twitter.com/2/users/${acc_id}/tweets?max_results=5&start_time=${new Date(
    start_time.setTime(start_time.getTime() - 3 * 60 * 60 * 1000)
  ).toISOString()}&expansions=author_id&tweet.fields=public_metrics,text,created_at&user.fields=id,username,name,profile_image_url&exclude=retweets,replies`;

  return axios.get(API_URL, {
    headers: {
      Authorization: BEARER,
    },
  });
};

// ^^^^^ api for getting tweets ^^^^^//

app.use(express.json());

app.post("/api/tweets", (req, res) => {
  // loop through the accounts and save tweets to database
  accounts.forEach((account) => {
    getNewTweets(account.t_id)
      .then((result) => {
        const data = result.data;
        const tweets = data.data;
        const user_info = data.includes.users;

        // for all the tweets on an account, make a new Tweet instance and save to db
        tweets.forEach((tweet) => {
          const newTweet = new Tweet({
            handle: user_info[0].username,
            date: tweet.created_at,
            content: tweet.text,
            tweet_id: tweet.id,
            profile_image_url: user_info[0].profile_image_url.replace(
              "normal",
              "200x200"
            ),
          });

          newTweet
            .save()
            .then((result) => {
              res.status(200).end();
            })
            .catch((err) => {
              res.status(400).end();
              console.log(err.message);
            }); // in case the tweet already exists in the db
        });
      })
      .catch((err) => console.log(err));
  });
});

app.get("/api/tweets", (req, res) => {
  Tweet.find({}).then((tweets) => {
    res.json(tweets);
  });
});

app.get("/api/tweets/:id", (req, res) => {
  Tweet.findById(req.params.id).then((tweet) => {
    res.json(tweet);
  });
});

app.post("/api/accounts", (req, res) => {
  const body = [
    {
      t_id: "1397148959798226945",
      name: "Omegaα@holoEN",
      username: "omegaalpha_en",
    },
    {
      t_id: "1409783149211443200",
      name: "Hakos Baelz🎲holoEN",
      username: "hakosbaelz",
    },
    {
      t_id: "1409817941705515015",
      name: "Nanashi Mumei🪶holoEN",
      username: "nanashimumei_en",
    },
    {
      t_id: "1409817096523968513",
      name: "Ouro Kronii⏳holoEN",
      username: "ourokronii",
    },
    {
      t_id: "1409784760805650436",
      name: "Ceres Fauna🌿holoEN",
      username: "ceresfauna",
    },
    {
      t_id: "1409819816194576394",
      name: "Tsukumo Sana🪐holoEN",
      username: "tsukumosana",
    },
    {
      t_id: "1363705980261855232",
      name: "IRyS💎holoEN",
      username: "irys_en",
    },
    {
      t_id: "1328277750000492545",
      name: "Anya Melfissa(アーニャ)🍂@ホロライブID",
      username: "anyamelfissa",
    },
    {
      t_id: "1328275136575799297",
      name: "Pavolia Reine (レイネ)🦚@ホロライブID KING 3M 🔟🇶!",
      username: "pavoliareine",
    },
    {
      t_id: "1328277233492844544",
      name: "Kureiji Ollie (オリー)🧟‍♀️@ホロライブID",
      username: "kureijiollie",
    },
    {
      t_id: "1283653858510598144",
      name: "Mori Calliope💀holoEN",
      username: "moricalliope",
    },
    {
      t_id: "1283646922406760448",
      name: "Takanashi Kiara🐔holoEN",
      username: "takanashikiara",
    },
    {
      t_id: "1283650008835743744",
      name: "Ninomae Ina’nis🐙holoEN",
      username: "ninomaeinanis",
    },
    {
      t_id: "1283657064410017793",
      name: "Gawr Gura🔱holoEN",
      username: "gawrgura",
    },
    {
      t_id: "1255017971363090432",
      name: "桃鈴ねね🥟8月13日1周年！",
      username: "momosuzunene",
    },
    {
      t_id: "1270551806993547265",
      name: "尾丸ポルカ🎪ぽ",
      username: "omarupolka",
    },
    {
      t_id: "1283656034305769472",
      name: "Watson Amelia🔎holoEN",
      username: "watsonameliaEN",
    },
    {
      t_id: "1255013740799356929",
      name: "雪花ラミィ☃️1周年グッズ発売中💍💕",
      username: "yukihanalamy",
    },
    {
      t_id: "1255019046119989248",
      name: "魔乃アロエ【活動終了】",
      username: "manoaloe",
    },
    {
      t_id: "1255015814979186689",
      name: "獅白ぼたん♌オリ曲リリース&記念グッズ販売中🌿",
      username: "shishirobotan",
    },
    {
      t_id: "1234752200145899520",
      name: "Ayunda Risu (リス)🐿@ホロライブID | Kakumei Dualism @YT",
      username: "ayunda_risu",
    },
    {
      t_id: "1235180878449397764",
      name: "Airani Iofifteen (イオフィ)🎨ホロライブID",
      username: "airaniiofifteen",
    },
    {
      t_id: "1234753886520393729",
      name: "Moona Hoshinova (ムーナ)🔮@ホロライブID",
      username: "moonahoshinova",
    },
    {
      t_id: "1200396798281445376",
      name: "姫森ルーナ🍬ホロライブ4期生",
      username: "himemoriluna",
    },
    {
      t_id: "1200397643479805957",
      name: "角巻わため🐏@ホロライブ4期生",
      username: "tsunomakiwatame",
    },
    {
      t_id: "1200397238788247552",
      name: "桐生ココ🐉ホロライブ卒業生",
      username: "kiryucoco",
    },
    {
      t_id: "1200396304360206337",
      name: "天音かなた💫ホロライブ4期生",
      username: "amanekanatach",
    },
    {
      t_id: "1200357161747939328",
      name: "常闇トワ👾ホロライブ",
      username: "tokoyamitowa",
    },
    {
      t_id: "1142975277175205888",
      name: "潤羽るしあ🦋ホロライブ3期生",
      username: "uruharushia",
    },
    {
      t_id: "1133215093246664706",
      name: "兎田ぺこら👯‍♀️2周年記念グッズでました！",
      username: "usadapekora",
    },
    {
      t_id: "1153192638645821440",
      name: "宝鐘マリン🏴‍☠️＠ホロライブ3期生",
      username: "houshoumarine",
    },
    {
      t_id: "1154304634569150464",
      name: "不知火フレア🔥@ホロライブ3期生",
      username: "shiranuiflare",
    },
    {
      t_id: "1153195295573856256",
      name: "白銀ノエル⚔2周年記念グッズ発売中！",
      username: "shiroganenoel",
    },
    {
      t_id: "1109751762733301760",
      name: "猫又おかゆ🍙",
      username: "nekomataokayu",
    },
    {
      t_id: "1109748792721432577",
      name: "戌神ころね🥐",
      username: "inugamikorone",
    },
    {
      t_id: "1063337246231687169",
      name: "大神ミオ🌲ホロライブゲーマーズー🐺",
      username: "ookamimio",
    },
    {
      t_id: "1024970912859189248",
      name: "癒月ちょこ💋@ゲリラ悪魔",
      username: "yuzukichococh",
    },
    {
      t_id: "1027853566780698624",
      name: "大空スバル🚑ホロライブ",
      username: "oozorasubaru",
    },
    {
      t_id: "1024532356554608640",
      name: "百鬼あやめ😈花に亡霊投稿しました",
      username: "nakiriayame",
    },
    {
      t_id: "1024533638879166464",
      name: "紫咲シオン🌙オリ曲でました",
      username: "murasakishionch",
    },
    {
      t_id: "1024528894940987392",
      name: "湊あくあ⚓MinatoAqua",
      username: "minatoaqua",
    },
    {
      t_id: "985703615758123008",
      name: "夜空メル🌟@ホロライブ1期生",
      username: "yozoramel",
    },
    {
      t_id: "996643748862836736",
      name: "アキロゼAkirose🍎ホロライブ1期生",
      username: "akirosenthal",
    },
    {
      t_id: "998336069992001537",
      name: "HAACHAMA❤️",
      username: "akaihaato",
    },
    {
      t_id: "996645451045617664",
      name: "夏色まつり🏮NatsuiroMatsuri",
      username: "natsuiromatsuri",
    },
    {
      t_id: "997786053124616192",
      name: "白上フブキ@ホロライブ🌽🦊",
      username: "shirakamifubuki",
    },
    {
      t_id: "880317891249188864",
      name: "ときのそら🐻💿8月がんばるぞ(*•̀ᴗ•́*)و ̑̑",
      username: "tokino_sora",
    },
    {
      t_id: "960340787782299648",
      name: "ロボ子さん🤖ホロライブ0期生✨",
      username: "robocosan",
    },
    {
      t_id: "979891380616019968",
      name: "さくらみこ🌸Sakura Miko",
      username: "sakuramiko35",
    },
    {
      t_id: "1062499145267605504",
      name: "AZKi⚒いろいろ制作中⚒",
      username: "AZKi_VDiVA",
    },
    {
      t_id: "975275878673408001",
      name: "星街すいせい☄️ホロライブ0期生",
      username: "suisei_hosimati",
    },
  ];
  body.forEach((account) => {
    const newAccount = new Account({
      t_id: account.t_id,
      name: account.name,
      username: account.username,
    });

    newAccount.save();
  });

  res.status(200).end();
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log("test development");
});
