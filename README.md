<div align="center">
<img src="https://cdn.simpleicons.org/elasticsearch" height="70"/>

# skills-elasticsearch

**Elasticsearch** — mappings, bulk indexing, search com highlight e cluster.

</div>

## 📋 Sobre

Busca full-text na prática: definição de mappings, indexação em bulk, queries com highlight e notas de cluster sizing.

## 📂 Conteúdo

- `indexer.js` — bulk indexing com tratamento de erros
- `search.js` — multi_match + highlight
- `queries.json` — match, bool, aggregations
- `mappings.json` — mapping de campos
- `cluster.md` — sizing e resiliência
- `index.js` / `docker-compose.yml`

## 🚀 Quick start

```bash
docker compose up -d
npm install && node index.js
```

## 🧠 Tópicos cobertos

`full-text search` `mappings` `bulk API` `analyzers` `aggregations` `shards` `snapshots`
