global.SALT_KEY = process.env.APP_KEY;
global.EMAIL_TMPL = 'Olá, <strong>{0}</strong>, seja bem vindo à Node Store!';

module.exports = {
    connectionString: process.env.DATABASE,
    sendgridKey: process.env.SENDGRID_API_KEY,
    containerConnectionString: 'TDA'
}