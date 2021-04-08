// Bulk indexer
async function bulkIndex(client, index, docs) {
  const body = docs.flatMap((d) => [{ index: { _index: index } }, d]);
  const res = await client.bulk({ body, refresh: true });
  if (res.errors) console.error("bulk errors", res.items.filter((i) => i.index.error));
  return res;
}
module.exports = { bulkIndex };
