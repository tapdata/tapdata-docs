# GBase 8s

import Content from '../../reuse-content/_enterprise-and-cloud-features.md';

<Content />

GBase 8s database is a database developed based on Informix, retaining most of the native syntax, features, and field types, and introducing many advantageous features from Oracle.

## Supported Versions

All versions currently offered by GBase 8s.

## As a Target

- GBase 8s supports transactions, but for that, you need to enable log backup. Otherwise, you'll encounter an error: "Transactions not supported" (Enable command: `ontape -s –U dbname`).
- GBase 8s can be configured for case sensitivity in table names using additional connection parameters (delimident=y). Otherwise, using uppercase table names will result in an error.