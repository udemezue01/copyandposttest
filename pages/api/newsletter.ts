import axios from 'axios';

function getRequestParams(email, firstName, lastName) {
  // get env variables
  const API_KEY = process.env.MAILCHIMP_API_KEY;
  const AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID;

  // get the mailchimp datacenter
  // mailchimp API keys example: c0e214879c8542a54e716f38edf1635d-us2
  // we need the us2 part
  const DATACENTER = process.env.MAILCHIMP_API_KEY.split('-')[1];

  const url = `https://${DATACENTER}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members`;

  // you can add additional parameters here.
  // see full list of available parameters at:
  // https://mailchimp.com/developer/reference/lists/list-members/
  const data = {
    email_address: email,
    status: 'subscribed',
    merge_fields: {
      FNAME: firstName,
      LNAME: lastName,
    },
  };

  // API key needs to be encoded in base 64 format
  const base64ApiKey = Buffer.from(`anystring:${API_KEY}`).toString('base64');

  const headers = {
    'Content-Type': 'application/json',
    Authorization: `Basic ${base64ApiKey}`,
  };

  return {
    url,
    data,
    headers,
  };
}

export default async (req, res) => {
  const { email, name = '' } = req.body;
  const firstName = name?.split(' ')[0]?.trim();
  const lastName = name?.split(' ')[1]?.trim();

  if (!email || !email.length) {
    return res.status(400).json({
      error: 'Forgot to add your email?',
    });
  }

  try {
    const { url, data, headers } = getRequestParams(email, firstName, lastName);

    const response = await axios.post(url, data, { headers });

    // success
    return res.status(201).json({ error: null });
  } catch (error) {
    return res.status(400).json({
      error: `Oops, something went wrong...`,
    });
  }
};
