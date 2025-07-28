import { defaultPlugins, defineConfig } from '@hey-api/openapi-ts';

export default defineConfig({
  input: 'http://localhost:8080/v3/api-docs',
  output: 'src/api-client',
  plugins: [
    ...defaultPlugins,
    'legacy/angular',
    {
      name: '@hey-api/schemas',
      type: 'json',
    },
    {
      asClass: true,
      name: '@hey-api/sdk',
    },
  ],
});
