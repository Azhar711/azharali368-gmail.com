const request = require("request");

const ApiCall = (blockNum, callback) => {
  const url = "https://eos.greymass.com/v1/chain/get_block";
  request.post(
    {
      url: url,
      json: true,
      body: {
        block_num_or_id: blockNum
      }
    },
    (error, response) => {
      if (error) {
        callback('Error Connecting to Service', undefined);
      } else if (response && response.body && response.body.id) {
        callback(undefined, response);
      }
    }
  );
};

module.exports = ApiCall;
