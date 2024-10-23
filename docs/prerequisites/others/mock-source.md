# Mock Source

import Content from '../../reuse-content/_all-features.md';

<Content />

The Mock Source can be used as a source database, primarily for performance testing scenarios.

## Parameter Descriptions

- `Initial Data Volume`: The total number of records for full synchronization, range: `0 ~ 9223372036854775807`.
- `Incremental Interval + Incremental Interval Count`: Controls the frequency of generating incremental data, indicating that `Incremental Interval Count` records are generated within the `Incremental Interval` time, range: `0 ~ 2147483647`.
- `Incremental Event Types`: Specifies the types of events to generate. If all three are selected, it generates `Insert Events` first, followed by `Update Events`, and finally `Delete Events`, in this sequence until completion.
- `Table Name + Field Definitions`: Used to define the data model when acting as a source.

## Model

### Field Types

- `string[($byte)][fixed]`: String

  - `$byte`: Byte length (default: `64`)
  - `fixed`: Indicates fixed length if this marker is added (default: variable length)

- `number[($precision,$scale)]`: Numeric

  - `$precision`: Length (range `1-40`, default `4`)
  - `$scale`: Scale (range `0-10`, default `1`)

- `boolean`: Boolean

- `date`: Date

- `array`: Array

- `binary`: Byte

- `map`: Key-value pair

- `time`: Time

- `datetime`: Date + Time

- `now`: Current time

- `uuid`: UUID

- `serial[($begin,$step)]`: Auto-increment

  - `$begin`: Start position (default: `1`)
  - `$step`: Step size (default: `1`)

- `rnumber[($precision)]`: Random number

  - `$precision`: Length (default: `4`)

- `rstring[($byte)]`: Random string of specified length

  - `$byte`: Byte length (default: `64`)

- `rdatetime[($fraction)]`: Random date with specified precision

  - `$fraction`: Time precision (default: `0`, range 0-9)

- `rlongstring[($byte)]`: Random long string of specified length

  - `$byte`: Byte length (default: `1000`)

- `rlongbinary[($byte)]`: Random binary of specified length

  - `$byte`: Byte length (default: `1000`)

### Field Default Values

Default values used when generating data. If not set, data will be `null`.

## Limitations 

When `mode='ConnHeartbeat'`, no other parameters need to be configured:

- No data for full synchronization
- Fixed data model:

  ```sql
  _tapdata_heartbeat_table=[
    { "type": "string(64)", "pri": true, "name": "id", "def": "$connId" },
    { "type": "now", "pri": false, "name": "ts" }
  ]
  ```

- Fixed frequency: `1 record/1000ms`
- Only generates update events