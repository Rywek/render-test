const express = require("express");
const cors = require('cors');
const bodyParser = require('body-parser');
const fetch = require('node-fetch');
const path = require('path');

const app = express();
const port = process.env.PORT || 3001;

const apiKeys = {
  presidentkey: '0afbc589-d478-4c52-a6fa-4821f47530d3',
  communcationDinternalkey: 'd6ed01a6-47df-4e45-9346-c05035c6550d',
  devofficekey: '7042d6d1-159b-44ec-8642-564653481a7c',
  communcationDexternalkey: '213bc4fb-587a-42c2-aa55-b7120e1fc570',
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

app.use(cors());
app.use(bodyParser.json());

app.use(express.static('views'));

app.set('view engine', 'ejs');


app.get('/', function (req, res) {
  res.render('index', {})
});


app.post('/get-lists', async (req, res) => {
  try {
    const Name = req.body.Name;
    const Account = req.body.Accountid;

    let selectedApiKey;
     switch (Account){
      case 582645: selectedApiKey = apiKeys.devofficekey; break;
      case 582045: selectedApiKey = apiKeys.presidentkey; break;
      case 578195: selectedApiKey = apiKeys.communcationDinternalkey; break;
      case 582065: selectedApiKey = apiKeys.communcationDexternalkey; break;
      case 588235: selectedApiKey = apiKeys.alumnigeneralkey; break;
      case 588260: selectedApiKey = apiKeys.alumniaroskey; break;
      case 598700: selectedApiKey = apiKeys.uointernationalkey; break;
      case 777832: selectedApiKey = apiKeys.uOsurveys; break;
      case 578195: selectedApiKey = apiKeys.vpacademic; break;
      case 746765: selectedApiKey = apiKeys.vrrecherche; break;
      case 760138: selectedApiKey = apiKeys.hrmodernisation; break;
      case 772710: selectedApiKey = apiKeys.ceremoniesandevents; break;
      case 776515: selectedApiKey = apiKeys.leadership; break;
      default: throw new Error('Invalid account ID');
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
    res.status(500).json({ message: 'Error fetching data from Campaigner API in get-lists' });
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
     switch (accountID){
      case 582645: selectedApiKeyEmails = apiKeys.devofficekey; break;
      case 582045: selectedApiKeyEmails = apiKeys.presidentkey; break;
      case 578195: selectedApiKeyEmails = apiKeys.communcationDinternalkey; break;
      case 582065: selectedApiKeyEmails = apiKeys.communcationDexternalkey; break;
      case 588235: selectedApiKeyEmails = apiKeys.alumnigeneralkey; break;
      case 588260: selectedApiKeyEmails = apiKeys.alumniaroskey; break;
      case 598700: selectedApiKeyEmails = apiKeys.uointernationalkey; break;
      case 777832: selectedApiKeyEmails = apiKeys.uOsurveys; break;
      case 578195: selectedApiKeyEmails = apiKeys.vpacademic; break;
      case 746765: selectedApiKeyEmails = apiKeys.vrrecherche; break;
      case 760138: selectedApiKeyEmails = apiKeys.hrmodernisation; break;
      case 772710: selectedApiKeyEmails = apiKeys.ceremoniesandevents; break;
      case 776515: selectedApiKeyEmails = apiKeys.leadership; break;
      default: throw new Error('Invalid account ID 2');
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

    const data2 = await response.json();

    res.json(data2);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching data from Campaigner API in get-emails' });
  }
});

app.post('/upload-emails', async (req, res) => {
  try {
    const Emails = req.body.emailsList;
    const ListID = req.body.listid;
    const accountID = req.body.accountno;
    //console.log(Emails);
    //console.log(ListID);
    //console.log(accountID);

	let selectedApiKeyUpdateEmails;
     switch (accountID){
      case 582645: selectedApiKeyUpdateEmails = apiKeys.devofficekey; break;
      case 582045: selectedApiKeyUpdateEmails = apiKeys.presidentkey; break;
      case 578195: selectedApiKeyUpdateEmails = apiKeys.communcationDinternalkey; break;
      case 582065: selectedApiKeyUpdateEmails = apiKeys.communcationDexternalkey; break;
      case 588235: selectedApiKeyUpdateEmails = apiKeys.alumnigeneralkey; break;
      case 588260: selectedApiKeyUpdateEmails = apiKeys.alumniaroskey; break;
      case 598700: selectedApiKeyUpdateEmails = apiKeys.uointernationalkey; break;
      case 777832: selectedApiKeyUpdateEmails = apiKeys.uOsurveys; break;
      case 578195: selectedApiKeyUpdateEmails = apiKeys.vpacademic; break;
      case 746765: selectedApiKeyUpdateEmails = apiKeys.vrrecherche; break;
      case 760138: selectedApiKeyUpdateEmails = apiKeys.hrmodernisation; break;
      case 772710: selectedApiKeyUpdateEmails = apiKeys.ceremoniesandevents; break;
      case 776515: selectedApiKeyUpdateEmails = apiKeys.leadership; break;
      default: throw new Error('Invalid account ID 2');
    }
	

    /*const subscriberData = {
        "Subscribers": [
		{
		  "EmailAddress":"contact1@example.net"
		},
		{
		  "EmailAddress":"contact2@example.net"
		}
	  ]
		EmailAddress: Emails,
    };*/
	
	const Subscribers = {};
	// Loop through each email address and create the subscriberData for each
	Emails.forEach(email => {
		const subscriberData = { EmailAddress: email };
		Subscribers.push(subscriberData);
	});
	
	const responseUpdate = await fetch('https://edapi.campaigner.com/v1/Subscribers', {
		method: 'POST',
		headers: {
		  'Content-Type': 'application/json',
		  ApiKey: selectedApiKeyUpdateEmails,
		},
		body: JSON.stringify({Subscribers: Subscribers})
	  }
	);
	
	console.log(JSON.stringify({Subscribers: Subscribers}));
	
    const dataUpdate = await responseUpdate.json();
    
    res.json(dataUpdate);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching data from Campaigner API in update-emails' });
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
