// Search helper with highlighting
async function search(client, index, text) {
  const res = await client.search({
    index,
    body: {
      query: { multi_match: { query: text, fields: ["title^2", "body"] } },
      highlight: { fields: { body: {} } },
    },
  });
  return res.hits.hits;
}
module.exports = { search };
