# ActiveMQ

请遵循以下说明以确保在 Tapdata 中成功添加和使用 ActiveMQ。

## 支持版本

5.14.x

## ACTIVEMQ 配置说明

- 队列名称为空，默认加载所有队列；如果需要指定，可以用逗号分隔。
- MQ连接串（BrokerUrl）格式：tcp://[host]:[port]。

## 使用限制

- 仅支持 JSON Object 字符串的消息格式 (如 `{"id":1, "name": "张三"}`)，后续会补充JSONBytes，XML等格式。
- 可以不用提前创建好队列
- PDK框架限制且topic方式不能很好的支持全量，topic暂时不可用。

## 识别数据类型

- OBJECT
- ARRAY
- NUMBER
- INTEGER
- BOOLEAN
- STRING（长度200以下）
- TEXT