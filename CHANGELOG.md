# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## 1.0.1 - 2022-11-08

### Changed

#### ElasticClient

- 調整 Scroll API 查詢結果判定使其相容更高版本的 ElasticSearch

## 1.0.0 - 2021-02-23

### Added

#### ElasticClient

- 提供```scrollSearch```滾動查詢，直接將尚未查詢的結果透過滾動方式一次獲取

