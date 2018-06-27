const config = {
  app: {
    port: 443
  },
  testCert:{
    keyPath: './x509_test_cert/private-key.pem',
    certPath: './x509_test_cert/certificate.pem'
  }
};

module.exports = config;
