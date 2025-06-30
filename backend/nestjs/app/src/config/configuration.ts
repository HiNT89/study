// src/config/configuration.ts

export default () => ({
  app: {
    name: process.env.APP_NAME || 'MyApp',
    port: parseInt(process.env.PORT || '3000', 10),
    env: process.env.NODE_ENV || 'development',
  },
  database: {
    host: process.env.DB_HOST || 'localhost',
    port: parseInt(process.env.DB_PORT || '5432', 10),
    username: process.env.DB_USERNAME || 'postgres',
    password: process.env.DB_PASSWORD || 'postgres',
    name: process.env.DB_NAME || 'my_database',
  },
  jwt: {
    secret: process.env.JWT_SECRET || 'secretKey',
    expiresIn: process.env.JWT_EXPIRES_IN || '1d',
  },
  mail: {
    smtpHost: process.env.MAIL_HOST || 'smtp.example.com',
    smtpPort: parseInt(process.env.MAIL_PORT || '587', 10),
    user: process.env.MAIL_USER || '',
    pass: process.env.MAIL_PASS || '',
  },
  swagger: {
    title: 'API Documentation',
    description: 'API Description',
    version: '1.0.0',
    path: '/docs',
  },
});
