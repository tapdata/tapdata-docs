# Mock Target
import Content from '../../reuse-content/_all-features.md';

<Content />

The Mock Target can be used as a target database, primarily for performance testing scenarios.

## Parameter Descriptions

- `Write Interval + Write Interval Count`: When used as a target, this controls the frequency of consuming events. It indicates that `Write Interval Count` records are consumed within the `Write Interval` time, range: `0 ~ 2147483647`.
- `Print Write Logs`: When enabled, outputs the received event data.