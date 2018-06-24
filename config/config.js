const config = {
  app: {
    port: 3000
  },
  testCert:{
    keyPath: './x509_test_cert/key.pem',
    certPath: './x509_test_cert/cert.pem',
    passphrase: '3141'
  }
};

module.exports = config;
