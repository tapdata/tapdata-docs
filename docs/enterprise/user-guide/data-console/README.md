# 实时数据中心

> <img src="https://img.shields.io/badge/3.2%20%E4%B9%8B%E5%89%8D%E5%90%8D%E7%A7%B0%20-%E6%95%B0%E6%8D%AE%E9%9D%A2%E6%9D%BF-40b976" style={{transform:'scale(1.2)'}} />

实时数据中心功能支持两种模式，可满足不同的数据治理需求。

[数据集成平台模式](etl-mode)（默认）：适用于数据复制/同步、数据上云或构建 ETL 管道，您只需要简单地拖动源表至目标即可自动完成数据复制任务的创建。

[数据服务平台模式](daas-mode)（Beta）：基于数据分层治理的理念，采用该模式可将分散在不同业务系统的数据同步至统一的平台缓存层，最大限度地降低数据提取对业务的影响，可为后续的数据加工和业务提供基础数据，从而构建一致、实时的数据平台，连通数据孤岛。

import DocCardList from '@theme/DocCardList';

<DocCardList />