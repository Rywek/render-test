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

app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'views')));
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
  res.render('index', {})
});

async function addOrUpdateContact(apiKey, email) {
  const response = await fetch('https://edapi.campaigner.com/v1/Contacts/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'ApiKey': apiKey,
    },
    body: JSON.stringify({
      Contact: {
        EmailAddress: email
      }
    })
  });

  const data = await response.json();
  return data.ContactID;
}

async function addToList(apiKey, contactId, listId) {
  const response = await fetch(`https://edapi.campaigner.com/v1/Lists/${listId}/AddContacts`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'ApiKey': apiKey,
    },
    body: JSON.stringify({
      ContactIds: [contactId]
    })
  });

  const data = await response.json();
  return data;
}

app.post('/upload-emails', async (req, res) => {
  try {
    const { emailsList, listId, accountId } = req.body;

    let selectedApiKey;
    switch (accountId) {
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

    const contactIds = [];
    for (const email of emailsList) {
      const contactId = await addOrUpdateContact(selectedApiKey, email);
      contactIds.push(contactId);
    }

    const addToListResponse = await addToList(selectedApiKey, contactIds, listId);

    res.json({ message: 'Contacts added or updated successfully', addToListResponse });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error processing emails', error });
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
