const { Client } = require('@elastic/elasticsearch');
const client = new Client({ node: 'http://localhost:9200' });

(async () => {
  await client.index({ index: 'skills', document: { nome: 'Elasticsearch' } });
  const res = await client.search({ index: 'skills', query: { match: { nome: 'Elasticsearch' } } });
  console.log(res.hits.hits);
})();
