const express = require("express");
//const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3001;

const apiKeys = {
  presidentkey: '0afbc589-d478-4c52-a6fa-4821f47530d3',
  communcationDinternalkey: 'd6ed01a6-47df-4e45-9346-c05035c6550d',
  communcationDexternalkey: '213bc4fb-587a-42c2-aa55-b7120e1fc570',
  devofficekey: '7042d6d1-159b-44ec-8642-564653481a7c',
  alumnigeneralkey: '8f1c9864-5e66-4554-9d64-89d601d32663',
  alumniaroskey: '470359df-21c7-4709-b943-b6ee98ba07a8',
  uointernationalkey: '662799d5-a8b6-481e-a519-80a87e648599',
  vpacademic: '1cc944e7-7349-4679-868d-7ae0c1a32053',
  vrrecherche: '06fb3fef-3040-4fd3-8c83-21c5266e5490',
  hrmodernisation: 'ee92f320-a7d3-44de-b514-30ee39047782',
  ceremoniesandevents: 'df09cbc9-14b2-49b0-880d-ca2f371cb25d',
  leadership: '54bfdff7-7601-4a19-8367-905095d0b167',
  uOsurveys: '728159b5-a939-4fa2-999f-b5d0db7c675f',
};

//app.use(cors());
app.use(bodyParser.json());


app.get("/", (req, res) => res.type('html').send(html));

const server = app.listen(port, () => console.log(`Example app listening on port ${port}!`));

server.keepAliveTimeout = 120 * 1000;
server.headersTimeout = 120 * 1000;

const html = `
<!DOCTYPE html>
<html>
  <head>
    <title>Hello from Render!</title>
    <script src="https://cdn.jsdelivr.net/npm/canvas-confetti@1.5.1/dist/confetti.browser.min.js"></script>
    <script>
      setTimeout(() => {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
          disableForReducedMotion: true
        });
      }, 500);
    </script>
    <style>
      @import url("https://p.typekit.net/p.css?s=1&k=vnd5zic&ht=tk&f=39475.39476.39477.39478.39479.39480.39481.39482&a=18673890&app=typekit&e=css");
      @font-face {
        font-family: "neo-sans";
        src: url("https://use.typekit.net/af/00ac0a/00000000000000003b9b2033/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("woff2"), url("https://use.typekit.net/af/00ac0a/00000000000000003b9b2033/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("woff"), url("https://use.typekit.net/af/00ac0a/00000000000000003b9b2033/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("opentype");
        font-style: normal;
        font-weight: 700;
      }
      html {
        font-family: neo-sans;
        font-weight: 700;
        font-size: calc(62rem / 16);
      }
      body {
        background: white;
      }
      section {
        border-radius: 1em;
        padding: 1em;
        position: absolute;
        top: 50%;
        left: 50%;
        margin-right: -50%;
        transform: translate(-50%, -50%);
      }
    </style>
  </head>
  <body>
    <section>
      Hello from Render!
    </section>
  </body>
</html>
`;


app.get('/', function (req, res) {
  res.render('index', {});
});

app.post('/get-lists', async (req, res) => {
  try {
    const Name = req.body.Name;
    const Account = req.body.Accountid;

    let selectedApiKey;
    if (Account === 582645) {
      selectedApiKey = apiKeys.devofficekey;
    }
    if (Account === 582045) {
      selectedApiKey = apiKeys.presidentkey;
    }
    if (Account === 578195) {
      selectedApiKey = apiKeys.communcationDinternalkey;
    }
    if (Account === 582065) {
      selectedApiKey = apiKeys.communcationDexternalkey;
    }
    if (Account === 588235) {
      selectedApiKey = apiKeys.alumnigeneralkey;
    }
    if (Account === 588260) {
      selectedApiKey = apiKeys.alumniaroskey;
    }
    if (Account === 598700) {
      selectedApiKey = apiKeys.uointernationalkey;
    }
    if (Account === 777832) {
      selectedApiKey = apiKeys.uOsurveys;
    }
    if (Account === 578195) {
      selectedApiKey = apiKeys.vpacademic;
    }
    if (Account === 746765) {
      selectedApiKey = apiKeys.vrrecherche;
    }
    if (Account === 760138) {
      selectedApiKey = apiKeys.hrmodernisation;
    }
    if (Account === 772710) {
      selectedApiKey = apiKeys.ceremoniesandevents;
    }
    if (Account === 776515) {
      selectedApiKey = apiKeys.leadership;
    }

    const response = await fetch('https://edapi.campaigner.com/v1/Lists/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',

        ApiKey: selectedApiKey,
      },
      body: JSON.stringify({
        Name,
      }),
    });

    const data = await response.json();

    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching data from Campaigner API' });
  }
});

app.post('/get-emails', async (req, res) => {
  try {
    const Emails = req.body.emailsList;
    const ListID = req.body.listid;
    const accountID = req.body.accountno;
    console.log(Emails);
    console.log(ListID);
    console.log(accountID);

    let selectedApiKeyEmails;
    if (accountID === 582645) {
      selectedApiKeyEmails = apiKeys.devofficekey;
    }
    if (accountID === 582045) {
      selectedApiKeyEmails = apiKeys.presidentkey;
    }
    if (accountID === 578195) {
      selectedApiKeyEmails = apiKeys.communcationDinternalkey;
    }
    if (accountID === 582065) {
      selectedApiKeyEmails = apiKeys.communcationDexternalkey;
    }
    if (accountID === 588235) {
      selectedApiKeyEmails = apiKeys.alumnigeneralkey;
    }
    if (accountID === 588260) {
      selectedApiKeyEmails = apiKeys.alumniaroskey;
    }
    if (accountID === 598700) {
      selectedApiKeyEmails = apiKeys.uointernationalkey;
    }
    if (accountID === 777832) {
      selectedApiKeyEmails = apiKeys.uOsurveys;
    }
    if (accountID === 578195) {
      selectedApiKeyEmails = apiKeys.vpacademic;
    }
    if (accountID === 746765) {
      selectedApiKeyEmails = apiKeys.vrrecherche;
    }
    if (accountID === 760138) {
      selectedApiKeyEmails = apiKeys.hrmodernisation;
    }
    if (accountID === 772710) {
      selectedApiKeyEmails = apiKeys.ceremoniesandevents;
    }
    if (accountID === 776515) {
      selectedApiKeyEmails = apiKeys.leadership;
    }

    const subscriberData2 = {
      EmailAddresses: Emails,
    };

    const response = await fetch(
      `https://edapi.campaigner.com/v1/Lists/${ListID}/AddEmails`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',

          ApiKey: selectedApiKeyEmails,
        },

        body: JSON.stringify(subscriberData2),
      }
    );

    const data = await response.json();

    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching data from Campaigner API' });
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
