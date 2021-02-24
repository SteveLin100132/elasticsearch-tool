# wistroni40-elasticsearch

# Install

```
npm i wistroni40-elasticsearch --save
```

# Table of Contents

- [Quickstart](#quickstart)
- [Feature](#feature)
- [API](#api)
  - [ElasticClient](#ElasticClient)

# Quickstart

index.ts

```typescript
const client = new ElasticClient({ node: 'http://localhost:9200/' });

client
  .scrollSearch({
    index: 'your_index_*',
    type: 'your_type',
    scroll: '1m',
    body: YOUR_QUERY_BODY,
  })
  .subscribe((result: any) => console.log(result));
```

[Full Example](https://github.com/SteveLin100132/wistroni40-elasticsearch/blob/master/examples/index.ts)

# Feature

* 提供```scrollSearch```滾動查詢，直接將尚未查詢的結果透過滾動方式一次獲取

# API

## **ElasticClient**

**Class**，ElasticSearch客戶端

### Constructor

建構值

Parameter | Type | Required | Default | Description
|:-----|:-----:|:-----:|:-----:|:-----|
| opts | ClientOptions | Optional | ```undefined``` | 客戶端配置，可參考[@elastic/elasticsearch](https://www.npmjs.com/package/@elastic/elasticsearch) |

### Methods

#### scrollSearch

滾動查詢

Parameter | Type | Required | Default | Description
|:-----|:-----:|:-----:|:-----:|:-----|
| params | Search&lt;object&gt; | Required | ```undefined``` | 查詢參數，可參考[@elastic/elasticsearch](https://www.npmjs.com/package/@elastic/elasticsearch) |
| options | TransportRequestOptions | Optional | ```undefined``` | 查詢配置，可參考[@elastic/elasticsearch](https://www.npmjs.com/package/@elastic/elasticsearch) |
| returns | Observable&lt;T[]&gt; | Required | ```undefined``` | 回傳查詢結果 |