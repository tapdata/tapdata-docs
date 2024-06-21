# GBase 8a

import Content from '../../reuse-content/_enterprise-and-cloud-features.md';

<Content />

GBase 8a database is an analytical database developed based on MySQL, with basic compatibility in terms of syntax, features, and field types.

## Supported Versions

All versions currently offered by GBase 8a.

## As a Target

- GBase 8a is primarily used for data analysis. While it allows setting primary keys, constraints are not enforced, and creating indexes is not allowed. After integrating with TapData, it will rely on logical primary keys, and data idempotence cannot be guaranteed.
- GBase 8a has relatively limited support for transactions. Except for multiple insertions within the same transaction, other transaction operations are not supported.