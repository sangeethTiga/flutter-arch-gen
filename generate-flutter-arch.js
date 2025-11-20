#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Colors for CLI
const colors = {
  reset: '\x1b[0m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
};

// Helper functions
const createDir = (dirPath) => {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
};

const createFile = (filePath) => {
  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, '');
  }
};

// Main function
function generateArchitecture() {
  console.log(`\n${colors.blue}🏗️  Flutter Clean Architecture Generator\n${colors.reset}`);

  // Check if in Flutter project
  if (!fs.existsSync(path.join(process.cwd(), 'pubspec.yaml'))) {
    console.log(`${colors.red}❌ Error: pubspec.yaml not found!${colors.reset}`);
    console.log(`${colors.yellow}Run this script from your Flutter project root${colors.reset}\n`);
    process.exit(1);
  }

  try {
    // Create lib directory
    createDir(path.join(process.cwd(), 'lib'));

    // Main directories
    createDir(path.join(process.cwd(), 'lib/app'));
    createDir(path.join(process.cwd(), 'lib/core'));
    createDir(path.join(process.cwd(), 'lib/features'));
    createDir(path.join(process.cwd(), 'lib/shared'));

    // APP DIRECTORY
    createDir(path.join(process.cwd(), 'lib/app/config'));
    createDir(path.join(process.cwd(), 'lib/app/di'));
    createDir(path.join(process.cwd(), 'lib/app/router'));
    createDir(path.join(process.cwd(), 'lib/app/theme'));

    createFile(path.join(process.cwd(), 'lib/app/config/app_config.dart'));
    createFile(path.join(process.cwd(), 'lib/app/config/constants.dart'));
    createFile(path.join(process.cwd(), 'lib/app/config/flavor_config.dart'));
    createFile(path.join(process.cwd(), 'lib/app/di/injector.dart'));
    createFile(path.join(process.cwd(), 'lib/app/di/modules.dart'));
    createFile(path.join(process.cwd(), 'lib/app/router/app_router.dart'));
    createFile(path.join(process.cwd(), 'lib/app/router/route_names.dart'));
    createFile(path.join(process.cwd(), 'lib/app/theme/app_colors.dart'));
    createFile(path.join(process.cwd(), 'lib/app/theme/app_theme.dart'));
    createFile(path.join(process.cwd(), 'lib/app/theme/app_typography.dart'));

    console.log(`${colors.green}✓${colors.reset} Created /app`);

    // CORE DIRECTORY
    createDir(path.join(process.cwd(), 'lib/core/constants'));
    createDir(path.join(process.cwd(), 'lib/core/errors'));
    createDir(path.join(process.cwd(), 'lib/core/network'));
    createDir(path.join(process.cwd(), 'lib/core/storage'));
    createDir(path.join(process.cwd(), 'lib/core/usecase'));
    createDir(path.join(process.cwd(), 'lib/core/utils'));
    createDir(path.join(process.cwd(), 'lib/core/widgets'));

    createFile(path.join(process.cwd(), 'lib/core/constants/app_constants.dart'));
    createFile(path.join(process.cwd(), 'lib/core/constants/storage_keys.dart'));
    createFile(path.join(process.cwd(), 'lib/core/errors/exceptions.dart'));
    createFile(path.join(process.cwd(), 'lib/core/errors/failure.dart'));
    createFile(path.join(process.cwd(), 'lib/core/network/api_client.dart'));
    createFile(path.join(process.cwd(), 'lib/core/network/interceptors.dart'));
    createFile(path.join(process.cwd(), 'lib/core/network/network_info.dart'));
    createFile(path.join(process.cwd(), 'lib/core/storage/shared_prefs_helper.dart'));
    createFile(path.join(process.cwd(), 'lib/core/storage/secure_storage_helper.dart'));
    createFile(path.join(process.cwd(), 'lib/core/usecase/usecase.dart'));
    createFile(path.join(process.cwd(), 'lib/core/utils/extensions.dart'));
    createFile(path.join(process.cwd(), 'lib/core/utils/formatters.dart'));
    createFile(path.join(process.cwd(), 'lib/core/utils/validators.dart'));
    createFile(path.join(process.cwd(), 'lib/core/widgets/custom_button.dart'));
    createFile(path.join(process.cwd(), 'lib/core/widgets/custom_loader.dart'));
    createFile(path.join(process.cwd(), 'lib/core/widgets/custom_text_field.dart'));

    console.log(`${colors.green}✓${colors.reset} Created /core`);

    // FEATURES - AUTH
    createDir(path.join(process.cwd(), 'lib/features/auth/data/datasources'));
    createDir(path.join(process.cwd(), 'lib/features/auth/data/models'));
    createDir(path.join(process.cwd(), 'lib/features/auth/data/repositories'));
    createDir(path.join(process.cwd(), 'lib/features/auth/domain/entities'));
    createDir(path.join(process.cwd(), 'lib/features/auth/domain/repositories'));
    createDir(path.join(process.cwd(), 'lib/features/auth/domain/usecases'));
    createDir(path.join(process.cwd(), 'lib/features/auth/presentation/bloc'));
    createDir(path.join(process.cwd(), 'lib/features/auth/presentation/pages'));
    createDir(path.join(process.cwd(), 'lib/features/auth/presentation/widgets'));

    createFile(path.join(process.cwd(), 'lib/features/auth/data/datasources/auth_local_data_source.dart'));
    createFile(path.join(process.cwd(), 'lib/features/auth/data/datasources/auth_remote_data_source.dart'));
    createFile(path.join(process.cwd(), 'lib/features/auth/data/models/auth_model.dart'));
    createFile(path.join(process.cwd(), 'lib/features/auth/data/repositories/auth_repository_impl.dart'));
    createFile(path.join(process.cwd(), 'lib/features/auth/domain/entities/auth_entity.dart'));
    createFile(path.join(process.cwd(), 'lib/features/auth/domain/repositories/auth_repository.dart'));
    createFile(path.join(process.cwd(), 'lib/features/auth/domain/usecases/login.dart'));
    createFile(path.join(process.cwd(), 'lib/features/auth/domain/usecases/logout.dart'));
    createFile(path.join(process.cwd(), 'lib/features/auth/domain/usecases/register.dart'));
    createFile(path.join(process.cwd(), 'lib/features/auth/presentation/bloc/auth_bloc.dart'));
    createFile(path.join(process.cwd(), 'lib/features/auth/presentation/bloc/auth_event.dart'));
    createFile(path.join(process.cwd(), 'lib/features/auth/presentation/bloc/auth_state.dart'));
    createFile(path.join(process.cwd(), 'lib/features/auth/presentation/pages/login_page.dart'));
    createFile(path.join(process.cwd(), 'lib/features/auth/presentation/pages/register_page.dart'));
    createFile(path.join(process.cwd(), 'lib/features/auth/presentation/widgets/auth_text_field.dart'));

    console.log(`${colors.green}✓${colors.reset} Created /features/auth`);

    // FEATURES - HOME
    createDir(path.join(process.cwd(), 'lib/features/home/data/datasources'));
    createDir(path.join(process.cwd(), 'lib/features/home/data/models'));
    createDir(path.join(process.cwd(), 'lib/features/home/data/repositories'));
    createDir(path.join(process.cwd(), 'lib/features/home/domain/entities'));
    createDir(path.join(process.cwd(), 'lib/features/home/domain/repositories'));
    createDir(path.join(process.cwd(), 'lib/features/home/domain/usecases'));
    createDir(path.join(process.cwd(), 'lib/features/home/presentation/bloc'));
    createDir(path.join(process.cwd(), 'lib/features/home/presentation/pages'));
    createDir(path.join(process.cwd(), 'lib/features/home/presentation/widgets'));

    createFile(path.join(process.cwd(), 'lib/features/home/data/datasources/home_local_data_source.dart'));
    createFile(path.join(process.cwd(), 'lib/features/home/data/datasources/home_remote_data_source.dart'));
    createFile(path.join(process.cwd(), 'lib/features/home/data/models/home_model.dart'));
    createFile(path.join(process.cwd(), 'lib/features/home/data/repositories/home_repository_impl.dart'));
    createFile(path.join(process.cwd(), 'lib/features/home/domain/entities/home_entity.dart'));
    createFile(path.join(process.cwd(), 'lib/features/home/domain/repositories/home_repository.dart'));
    createFile(path.join(process.cwd(), 'lib/features/home/domain/usecases/get_home_data.dart'));
    createFile(path.join(process.cwd(), 'lib/features/home/presentation/bloc/home_bloc.dart'));
    createFile(path.join(process.cwd(), 'lib/features/home/presentation/bloc/home_event.dart'));
    createFile(path.join(process.cwd(), 'lib/features/home/presentation/bloc/home_state.dart'));
    createFile(path.join(process.cwd(), 'lib/features/home/presentation/pages/home_page.dart'));
    createFile(path.join(process.cwd(), 'lib/features/home/presentation/widgets/home_widget.dart'));

    console.log(`${colors.green}✓${colors.reset} Created /features/home`);

    // SHARED DIRECTORY
    createDir(path.join(process.cwd(), 'lib/shared/enums'));
    createDir(path.join(process.cwd(), 'lib/shared/extensions'));
    createDir(path.join(process.cwd(), 'lib/shared/mixins'));

    createFile(path.join(process.cwd(), 'lib/shared/enums/app_enums.dart'));
    createFile(path.join(process.cwd(), 'lib/shared/extensions/string_extensions.dart'));
    createFile(path.join(process.cwd(), 'lib/shared/extensions/widget_extensions.dart'));
    createFile(path.join(process.cwd(), 'lib/shared/mixins/validation_mixin.dart'));

    console.log(`${colors.green}✓${colors.reset} Created /shared`);

    // Main entry point
    createFile(path.join(process.cwd(), 'lib/main.dart'));
    console.log(`${colors.green}✓${colors.reset} Created main.dart`);

    // Success message
    console.log(`\n${colors.green}✅ Architecture generated successfully!${colors.reset}\n`);
    console.log(`${colors.blue}📁 Structure created in: lib/${colors.reset}\n`);

  } catch (error) {
    console.log(`${colors.red}❌ Error: ${error.message}${colors.reset}\n`);
    process.exit(1);
  }
}

// Run
generateArchitecture();
