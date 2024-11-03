# TapData Shell Reference

The TapData Shell is a command-line tool provided by TapData, allowing you to conveniently invoke TapFlow functions from the command line for managing data synchronization tasks, configuring data source connections, and executing data processing operations. It’s particularly useful for scenarios requiring automation or script-based management of data synchronization.

After completing the [installation and login](../quick-start.md) to TapData Shell, enter `h` to display a prompt with usage information. An example is shown below:

```bash
h
- show datasource/table               
    1. show dbs            : show datasource list
    2. use $db_name        : switch to datasource
    3. show tables         : after use $db_name, used to show tables
    4. desc $table_name    : describe table schema                  
    5. peek $table_name    : peek some records from table  
...
```

This section provides a comprehensive reference to commands and usage instructions.

import DocCardList from '@theme/DocCardList';

<DocCardList />