# Flutter Architecture Generator

🏗️ **Automatically generate Flutter Clean Architecture folder structure with one command!**

## ✨ Features

- ✅ **Fast**: Generates 50+ files in < 1 second
- ✅ **Clean**: Professional folder structure (data, domain, presentation layers)
- ✅ **Ready**: Start coding immediately
- ✅ **Example**: Includes auth & home features as templates
- ✅ **Zero Dependencies**: Just Node.js
- ✅ **Works Offline**: No internet required

## 📥 Installation

### Option 1: Global NPM Install (Recommended)

```bash
npm install -g flutter-arch-gen
```

Then use anywhere:

```bash
cd ~/my_app
flutter-gen
```

### Option 2: Local Install

```bash
npm install flutter-arch-gen
npx flutter-gen
```

### Option 3: Direct Script

```bash
node generate-flutter-arch.js
```

## 🚀 Usage

Navigate to your Flutter project and run:

```bash
flutter-gen
```

That's it! Check `lib/src/` for generated structure.

## 📁 Generated Structure

```
lib/
├── main.dart
└── src/
    ├── app/              (config, di, router, theme)
    │   ├── config/
    │   ├── di/
    │   ├── router/
    │   └── theme/
    │
    ├── core/             (shared utilities)
    │   ├── constants/
    │   ├── errors/
    │   ├── network/
    │   ├── storage/
    │   ├── usecase/
    │   ├── utils/
    │   └── widgets/
    │
    ├── features/         (feature modules)
    │   ├── auth/         (example feature)
    │   │   ├── data/
    │   │   ├── domain/
    │   │   └── presentation/
    │   │
    │   └── home/         (example feature)
    │       ├── data/
    │       ├── domain/
    │       └── presentation/
    │
    └── shared/           (cross-feature utilities)
        ├── enums/
        ├── extensions/
        └── mixins/
```

## 📋 Requirements

- **Node.js**: v12.0.0 or higher
- **Flutter**: Already created project with `pubspec.yaml`

## 🔧 Next Steps

After running `flutter-gen`:

1. **Add dependencies** to `pubspec.yaml`:
   ```yaml
   dependencies:
     flutter_bloc: ^8.1.0
     dio: ^5.0.0
     get_it: ^7.0.0
     freezed_annotation: ^2.0.0
     go_router: ^13.0.0
   ```

2. **Install dependencies**:
   ```bash
   flutter pub get
   ```

3. **Start coding**:
   ```bash
   code lib/main.dart
   ```

## ⚡ Quick Example

```bash
# 1. Create Flutter project
flutter create my_app
cd my_app

# 2. Generate architecture
flutter-gen

# 3. Add dependencies
# Edit pubspec.yaml

# 4. Install
flutter pub get

# 5. Start coding!
code .
```

## 🐛 Troubleshooting

**"flutter-gen: command not found"**
- Install globally: `npm install -g flutter-arch-gen`
- Check installation: `npm list -g flutter-arch-gen`

**"node: command not found"**
- Install Node.js: https://nodejs.org/

**"pubspec.yaml not found"**
- You're not in a Flutter project directory
- Navigate to correct folder: `cd ~/my_app`

## 📚 Documentation

- [GitHub Repository](https://github.com/yourusername/flutter-arch-gen)
- [NPM Package](https://npmjs.com/package/flutter-arch-gen)
- [Clean Architecture Principles](https://blog.cleancoder.com/)

## 📝 License

MIT

## 👨‍💻 Author

Created by San - Flutter Developer

## 🤝 Contributing

Found a bug? Have suggestions? Open an issue on GitHub!

## 📊 Stats

- **Files Created**: 50+
- **Folders Created**: 18
- **Generation Time**: < 1 second
- **Setup Time**: 30 seconds
- **Dependencies**: 0

---

**Happy Coding!** 🚀

Install with: `npm install -g flutter-arch-gen`
