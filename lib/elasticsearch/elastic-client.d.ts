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
import { Search } from '@elastic/elasticsearch/api/requestParams';
import { TransportRequestOptions } from '@elastic/elasticsearch/lib/Transport';
import { Observable } from 'rxjs';
import { Elasticsearch } from './elasticsearch';
/**
 * ElasticSearch客戶端
 */
export declare class ElasticClient extends Elasticsearch {
    /**
     * 執行滾動查詢
     *
     * @method private
     * @param result 第一次查詢結果
     * @param scroll 滾動Token保存時長
     * @return 回傳查詢結果
     */
    private executeScroll;
    /**
     * 滾動查詢
     *
     * @method public
     * @param params  查詢參數
     * @param options 查詢配置
     * @return 回傳查詢結果
     */
    scrollSearch<T = any>(params: Search<object>, options?: TransportRequestOptions): Observable<T[]>;
}
