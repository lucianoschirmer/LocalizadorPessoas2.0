const { createClientFromFacebookLogin } = require('tinder-client');

async function getData() {
    const client = await createClientFromFacebookLogin({
        emailAddress: 'lucianoschirmerbrasil@gmail.com',
        password: '',
    });
    
    console.log(await client.getProfile());
}
getData();
