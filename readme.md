# execute-shell-plugin

### Intro
`execute-shell-plugin` is appium 2.0 plugin, for executing shell. 


### When to use
`execute-shell-plugin` would be handly, if you need to
* executing shell in appium server


### How to use

To install plugin

```appium plugin install --source=npm execute-shell-plugin```

Start appium server with plugin

```appium --use-plugins=execute-shell-plugin```

### endpoint

POST local/execute_shell

**Parameters**

|          Name | Required |  Type   | Description             |
| -------------:|:--------:|:-------:|-------------------------|
|     `product` | required | string  | The command to execute. |

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

