# Vika

This article describes how to connect to Vika data sources on Tapdata.

### Vika Table Limitations

When adding and using Vika Table in Tapdata, please follow the following limitations, including rate limits and usage limits.

#### Rate Limitations

- For the same user making API requests to the same table, the request rate limit is 5 requests per second.
- If the request rate exceeds the limit, the system will display an error with an error status code of 429.

#### Usage Limitations

Usage limits consist of two types: API usage limits and Space Station resource usage limits.

**API Usage Limits:**

- Bronze and Silver-level Space Stations can make up to 10,000 API requests per month for free. The cumulative usage will be reset on the billing day each month.

**Space Station Resource Usage Limits:**

- During the public beta phase, you can create up to 1,000 WPS Spreadsheets.
- A single WPS Spreadsheet can support creating up to 50,000 rows, 200 columns, and 30 views.
- The maximum upload attachment capacity for a single Space Station is 1 GB.

Please make sure to adhere to the above limitations to successfully add and use WPS Spreadsheets in Tapdata.