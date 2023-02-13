module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'dpg-cfl5fata49903fjbp410-a.oregon-postgres.render.com'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'projetobphdb'),
      user: env('DATABASE_USERNAME', 'projetobphadmin'),
      password: env('DATABASE_PASSWORD', '8Ek3Per2ovPDYsXQ0GI6r93mAAGr09CT'),
      ssl: env.bool('DATABASE_SSL', true),
    },
  },
});
