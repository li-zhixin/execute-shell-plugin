# execute-shell-plugin
[![NPM version](https://badge.fury.io/js/execute-shell-plugin.svg)](https://npmjs.org/package/execute-shell-plugin)
[![Node.js CI](https://github.com/li-zhixin/execute-shell-plugin/actions/workflows/build.yml/badge.svg?branch=master)](https://github.com/li-zhixin/execute-shell-plugin/actions/workflows/build.yml)

### Intro
`execute-shell-plugin` is appium 2.0 plugin, for executing shell. 


### When to use
`execute-shell-plugin` would be handly, if you need to
* executing shell in appium server


### How to use

To install plugin

```appium plugin install --source=npm execute-shell-plugin```

Start appium server with plugin

```appium --use-plugins=execute-shell```

### endpoint

POST local/execute_shell

**Parameters**

|          Name | Required |  Type   | Description             |
| -------------:|:--------:|:-------:|-------------------------|
|     `shell` | required | string  | The command to execute. |

**Response**

```
{
    "stdout": "{result}",
    "stderr": ""
}
```
or any execute error 

```
{
    "code": 1,
    "killed": false,
    "signal": null,
    "cmd": "{error command}",
    "stdout": "",
    "stderr": "{error output}"
}
```

