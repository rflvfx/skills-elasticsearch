# Cluster Notes

- 3 master-eligible nodes minimum for quorum
- shards: aim 20-50GB per shard
- replicas=1 for read throughput + failover
- watch heap: max 50% of RAM, no more than 32GB
