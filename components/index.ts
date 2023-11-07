import 'dotenv/config'

const axios = require('axios')
// const { PrismaClient } = require('@prisma/client')
// const prisma = new PrismaClient()

let config = {
   method: 'get',
   url: 'https://api.contaazul.com/auth/authorize?redirect_uri=https://www.bonet-cia.com/&client_id=0K0oKuHLGppxEhRquR1t7JhhL4P5k9oL&scope=sales&state=BonetHenriqueContabilDev',
   headers: {
      'User-Agent': 'Apidog/1.0.0 (https://apidog.com)',
      'Accept': '*/*',
      'Host': 'api.contaazul.com',
      'Connection': 'keep-alive',
      'Cookie': 'cookiesession1=678A3E133D1D8CA477D1B258BF219DE6',
      'Referer': 'http://api.contaazul.com/auth/login?redirect_uri=http%3A%2F%2Fapi.contaazul.com%2Fauth%2Fauthorize?redirect_uri%3Dhttps%3A%2F%2Fwww.bonet-cia.com%2F%26client_id%3D0K0oKuHLGppxEhRquR1t7JhhL4P5k9oL%26state%3DBonetHenriqueContabilDev%26scope%3Dsales'
   }
};

axios(config)
.then(function (response: any) {
   console.log(JSON.stringify(response.data));
})
.catch(function (error: any) {
   console.log(error);
});
