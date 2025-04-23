# Laravel Log Snippets

**Laravel Log Snippets** is a lightweight Visual Studio Code extension that helps Laravel developers quickly log variables using `Log::info()` and `Log::error()` — all with a single shortcut.

## 🚀 Features

- 🔍 Automatically generate `Log::info()` or `Log::error()` statements
- 🧠 Logs selected variable name and value
- 🧹 Clean code insertion on the next line
- ⚡ Zero configuration needed

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

Works similarly for `Log::error()`.

## 🛠 Requirements

- Visual Studio Code
- PHP project using [Laravel](https://laravel.com)

## 📦 Installation

1. Search for `Laravel Log Snippets` in the [VS Code Extensions Marketplace](https://marketplace.visualstudio.com/)
2. Click **Install**
3. Start using the shortcuts!

## 👨‍💻 Author

**Vidhi Nirmal**  
[GitHub](https://github.com/yourusername)

## 📣 Contributing

Contributions are welcome! Feel free to open issues or submit PRs to help improve the extension.