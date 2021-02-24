/**
 * 專案名稱： @wistroni40/elasticsearch
 * 部門代號： ML8100
 * 檔案說明： ElasticSearch客戶端範例
 * @CREATE Tue Feb 23 2021 下午5:38:45
 * @author Steve Y Lin
 * @contact Steve_Y_Lin@wistron.com #1342
 * -----------------------------------------------------------------------------
 * @NOTE
 */

import * as esb from 'elastic-builder';
import { ElasticClient } from './../src';

/**
 * -----------------------------------------------------------------------------
 * Data Model
 * -----------------------------------------------------------------------------
 */

interface DataModel {
  'evt_dt': number;
  'evt_pubBy': string;
  site: string;
  building: string;
  probe: string;
  meterId: string;
  reading: number;
  'pre_evtDt': number;
  preReading: number;
  duration: number;
  consumption: number;
}

/**
 * -----------------------------------------------------------------------------
 * Create ElasticSearch Client
 * -----------------------------------------------------------------------------
 */

const client = new ElasticClient({ node: 'http://localhost:9200/' });

const query = esb
  .requestBodySearch()
  .size(15)
  .query(
    esb
      .boolQuery()
      .must([esb.rangeQuery('evt_dt').gte(1613953800000).lt(1613954100000)])
  );

client
  .scrollSearch<DataModel>({
    index: 'your_index_*', // elasticsearch index
    type: 'your_type', // elasticsearch type
    scroll: '1m', // scroll API token life to time
    body: query.toJSON(), // elasticsearch query
  })
  .subscribe((result) => console.log(result));
