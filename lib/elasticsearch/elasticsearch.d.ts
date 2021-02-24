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
import { Client } from '@elastic/elasticsearch';
import { Search } from '@elastic/elasticsearch/api/requestParams';
import { TransportRequestOptions } from '@elastic/elasticsearch/lib/Transport';
import { Observable } from 'rxjs';
/**
 * 抽象ElasticSearch客戶端
 */
export declare abstract class Elasticsearch extends Client {
    /**
     * 滾動查詢
     *
     * @method public
     * @param params  查詢參數
     * @param options 查詢配置
     * @return 回傳查詢結果
     */
    abstract scrollSearch<T>(params?: Search<object>, options?: TransportRequestOptions): Observable<T[]>;
}
