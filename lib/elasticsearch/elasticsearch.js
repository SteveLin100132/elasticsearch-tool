"use strict";
/**
 * 專案名稱： @wistroni40/elasticsearch
 * 部門代號： ML8100
 * 檔案說明： 抽象ElasticSearch客戶端
 * @CREATE Tue Feb 23 2021 下午5:24:46
 * @author Steve Y Lin
 * @contact Steve_Y_Lin@wistron.com #1342
 * -----------------------------------------------------------------------------
 * @NOTE
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Elasticsearch = void 0;
const elasticsearch_1 = require("@elastic/elasticsearch");
/**
 * 抽象ElasticSearch客戶端
 */
class Elasticsearch extends elasticsearch_1.Client {
}
exports.Elasticsearch = Elasticsearch;
