"use strict";
/**
 * 專案名稱： @wistroni40/elasticsearch
 * 部門代號： ML8100
 * 檔案說明： ElasticSearch客戶端
 * @CREATE Tue Feb 23 2021 下午5:33:14
 * @author Steve Y Lin
 * @contact Steve_Y_Lin@wistron.com #1342
 * -----------------------------------------------------------------------------
 * @NOTE
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ElasticClient = void 0;
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
const elasticsearch_1 = require("./elasticsearch");
/**
 * ElasticSearch客戶端
 */
class ElasticClient extends elasticsearch_1.Elasticsearch {
    /**
     * 執行滾動查詢
     *
     * @method private
     * @param result 第一次查詢結果
     * @param scroll 滾動Token保存時長
     * @return 回傳查詢結果
     */
    async executeScroll(response, scroll = '1m') {
        const queue = [response];
        const result = [];
        while (queue.length) {
            const { body } = queue.shift();
            // 蒐集所有Hit資料
            body.hits.hits.forEach((hit) => result.push(hit));
            // 如果已經數據總量符合就結束
            if (result.length >= body.hits.total) {
                break;
            }
            // 若總量不符進行滾動查詢
            queue.push(await this.scroll({
                scroll_id: body._scroll_id,
                scroll,
            }));
        }
        return result;
    }
    /**
     * 滾動查詢
     *
     * @method public
     * @param params  查詢參數
     * @param options 查詢配置
     * @return 回傳查詢結果
     */
    scrollSearch(params, options) {
        return rxjs_1.from(this.search(params, options)).pipe(
        // 執行滾動查詢
        operators_1.map((res) => rxjs_1.from(this.executeScroll(res, params.scroll))), 
        // 取出查詢結果
        operators_1.concatAll(), 
        // 將資料從source中取出
        operators_1.map((result) => result.map((item) => item._source)));
    }
}
exports.ElasticClient = ElasticClient;
