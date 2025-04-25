# Laravel Log Snippets

**Laravel Log Snippets** is a lightweight Visual Studio Code extension designed for Laravel developers. It helps you quickly log variables using `Log::info()` and `Log::error()` with just a single shortcut.

## 🚀 Features

- 🔍 Automatically generates `Log::info()` or `Log::error()` statements
- 🧠 Logs the selected variable name and value
- 🧹 Clean insertion of code on the next line
- ⚡ Zero configuration required

## ⌨️ Keyboard Shortcuts

| Action             | Shortcut           |
|--------------------|--------------------|
| Insert Log::info   | `Ctrl + Shift + I` |
| Insert Log::error  | `Ctrl + Shift + R` |

> These shortcuts will insert the log statement **below the selected variable**.

## ✨ Example Usage

**Before:**
```php
$user = 'John';
```  
**Select** `$user` and press `Ctrl + Shift + I`

**After:**
```php
$user = 'John';
Log::info('$user: ' . $user);
```

The same behavior applies to ```Log::error()```.

## 🛠 Requirements

- Visual Studio Code
- PHP project using [Laravel](https://laravel.com)

## 📦 Installation Methods

🔹 **From Marketplace**: Search **"Laravel Log Snippets"** in VS Code Extensions and click **Install**  
🔹 **Via CLI**: `code --install-extension laravel-log-snippets-0.0.1.vsix`  
🔹 Using .vsix: Replace path/to/ with your actual path, for example:
```code --install-extension "C:\Users\YourName\Downloads\laravel-log-snippets-0.0.1.vsix" ```

For more details, visit the [GitHub](https://github.com/vidhithakkar71/laravel-log-snippets).

## **📜 License**

This project is licensed under the [MIT License](https://github.com/vidhithakkar71/laravel-log-snippets/blob/main/LICENSE).  
© **Vidhi Nirmal** - All rights reserved.